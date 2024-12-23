import Icon from '@mdi/react';
import { mdiMapMarker,
    mdiEmailOutline,
    mdiWhatsapp,
    mdiPhone
 } from '@mdi/js';
const NavLinks = ({ phone, whatsapp, email, directions }) => {
    return (
        <div className="card-header-nav-links">
            <a href={`tel:${phone}`} target="_blank" rel="noreferrer">
            <i><Icon path={mdiPhone} size={1.25} /></i>
            </a>
            <a href={whatsapp} target="_blank" rel="noreferrer">
            <i><Icon path={mdiWhatsapp} size={1.25} /></i>
            </a>
            <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
            <i><Icon path={mdiEmailOutline} size={1.30} /></i>
            </a>
            <a href={directions} target="_blank" rel="noreferrer">
            <i>
                <Icon path={mdiMapMarker} size={1.30} />
                </i>
            </a>
        </div>
    );
}

export default NavLinks;