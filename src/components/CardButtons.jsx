import React from 'react';

    const CardButtonBox = () => {
        const handleButtonClick = (link) => {
            if (navigator.userAgent.match(/Android/i)) {
                window.open(link.android, '_blank');
            } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
                window.open(link.ios, '_blank');
            }
        };

        const apps = [
            {
                name: 'HP Pay',
                android: 'https://play.google.com/store/apps/details?id=com.drivetrackplusrefuel',
                ios: 'https://apps.apple.com/in/app/hp-pay/id1343241227',
            },
            {
                name: 'Drive Track Plus',
                android: 'https://play.google.com/store/apps/details?id=com.drivetrackplus',
                ios: 'https://apps.apple.com/in/app/drivetrack-plus-customer-app/id1061140479',
            },
        ];

        return (
            <div className="card-button-box">
                <div className="card-button-box-title">
                    <h2>Partner Apps</h2>
                    <p>Install to get extra benefits</p>
                </div>
                <div className="card-button-box-items">
                    {apps.map((app, index) => (
                        <a
                            key={index}
                            href="# "
                            className="button"
                            onClick={() => handleButtonClick(app)}
                        >
                            {app.name}
                        </a>
                    ))}
                </div>
            </div>
        );
    };

    export default CardButtonBox;
