import React, { useState } from 'react'

const MyWorkCard = ({title, imgSrc, classes }) => {

    const [selectedType, setSelectedType] = useState(null);
      const [selectedSubtype, setSelectedSubtype] = useState(null);
      const [isSliderOpen, setIsSliderOpen] = useState(false);
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedSubtype.images.length) % selectedSubtype.images.length);
      };
    
      const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedSubtype.images.length);
      };

  return (
    <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " + classes }>
        <figure className="img-box aspect-square rounded-lg mb-4">
            <img 
                src={imgSrc} 
                alt={title} 
                className={"img-cover" + classes } 
                loading="lazy"
            />
        </figure>

        <div className="flex items-center justify-between gap-4">
            <div>
                <h3 className="title-1 mb-3 capitalize">{title}</h3>
            </div>
        </div>



{/* Subtype Slider */}
{isSliderOpen && selectedType && (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <button
      className="absolute top-4 right-4 text-white text-3xl font-bold"
      onClick={closeSlider}
    >
      &times;
    </button>

    <div className="relative max-w-screen-lg mx-auto p-6 bg-white rounded-lg shadow-lg flex">
      {/* Dropdown Menu */}
      <div className="w-1/3 pr-4">
        <h2 className="text-2xl font-bold mb-4 capitalize">{selectedType.type}</h2>
        
        <select
          className="w-full p-2 border border-gray-300 rounded-lg"
          onChange={(e) => {
            const selected = selectedType.subtypes.find(sub => sub.subtype === e.target.value);
            setSelectedSubtype(selected);
            setCurrentImageIndex(0);
          }}
        >
          <option value="">Select Subtype</option>
          {selectedType.subtypes.map((subtype) => (
            <option key={subtype.subtype} value={subtype.subtype}>
              {subtype.subtype}
            </option>
          ))}
        </select>
      </div>

      {/* Image Display */}
      <div className="w-2/3 flex flex-col items-center">
        {selectedSubtype ? (
          <>
            <div className="relative w-full">
              <button
                className="absolute left-0 text-gray-700 text-3xl font-bold"
                onClick={prevImage}
              >
                &#8249;
              </button>
              <img
                src={selectedSubtype.images[currentImageIndex]}
                alt="Subtype Slider"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <button
                className="absolute right-0 text-gray-700 text-3xl font-bold"
                onClick={nextImage}
              >
                &#8250;
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500">Please select a subtype to view images.</p>
        )}
      </div>
      
    </div>
  </div>
)}




    </div>
  )
}

export default MyWorkCard