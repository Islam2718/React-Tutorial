import React from "react";

const Footer = () => {
    return (
        <footer className="container">
            <div className="row footer-menu rm24-header">
                <div className="section-subscribe border-top border-bottom">
                    <div className="row">
                        <div className="my-3">
                            <form class="d-flex col-sm-6 col-12 mx-auto" role="search">
                                <input class="form-control me-0 rounded-0" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-secondary rounded-0" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-sm-4">
                        <h4>পেজসমূহ</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <h4>ক্যাটাগরীসমূহ</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <img src="/logo.png" className="App-logo" alt="logo" style={{ width: "120px" }} />
                        <p className="p-0 m-0">
                            Email: support@romoni-24.com
                        </p>
                        <p className="p-0 m-0">
                            Phone: +880 1234-5678
                        </p>
                        <p className="p-0 m-0">
                            E15, Block E, Zakir Hosen Road
                            Dhaka - 1207
                        </p>
                    </div>
                </div>
            </div>
            <div className="row text-center py-2 rm24-footer">
                <p className="m-0 p-0">&copy; 2023 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;