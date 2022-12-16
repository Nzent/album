export default function PhotoCard({ src, alt, title }) {
    return (
        <>
          {<img src={src} alt={alt} />}
            <h1>{title}</h1>
        </>
    )
}
