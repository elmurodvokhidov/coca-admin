import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import { PiNoteLight, PiNotepadLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { ContextData } from '../context/Context';

function Navbar() {
    const { clock, ordersModal, setOrdersModal, adminState } = useContext(ContextData);

    return (
        <div className='navbar' style={adminState ? { display: 'none' } : { display: 'flex' }}>
            <div className="nav_left">
                <span id="back"><NavLink to={'/home'}><BiArrowBack /></NavLink></span>

                <div className="logo">
                    <NavLink to={"/"}>
                        <figure><img src="../../img/Logo.png" alt="logo" /></figure>
                        <ul>
                            <li>Walk-In</li>
                            <li>Coca coffeetalk</li>
                        </ul>
                    </NavLink>
                </div>
            </div>

            <div className='nav_right'>
                <ul className='links'>
                    <li>
                        <NavLink to={'/'} id="active_link"><span><GoHome /></span><span>Bosh sahifa</span></NavLink>
                    </li>
                    <li>
                        <NavLink to={'/tables'}><span><PiNoteLight /></span><span>Joylar</span></NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setOrdersModal(!ordersModal)}><span><PiNotepadLight /></span><span>Buyurtmalar</span></NavLink>
                    </li>
                </ul>

                <ul>
                    {
                        clock.map((a, b) => (
                            <li key={b} className='nav_date'>
                                <span>{a.hour < 10 ? "0" + a.hour : a.hour}</span>
                                <span>:</span>
                                <span>{a.minute < 10 ? "0" + a.minute : a.minute}</span>
                                <span>:</span>
                                <span>{a.seconds < 10 ? "0" + a.seconds : a.seconds}</span>
                                <span>{a.date < 10 ? "0" + a.date : a.date}</span>
                                <span>/</span>
                                <span>{a.month < 10 ? "0" + (+a.month + 1) : a.month}</span>
                                <span>/</span>
                                <span>{a.year}</span>
                            </li>
                        ))
                    }
                    <li>
                        <figure><img src="../../img/Profile.png" alt="profile" /></figure>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;