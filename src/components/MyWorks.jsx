// Import necessary libraries
import React, { useState } from 'react';

// Mock data for images
const imageTypes = [
  {
    type: 'portrait',
    subtypes: [
      { subtype: 'people', images: ['/images/portrait_people1.jpg', '/images/portrait_people2.jpg'] },
      { subtype: 'animals', images: ['/images/portrait_animals1.jpg', '/images/portrait_animals2.jpg'] },
      { subtype: 'birds', images: ['/images/portrait_birds1.jpg', '/images/portrait_birds2.jpg'] },
      { subtype: 'black&white', images: ['/images/portrait_bw1.jpg', '/images/portrait_bw2.jpg'] },
    ],
  },
  {
    type: 'landscape',
    subtypes: [
      { subtype: 'mountains', images: ['/images/landscape_mountains1.jpg', '/images/landscape_mountains2.jpg'] },
      { subtype: 'rivers', images: ['/images/landscape_rivers1.jpg', '/images/landscape_rivers2.jpg'] },
    ],
  },
  {
    type: 'travel',
    subtypes: [
      { subtype: 'cities', images: ['/images/travel_cities1.jpg', '/images/travel_cities2.jpg'] },
      { subtype: 'villages', images: ['/images/travel_villages1.jpg', '/images/travel_villages2.jpg'] },
    ],
  },
];

const MyWorks = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedSubtype, setSelectedSubtype] = useState(null);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openTypeSlider = (type) => {
    setSelectedType(type);
    setIsSliderOpen(true);
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
    setSelectedType(null);
    setSelectedSubtype(null);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedSubtype.images.length) % selectedSubtype.images.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedSubtype.images.length);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">My Works</h1>

      {/* Image Types */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imageTypes.map((type) => (
          <div
            key={type.type}
            className="relative cursor-pointer"
            onClick={() => openTypeSlider(type)}
          >
            <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h2 className="text-2xl font-semibold capitalize">{type.type}</h2>
            </div>
          </div>
        ))}
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
  );
};

export default MyWorks;
