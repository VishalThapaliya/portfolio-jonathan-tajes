/**
 * @copyright 2024 Bishal Thapaliya
 * @license Apache-2.0
 */

const WorkCard = ({title, imgSrc, subtypes, onClick, classes }) => {
  return (
    <div onClick={onClick} className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " + classes }>
        <figure className="img-box aspect-square rounded-lg mb-4">
            <img 
                src={imgSrc} 
                alt={title} 
                className={"img-cover " + classes} 
                loading="lazy"
            />
        </figure>
        <h3 className="title-1 mb-3">{title}</h3>

        <div className="flex flex-wrap gap-2">
            {subtypes.map((subtype, index) => (
                <span key={index} 
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
            >
                {subtype}
            </span>
            ))}
        </div>
    </div>
  )
}

export default WorkCard