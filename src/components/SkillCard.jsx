/**
 * @copyright 2024 Bishal Thapaliya
 * @license Apache-2.0
 */

const SkillCard = ({ imgSrc, label, desc, className }) => {
  return (
    <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group ' + className}>
        <figure className="bg-zinc-700/50 rounded-lg p-1 overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors rounded-md">
            <img 
                src={imgSrc} 
                alt={label}
                height={60}
                width={60}
                className="min-h-full min-w-full object-cover rounded-lg"
            />
        </figure>

        <div >
            <h4 className="text-zinc-400 text-sm">{label}</h4>
            {/* <p className="text-zinc-400 text-sm">
                {desc}
            </p> */}
        </div>
    </div>    

  )
}

export default SkillCard