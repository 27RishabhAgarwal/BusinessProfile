const CardFooter = () => {
    return (
      <div className="card-footer">
        <div className="social-media-container">
          <p>Social Media</p>
          <div className="social-media-buttons">
            <div className="social-buttons">
              <a href="https://api.whatsapp.com/send/?phone=9336117544&text&type=phone_number&app_absent=0">
                <img src="/assets/whatsapp.png" alt="" />
              </a>
            </div>
            <div className="social-buttons">
              <a href="http://www.instagram.com/rishabh275_">
                <img src="/assets/instagram.png" alt="" />
              </a>
            </div>
            <div className="social-buttons">
              <a href="https://m.facebook.com/profile.php/?id=100021529052398">
                <img src="/assets/facebook.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="card-footer-container">
          <a href="./assets/vcard_rishabh_agarwal.vcf" download="vcard_rishabh_agarwal">
            <span className="material-symbols-outlined">person_add</span>
            <span>DOWNLOAD VCF</span>
          </a>
        </div>

      </div>
    );
  }
  
  export default CardFooter;