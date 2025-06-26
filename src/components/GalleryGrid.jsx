import "../styles/GalleryGrid.css";

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
    <section>
      <ul className="gallery-container">
        {GALLERY_ITEMS.map(({ id, title, by, tag, likes, image }) => (
          <li key={id}>
            <img src={image} alt={title} />
            <div className="overlay">
              <div className="text-ctn">
                <h3>{title}</h3>
                <span>Por {by}</span>
                <div className="tag-ctn">
                  <span className="tag">{tag}</span>
                  <span className="likes">
                    {likes}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#d32323"
                      className="icon icon-tabler icons-tabler-filled icon-tabler-heart"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
