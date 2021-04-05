import React, { Component } from 'react';
import {MenuItems} from './MenuItems';
import './Navbar.css';


class Navbar extends Component {
    state = {clicked: false}

//sets the state to opposite whenever you click the X or hamburger
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
               //if 'fa' (font awesome) is clicked then it shows X (times) if not then is shows bars (hamburger)
            <nav className="NavbarItems">
             
                <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1> 

                <div className="menu-icon" on click={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i> 

                </div>
                <ul>
                    {MenuItems.map((item,index)=> {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar