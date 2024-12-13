/**
 * @copyright 2024 Bishal Thapaliya
 * @license Apache-2.0
 */

/**
 * Button Primary
 */


const ButtonPrimary = ({ label, href, icon, className, target = '_self' }) => {
  
    if(href) {
        return (
            <a 
                href={href} 
                target={target} 
                className={"btn btn-primary " + className}
            >
                {label}

                { icon ? 
                    <span 
                        className="material-symbols-rounded" 
                        aria-hidden="true">
                        {icon}
                    </span> : null
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-primary " + className}>
                {label}
                { icon ? 
                    <span 
                        className="material-symbols-rounded" 
                        aria-hidden="true">
                        {icon}
                    </span> : null
                }
            </button>
        )
    }
}


/**
 * Button Outline
 */


const ButtonOutline = ({ label, href, icon, className, target = '_self' }) => {
  
    if(href) {
        return (
            <a 
                href={href} 
                target={target} 
                className={"btn btn-outline " + className}
            >
                {label}

                { icon ? 
                    <span 
                        className="material-symbols-rounded" 
                        aria-hidden="true">
                        {icon}
                    </span> : null
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-outline " + className}>
                {label}
                { icon ? 
                    <span 
                        className="material-symbols-rounded" 
                        aria-hidden="true">
                        {icon}
                    </span> : null
                }
            </button>
        )
    }
}

export {ButtonPrimary, ButtonOutline}