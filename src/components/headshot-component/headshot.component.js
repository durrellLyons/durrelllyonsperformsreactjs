import React, {Component} from 'react';
import img0 from './DurrellLyons1.jpg';
import img1 from './DurrellLyons2.jpg';
import img2 from './DurrellLyons3.jpg';
import img3 from './DurrellLyons4.jpg';

export default class Headshot extends Component {
    constructor(props) {
        super(props);

        this.imgChange = this.imgChange.bind(this);
        this.state = {
            "imageIndex": 0,
            "fire": ''
        }
    }

    imgChange() {
        let index = this.state.imageIndex;
        const imageArray = [img0, img1, img2, img3];
        document.getElementById("headshot").src=imageArray[index];

        if(index <= 2){
            index++;
        } else {
            index = 0;
        }

        this.setState({"imageIndex": index, "fire": setTimeout(this.imgChange,3000)});
    }

    componentDidMount(){
        this.imgChange();
    }

    componentWillUnmount(){
        this.setState({"imageIndex": 0});
        clearTimeout(this.state.fire);
    }
    

    render() {
        return(
            <section role="aside" className="headshot">
                <img id="headshot" alt="Headshots" />
            </section>
        );
    }
}