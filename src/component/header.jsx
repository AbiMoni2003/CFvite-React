import React, { Fragment } from "react";
import { Link } from "react-router-dom";


function Header() {

    const headerLink = [
        { link :"/", name :"Home"},
        { link :"/about", name :"About"},
        { link :"/contact", name :"Contact" },
        { link :"/contact", name :"Contact" },
        { link :"/test", name :"Test" }
    ]

    return (
        <Fragment>
            <ul>
                {headerLink.map((item, a)=>(
                  <li key={a}><Link to={item.link}>{item.name}</Link></li>
                ))}
            </ul>
        </Fragment>
    )
}
export default Header