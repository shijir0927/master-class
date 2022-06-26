import React from "react";
import headerItems from "./headerItems.json";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="bg-black text-white flex justify-center py-10">
            <div className="container flex flex-row justify-between items-center">
                <div className="ml-12">
                    <Link to='/'>This is Logo</Link>
                </div>
                <div className="mr-12 flex flex-row items-center">
                    {headerItems.map((item, key) => {
                        return <p className="mx-5" key={key}>{item.name}</p>
                    })}
                </div>
            </div>
        </header>
    );
}

export default Header;