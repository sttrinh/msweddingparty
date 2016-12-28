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
            <div className="photo-details left">
              <h1>Pre-wedding shoot</h1>
              <p></p>
            </div>
            <div className="image-browser right">
              <ImageBrowser bgId="photoSection" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
