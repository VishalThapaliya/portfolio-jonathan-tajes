/**
 * @copyright 2024 Bishal Thapaliya
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./ButtonPrimary";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
        <div className="container lg:grid lg:grid-cols-2 lg:gap-10 items-center">
            <div>
                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg">
                        <img 
                            src="/images/profile.jpg" 
                            alt="Jonathan Tajes" 
                            className="img-cover" 
                            width={40}
                            height={40}
                        />
                    </figure>

                    <div className="flex items-center gap-2 text-zinc-500 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-500">
                            <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping"></span>
                        </span>
                        Available for work
                    </div>
                </div>

                <h2 className="hero-title max-w-[15ch] sm:max-w-[20ch] lg:max-w-[20ch] mt-5 mb-8 lg:mb-10">
                    Detener el tiempo... capturar las emociones, recuerdos, instantes, sensaciones
                </h2>

                <div className="flex items-center gap-3">
                    <ButtonPrimary icon="download" label="Download CV" />
                    <ButtonOutline icon="arrow_downward" label="Scroll down" href="#about"/>
                </div>
            </div>

            <div className="hidden lg:block">
                <figure className="w-full max-w-[400px] ml-auto bg-gradient-to-b from-sky-600 via-30% via-sky-500/40 to-85% rounded-[80px] overflow-hidden">
                    <img 
                        src="/images/profile.jpg" 
                        alt="Jonathan Tajes" 
                        className="w-full" 
                        height={800}
                        width={656}
                    />
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero