import "../styles/GalleryGrid.css";
import GalleryItem from "./GalleryItem";
import { GALLERY_ITEMS } from "../constants/galleryItems";

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
