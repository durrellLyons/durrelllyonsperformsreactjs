import React, {Component} from 'react';
import img0 from './DurrellLyons0.jpg';
import img1 from './DurrellLyons1.jpg';
import img2 from './DurrellLyons2.png';
import img3 from './DurrellLyons3.png';

export default class ImageSlide extends Component {
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
        document.getElementById("fullBodyImage").src=imageArray[index];

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
            <section aria-label="aside" className="fullBodyImage">
                <img id="fullBodyImage" alt="Full Body" />
            </section>
        );
    }
}