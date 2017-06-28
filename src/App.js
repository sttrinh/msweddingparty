import React, { Component } from 'react';
import ImageBrowser from './ImageBrowser';
import VideoPlayer from './VideoPlayer';
//import RSVPify from './RSVPify'

class App extends Component {
  _handleRSVP() {
    window.open("https://goo.gl/forms/IB40nfZWKaXamm2O2");
  }

  render() {
    return (
      <div>
        <section className="main-image">
        </section>
        <section>
            <div className="bride-groom">
                <div className="bride-groom-1">
                  <div className="bg-title">Groom</div>
                  <div className="profile-card">
                    <div className="pc-image stephen"></div>
                    <div>
                      <div>Stephen Trinh</div>
                      <div className="chinese">鄭雄偉</div>
                    </div>
                  </div>
                </div>
                <div className="bride-groom-2">
                  <div className="bg-title">Bride</div>
                  <div className="profile-card">
                    <div className="pc-image michelle"></div>
                    <div>
                      <div>Michelle Wu</div>
                      <div className="chinese">吳明璇</div>
                    </div>
                  </div>
                </div>
            </div>
        </section>
        <section className="photo-section">
          <div className="photo-content">
            <div className="photo-details">
              <h1>Pre-wedding shoot</h1>
              <p>
                We made a mini trip down to Tainan for
                the pictures. Luckily the weather was not
                too bad. It was a little tiring but we
                definitely had a lot of fun!
              </p>
              <p className="chinese">
                我們去台南拍婚紗. 天氣不錯.
                有點累可是我們覺得很好玩!
              </p>
            </div>
            <div className="image-browser">
              <ImageBrowser album="prewedding" />
            </div>
          </div>
        </section>
        <section className="photo-section wedding-photos">
          <div className="photo-content">
            <div className="photo-details">
              <h1>Wedding day</h1>
              <p>
                We had an amazing time celebrating our wedding
                in Taipei with our wonderful friends and family.
                For such a big wedding in another country,
                everything went surprising well!
              </p>
              <VideoPlayer />
            </div>
            <div className="image-browser">
              <ImageBrowser album="wedding" />
            </div>
          </div>
        </section>
        <section className="event-section">
          <div className="event-shade"></div>
          <div className="content">
            <h1>Wedding Banquet</h1>
            <div className="event-location">
              <p className="content-big">Cielo Wine Bar</p>
              <p className="content-small">
                Hotel Valencia, 7th Floor<br />
                3055 Olin Ave #2100<br />
                San Jose, CA 95128<br />
              </p>
            </div>
            <div className="event-location">
              <div className="content-small">
                <p className="content-big">August 12, 2017</p>
                <p>Dinner @ 6:30 PM</p>
              </div>
            </div>
          </div>
        </section>
        <section className="rsvp-section">
          {/* <RSVPify /> */}
          <div className="center rsvp-form">
            <button type="button" onClick={this._handleRSVP}>
              <div>RSVP</div>
              <div className="chinese">請您回覆</div>
            </button>
            <p className="chinese rsvp-msg">
              Please RSVP before Jul 7<br />
              請於7月7號前回覆是否出席
            </p>
          </div>
        </section>
        <section className="footer-section">
          <div className="footer-shade"></div>
          <div className="mslogo">
          </div>
          <p className="footer-msg">
            See you soon!
          </p>
        </section>
      </div>
    );
  }
}

export default App;
