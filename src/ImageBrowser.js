import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import './ImageBrowser.css';

let items = null;
const preweddingImages = [
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

const weddingImages = [
  {
    original: 'gallery/lg/18987716_1721204454575256_1175829153_o.jpg',
    srcSet: 'gallery/md/18987716_1721204454575256_1175829153_o.jpg 360w,'
         + ' gallery/lg/18987716_1721204454575256_1175829153_o.jpg 720w',
    thumbnail: 'gallery/sm/18987716_1721204454575256_1175829153_o.jpg'
  },
  {
    original: 'gallery/lg/19022704_1721183164577385_1886218229_o.jpg',
    srcSet: 'gallery/md/19022704_1721183164577385_1886218229_o.jpg 360w,'
         + ' gallery/lg/19022704_1721183164577385_1886218229_o.jpg 720w',
    thumbnail: 'gallery/sm/19022704_1721183164577385_1886218229_o.jpg'
  },
  {
    original: 'gallery/lg/19024444_1721194357909599_1668706096_o.jpg',
    srcSet: 'gallery/md/19024444_1721194357909599_1668706096_o.jpg 360w,'
         + ' gallery/lg/19024444_1721194357909599_1668706096_o.jpg 720w',
    thumbnail: 'gallery/sm/19024444_1721194357909599_1668706096_o.jpg'
  },
  {
    original: 'gallery/lg/18987343_1721147497914285_254389268_o.jpg',
    srcSet: 'gallery/md/18987343_1721147497914285_254389268_o.jpg 360w,'
         + ' gallery/lg/18987343_1721147497914285_254389268_o.jpg 720w',
    thumbnail: 'gallery/sm/18987343_1721147497914285_254389268_o.jpg'
  },
  {
    original: 'gallery/lg/19022365_1721183457910689_1253426308_o.jpg',
    srcSet: 'gallery/md/19022365_1721183457910689_1253426308_o.jpg 360w,'
         + ' gallery/lg/19022365_1721183457910689_1253426308_o.jpg 720w',
    thumbnail: 'gallery/sm/19022365_1721183457910689_1253426308_o.jpg'
  },
  {
    original: 'gallery/lg/19022697_1721148251247543_919988455_o.jpg',
    srcSet: 'gallery/md/19022697_1721148251247543_919988455_o.jpg 360w,'
         + ' gallery/lg/19022697_1721148251247543_919988455_o.jpg 720w',
    thumbnail: 'gallery/sm/19022697_1721148251247543_919988455_o.jpg'
  },
  {
    original: 'gallery/lg/DSC_494f3.jpg',
    srcSet: 'gallery/md/DSC_494f3.jpg 360w,'
         + ' gallery/lg/DSC_494f3.jpg 720w',
    thumbnail: 'gallery/sm/DSC_494f3.jpg'
  },
  {
    original: 'gallery/lg/DSC_4675.jpg',
    srcSet: 'gallery/md/DSC_4675.jpg 360w,'
         + ' gallery/lg/DSC_4675.jpg 720w',
    thumbnail: 'gallery/sm/DSC_4675.jpg'
  },
  {
    original: 'gallery/lg/DSC_4819.jpg',
    srcSet: 'gallery/md/DSC_4819.jpg 360w,'
         + ' gallery/lg/DSC_4819.jpg 720w',
    thumbnail: 'gallery/sm/DSC_4819.jpg'
  },
  {
    original: 'gallery/lg/1492361415532.jpg',
    srcSet: 'gallery/md/1492361415532.jpg 360w,'
         + ' gallery/lg/1492361415532.jpg 720w',
    thumbnail: 'gallery/sm/1492361415532.jpg'
  },
  {
    original: 'gallery/lg/1492361484457.jpg',
    srcSet: 'gallery/md/1492361484457.jpg 360w,'
         + ' gallery/lg/1492361484457.jpg 720w',
    thumbnail: 'gallery/sm/1492361484457.jpg'
  }
];

class ImageBrowser extends Component {

  constructor(props) {
    super(props);
    switch (props.album) {
      case "prewedding":
        items = preweddingImages;
        break;
      case "wedding":
        items = weddingImages;
        break;
    }
  }

  render() {
    return (
      <div className={this.props.album}>
        <ImageGallery
          items={items}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={true} />
      </div>
    );
  }
}

export default ImageBrowser;