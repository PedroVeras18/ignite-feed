import React from "react";
import './Header.css'

import LogoIgnite from '../../assets/logo-ignite.png'

export default function Header(){
    return(
        <div className="Header">
            <img src={LogoIgnite} alt="" />
            <p>Ignite Feed</p>
        </div>
    )
}