import React, { Component } from 'react';
import vidthumb from './images/video-thumb-360.jpg';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { playVideo: false };
    this.loadVideo = this.loadVideo.bind(this);
  }

  loadVideo() {
    this.setState({
      playVideo: true
    });
  }

  render() {
    return (
      <div className="youtube-player">
        {!this.state.playVideo &&
          <div>
            <img src={vidthumb} />
            <div className="play" onClick={this.loadVideo}>
            </div>
          </div>
        }
        {this.state.playVideo &&
          <iframe src="https://www.youtube.com/embed/o5huWag4MCM?rel=0&amp;showinfo=0&amp;autoplay=1"
            allowFullScreen>
          </iframe>
        }
      </div>
    );
  }
}

export default VideoPlayer;