/**
 * @copyright 2024 Bishal Thapaliya
 * @license Apache-2.0
 */

import SkillCard from "./SkillCard"


const Skills = () => {
    const skills = [
        { id: 1, imgSrc: '/images/tool_1.webp', label: 'Professional Camera', desc: 'A DSLR or mirrorless camera is the core tool for every photographer, offering high-resolution image capture, manual controls, and the ability to use interchangeable lenses to suit different shooting styles.'},
        { id: 2, imgSrc: '/images/tool_2.webp', label: 'Prime Lenses', desc: 'The prime lenses (eg. 50mm lens) is a must-have for photographers, renowned for its sharpness, versatility, and ability to create beautiful background blur (bokeh). It\'s ideal for portraits, street photography, and low-light scenarios.'},
        { id: 3, imgSrc: '/images/tool_3.jpg', label: 'External Flash/Speedlight', desc: 'An external flash or speedlight is essential for controlling lighting in various shooting environments. It provides additional light for low-light conditions, fills in shadows, and helps achieve well-exposed photos, especially in events or portrait photography.'},
        { id: 4, imgSrc: '/images/tool_4.jpg', label: 'Sturdy Tripod', desc: 'A sturdy tripod is a critical tool for stability during long exposures, landscape photography, or capturing video. It helps eliminate camera shake, ensuring sharp and clear shots, particularly in low-light or macro photography.'},
        { id: 5, imgSrc: '/images/tool_5.jpg', label: 'Reflector', desc: 'A reflector is an inexpensive yet powerful tool used to bounce and diffuse natural or artificial light. It helps fill in shadows, brighten the subject, and achieve well-balanced lighting in portraits, product photography, and outdoor shoots.'},
        { id: 6, imgSrc: '/images/tool_6.webp', label: 'Laptop for Photo Editing', desc: 'A high-performance laptop is vital for editing and processing images using software like Adobe Lightroom or Photoshop. A color-calibrated screen ensures accurate color grading, while a powerful processor enables smooth editing workflows.'},
        { id: 7, imgSrc: '/images/tool_7.jpg', label: 'Portable Hard Drive', desc: 'Portable hard drives are crucial for backing up photos on the go. They ensure data safety and provide ample storage space for large RAW files and edited images, making them indispensable during shoots and travel.'},
        { id: 8, imgSrc: '/images/tool_8.jpg', label: 'Lens Cleaning Kit', desc: 'A lens cleaning kit includes essential tools like microfiber cloths, lens cleaning solution, a blower, and lens pens. It ensures that lenses and camera sensors remain dust-free and clean, maintaining image quality and avoiding imperfections.'},
        { id: 9, imgSrc: '/images/tool_9.jpg', label: 'Memory Cards', desc: 'High-capacity and fast memory cards (e.g., SDXC or CFexpress) are necessary for storing large, high-resolution photos and videos. They provide reliable and quick data transfer, which is vital for professional shoots.'},
        { id: 10, imgSrc: '/images/tool_10.jpg', label: 'Camera Backpack', desc: 'A camera backpack keeps photography gear safe, organized, and easily accessible while traveling or working on location. Designed for comfort and durability, it protects equipment from damage and weather.'},
    ]
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2">
                Essential Tools I Use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[80ch]">
                Descubre la visión artística y las técnicas que utilizo para capturar momentos atemporales y crear fotografías impactantes y llenas de emoción.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skills.map(({ id, imgSrc, label, desc }) => (
                        <SkillCard key={id} imgSrc={imgSrc} label={label} desc={desc}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skills