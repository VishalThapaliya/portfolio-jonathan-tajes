/**
 * @copyright 2024 Bishal Thapaliya
 * @license Apache-2.0
 */

const ratings = new Array(5);
ratings.fill({
  icon: 'star',
  style: { fontVariationSettings: '"FILL" 1' }
})

const ReviewCard = ({ content, name, imgSrc, company }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="flex items-center gap-1 mb-3">
        {
          ratings.map(({ id, icon, style }) => (
            <span className="material-symbols-rounded text-yellow-300 text-[18px]" style={style} key={id}>
              {icon}
            </span>
          ))
        }
      </div>

      <p className="text-zinc-400 mb-8">
        {content}
      </p>

      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg" style={{width: 50, height: 50}}>
          <img 
            src={imgSrc} 
            alt={name} 
            className="img-cover"
            loading="lazy"
          />
        </figure>

        <div>
          <p>{name}</p>
          <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard