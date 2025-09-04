import "./NotFound.css"; // Import custom CSS

export default function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        {/* Big 404 */}
        <h1 className="notfound-404">404</h1>

        {/* Title */}
        <h2 className="notfound-title">Oops! This Page Could Not Be Found</h2>

        {/* Description */}
        <p className="notfound-text">
          Sorry but the page you are looking for does not exist, has been removed,
          name changed or is temporarily unavailable.
        </p>

        {/* Button */}
        <a href="/" className="notfound-btn">
          GO TO HOMEPAGE
        </a>
      </div>
    </div>
  );
}
