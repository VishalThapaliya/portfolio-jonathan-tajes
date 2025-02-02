/**
 * @copyright 2024 Bishal Thapaliya
 * @license Apache-2.0
 */

const About = () => {
    const aboutData = [
        {id: 1, number: 50, text: `Proyectos realizados`},
        {id: 2, number: 10, text: `Años de experiencia`}
    ]
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-200 mb-2 md:mb-3 md:text-2xl md:max-w-[80ch]">
                        ¡Bienvenido!
                    </p>
                    <p className="text-zinc-400 mb-4 md:mb-8 md:text-xl md:max-w-[80ch]">
                        Soy Jonathan, un fotógrafo apasionado por capturar emociones, recuerdos y sensaciones, transformando momentos fugaces en imágenes atemporales. Con formación en periodismo y experiencia en la prensa gráfica, mi trabajo se inspira en los viajes, las conexiones y el amor por contar historias a través de la fotografía. Te invito a explorar una colección de imágenes que buscan inspirar y deleitar.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutData.map(({ id, number, text }) => (
                                <div key={id}>
                                     <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-500 font-semibold md:text-3xl">+</span>
                                     </div>

                                     <p className="text-sm text-zinc-400">{text}+</p>
                                </div>
                            ))
                        }

                        <img 
                            src="/images/profile.jpg" 
                            alt="" 
                            height={30}
                            width={30}
                            className="ml-auto md:w-[45px] md:h-[70px] rounded-full" 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About