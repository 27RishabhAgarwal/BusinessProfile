const CardProducts = () => {
    return(
    <div className="card-products-box">
        <div className="card-products-box-title">
            <h2>Products</h2>
            <p>These are our products</p>
        </div>
        <div className="card-products-box-items">
            <div className="card-products-box-item">
                <p>Petrol</p>
                <p>95.24/-</p>
            </div>
            <div className="card-products-box-item">
                <p>E20</p>
                <p>95.24/-</p>
            </div>
            <div className="card-products-box-item">
                <p>Diesel</p>
                <p>88.40/-</p>
            </div>
            <div className="card-products-box-item">
                <p>CNG</p>
                <p>97.70/-</p>
            </div>
        </div>
    </div>
    );
};

export default CardProducts;