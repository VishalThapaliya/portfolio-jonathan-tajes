import { useState } from "react";

const ModalSlider = ({ work, onClose }) => {
    const [selectedSubtype, setSelectedSubtype] = useState(work.subtypes[0].subtype);
    const images = work.subtypes.find(subtype => subtype.subtype === selectedSubtype)?.images || [];

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="relative bg-zinc-900 p-6 rounded-lg w-full max-w-4xl">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-300 hover:text-zinc-50"
                >
                    Close
                </button>

                <h3 className="title-1 mb-4">{work.title}</h3>

                {/* Subtype Filter */}
                <div className="flex gap-4 mb-4">
                    {work.subtypes.map(({ subtype }) => (
                        <button
                            key={subtype}
                            onClick={() => setSelectedSubtype(subtype)}
                            className={`px-4 py-2 rounded-lg font-medium ${selectedSubtype === subtype ? 'bg-sky-400 text-zinc-950' : 'bg-zinc-700 text-zinc-300'} hover:bg-sky-500`}
                        >
                            {subtype}
                        </button>
                    ))}
                </div>

                {/* Image Slider */}
                <div className="flex gap-4 overflow-x-auto">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`${work.title} - ${selectedSubtype}`}
                            className="w-48 h-48 object-cover rounded-lg"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ModalSlider;
