import { useState } from 'react';
import MyWorkCard from './MyWorkCard';

// const works = [/* your existing works data */];
const works = [
    { 
      id: 1, 
      title: 'Portrait', 
      imgSrc: '/images/portrait_1.jpg',
      subtypes: [
        { 
          subtype: 'people', 
          images: [
            '/images/portrait_1.jpg', 
            '/images/portrait_2.jpg', 
            '/images/portrait_3.jpg', 
            '/images/portrait_4.jpg', 
            '/images/portrait_5.jpg',
            '/images/portrait_6.jpg',
            '/images/portrait_7.jpg',
            '/images/portrait_8.jpg',
            '/images/portrait_9.jpg',
            '/images/portrait_10.jpg',
            '/images/portrait_11.jpg'
          ]
        },
        { 
          subtype: 'b&w', 
          images: [
            '/images/BN-001.jpg', 
            '/images/BN-002.jpg', 
            '/images/BN-003.jpg', 
            '/images/BN-004.jpg', 
            '/images/BN-005.jpg', 
            '/images/BN-006.jpg',
            '/images/BN-007.jpg',
            '/images/BN-008.jpg',
            '/images/BN-009.jpg',
            '/images/BN-010.jpg',
            '/images/BN-011.jpg',
            '/images/BN-012.jpg',
            '/images/BN-013.jpg',
          ]
        },
        { 
          subtype: 'wedding', 
          images: [
            '/images/WEDDING_1.jpg',
            '/images/WEDDING_2.jpg',
            '/images/WEDDING_3.jpg',
            '/images/WEDDING_4.jpg',
            '/images/WEDDING_5.jpg',
            '/images/WEDDING_6.jpg',
            '/images/WEDDING_7.jpg',
            '/images/WEDDING_8.jpg',
            '/images/WEDDING_9.jpg',
            '/images/WEDDING_10.jpg',
            '/images/WEDDING_11.jpg',
            '/images/WEDDING_12.jpg',
            '/images/WEDDING_13.jpg',
            '/images/WEDDING_14.jpg'            
          ] 
        }
      ],
      type: 'portrait'
    },
    { 
        id: 2, 
        title: 'Travel', 
        imgSrc: '/images/travel_1.jpg',
        subtypes: [
          { 
            subtype: 'Myanmar', 
            images: [
              '/images/myanmar_01.jpg',
              '/images/myanmar_02.jpg',
              '/images/myanmar_03.jpg',
              '/images/myanmar_04.jpg',
              '/images/myanmar_05.jpg',
              '/images/myanmar_06.jpg',
              '/images/myanmar_07.jpg'
            ] 
          },
            { subtype: 'Indonesia', images: ['/images/BN-001.jpg', '/images/BN-002.jpg', '/images/BN-003.jpg', '/images/BN-004.jpg', '/images/BN-005.jpg', '/images/BN-006.jpg'] },
            { subtype: 'Africa', images: ['/images/portrait_birds1.jpg', '/images/portrait_birds2.jpg'] }
        ],
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
        type: 'awards'
    }
  ];

const Work = () => {
  const [selectedType, setSelectedType] = useState('Todo');
  const [selectedWork, setSelectedWork] = useState(null);
  const [selectedSubtype, setSelectedSubtype] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const filteredWorks = selectedType === 'Todo' ? works : works.filter(work => work.type === selectedType);

  const handleWorkClick = (work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
    setSelectedSubtype(null);
    setIsCarouselOpen(false);
  };

  const handleSubtypeChange = (e) => {
    const subtype = e.target.value;
    const selected = selectedWork.subtypes.find(sub => sub.subtype === subtype);
    setSelectedSubtype(selected);
    setIsCarouselOpen(false);
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsCarouselOpen(true);
  };

  const handleBackFromCarousel = () => {
    setIsCarouselOpen(false);
  }

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + selectedSubtype.images.length) % selectedSubtype.images.length);
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % selectedSubtype.images.length);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
    setSelectedSubtype(null);
    setIsCarouselOpen(false);
  };

  return (
    <section id='portfolio' className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Mi portafolio</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {['Todo', ...new Set(works.map(work => work.type))].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-lg font-medium ${
                selectedType === type 
                  ? 'bg-zinc-700 text-zinc-50' 
                  : 'bg-zinc-400 text-zinc-700'
              } hover:bg-zinc-600 hover:text-zinc-300`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Work Grid */}
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="relative cursor-pointer"
              onClick={() => handleWorkClick(work)}
            >
              <MyWorkCard 
                title={work.title}
                imgSrc={work.imgSrc}
              />
            </div>
          ))}
        </div>

        {/* Subtype Modal */}
        {isModalOpen && selectedWork && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl hover:text-zinc-300"
            >
              &times;
            </button>
            
            <div className="bg-zinc-800 rounded-xl p-6 h-full max-h-4xl w-full max-w-4xl">
              {isCarouselOpen ? (
                /* Carousel View */
                <div className="relative h-full">
                <button onClick={handleBackFromCarousel} className="absolute top-4 left-4 text-white text-sm p-2 hover:text-zinc-300 z-10">
                  ← Back
                </button>

                  <div className="flex items-center justify-center h-[80vh]">
                    <button
                      onClick={prevImage}
                      className="absolute left-4 text-white text-4xl p-4 hover:text-zinc-300 z-10"
                    >
                      ‹
                    </button>
                    <img
                      src={selectedSubtype.images[currentImageIndex]}
                      alt=""
                      className="max-h-full max-w-full object-contain"
                    />
                    <button
                      onClick={nextImage}
                      className="absolute right-4 text-white text-4xl p-4 hover:text-zinc-300 z-10"
                    >
                      ›
                    </button>
                  </div>
                </div>
              ) : (
                /* Subtype Selection & Grid View */
                <>
                  <h2 className="text-3xl font-bold text-zinc-100 mb-6">
                    {selectedWork.title}
                  </h2>
                  <div className="flex flex-row gap-3">
                  <select
                    className="w-full bg-zinc-700 text-zinc-100 p-3 rounded-lg mb-6 max-w-max max-h-max
                      border border-zinc-600 focus:ring-2 focus:ring-blue-500"
                    onChange={handleSubtypeChange}
                    value={selectedSubtype?.subtype || ''}
                  >
                    <option value="">Seleccione una categoría</option>
                    {selectedWork.subtypes.map(subtype => (
                      <option key={subtype.subtype} value={subtype.subtype}>
                        {subtype.subtype}
                      </option>
                    ))}
                  </select>

                  {!selectedSubtype && (
                    <div className="w-full flex justify-center items-baseline">
                      <h2>Seleccione una categoría para ver las imágenes.</h2>
                    </div>
                  )}

                  {selectedSubtype && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                      {selectedSubtype.images.map((image, index) => (
                        <img
                          key={image}
                          src={image}
                          alt=""
                          className="w-full h-40 object-cover rounded-lg cursor-pointer
                            hover:opacity-80 transition-opacity"
                          onClick={() => handleImageClick(index)}
                        />
                      ))}
                    </div>
                  )}
                  </div>
                  
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;