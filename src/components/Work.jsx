/**
 * @copyright 2024 Bishal Thapaliya
 * @license Apache-2.0
 */

import WorkCard from "./WorkCard"

const Work = () => {
    const works = [
        { 
            id: 1, 
            title: 'Work Title 1', 
            imgSrc: '/images/home.jpg',
            tags: ['API', 'MVC', 'Development'],
            projectLink: 'https://vishalthapaliya.github.io/resume/'
        },
        { 
            id: 2, 
            title: 'Work Title 2', 
            imgSrc: '/images/home.jpg',
            tags: ['API', 'MVC', 'Development'],
            projectLink: 'https://vishalthapaliya.github.io/resume/'
        },
        { 
            id: 3, 
            title: 'Work Title 3', 
            imgSrc: '/images/home.jpg',
            tags: ['API', 'MVC', 'Development'],
            projectLink: 'https://vishalthapaliya.github.io/resume/'
        },
        { 
            id: 4, 
            title: 'Work Title 4', 
            imgSrc: '/images/home.jpg',
            tags: ['API', 'MVC', 'Development'],
            projectLink: 'https://vishalthapaliya.github.io/resume/'
        },
        { 
            id: 5, 
            title: 'Work Title 5', 
            imgSrc: '/images/home.jpg',
            tags: ['API', 'MVC', 'Development'],
            projectLink: 'https://vishalthapaliya.github.io/resume/'
        },
        { 
            id: 6, 
            title: 'Work Title 6', 
            imgSrc: '/images/home.jpg',
            tags: ['API', 'MVC', 'Development'],
            projectLink: 'https://vishalthapaliya.github.io/resume/'
        },
    ]
  return (
    <section className="section" id="work">
        <div className="container">
            <h2 className="headline-2 mb-8">
                My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                { works.map(({id, title, imgSrc, tags, projectLink }) => (
                    <WorkCard key={id} title={title} imgSrc={imgSrc} tags={tags} projectLink={projectLink} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work