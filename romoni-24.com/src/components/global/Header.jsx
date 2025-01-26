import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <>        
        <div className="container rm24-header d-flex">            
            <div className="col px-5">
                <img src="/logo.png" className="App-logo" alt="logo" />
            </div>
            <div className="col px-5 text-end align-self-center">
                <a href="" className="btn btn-sm btn-secondary border shadow m-1 px-3 p-2">F</a>
                <a href="" className="btn btn-sm btn-secondary border shadow m-1 px-3 p-2">F</a>
                <a href="" className="btn btn-sm btn-secondary border shadow m-1 px-3 p-2">F</a>
                <a href="" className="btn btn-sm btn-secondary border shadow m-1 px-3 p-2">F</a>
            </div>
        </div>
        </>
    );
};

export default Header;