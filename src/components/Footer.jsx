/**
 * @copyright 2024 Bishal Thapaliya
 * @license Apache-2.0
*/

/**
 * Components
*/
import { ButtonPrimary } from "./ButtonPrimary";

const sitemap = [
    {
        id: 1,
        label: 'Home',
        href: '#home'
    },
    {
        id: 2,
        label: 'About',
        href: '#about'
    },
    {
        id: 3,
        label: 'Work',
        href: '#work'
    },
    {
        id: 4,
        label: 'Reviews',
        href: '#reviews'
    },
    {
        id: 5,
        label: 'Contact me',
        href: '#contact'
    }
  ];
  
  const socials = [
    {
        id: 1,
        label: 'GitHub',
        href: 'https://github.com/VishalThapaliya'
    },
    {
        id: 2,
        label: 'LinkedIn',
        href: 'http://es.linkedin.com/in/jonathantajes/es'
    },
    {
        id: 3,
        label: 'Twitter X',
        href: 'https://x.com/'
    },
    {
        id: 4,
        label: 'Instagram',
        href: 'https://www.instagram.com/vishalthapaliya/'
    },
    {
        id: 5,
        label: 'Facebook',
        href: 'https://www.facebook.com/people/Jonathan-Tajes/100010951921124'
    }
  ];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
            <div className="lg:grid lg: grid-cols-2">
                <div className="mb-10">
                    <h2 className="headline-2 mb-8 lg:max-w-[12ch]">
                        Let&apos;s work together today!
                    </h2>

                    <ButtonPrimary
                        href="mailto:bibi4photos@gmail.com"
                        label="Start project"
                        icon="chevron_right"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2">Sitemap</p>

                        <ul>
                            {sitemap.map(({ id, label, href }) => (
                                <li key={id}>
                                    <a 
                                        href={href} 
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                    >
                                        {label}
                                    </a>
                                </li>
                                
                            ) )}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2">Socials</p>

                        <ul>
                            {socials.map(({ id, label, href }) => (
                                <li key={id}>
                                    <a 
                                        href={href}
                                        target="_blank" 
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                    >
                                        {label}
                                    </a>
                                </li>
                                
                            ) )}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a 
                    href="#"
                    className=""
                >
                    <img 
                        src="/images/logo.png" 
                        height={65} 
                        width={65} 
                        alt="Footer logo" 
                    />
                </a>

                <p className="text-zinc-500 text-sm">
                    &copy; 2024 <span className="text-zinc-200">Jonathan Tajes</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer