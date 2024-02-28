import React from 'react';
import ProfileHeader from './ProfileHeader';
import NavLinks from './NavLinks';

const CardHeader = () => {
  return (
    <div className="card-header">
      <ProfileHeader 
        image="./profile/profile_photo.jpg"
        name="Rishabh Agarwal"
        title="Dealer"
        locate="Kedar Nath Filling Station"
      />
      <NavLinks
        phone="9336117544"
        whatsapp="https://wa.me/9336117544"
        email="knfs.hp@gmail.com"
        directions="https://maps.app.goo.gl/PRPKWxGcfzfrEqHTA"
      />
    </div>
  );
}

export default CardHeader;