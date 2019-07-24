import React, { Component } from 'react';
import {photoRef, storageRef } from '../../firebase';

class Photo extends Component {

  constructor(props) {
    super(props);

    /* Initialize categories array and imageList array upon initial component state */
    this.state = {
      imageList: []
    };

    //this.getImageList = this.getImageList.bind(this);
    this.getImage = this.getImage.bind(this);
  }
 
  /* Upon initial mount of component: 
   * all photo categories are retrieved from the database 
   */
  componentDidMount() {
    /* all data cleared from current state of imageList array before use */
    const imageList = [];

    /* firebase query built using photoRef object instantiated in ref.js file */
    const query = photoRef
                    .orderByChild('photo_cat')
                    .equalTo('1');
    query.on('value', data => {
      data.forEach(function(childData){

        /* all individual object data stored in local photo variable */
        var photo = [];
        photo.push({
          photo_id: childData.val().photo_id,
          photo_cat: childData.val().photo_cat,
          image: childData.val().image,
          name: childData.val().photo_name,
          active: childData.val().active
        });

        /* each object stored in local imageList variable */
        imageList.push(photo);        
      })
      /* all objects are transmitted to state imageList */
      this.setState({imageList});
    });
  }

  /* getImages() 
   * method used to retreive the actual image from firebase storage container 
   * as it pertains to the specific image Id and image URL address 
   */
  getImage = (imageId, imgURL) => {
    /* storageRef object instantiaed in ref.js file and used to access firebase media storage area */
    /* getDownloadURL() is a firebase method needed to download the actual firebase URL address of the file */
    storageRef.child(imgURL).getDownloadURL().then(function(url) {

      /* local img variable created to reference actual IMG object in the DOM */
      const img = document.getElementById(imageId + '-image');

      /* url from Firebase is passed into the image source file */
      img.src = url;
    });
  }

  render() {
    /* create references to state object arrays */
    const { imageList } = this.state;
    let imageData;

    /* verify state object is not empty to avoid null errors */
    if(imageList.length) {
      /* image List stored in variable */
      imageData = <div className="photoGallery">
                     {
                       /* map() function used to iterate through images */
                       /* getImage() method used to retreive actual image file from media storage container*/
                      this.state.imageList.map((pics) => {
                        return <div key={pics[0].photo_id} className="photoDiv">
                                <span className="helper"></span>
                                <img id={pics[0].photo_id + '-image'} alt={pics[0].image} />
                                { this.getImage(pics[0].photo_id, pics[0].image) }
                                <br />
                               </div>
                      })
                     }
                     </div>;
    } else {
      imageData = <div className="photoGallery"> No Images To Display <br /> </div>;
    }

    return (
      /* variables placed in respective divs to display on screen */
      <div className="App-Photo">
        <div className="container">
          <article className="photoContent">
            { imageData }
          </article>
        </div>
      </div>
    )
  }
}

export default Photo;