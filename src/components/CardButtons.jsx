const CardButtonBox = () => {
    return(
    <div className="card-button-box">
        <div className="card-button-box-title">
            <h2>Partner Apps</h2>
            <p>Install to get extra benifits</p>
        </div>
        <div className="card-button-box-items">
            <a href="https://play.google.com/store/apps/details?id=com.drivetrackplusrefuel" className="button" target="_blank" rel="noreferrer">HP Pay</a>
            <a href="https://play.google.com/store/apps/details?id=com.drivetrackplus" className="button" target="_blank" rel="noreferrer">Drive Track Plus</a>
        </div>
    </div>
    );
};

export default CardButtonBox;