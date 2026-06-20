import { X } from 'lucide-react';
import { useState } from 'react'
import Input from './Input';
import Dropdown from './Dropdown';
import SuccessModal from './SuccessModal';

const PLAN_OPTIONS = [
    { value: "free-trial", label: "Free Trial", price: 0 },
    { value: "basic", label: "Basic", price: 1499 },
    { value: "pro", label: "Pro", price: 2999 },
    { value: "elite", label: "Elite", price: 5499 },
]

function FormModal({ onClose, planPrice }) {
    const initialPlan =
        PLAN_OPTIONS.find((p) => p.price === planPrice)?.value ?? "free-trial"

    const [formData, setFormData] = useState({
        username: '',
        mobile: '',
        date: '',
        time: '',
        plan: initialPlan
    })

    const [errors, setErrors] = useState({})
    const [isSuccess, setIsSuccess] = useState(false)

    const validate = (data) => {
        const newErrors = {}

        if (!data.username.trim()) {
            newErrors.username = "Name is required"
        } else if (data.username.trim().length < 2) {
            newErrors.username = "Name must be at least 2 characters"
        }

        const indianMobileRegex = /^[6-9]\d{9}$/
        if (!data.mobile.trim()) {
            newErrors.mobile = "Mobile number is required"
        } else if (!indianMobileRegex.test(data.mobile.trim())) {
            newErrors.mobile = "Enter a valid 10-digit Indian mobile number"
        }

        if (!data.date) {
            newErrors.date = "Date is required"
        } else {
            const selectedDate = new Date(data.date)
            const today = new Date()
            today.setHours(0, 0, 0, 0)
            if (selectedDate < today) {
                newErrors.date = "Date cannot be in the past"
            }
        }

        if (!data.time) {
            newErrors.time = "Time is required"
        }

        if (!data.plan) {
            newErrors.plan = "Please select a plan"
        }

        return newErrors
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === "mobile") {
            const digitsOnly = value.replace(/\D/g, "").slice(0, 10)
            setFormData((prev) => ({ ...prev, mobile: digitsOnly }))
            return
        }

        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const validationErrors = validate(formData)
        setErrors(validationErrors)

        if (Object.keys(validationErrors).length > 0) {
            return
        }

        const selectedPlan = PLAN_OPTIONS.find((p) => p.value === formData.plan)

        console.log("Reservation submitted (dummy):", {
            ...formData,
            planLabel: selectedPlan?.label,
            planPrice: selectedPlan?.price,
        })
        setIsSuccess(true)
    };

    if (isSuccess) {
        return <SuccessModal onClose={onClose} name={formData.username} />
    }

    return (
        <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-background border border-border rounded-2xl shadow-xl w-full max-w-md p-6 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray hover:text-white transition-colors cursor-pointer"
                >
                    <X size={22} />
                </button>

                <h2 className="text-2xl font-semibold mb-1 text-white font-sans">
                    Book Your Slot
                </h2>
                <p className="text-gray mb-6 text-sm">
                    Fill in your details and we'll confirm shortly.
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <Input
                        label="Name"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        error={errors.username}
                        placeholder="Your full name"
                    />

                    <Input
                        label="Mobile"
                        name="mobile"
                        type="tel"
                        inputMode="numeric"
                        value={formData.mobile}
                        onChange={handleChange}
                        error={errors.mobile}
                        placeholder="10-digit mobile number"
                        maxLength={10}
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <Input
                            label="Date"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            error={errors.date}
                            min={new Date().toISOString().split("T")[0]}
                        />
                        <Input
                            label="Time"
                            name="time"
                            type="time"
                            value={formData.time}
                            onChange={handleChange}
                            error={errors.time}
                        />
                    </div>

                    <Dropdown
                        label="Plan"
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        error={errors.plan}
                        options={PLAN_OPTIONS.map((p) => ({
                            value: p.value,
                            label: p.price === 0 ? p.label : `${p.label} — ₹${p.price}`,
                        }))}
                    />

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2.5 rounded-lg font-medium hover:bg-primaryDark transition-colors cursor-pointer"
                    >
                        Confirm Booking
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormModal
