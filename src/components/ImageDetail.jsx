import { useParams } from "react-router-dom";
import { GALLERY_ITEMS } from "../constants/galleryItems";
import "../styles/ImageDetails.css";

const ImageDetail = () => {
  const { id } = useParams();
  const image = GALLERY_ITEMS.find((item) => item.id === parseInt(id));

  if (!image) {
    return <div>Imagen no encontrada</div>;
  }

  return (
    <div className="image-detail">
      <img src={image.image} alt={image.title} />
      <div className="image-info">
        <h2>{image.title}</h2>
        <p>Por: {image.by}</p>
        <p>Categoría: {image.tag}</p>
        <p>Likes: {image.likes}</p>
      </div>
    </div>
  );
};

export default ImageDetail;
