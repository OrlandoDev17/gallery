import { Link } from "react-router-dom";

export default function GalleryItem({ id, title, by, tag, likes, image }) {
  return (
    <li key={id}>
      <Link to={`/image/${id}`} className="image-link">
        <img className="img" src={image} alt={title} />
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
      </Link>
    </li>
  );
}
