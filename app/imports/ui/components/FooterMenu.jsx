import React from 'react';
import { Header, Image } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className='footer'>
          <div className="ui grid">
            <div id="footer-row" className="two column row">
              <div className="column">
                <Image
                    src="https://www.fakespot.com/assets/home/color_fakespot-0190751cb545154c935cdd73f099d4b2f00305b1c39f642e2dc3e64d1a60068f.svg"/>
                <p>Copyright 2020 Fakespot Inc</p>
                <Header as='h4'/>
                <Image alt="apple-app"
                       src="https://www.fakespot.com/assets/home/apple_app-d3eb0de9234e272304c3853fc4a469cd1456f5e7611a9f94e0a12dc9991b0f20.svg"/>
                <Header as='h4'/>
                <Image alt="google-play"
                       src="https://www.fakespot.com/assets/home/google_play-f00b75a0b626deabd75653056f14aeb06d61fb41e6c860bb2c0cc126d282a0be.svg"/>
              </div>
              <div id="right-footer" className="column">
                <Header as='h4'>COMPANY</Header>
                <pre>Fakespot.com&#9;    Careers    &#9;Press    &#9;   Blog</pre>
                <Header as='h4'>Support</Header>
                <pre>Contact&#9;    FAQ&#9;   Terms of Use&#9;   Privacy Policy</pre>
                <Header as='h4'>Reviews</Header>
                <pre>Last Analysis&#9;    Analysis Blog</pre>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
