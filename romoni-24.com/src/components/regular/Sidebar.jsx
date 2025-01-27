import React from "react";

const Sidebar = () => {
    return (
        <>
            <div className="sidebar-card">
                <div className="row p-3 h3 rm24-bg rounded my-3 text-center">জনপ্রিয় পোস্ট</div>            
            </div>
            
                <ul className="list-group1">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Cras justo odio
                        <span className="badge badge-primary badge-pill">14</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Dapibus ac facilisis in
                        <span className="badge badge-primary badge-pill">2</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Morbi leo risus
                        <span className="badge badge-primary badge-pill">1</span>
                    </li>
                </ul>
            <div className="row p-3 h3 rm24-bg rounded my-3 text-center">ক্যাটাগরীসমূহ</div>            
        </>
    );
};

export default Sidebar;