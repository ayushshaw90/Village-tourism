import "./Navbar.css"

export default function navbar() {
    return (
        <header>
            <img src="logo.png" alt="Logo" />
            <h1 className="brandName"><span>W</span>isata</h1>

            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#packages">Packages</a>
                <a href="#bookNow">Book Now</a>
                <a href="#services">Services</a>
                <a href="#review">Review</a>
                <a href="#contact">Contact</a>

            </nav>
            <div className="icons">
                <i className="fas fa-search" id="search-btn"></i>
                <i className="fas fa-user" id="login-btn"></i>

            </div>

            <form action="" className="search-bar-container">
                <input type="search" className="" id="search-bar" placeholder="Search here" />
                <label htmlFor="search-bar" className="fas fa-search"></label>
            </form>
        </header>
    )
}