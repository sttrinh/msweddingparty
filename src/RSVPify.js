import React, { Component } from 'react';
import './RSVPify.css';

let mIFrame = null;
let mStartScroll = null;

class RSVPify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRSVP: false
    };
  }

  _createForm() {
    mStartScroll = false;
    let ie_check = !!window.ActiveXObject;
    let iframe = "<iframe id=\"RSVPifyIFrame\" style=\"width:100%; border:none;\" allowtransparency=\"true\" src=\"http://michellestephen.app.rsvpify.com/?embed=1&js=1\" frameborder=\"0\" scrolling=\"no\"></iframe>";
    let rsvpContainer = document.getElementById('RSVPifyIFrameContainer');
    rsvpContainer.innerHTML = iframe;
    mIFrame = document.getElementById('RSVPifyIFrame');
    if (ie_check === true) {
      try {
        iframe = mIFrame;
        let doc = iframe.contentDocument ? iframe.contentDocument : (iframe.contentWindow.document || iframe.document);
        doc.open();
        doc.write('');
      } catch (err) {
        mIFrame.src = 'javascript:void((function(){document.open();document.domain=\'' + this._baseUrl() + '\';document.close();})())';
      }
    } else {
      /*
      let innerDocument = document.getElementById('RSVPifyIFrame').contentWindow.document;
      let spinnerImage = innerDocument.createElement('IMG');
      let container = innerDocument.createElement('P');
      container.style['text-align'] = 'center';
      spinnerImage.src = 'http://app.rsvpify.com/images/preloader.GIF';
      container.appendChild(spinnerImage);
      innerDocument.body.appendChild(container);
      */
    }
  }

  _baseUrl() {
    let pathArray = location.href.split('/');
    let site_host = pathArray[2];
    return site_host;
  }

  _handleRSVP() {
    this._createForm();
    document.getElementById("RSVPifyIFrame").onload = function() {
      if (mStartScroll) {
        document.getElementById("RSVPifyIFrame").scrollIntoView(true);
      }
      mStartScroll = true;
      window.resizeFrame();
    };

    this.setState({
      isRSVP: true
    });
  }

  render() {
    return (
      <div id="RSVPifyIFrameContainer"
          className={this.state.isRSVP ? 'hide-up' : ''}>
        <div className="center rsvp-form">
          <button type="button"
              onClick={this._handleRSVP.bind(this)}>
            RSVP
          </button>
        </div>
      </div>
    );
  }
}

export default RSVPify;