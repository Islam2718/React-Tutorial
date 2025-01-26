import React from "react";

const Menu = () => {
    return (
        <div className="menu container border-top">
            <nav class="row navbar navbar-expand-lg bg-body-tertiary1 rm24-menu">
            <div class="container-fluid1">
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">হোমপেজ</a>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="#">রুপচর্চা</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">শিশুর যত্ন</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">রান্না ও রান্নাঘর</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">স্বাস্থ্য ও সুরক্ষা</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">ঘরের যত্ন</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">উদ্যোক্তা ও সহযোগী</a></li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-secondary" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Menu;