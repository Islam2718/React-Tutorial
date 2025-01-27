import React from "react";

const Menu = () => {
    return (
        <div className="menu container border-top">
            <nav className="row navbar navbar-expand-lg bg-body-tertiary1 rm24-menu">
            <div className="container-fluid1">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">হোমপেজ</a>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="#">রুপচর্চা</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">শিশুর যত্ন</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">রান্না ও রান্নাঘর</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">স্বাস্থ্য ও সুরক্ষা</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">ঘরের যত্ন</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">উদ্যোক্তা ও সহযোগী</a></li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-dark" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Menu;