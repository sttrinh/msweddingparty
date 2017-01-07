import React, { Component } from 'react';
import ImageBrowser from './ImageBrowser';

class App extends Component {
  render() {
    return (
      <div>
        <section className="main-image">
        </section>
        <section className="event-section">
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
        <section id="photoSection" className="photo-section">
          <div className="shade"></div>
          <div className="photo-content">
            <div className="photo-details">
              <h1>Pre-wedding photos</h1>
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
              <ImageBrowser bgId="photoSection" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
