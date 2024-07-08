import React from 'react';

export default function Carousel() {
    return (
        <div className="container my-4">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="burger" />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="card bg-dark text-white">
                                <div className="card-body">
                                    <h5 className="card-title">Burger</h5>
                                    <p className="card-text">Delicious burger with fresh ingredients.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100" alt="pastry" />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="card bg-dark text-white">
                                <div className="card-body">
                                    <h5 className="card-title">Pastry</h5>
                                    <p className="card-text">Sweet and savory pastries for any occasion.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100" alt="barbeque" />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="card bg-dark text-white">
                                <div className="card-body">
                                    <h5 className="card-title">Barbeque</h5>
                                    <p className="card-text">Grilled barbeque with a smoky flavor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
