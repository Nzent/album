import "../styles/photoCard.css"
import {useState} from 'react'
export default function PhotoCard({ src,imgUrl, alt, title }) {

  const [isView,setIsView] = useState(false)
// single photo card component
    return (
        <>
        {/* Default card */}
        <div className="pc-body" onClick={()=>setIsView(true)}>
            <img src={src} alt={alt} />
            <h4>{title}</h4>
        </div>
        {/* Modal */}
        <div className={`${isView?"pc-modalbody-show":"pc-modalbody-hidden"}`}>
          <img src={imgUrl} alt={title} />
          <div onClick={()=>setIsView(false)} className="pc-close-btn">Close</div>
        </div>
        </>
    )
}
