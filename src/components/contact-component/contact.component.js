import React, {Component} from 'react';
import BYSBLogo from './BYSB-Logo.jpg';
import PhirgunMairLogo from './PhirgunMair-Logo.jpg';

export default class Contact extends Component {
    constructor(){
        super();

        this.socialMediaLinks = this.socialMediaLinks.bind(this);
    }

    socialMediaLinks(id, url) {
        window.open(url);
        return false;
    }

    render() {
        return (
            <div>
                <section className="contact">
                    <div className="container">
                        <article className="reps">
                            <span>Southeast representation: </span>
                            <img src={BYSBLogo} id="seAgentLogo" alt="SE Agent Logo" />
                            <br /> <br />

                            <span>New Mexico representation: </span>
                            <img src={PhirgunMairLogo} id="nmAgentLogo" alt="NM Agent Logo" />
                            
                            <p>
                                For booking for live shows entertainment for the theater, spoken word, or comedy
                                please send an email to <a href={`mailto:durrell.lyons@gmail.com`}>Durrell.Lyons@gmail.com</a>
                            </p>
                        </article>
                        <article className="igWidget">
                            <span>Follow Me: </span>
                            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js" />
                            <iframe src="//lightwidget.com/widgets/419cedb101be51ccabc3be1aa7117c80.html" 
                                    scrolling="no" 
                                    allowtransparency="true" 
                                    className="lightwidget-widget"
                                    title="lightwidget-widget">
                            </iframe>
                            <div className='social_media_div'>
                                <div className='facebook' id="facebook" onClick={() => this.socialMediaLinks(this.id, "http://facebook.com/durrelllyonsperforms")}></div>
                                <div className='twitter' id="twitter" onClick={() => this.socialMediaLinks(this.id, "http://twitter.com/durrelllyons")}></div>
                                <div className='instagram' id="instagram" onClick={() => this.socialMediaLinks(this.id, "http://instagram.com/durrelllyonsperforms")}></div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        );
    }
}
