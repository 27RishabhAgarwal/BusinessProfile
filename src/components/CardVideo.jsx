const CardVideoBox = () => {
    return(
    <div className="card-video-box">
        <div className="card-video-box-title">
            <h2>Video</h2>
            <p>Description</p>
        </div>
        <div className="card-video-box-items">
            <iframe src="https://www.youtube.com/embed/g73FsGxvcpY" title="Shankar Pashupati Tu Hai - Nikhar Juneja (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
    );
};

export default CardVideoBox;