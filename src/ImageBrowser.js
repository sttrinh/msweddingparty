import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import './ImageBrowser.css';

//let bgId = null;
const images = [
  {
    original: 'gallery/lg/IMG_0116.jpg',
    srcSet: 'gallery/md/IMG_0116.jpg 360w,'
         + ' gallery/lg/IMG_0116.jpg 720w',
    thumbnail: 'gallery/sm/IMG_0116.jpg'
  },
  {
    original: 'gallery/lg/IMG_0239.jpg',
    srcSet: 'gallery/md/IMG_0239.jpg 360w,'
         + ' gallery/lg/IMG_0239.jpg 720w',
    thumbnail: 'gallery/sm/IMG_0239.jpg'
  },
  {
    original: 'gallery/lg/IMG_0294.jpg',
    srcSet: 'gallery/md/IMG_0294.jpg 360w,'
         + ' gallery/lg/IMG_0294.jpg 720w',
    thumbnail: 'gallery/sm/IMG_0294.jpg'
  },
  {
    original: 'gallery/lg/IMG_0357.jpg',
    srcSet: 'gallery/md/IMG_0357.jpg 360w,'
         + ' gallery/lg/IMG_0357.jpg 720w',
    thumbnail: 'gallery/sm/IMG_0357.jpg'
  },
  {
    original: 'gallery/lg/IMG_0421.jpg',
    srcSet: 'gallery/md/IMG_0421.jpg 360w,'
         + ' gallery/lg/IMG_0421.jpg 720w',
    thumbnail: 'gallery/sm/IMG_0421.jpg'
  },
  {
    original: 'gallery/lg/IMG_0538.jpg',
    srcSet: 'gallery/md/IMG_0538.jpg 360w,'
         + ' gallery/lg/IMG_0538.jpg 720w',
    thumbnail: 'gallery/sm/IMG_0538.jpg'
  },
  {
    original: 'gallery/lg/IMG_0577.jpg',
    srcSet: 'gallery/md/IMG_0577.jpg 360w,'
         + ' gallery/lg/IMG_0577.jpg 720w',
    thumbnail: 'gallery/sm/IMG_0577.jpg'
  },
  {
    original: 'gallery/lg/IMG_0611.jpg',
    srcSet: 'gallery/md/IMG_0611.jpg 360w,'
         + ' gallery/lg/IMG_0611.jpg 720w',
    thumbnail: 'gallery/sm/IMG_0611.jpg'
  },
  {
    original: 'gallery/lg/IMG_0784.jpg',
    srcSet: 'gallery/md/IMG_0784.jpg 360w,'
         + ' gallery/lg/IMG_0784.jpg 720w',
    thumbnail: 'gallery/sm/IMG_0784.jpg'
  }
];

class ImageBrowser extends Component {
  /*
  constructor(props) {
    super(props);
    bgId = props.bgId;
  }

  componentDidMount() {
    //this._handleOnSlide(0);
  }

  _handleOnSlide(currentIndex) {
    if (bgId) {
      document.getElementById(bgId).style.backgroundImage
        = 'url("' + images[currentIndex].original + '")';
    }
  }
  */

  render() {
    return (
      <div>
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={true} />
      </div>
    );
  }
}

export default ImageBrowser;