import "../styles/photoCard.css"
export default function PhotoCard({ src, alt, title }) {
    return (
        <>
          <div className="pc-body">
            <img src={src} alt={alt} />
            <h4>{title}</h4>
          </div>
        </>
    )
}
