import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import menuButton from './menuButton.png';


export default class Header extends Component {

    constructor( ) {
        super( );
        this.onClickMenuDisplay = this.onClickMenuDisplay.bind(this);
        this.onClickMenuRemove = this.onClickMenuRemove.bind(this);
    }

    onClickMenuDisplay() {
        document.getElementById('menu').style.display = 'block';
    }

    onClickMenuRemove() {
        document.getElementById('menu').style.display = 'none';
    }

    render() {
        return (
            <header aria-label="branding">
                <nav aria-label="navigation">
                    <img src={menuButton} className="menuButton" alt="Menu Button" onClick={this.onClickMenuDisplay} />
                    <div className="menu" id="menu">
                        <ul>
                            <Link to="/"><li onClick={this.onClickMenuRemove}>Home</li></Link>
                            <Link to="/bio"><li onClick={this.onClickMenuRemove}>Bio</li></Link>
                            <Link to="/photo"><li onClick={this.onClickMenuRemove}>Photo</li></Link>
                            <Link to="/credits"><li onClick={this.onClickMenuRemove}>Credits</li></Link>
                            <Link to="/contact"><li onClick={this.onClickMenuRemove}>Contact</li></Link>
                        </ul>
                        <span className="closeMenu" onClick={this.onClickMenuRemove}>x</span>
                    </div>
                </nav>
                <div className="brandingDiv">
                    <Link to="/"><h2>Durrell Lyons</h2></Link>
                    <span className="tagline">Laugh. Cry. Create.</span>
                </div>
            </header>
        );
    }
}