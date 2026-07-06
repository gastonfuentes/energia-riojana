import LogoNavbar from "./LogoNavbar"

const links = [
    { href: "/", label: "Inicio" },
    { href: "/institucional", label: "Institucional" },
    { href: "/productos", label: "Productos" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/contacto", label: "Contacto" },
]

export function NavBarShadcn() {
    return (
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 text-white">
            <LogoNavbar />

            <ul className="hidden items-center gap-1 md:flex">
                {links.map(({ href, label }) => (
                    <li key={href}>
                        <a
                            href={href}
                            className="rounded-full px-4 py-2 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>

            <button
                type="button"
                className="md:hidden"
                aria-label="Abrir menú"
            >
                <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </button>
        </nav>
    )
}
