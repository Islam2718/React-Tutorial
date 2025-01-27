import React from "react";

const Slider = () => {
    return (
        <>
            <div id="rm24-slider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">                        
                    </div>
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://romoni-24.com/uploads/cat_1691611240_health.webp" alt=""/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>                    
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://romoni-24.com/uploads/cat_1691611240_health.webp" alt=""/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://romoni-24.com/uploads/cat_1666503629_housecare2_1.webp" alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Slider;