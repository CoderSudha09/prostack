export default function Navbar({ toggleTheme, theme }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#">
                    Sudha Portfolio
                </a>

                <div className="ms-auto">
                    <button
                        onClick={toggleTheme}
                        className="btn btn-outline-light"
                    >
                        {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
                    </button>
                </div>
                
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#home">
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                About
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#skills">
                                Skills
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#projects">
                                Projects
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

