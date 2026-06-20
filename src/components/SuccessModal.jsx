import { CheckCircle2 } from 'lucide-react'

function SuccessModal({ onClose, name }) {
    return (
        <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-background border border-border rounded-2xl shadow-xl w-full max-w-md p-6 text-center"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-center mb-4">
                    <CheckCircle2 size={56} className="text-primary" />
                </div>

                <h2 className="text-2xl font-semibold text-white mb-2 font-sans">
                    Booking Confirmed!
                </h2>
                <p className="text-gray text-sm mb-6">
                    {name ? `Thanks, ${name}! ` : "Thanks! "}
                    We've received your booking and will see you soon. A confirmation
                    will be sent to your mobile shortly.
                </p>

                <button
                    onClick={onClose}
                    className="w-full bg-primary text-white py-2.5 rounded-lg font-medium hover:bg-primaryDark transition-colors cursor-pointer"
                >
                    Done
                </button>
            </div>
        </div>
    )
}

export default SuccessModal
