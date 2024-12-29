/**
 * @copyright 2024 Bishal Thapaliya
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger)


/**
 * Components
 */
import ReviewCard from "./ReviewCard"

const reviews = [
    {
        id: 1,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur eveniet quaerat ab mollitia iste fugit laboriosam dignissimos numquam repellendus!',
        name: 'Pascal Garcia',
        imgSrc: '/images/people_5.jpg',
        company: 'Bonitasoft'
    },
    {
        id: 2,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur eveniet quaerat ab mollitia iste fugit laboriosam dignissimos numquam repellendus!',
        name: 'Pablo Alonso',
        imgSrc: '/images/people_2.jpg',
        company: 'Por favor'
    },
    {
        id: 3,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur eveniet quaerat ab mollitia iste fugit laboriosam dignissimos numquam repellendus!',
        name: 'Anthony Birembaut',
        imgSrc: '/images/people_3.jpg',
        company: 'FrenchTech'
    },
    {
        id: 4,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur eveniet quaerat ab mollitia iste fugit laboriosam dignissimos numquam repellendus!',
        name: 'Nicolas Chabanoles',
        imgSrc: '/images/people_4.jpg',
        company: 'BPM Network'
    },
    {
        id: 5,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur eveniet quaerat ab mollitia iste fugit laboriosam dignissimos numquam repellendus!',
        name: 'Julien Mege',
        imgSrc: '/images/people_5.jpg',
        company: 'Jurassic Park'
    },
    {
        id: 6,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur eveniet quaerat ab mollitia iste fugit laboriosam dignissimos numquam repellendus!',
        name: 'Bishal Thapaliya',
        imgSrc: '/images/people_2.jpg',
        company: 'Bonitasoft'
    },
]

const Review = () => {
    useGSAP(() => {
        gsap.to('.scrub-slide', {
            scrollTrigger: {
                trigger: '.scrub-slide',
                start: '-100% 50%',
                end: '100% 20%',
                scrub: true
            },
            x: '-1000'
        })
    });
  return (
    <section className="section overflow-hidden" id="reviews">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">What people say about me...</h2>

            <div 
                className="scrub-slide flex items-stretch gap-3 w-fit">
                {reviews.map(({id, content, name, imgSrc, company}) => (
                    
                    <ReviewCard 
                        key={id} 
                        content={content} 
                        name={name} 
                        imgSrc={imgSrc} 
                        company={company}
                        className="reveal-up"
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Review