import React, {Component} from 'react';
import DemoReel from './Durrell_Lyons_Demo_Reel_2018.mp4';


export default class Bio extends Component {

    render() {
        return (
            <div id="bio" className="bio">
                <section className="container">
                    <aside className="bio-note">
                        <h2>
                            Biography
                        </h2>
                        <p>
                            Durrell Lyons is a theater, television, and film actor based out of Atlanta, GA.
                            He is most known for his reoccurring on <strong>Tyler Perry's The Haves and Have Nots</strong>,
                            his co-Starring role on the TVOne original Love Under New Management,
                            and a guest-starring role in the highly acclaimed Tupac Shakur biopic <strong>All Eyez On Me</strong>.
                            
                            <br /><br />                        

                            His theater credits include his portrayl of the character Nunn in the Atlanta regional production of the broadway play
                            <strong> Holler If You Hear Me</strong>, directed by Tony Award winning director Kenny Leon in association with <em>True Colors Theater</em>.
                            He is also known for his portrayl of the character Feldman in the riotous musical comedy <strong>Guess Who Showed Up At Dinner</strong>,
                            written and directed by award winning producer and director Mark E. Swinton.
                            
                            <br /><br />
                            
                            Lyons originally hails from the small town of Wichita Falls, TX.
                            His humbled beginnings are characterized by countless hours spent at local Boys and Girls clubs
                            filled with basketball games and NBA dreams, endless freestyle sessions and MC dreams, and most importantaly, roasting sessions and yo mama jokes.
                            Lyons would eventually leave his hometown in an educational pursuit to Savannah, GA.
                            While acquiring an engineering degree at Savannah State University,
                            Lyons kept close to the stage by participating in various theatrical productions,
                            as a dancer with Savannah State's Hip Hop dance team, a runway model with a number of fashion troupes, and most notably, a spoken word poet.
                            
                            <br /><br />
                            
                            After moving to Atlanta, he studied various acting methods such as Practical Aesthetics, the Chubbuck technique, Improvisation, and even gain some experience as a stand up comedian.
                            Lyons has been active in a variety of stage productions, television projects, and in the big screen.
                            He currently resides in the eastern suburbs of Atlanta, GA with his wife and two children.
                            
                        </p>
                    </aside>
                    <div className="demo_reel">
                        <video className="bgVideo" width="100%" loop="loop" controls>
                            <source src={DemoReel} type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                </section>
            </div>
        );
    }
}