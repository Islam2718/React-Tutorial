import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <>        
        <div className="container rm24-header d-flex">            
            <div className="col px-1">
                <img src="/logo.png" className="App-logo" alt="logo" />
            </div>
            <div className="col px-2 text-end align-self-center">
                <a href="" className="btn btn-sm btn-dark border shadow m-1 px-3 p-2">F</a>
                <a href="" className="btn btn-sm btn-dark border shadow m-1 px-3 p-2">F</a>
                <a href="" className="btn btn-sm btn-dark border shadow m-1 px-3 p-2">F</a>
                <a href="" className="btn btn-sm btn-dark border shadow m-1 px-3 p-2">F</a>
            </div>
        </div>
        </>
    );
};

export default Header;