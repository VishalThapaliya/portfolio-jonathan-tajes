/**
 * @copyright 2024 Bishal Thapaliya
 * @license Apache-2.0
 */

/**
 * Components
 */
import { useRef } from "react";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur eveniet quaerat ab mollitia iste fugit laboriosam dignissimos numquam repellendus!",
    name: "Pascal Garcia",
    imgSrc: "/images/people_5.jpg",
    company: "Bonitasoft",
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur eveniet quaerat ab mollitia iste fugit laboriosam dignissimos numquam repellendus!",
    name: "Pablo Alonso",
    imgSrc: "/images/people_2.jpg",
    company: "Por favor",
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur eveniet quaerat ab mollitia iste fugit laboriosam dignissimos numquam repellendus!",
    name: "Anthony Birembaut",
    imgSrc: "/images/people_3.jpg",
    company: "FrenchTech",
  },
  {
    id: 4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur eveniet quaerat ab mollitia iste fugit laboriosam dignissimos numquam repellendus!",
    name: "Nicolas Chabanoles",
    imgSrc: "/images/people_4.jpg",
    company: "BPM Network",
  },
  {
    id: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur eveniet quaerat ab mollitia iste fugit laboriosam dignissimos numquam repellendus!",
    name: "Julien Mege",
    imgSrc: "/images/people_5.jpg",
    company: "Jurassic Park",
  },
  {
    id: 6,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur eveniet quaerat ab mollitia iste fugit laboriosam dignissimos numquam repellendus!",
    name: "Bishal Thapaliya",
    imgSrc: "/images/people_2.jpg",
    company: "Bonitasoft",
  },
];

const Review = () => {
  const scrollRef = useRef(null);
  let isDragging = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseLeave = () => {
    isDragging = false;
  };

  const scrollToNext = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const scrollToPrevious = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  return (
    <section className="section overflow-hidden" id="reviews">
      <div className="container">
        <h2 className="headline-2 mb-8">Lo que la gente dice de mí...</h2>

        <div className="flex items-center w-full">
          <button
            onClick={scrollToPrevious}
            className="scroll-btn btn-prev mr-4"
            aria-label="Previous Reviews"
          >
            &lt;
          </button>
          <div
            className="reviews-scroll flex gap-3 overflow-hidden"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: isDragging ? "grabbing" : "grab", scrollBehavior: "smooth" }}
          >
            {reviews.map(({ id, content, name, imgSrc, company }) => (
              <ReviewCard
                key={id}
                content={content}
                name={name}
                imgSrc={imgSrc}
                company={company}
                className="review-card transition-transform duration-300 ease-in-out"
              />
            ))}
          </div>
          <button
            onClick={scrollToNext}
            className="scroll-btn btn-next ml-4"
            aria-label="Next Reviews"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;