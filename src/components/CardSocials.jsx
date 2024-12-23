import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';

const CardSocials = () => {
    return (
        <div className="card-socials">
            <div className="card-socials-title">
                <h2>Social Links</h2>
                <p>Follow me on social media</p>
            </div>
            <div className="card-socials-items">
                <a href="https://m.facebook.com/profile.php/?id=100021529052398" target="_blank" rel="noreferrer">
                    <img src="./assets/icons/fb_icon@72x.png" alt="instagram logo" />
                    <span>Facebook</span>
                    <i><Icon path={mdiChevronRight} size={1} /></i>
                </a>
                <a href="http://www.instagram.com/rishabh275_" target="_blank" rel="noreferrer">
                    <img src="./assets/icons/insta_icon@72x.png" alt="instagram logo" />
                    <span>Instagram</span>
                    <i><Icon path={mdiChevronRight} size={1} /></i>
                </a>
            </div>
        </div>
    );
}

export default CardSocials;