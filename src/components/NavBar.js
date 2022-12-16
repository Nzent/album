import { Link } from "react-router-dom"
import "../styles/Navbar.css"

export default function NavBar() {
  return (
    <nav>
        <h4 className="nav-items">My Album</h4>
        <h4 className="nav-items"><Link to={`/`}>Home</Link></h4>
    </nav>
  )
}
