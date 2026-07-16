import type { ImageMetadata } from "astro";
import imgLlamaSolar from "../assets/images/project-llama-solar.jpg";
import imgAislados from "../assets/images/project-aislados.jpg";
import imgMunicipales from "../assets/images/project-municipales.jpg";
import imgPrivados from "../assets/images/project-privados.jpg";
import imgAltaTension from "../assets/images/project-alta-tension.jpg";
import imgMediaTension from "../assets/images/project-media-tension.jpg";
import imgIluminacion from "../assets/images/project-iluminacion.jpg";

/**
 * Featured programs and works for /proyectos.
 * Adding a project = adding one entry here. Copy comes from the previous site,
 * kept verbatim per the 2026 brief ("misma info de la web").
 */
export interface Project {
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string[];
  bullets: string[];
  quote: string;
  image: ImageMetadata;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    slug: "llama-solar",
    tag: "Programa",
    title: "Llama Solar",
    subtitle: "Energía solar para hogares riojanos",
    description: [
      "Llama Solar es el programa de Energía Riojana S.A. que promueve la incorporación de sistemas solares fotovoltaicos en viviendas particulares de toda la provincia. Nuestro objetivo es que cada familia tenga la posibilidad de generar su propia energía limpia, reduciendo su factura eléctrica y ganando independencia energética.",
      "Instalamos parques solares residenciales con potencias que van desde 1,5 kW hasta 2,5 kW, adaptados a las necesidades de cada hogar.",
    ],
    bullets: [
      "Ahorro económico desde el primer día.",
      "Mayor autonomía energética.",
      "Tecnología de última generación.",
      "Instalación rápida y segura.",
    ],
    quote: "Con Llama Solar, llevamos la transición energética a cada rincón de La Rioja.",
    image: imgLlamaSolar,
    imageAlt: "Vivienda riojana con paneles solares del programa Llama Solar",
  },
  {
    slug: "parques-aislados-bermejo",
    tag: "Aislados",
    title: "Parques Solares Aislados — Bermejo",
    subtitle: "Energía para todos",
    description: [
      "Creemos que el acceso a la energía eléctrica es un derecho esencial. Por eso diseñamos e instalamos parques solares aislados (off grid) en zonas rurales y alejadas, donde es técnica o económicamente inviable extender líneas eléctricas convencionales.",
      "Estos sistemas tienen una vida útil estimada de 20 años y brindan una solución energética completa, autónoma y sustentable para familias y comunidades que antes no contaban con servicio eléctrico.",
    ],
    bullets: [
      "Paneles solares de alta eficiencia.",
      "Inversor inteligente de 3 kW.",
      "2 baterías de litio de larga duración.",
      "Freezer inverter para conservar alimentos.",
    ],
    quote: "La energía llega donde nadie más puede.",
    image: imgAislados,
    imageAlt: "Parque solar aislado instalado en un paraje rural",
  },
  {
    slug: "parques-municipales",
    tag: "Municipal",
    title: "Parques Solares Municipales",
    subtitle: "Municipios sustentables",
    description: [
      "Desarrollamos e instalamos parques solares de 50 kW para cada uno de los municipios de la provincia, en el marco de un plan estratégico para la reducción del gasto público en energía y la promoción de prácticas sustentables en la gestión local.",
      "Estos parques representan entre un 15% y un 20% del consumo total de energía que los municipios mantienen ante la distribuidora eléctrica.",
    ],
    bullets: [
      "Ahorro energético y económico.",
      "Compromiso con la Agenda 2030 y los ODS.",
      "Generación de empleo local.",
      "Reducción de la huella de carbono.",
    ],
    quote:
      "Estamos transformando a cada municipio en un actor protagonista de la revolución energética en La Rioja.",
    image: imgMunicipales,
    imageAlt: "Parque solar municipal de 50 kW",
  },
  {
    slug: "parques-privados",
    tag: "Privado",
    title: "Parques Solares Privados",
    subtitle: "Inversión con futuro",
    description: [
      "Acompañamos a empresas, industrias, comercios y desarrolladores en su proceso de reconversión energética, ofreciendo la construcción de parques solares privados adaptados a sus necesidades operativas y financieras.",
      "Nuestros proyectos garantizan eficiencia, rendimiento y retorno de inversión, con asesoramiento técnico y financiero para acceder a las mejores líneas de financiamiento disponibles.",
    ],
    bullets: [
      "Reducción de costos operativos.",
      "Imagen corporativa sustentable.",
      "Rentabilidad a largo plazo.",
      "Financiación accesible.",
    ],
    quote:
      "Invertir en energía solar es apostar por el futuro, con el respaldo y la experiencia de Energía Riojana S.A.",
    image: imgPrivados,
    imageAlt: "Parque solar privado para una empresa",
  },
  {
    slug: "alta-tension",
    tag: "Infraestructura",
    title: "Obras de Alta Tensión",
    subtitle: "Una red más robusta y eficiente",
    description: [
      "Impulsamos el desarrollo de la infraestructura eléctrica de alta tensión para optimizar la transmisión y distribución de energía en La Rioja, fortaleciendo la estabilidad de la red, reduciendo pérdidas energéticas y garantizando un suministro confiable para el crecimiento de la provincia.",
    ],
    bullets: [
      "Construcción y ampliación de estaciones transformadoras.",
      "Trazado y vinculación de líneas de alta tensión en 132 kV.",
      "Proyectos de interconexión con el SADI.",
    ],
    quote:
      "Estos desarrollos refuerzan la infraestructura provincial y promueven la confiabilidad del servicio eléctrico en zonas estratégicas.",
    image: imgAltaTension,
    imageAlt: "Línea de transmisión eléctrica de alta tensión",
  },
  {
    slug: "media-tension",
    tag: "Infraestructura",
    title: "Obras de Media Tensión",
    subtitle: "Distribución para el desarrollo",
    description: [
      "La distribución eficiente de la energía es un pilar del desarrollo económico y social de la provincia. Con infraestructura moderna y planificación estratégica garantizamos un suministro confiable y continuo a hogares, industrias, comercios y servicios esenciales.",
    ],
    bullets: [
      "Redes de distribución en 33 kV y 13,2 kV.",
      "Tecnologías inteligentes en la distribución.",
      "Centros de distribución y subestaciones transformadoras.",
    ],
    quote:
      "Un suministro eléctrico más confiable y seguro, adaptado a las necesidades de cada comunidad.",
    image: imgMediaTension,
    imageAlt: "Red de distribución eléctrica de media tensión",
  },
  {
    slug: "iluminacion-publica",
    tag: "Infraestructura",
    title: "Iluminación Pública",
    subtitle: "Espacios públicos seguros y eficientes",
    description: [
      "Llevamos adelante la modernización del alumbrado público en toda la provincia, con sistemas de iluminación urbana y rural más eficientes, seguros y sustentables que mejoran la visibilidad nocturna y refuerzan la seguridad ciudadana.",
    ],
    bullets: [
      "Instalación y modernización de luminarias LED.",
      "Iluminación estratégica en rutas, accesos y zonas urbanas.",
    ],
    quote:
      "Una provincia más iluminada, segura y eficiente, con menor huella de carbono.",
    image: imgIluminacion,
    imageAlt: "Alumbrado público LED en una avenida riojana",
  },
];
