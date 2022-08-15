import "./Navbar.css"

export default function navbar() {
    return (
        <header>
            <img src="logo.png" alt="Logo" />
            <h1 class="brandName"><span>W</span>isata</h1>

            <nav class="navbar">
                <a href="#home">Home</a>
                <a href="#packages">Packages</a>
                <a href="#bookNow">Book Now</a>
                <a href="#services">Services</a>
                <a href="#review">Review</a>
                <a href="#contact">Contact</a>

            </nav>
            <div class="icons">
                <i class="fas fa-search" id="search-btn"></i>
                <i class="fas fa-user" id="login-btn"></i>

            </div>

            <form action="" class="search-bar-container">
                <input type="search" class="" id="search-bar" placeholder="Search here" />
                <label for="search-bar" class="fas fa-search"></label>
            </form>
        </header>
    )
}