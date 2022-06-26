import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text }) => {
    return(
        <button className="bg-amber-200	rounded p-4 font-bold">
            <Link to='courses'>{text}</Link>
        </button>
    );
}

export default Button;