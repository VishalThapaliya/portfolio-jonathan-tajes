// Import necessary libraries
import React, { useState } from 'react';
import MyWorkCard from './MyWorkCard';

// Mock data for images
const works = [
  { 
    id: 1, 
    title: 'Portrait', 
    imgSrc: '/images/portrait_1.jpg',
    subtypes: [
        { subtype: 'people', images: ['/images/portrait_1.jpg', '/images/portrait_2.jpg', '/images/portrait_3.jpg', '/images/portrait_4.jpg', '/images/portrait_5.jpg'] },
        { subtype: 'b&w', images: ['/images/BN-001.jpg', '/images/BN-002.jpg', '/images/BN-003.jpg', '/images/BN-004.jpg', '/images/BN-005.jpg', '/images/BN-006.jpg'] },
        { subtype: 'wedding', images: ['/images/portrait_birds1.jpg', '/images/portrait_birds2.jpg'] }
    ],
    projectLink: 'https://vishalthapaliya.github.io/resume/',
    type: 'portrait'
  },
  { 
      id: 2, 
      title: 'Travel', 
      imgSrc: '/images/travel_1.jpg',
      subtypes: [
          { subtype: 'Myanmar', images: ['/images/portrait_1.jpg', '/images/portrait_2.jpg', '/images/portrait_3.jpg', '/images/portrait_4.jpg', '/images/portrait_5.jpg'] },
          { subtype: 'Indonesia', images: ['/images/BN-001.jpg', '/images/BN-002.jpg', '/images/BN-003.jpg', '/images/BN-004.jpg', '/images/BN-005.jpg', '/images/BN-006.jpg'] },
          { subtype: 'Africa', images: ['/images/portrait_birds1.jpg', '/images/portrait_birds2.jpg'] }
      ],
      projectLink: 'https://vishalthapaliya.github.io/resume/',
      type: 'travel'
  },
  { 
      id: 3, 
      title: 'Awards', 
      imgSrc: '/images/home.jpg',
      subtypes: [
          { subtype: 'sports', images: ['/images/portrait_1.jpg', '/images/portrait_2.jpg', '/images/portrait_3.jpg', '/images/portrait_4.jpg', '/images/portrait_5.jpg'] },
          { subtype: 'photography', images: ['/images/BN-001.jpg', '/images/BN-002.jpg', '/images/BN-003.jpg', '/images/BN-004.jpg', '/images/BN-005.jpg', '/images/BN-006.jpg'] },
      ],
      projectLink: 'https://vishalthapaliya.github.io/resume/',
      type: 'awards'
  }
];

const MyWorks = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedSubtype, setSelectedSubtype] = useState(null);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  // Filter images based on type
  const filteredWorks = selectedType === 'all' ? works : works.filter(work => work.type === selectedType);

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
    <section id='work' className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        {/* Filter Options */}
        <div className="flex justify-center space-x-4 mb-8">
            {['all', ...new Set(works.map(work => work.type))].map((type) => (
            <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg font-medium ${
                selectedType === type ? 'bg-zinc-700 text-zinc-50' : 'bg-zinc-400 text-zinc-700'
                } hover:bg-zinc-600 hover:text-zinc-300`}
            >
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
            ))}
        </div>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {filteredWorks.map((work) => (
              <div
                key={work.id}
                title={work.title}
                // imgSrc={work.imgSrc}
                className="relative cursor-pointer"
                onClick={() => openTypeSlider(work)}
              >

              <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                <MyWorkCard 
                  key={work.type} 
                  title={work.type} 
                  imgSrc={work.imgSrc} 
                  // subtypes={work.subtypes.map(subtype => subtype.subtype)}
                  className="reveal-up"
                />
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

    <div className="bg-zinc-700 text-zinc-50 relative max-w-screen-lg min-w-screen mx-auto p-6  rounded-lg shadow-lg flex">
      {/* Dropdown Menu */}
      <div className="w-1/3 pr-4">
        <h2 className="text-2xl font-bold mb-4 capitalize">{selectedType.type}</h2>
        <select
          className="bg-zinc-600 text-zinc-50 w-full p-2 border border-gray-300 rounded-lg"
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
      
    </section>
  );
};

export default MyWorks;
