import react_logo from "../img/react-logo.jpg"

export default function Header(){
    return (
        <header>
            <nav>
                <img src={react_logo} width="100px" alt="react-logo"/>

                <ul className = "nav-links-container">
                    <li className="nav-link">Pricing</li>
                    <li className="nav-link">About</li>
                    <li className="nav-link">Contact</li>
                </ul>
            </nav>
        </header>
    )
}