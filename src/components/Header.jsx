import React, { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import Todo from '../assets/images/icon-todo.svg'
import Calendar from '../assets/images/icon-calendar.svg'
import Reminders from '../assets/images/icon-reminders.svg'
import Planning from '../assets/images/icon-planning.svg'
import ArrowUp from '../assets/images/icon-arrow-up.svg'
import ArrowDown from '../assets/images/icon-arrow-down.svg'
import MenuClosed from '../assets/images/icon-menu.svg'
import MenuOpen from '../assets/images/icon-close-menu.svg'

const Header = () => {

    const [isOnFeatures, setIsOnFeatures] = useState(false)
    const [isOnCompany, setIsOnCompany] = useState(false)

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // const handleMenu = () => {
    //     setIsMenuOpen(prev => !prev)
    // }

  return (
    <header className="header">
        <div className="header-left">
            <a href="/">
                <img className="logo" src={Logo} alt="logo" />
            </a>
          
        </div>

        <div className={ isMenuOpen ? 'hidden' : 'header-right'}>

            <nav className="nav">
                <ul className="nav-bar">
                    {/* TODO: Realizar el despliegue del dropdown */}
                    <li
                        onClick={() => setIsOnFeatures( prev => !prev)}
                    >
                        <a>Features {' '}</a>

                        <img src={isOnFeatures ? ArrowUp : ArrowDown} alt="arrow" />

                        { isOnFeatures && (
                            <ul className="drop-down features">
                                <li>
                                    <img src={Todo} alt="todo list" />
                                    <p>Todo List</p>
                                </li>
                                <li>
                                    <img src={Calendar} alt="calendar" />
                                    <p>Calendar</p>
                                </li>
                                <li>
                                    <img src={Reminders} alt="reminders" />
                                    <p>Reminders</p>
                                </li>
                                <li>
                                    <img src={Planning} alt="planning" />
                                    <p>Planning</p>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li 
                        onClick={() => setIsOnCompany( prev => !prev)}
                    >
                        <a>Company {' '}</a>

                        <img src={isOnCompany ? ArrowUp : ArrowDown} alt="arrow" />

                        {
                            isOnCompany && (
                                <ul className="drop-down is-company">
                                    <li>History</li>
                                    <li>Our Team</li>
                                    <li>Blog</li>
                                </ul>
                            )
                        }
                    </li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">About</a></li>
                </ul>
            </nav>

            <div className="buttons">
                <input 
                    type="button" 
                    value="Login" 
                    className="btn-header"
                />
                <input 
                    type="button" 
                    value="Register" 
                    className="btn-header"
                />
            </div>
        </div>

        <div className="menu">
            <a 
                onClick={() => setIsMenuOpen(prev => !prev)}
            >
                <img src={ isMenuOpen ? MenuClosed : MenuOpen} alt="menu" />
            </a>
        </div>
    </header>
  )
}

export default Header