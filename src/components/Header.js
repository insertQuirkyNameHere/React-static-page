import react_logo from "../img/react-logo.jpg"

export default function Header(){
    return (
        <header>
            <nav>
                <div className="logo-container">
                <img src={react_logo} alt="react-logo" className="logo-img"/>
                <div className="logo-text">
                    ReactFacts
                </div>
                </div>
                <div class="project-info">
                    React Project 1
                </div>
            </nav>
        </header>
    )
}