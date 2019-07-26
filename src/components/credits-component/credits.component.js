import React, {Component} from 'react';
import {storageRef, filmRef } from '../../firebase';

export default class Credits extends Component {
    constructor() {
        super();

        this.state = {
            imageList: []
        };

        this.getImage = this.getImage.bind(this);
        this.showInfo = this.showInfo.bind(this);
    }
  
    /* 
     * Upon initial mount of component: 
     * all images from credits are retrieved from the database 
    */
    componentDidMount() {
        /* local reference to imageList created for later use */
        const imageList = [];

        /* firebase query built using filmRef object instantiated in ref.js file */
        filmRef.orderByChild("f_id").on('value', data => {
            data.forEach(function(childData){
                /* all individual object data stored in local image variable */
                let image = [];
                image.push({
                    id: childData.val().f_id,
                    title: childData.val().f_title,
                    description: childData.val().f_description,
                    imdbLink: childData.val().f_imdbLink,
                    poster: childData.val().f_poster
                });

                /* each object stored in local imageList variable */
                imageList.push(image);
            });

            /* all objects are transmitted to state imageList */
            this.setState({imageList});
        });
    }

    getImage(imageId, imgURL){
        /* storageRef object instantiaed in ref.js file and used to access firebase media storage area */
        /* getDownloadURL() is a firebase method needed to download the actual firebase URL address of the file */
        storageRef.child(imgURL).getDownloadURL().then(function(url) {

            /* local img variable created to reference actual IMG object in the DOM */
            const img = document.getElementById(imageId + '-image');
  
            /* url from Firebase is passed into the image source file */
            img.src = url;
        }).catch(function(error){
            console.log(error);
        });
    }

    showInfo(id) {
        const creditInfoDiv = document.getElementById(id)
        if(creditInfoDiv.style.display === "block"){
            creditInfoDiv.style.display = "none";
        } else {
            creditInfoDiv.style.display = "block";
        }
    }

    render() {
        /* create references to state object arrays */
        const {imageList} = this.state;
        let imageData;

        /* verify state object is not empty to avoid null errors */
        if(imageList.length){
            imageData = <div className="creditsGallery">
                        {
                            /* map() function used to iterate through images */
                            /* getImage() method used to retreive actual image file from media storage container*/
                            imageList.map((posters) => {
                                return <div key={posters[0].id} className="creditsDiv" id={posters[0].id} onClick={() => this.showInfo(posters[0].id + "-info")}>
                                            <span className="helper"></span>
                                            <img id={posters[0].id + '-image'} alt={posters[0].poster} />
                                            { this.getImage(posters[0].id, posters[0].poster) }
                                            <div className="credits_info_div" id={posters[0].id + "-info"}>
                                                <h4>{posters[0].title}</h4>
                                                <p>{posters[0].description}</p>
                                                <br />
                                                <a target="_blank" rel="noopener noreferrer" href={posters[0].imdbLink}>imdb</a>
                                            </div>
                                       </div>
                            })
                        }
                        </div>;
        } else {
            imageData = <div className="creditsGallery"> No Credits To Display </div>;
        }

        return (
            <div>
                <section className="credits">
                    <div className="container">
                        {imageData}
                    </div>
                </section>
            </div>
        );
    }
}