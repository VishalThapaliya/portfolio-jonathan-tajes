/**
 * @copyright 2024 Bishal Thapaliya
 * @license Apache-2.0
 */

const WorkCard = ({title, imgSrc, tags, projectLink, classes }) => {
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
                <h3 className="title-1 mb-3">{title}</h3>

                <div className="flex flex-wrap items-center gap-2">
                    {tags.map((tag, id) => (
                        <span key={id} 
                        className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                    >
                        {tag}
                    </span>
                    ))}
                </div>

                
            </div>
            <div className="w-9 h-9 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
                    <span className="material-symbols-rounded" aria-hidden="true">
                        arrow_outward
                    </span>
                </div>
        </div>

        <a 
            href={projectLink} 
            target="_blank" 
            className="absolute inset-0"></a>
    </div>
  )
}

export default WorkCard