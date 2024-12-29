/**
 * @copyright 2024 Bishal Thapaliya
 * @license Apache-2.0
 */

import { useState } from "react";
import MyWorks from "./MyWorks"
import WorkCard from "./WorkCard"

/**
 * Work Data
 */
const works = [
    { 
        id: 1, 
        title: 'Work Title 1', 
        imgSrc: '/images/home.jpg',
        tags: ['API', 'MVC', 'Development'],
        projectLink: 'https://vishalthapaliya.github.io/resume/',
        type: 'landscape'
    },
    { 
        id: 2, 
        title: 'Work Title 2', 
        imgSrc: '/images/home.jpg',
        tags: ['API', 'MVC', 'Development'],
        projectLink: 'https://vishalthapaliya.github.io/resume/',
        type: 'event'
    },
    { 
        id: 3, 
        title: 'Work Title 3', 
        imgSrc: '/images/home.jpg',
        tags: ['API', 'MVC', 'Development'],
        projectLink: 'https://vishalthapaliya.github.io/resume/',
        type: 'portrait'
    },
    { 
        id: 4, 
        title: 'Work Title 4', 
        imgSrc: '/images/home.jpg',
        tags: ['API', 'MVC', 'Development'],
        projectLink: 'https://vishalthapaliya.github.io/resume/',
        type: 'landscape'
    },
    { 
        id: 5, 
        title: 'Work Title 5', 
        imgSrc: '/images/home.jpg',
        tags: ['API', 'MVC', 'Development'],
        projectLink: 'https://vishalthapaliya.github.io/resume/',
        type: 'event'
    },
    { 
        id: 6, 
        title: 'Work Title 6', 
        imgSrc: '/images/home.jpg',
        tags: ['API', 'MVC', 'Development'],
        projectLink: 'https://vishalthapaliya.github.io/resume/',
        type: 'portrait'
    },
]

const Work = () => {
    const [selectedType, setSelectedType] = useState('all');
    const [isSliderOpen, setIsSliderOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Filter images based on type
    const filteredImages = selectedType === 'all' ? works : works.filter(work => work.type === selectedType);

    const openSlider = (index) => {
        console.log("clicked");
        setCurrentImageIndex(index);
        setIsSliderOpen(true);
      };
    
      const closeSlider = () => {
        setIsSliderOpen(false);
      };


        const prevImage = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
        };

        const nextImage = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
        };
    
  return (
    <section className="section" id="portfolio">
        <div className="container">
            <h2 className="headline-2 mb-8">
                My portfolio highlights
            </h2>

            {/* Filter Options */}
            {/* <div className="flex justify-center space-x-4 mb-8">
                {['all', 'landscape', 'portrait', 'event'].map((type) => (
                <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-lg font-medium ${
                    selectedType === type ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    } hover:bg-blue-400 hover:text-white`}
                >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
                ))}
            </div> */}

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                { filteredImages.map(({id, title, imgSrc, tags, projectLink }) => (
                    // <WorkCard key={id} title={title} imgSrc={imgSrc} tags={tags} projectLink={projectLink} onClick={() => openSlider(index)}/>
                    <WorkCard key={id} title={title} imgSrc={imgSrc} tags={tags} onClick={() => openSlider(id)}/>
                ))}
            </div>


            {/* Image Slider */}
            {isSliderOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                <button
                    className="absolute top-4 right-4 text-white text-3xl font-bold"
                    onClick={closeSlider}
                >
                    &times;
                </button>
                <button
                    className="absolute left-4 text-white text-3xl font-bold"
                    onClick={prevImage}
                >
                    &#8249;
                </button>
                <div className="relative max-w-screen-lg mx-auto">
                    <img
                    src={filteredImages[currentImageIndex].url}
                    alt="Slider"
                    className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                <button
                    className="absolute right-4 text-white text-3xl font-bold"
                    onClick={nextImage}
                >
                    &#8250;
                </button>
                </div>
            )}

        </div>

        {/* <div className="container">
            

                <MyWorks />
            
        </div> */}
    </section>
  )
}

export default Work