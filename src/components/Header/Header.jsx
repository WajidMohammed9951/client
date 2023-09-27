
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";

import "./Header.scss";


const Header = () => {
    return (
        <div className="header-content">
            <ul className="left">
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center" >
                WADSTORE
            </div>
            <div className="right">
                <TbSearch />
                <CgShoppingCart />
                <AiOutlineHeart />

            </div>
        </div>

    );
};


export default Header;
