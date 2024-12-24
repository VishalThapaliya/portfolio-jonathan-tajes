/**
 * @copyright 2024 Bishal Thapaliya
 * @license Apache-2.0
 */

import ReviewCard from "./ReviewCard"

const reviews = [
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur eveniet quaerat ab mollitia iste fugit laboriosam dignissimos numquam repellendus!',
        name: 'Bishal Thapaliya',
        imgSrc: '/images/people_1.jpg',
        company: 'Bonitasoft'
    },
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur eveniet quaerat ab mollitia iste fugit laboriosam dignissimos numquam repellendus!',
        name: 'Pablo Alonso',
        imgSrc: '/images/people_2.jpg',
        company: 'Por favor'
    },
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur eveniet quaerat ab mollitia iste fugit laboriosam dignissimos numquam repellendus!',
        name: 'Anthony Birembaut',
        imgSrc: '/images/people_3.jpg',
        company: 'FrenchTech'
    },
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur eveniet quaerat ab mollitia iste fugit laboriosam dignissimos numquam repellendus!',
        name: 'Nicolas Chabanoles',
        imgSrc: '/images/people_4.jpg',
        company: 'BPM Network'
    },
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur eveniet quaerat ab mollitia iste fugit laboriosam dignissimos numquam repellendus!',
        name: 'Julien Mege',
        imgSrc: '/images/people_5.jpg',
        company: 'Jurassic Park'
    },
]

const Review = () => {
  return (
    <section className="section overflow-hidden" id="reviews">
        <div className="container">
            <h2 className="headline-2 mb-8">What people say about me...</h2>

            <div className="flex items-stretch gap-3 w-fit">
                {reviews.map(({id, content, name, imgSrc, company}) => (
                    
                    <ReviewCard key={id} content={content} name={name} imgSrc={imgSrc} company={company}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Review