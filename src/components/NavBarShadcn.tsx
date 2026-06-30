"use client"

import * as React from "react"
/* import Link from "next/link" */

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import LogoNavbar from "./LogoNavbar"


const components: { title: string; href: string; description: string }[] = [
    {
        title: "Llama Solar – Energía Solar para Hogares Riojanos",
        href: "/energia-solar/#llama-solar",
        description:
            "Llama Solar es el programa de Energía Riojana S.A. que promueve la incorporación de sistemas solares fotovoltaicos en viviendas ...",
    },
    {
        title: "Parques Solares Municipales – Municipios Sustentables",
        href: "/energia-solar/#parques-municipales",
        description:
            "Desde Energía Riojana S.A. desarrollamos e instalamos Parques Solares de 50 kW para cada uno de los municipios de la provincia.",
    },
    {
        title: "Parques Solares Aislados – Energía para Todos",
        href: "/energia-solar/#parques-solares",
        description:
            "Diseñamos e instalamos Parques Solares Aislados (Off Grid) en zonas ",
    },
    {
        title: "Parques Solares Privados – Inversión con Futuro",
        href: "/energia-solar/#parques-privados",
        description: "Acompañamos a empresas, industrias, comercios y desarrolladores en su proceso de reconversión energética.",
    },
    /* {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    }, */
    /*  {
         title: "Tooltip",
         href: "/docs/primitives/tooltip",
         description:
             "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
     }, */
]

export function NavBarShadcn() {
    return (
        <NavigationMenu className="bg-primary md:bg-transparent">

            <NavigationMenuList>
                <LogoNavbar />
            </NavigationMenuList>


            <NavigationMenuList>

                <NavigationMenuItem >
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
                        Inicio
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem >
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/institucional">
                        Institucional
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Obras Eléctricas</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/obras-electricas"
                                    >
                                        {/*  <Icons.logo className="h-6 w-6" /> */}
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Obras Electricas
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            proyectos eléctricos estratégicos para fortalecer el sistema energético de La Rioja con tecnología de vanguardia.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/obras-electricas/#alta_tension" title="Alta Tensión">
                                Desarrollamos infraestructura de alta tensión para optimizar la transmisión y distribución de energía en La Rioja.
                            </ListItem>
                            <ListItem href="/obras-electricas/#media_tension" title="Media Tensión">
                                Mejoramos la distribución de energía en La Rioja con redes de media tensión, tecnología inteligente y nueva infraestructura.
                            </ListItem>
                            <ListItem href="/obras-electricas/#iluminacion_publica" title="Iluminación Pública">
                                Modernizamos la iluminación pública en La Rioja con tecnología LED para mayor seguridad, eficiencia y sostenibilidad.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Energia Solar</NavigationMenuTrigger>
                    <NavigationMenuContent >
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            <li className="row-span-4 col-span-1">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/energia-solar"
                                    >
                                        {/*  <Icons.logo className="h-6 w-6" /> */}
                                        <div className="mb-2 text-lg font-medium">
                                            Energia Solar
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Impulsamos el desarrollo solar en toda la provincia, acercando soluciones energéticas limpias y eficientes a hogares, municipios y empresas, con tecnología de última generación y un fuerte compromiso con la sustentabilidad.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                /*  className="col-span-2" */
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem >
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/contacto">
                        Contacto
                    </NavigationMenuLink>
                </NavigationMenuItem>


            </NavigationMenuList>

        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
