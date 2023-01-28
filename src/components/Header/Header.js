import React from "react";
import "./header.css";

import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import menu from "../../assets/images/menu-fill.svg";
import cart from "../../assets/images/shopping-bag-3-line.svg";
import user from "../../assets/images/user-line.svg";
import { Container, Row } from "reactstrap";

const Header = () => {
    return <header className={"header"}>
        <Container>
            <Row>
                <div className={"navWrapper"}>
                    <div className={"logo_div"}>
                        <img className={'logo'} src={logo} alt={"logo"}/>
                </div>


                <div className={"navigation"}>

                    <ul className={"menu"}>
                        <li className={"menu-item"}>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className={"menu-item"}>
                            <NavLink to='/checkout'>Checkout</NavLink>
                        </li>
                        <li className={"menu-item"}>
                            <NavLink to='/cart'>Cart</NavLink>
                        </li>
                    </ul>

                </div>

                <div className={"navIcons"}>
                    <span className={"icon_cart"}>
                        <img src={cart} alt={"cart"}/>
                    </span>
                    <span className={"icon_user"}>
                        <img src={user} alt={"user"}/>
                    </span>
                    <span className={"icon_menu"}>
                        <img src={menu} alt={"menu"}/>
                    </span>
                </div>


                </div>
            </Row>
        </Container>
    </header>;
};

export default Header;