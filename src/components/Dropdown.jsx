import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react'

function Dropdown({
    label,
    name,
    value,
    onChange,
    options,
    error,
    placeholder = "Select an option",
}) {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef(null)

    const selectedOption = options.find((opt) => opt.value === value)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleSelect = (option) => {
        onChange({ target: { name, value: option.value } })
        setIsOpen(false)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            setIsOpen((prev) => !prev)
        } else if (e.key === "Escape") {
            setIsOpen(false)
        }
    }

    return (
        <div ref={containerRef} className="relative">
            <label
                htmlFor={name}
                className="block text-sm font-medium text-gray mb-1"
            >
                {label}
            </label>

            <button
                type="button"
                id={name}
                onClick={() => setIsOpen((prev) => !prev)}
                onKeyDown={handleKeyDown}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                className={`w-full flex items-center justify-between border rounded-lg px-3 py-2 bg-dark text-left
                    focus:outline-none focus:ring-2 transition-colors cursor-pointer
                    ${error
                        ? "border-red-500 focus:ring-red-500/40"
                        : "border-border focus:ring-primary/50"
                    }
                    ${isOpen ? "ring-2 ring-primary/50 border-primary" : ""}
                `}
            >
                <span className={selectedOption ? "text-white" : "text-gray"}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown
                    size={18}
                    className={`text-gray transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {isOpen && (
                <ul
                    role="listbox"
                    className="absolute z-10 mt-1 w-full bg-dark border border-border rounded-lg shadow-xl overflow-hidden py-1 max-h-60 overflow-y-auto"
                >
                    {options.map((option) => {
                        const isSelected = option.value === value
                        return (
                            <li
                                key={option.value}
                                role="option"
                                aria-selected={isSelected}
                                onClick={() => handleSelect(option)}
                                className={`px-3 py-2 cursor-pointer text-sm transition-colors
                                    ${isSelected
                                        ? "bg-primary/15 text-primary font-medium"
                                        : "text-white hover:bg-background"
                                    }
                                `}
                            >
                                {option.label}
                            </li>
                        )
                    })}
                </ul>
            )}

            {error && (
                <p className="text-xs text-red-500 mt-1">{error}</p>
            )}
        </div>
    )
}

export default Dropdown
