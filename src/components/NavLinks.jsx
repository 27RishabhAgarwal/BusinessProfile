const NavLinks = ({ phone, whatsapp, email, directions }) => {
    return (
        <div className="card-header-nav-links">
            <a href={`tel:${phone}`} target="_blank" rel="noreferrer">
                <i class="fa-solid fa-phone"></i>
            </a>
            <a href={whatsapp} target="_blank" rel="noreferrer">
                <i class="fa-brands fa-whatsapp fa-lg"></i>
            </a>
            <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                <i class="fa-regular fa-envelope"></i>
            </a>
            <a href={directions} target="_blank" rel="noreferrer">
                <i class="fa-solid fa-location-dot"></i>
            </a>
        </div>
    );
}

export default NavLinks;