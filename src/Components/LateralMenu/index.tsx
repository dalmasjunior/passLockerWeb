import React from "react";
import "./index.css";
import Button from "../Button";

const LateralMenu: React.FC = () => {
    return (
        <div className={`lateral-menu open`}>
            <div className="menu-content">
                <ul>
                    <li><Button title="Home" page="/" /></li>
                </ul>
            </div>
        </div>
    );
};

export default LateralMenu;