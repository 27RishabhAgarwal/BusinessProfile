const CardContact = () => {
    return (
      <div className="card-contact-us">
        <div className="card-contact-title">
            <i class="fa-solid fa-mobile-screen"></i>
            <h2>Contact Details</h2>
        </div>
        <div className="contact-details-item">
            <h3>Mobile No.</h3>
            <a href={`tel:+919336117544`} target="_blank" rel="noreferrer"><p>+919336117544</p></a>
        </div>
        <div className="contact-details-item">
            <h3>Email ID</h3>
            <a href="mailto:knmill1991@gmail.com" target="_blank" rel="noreferrer"><p>knfs.hp@gmail.com</p></a>
        </div>
        <div className="contact-details-item">
            <h3>Address</h3>
            <a href="https://maps.app.goo.gl/PRPKWxGcfzfrEqHTA"><p>Hardoi Road, Kachhauna<br />Distt-Hardoi, 241126<br />Uttar Pradesh</p></a>

        </div>
      </div>
    );
}
  
export default CardContact;