import "../styles/GalleryGrid.css";
import GalleryItem from "./GalleryItem";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Paisaje Montañoso",
    by: "Ana Garcia",
    tag: "Naturaleza",
    likes: 24,
    image: "/images/paisaje-montañoso.webp",
  },
  {
    id: 2,
    title: "Arquitectura Moderna",
    by: "Carlos Méndez",
    tag: "Arquitectura",
    likes: 31,
    image: "/images/arquitectura-moderna.webp",
  },
  {
    id: 3,
    title: "Bosque Otoñal",
    by: "Laura Torres",
    tag: "Naturaleza",
    likes: 42,
    image: "/images/bosque-otoñal.webp",
  },
  {
    id: 4,
    title: "Calle Urbana",
    by: "Diego Ramírez",
    tag: "Urbano",
    likes: 28,
    image: "/images/calle-urbana.webp",
  },
  {
    id: 5,
    title: "Ciudad de Noche",
    by: "Sofía López",
    tag: "Urbano",
    likes: 37,
    image: "/images/ciudad-noche.webp",
  },
  {
    id: 6,
    title: "Edificio Clásico",
    by: "Javier Ruiz",
    tag: "Arquitectura",
    likes: 22,
    image: "/images/edificio-clasico.webp",
  },
  {
    id: 7,
    title: "Paisaje Nevado",
    by: "María González",
    tag: "Naturaleza",
    likes: 49,
    image: "/images/paisaje-nevado.webp",
  },
  {
    id: 8,
    title: "Retrato Artístico",
    by: "Carlos Sánchez",
    tag: "Retratos",
    likes: 53,
    image: "/images/retrato-artistico.webp",
  },
];

export default function GalleryGrid() {
  return (
    <section className="gallery-section">
      <ul className="gallery-container">
        {GALLERY_ITEMS.map(({ id, title, by, tag, likes, image }) => (
          <GalleryItem
            key={id}
            id={id}
            title={title}
            by={by}
            tag={tag}
            likes={likes}
            image={image}
          />
        ))}
      </ul>
      <ul className="gallery-info">
        <li>
          {GALLERY_ITEMS.length} <span>Imagenes</span>
        </li>
        <hr />
        <li>
          4 <span>Categorias</span>
        </li>
        <hr />
        <li>
          {GALLERY_ITEMS.length} <span>Mostrando</span>
        </li>
      </ul>
    </section>
  );
}
