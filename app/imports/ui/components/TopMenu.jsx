import React from 'react';
import { Container, Input, Button, Image, Menu, Dropdown, Icon } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    const menuAnalyzeHeight = { height: '43px' };
    return (
        <Menu borderless className='topmenu' style={{ height: '83px' }}>
          <Menu.Item position='left'>
            <Image
                style={{ width: '200px' }}
                src='https://www.fakespot.com/assets/home/color_fakespot-0190751cb545154c935cdd73f099d4b2f00305b1c39f642e2dc3e64d1a60068f.svg'/>
          </Menu.Item>
          <Container>
            <Menu.Item position='left'>
              <div className='ui input'>
                <Input type='text' style={menuAnalyzeHeight} placeholder='  https://www.'></Input>
                <Button className='ui rounded button'>Analyze</Button>
              </div>
            </Menu.Item>
          </Container>
          <Menu.Item>
            <Dropdown selection icon='heart' text='Share the word'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Menu.Item><Icon size='large' name='facebook'/>Share on Facebook
                  </Menu.Item>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Menu.Item><Icon size='large' name='twitter'/>Share on Twitter
                  </Menu.Item>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Menu.Item><Icon size='large' name='linkedin'/>Share on LinkedIn
                  </Menu.Item>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu>
    );
  }
}
