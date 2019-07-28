import React, {Component} from 'react';
import Background_Video from "./Background_Video.mp4";
import ImageSlide from "../imageSlide-component/imageSlide.component";

export default class Header extends Component {

  constructor(){
    super();

    this.screenCheck = this.screenCheck.bind(this);
  }

  screenCheck(){
    if(window.innerWidth >= 600) {
      document.getElementById("bgVideo").muted = false;
    }
  }

  componentDidMount(){
    this.screenCheck();
  }

  render() {
      return (
          <section className="home" role="banner">
            <div className="demoReel">
              <video className="bgVideo" id="bgVideo" width="100%" autoPlay="autoPlay" loop="loop" muted>
                <source src={Background_Video} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>

            <div className="mobileSlide">
              <ImageSlide />
            </div>
          </section>
      );
  }
}