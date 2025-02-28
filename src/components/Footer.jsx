/**
 * @copyright 2024 Bishal Thapaliya
 * @license Apache-2.0
*/

/**
 * Components
*/
import { ButtonPrimary } from "./ButtonPrimary";

const currentYear = new Date().getFullYear();
const sitemap = [
    {
        id: 1,
        label: 'Inicio',
        href: '#home'
    },
    {
        id: 2,
        label: 'Sobre mi',
        href: '#about'
    },
    {
        id: 3,
        label: 'Cartera',
        href: '#work'
    },
    {
        id: 4,
        label: 'Reseñas',
        href: '#reviews'
    },
    {
        id: 5,
        label: 'Contacto',
        href: '#contact'
    }
  ];
  
  const socials = [
    {
        id: 1,
        label: 'GitHub',
        href: 'https://github.com/'
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
        href: 'https://www.instagram.com/'
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
            <div className="lg:grid lg: grid-cols-2 reveal-up">
                <div className="mb-10">
                    <h2 className="headline-2 mb-8 lg:max-w-[12ch] reveal-up">
                        ¡Trabajemos juntos hoy!
                    </h2>

                    <ButtonPrimary
                        href="mailto:bibi4photos@gmail.com"
                        label="Iniciar proyecto"
                        icon="chevron_right"
                        className="reveal-up"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2 reveal-up">Sitemap</p>

                        <ul>
                            {sitemap.map(({ id, label, href }) => (
                                <li key={id}>
                                    <a 
                                        href={href} 
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                    >
                                        {label}
                                    </a>
                                </li>
                                
                            ) )}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 reveal-up">Socials</p>

                        <ul>
                            {socials.map(({ id, label, href }) => (
                                <li key={id}>
                                    <a 
                                        href={href}
                                        target="_blank" 
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
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
                    className="logo reveal-up"
                >
                    <img 
                        src="/images/logo.png" 
                        height={65} 
                        width={65} 
                        alt="Footer logo" 
                    />
                </a>

                <p className="text-zinc-500 text-sm reveal-up">
                    &copy; { currentYear } <span className="text-zinc-200">Jonathan Tajes</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer