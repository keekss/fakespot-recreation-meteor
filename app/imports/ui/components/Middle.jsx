import React from 'react';
import { Container, Grid, Input, Button, Image } from 'semantic-ui-react';

export default class Middle extends React.Component {
  render() {
    return (
        <Container className='middle'>
          <Container id='main-text'>
            <h1>Prime insurance,&nbsp;</h1>
            <h1 id='blue-text'>free with Fakespot</h1>
            <p>Fakespot Products and Businesses Below, So You Know Before You Buy</p>
          </Container>
          <Container>
            <Input>
              <Input id='middle-input' type='text' placeholder='  https://www.'/>
              <Button id='middle-button' className='ui rounded button'>Analyze</Button>
            </Input>
          </Container>
          <Container>
            <Grid.Row id='lower-icons'>
              <Grid.Column>
                <Image className='logo' style={{ height: '30px' }}
                       src='https://www.fakespot.com/assets/home/ebay-47ef8e1bf92337c4eb15b7da3116f72d5a0016ffb4923320c8bd9b78b3bebd94.png'
                       alt='Ebay'/>
              </Grid.Column>
              <Grid.Column>
                <Image className='logo'
                       src='https://www.fakespot.com/assets/home/amazon-logo-9c7fa340e7faf4a096a77236013293a720758859e5a7b1d8ab7d7778cbb8f119.svg'
                       alt='Amazon logo'/>
              </Grid.Column>
              <Grid.Column>
                <Image className='logo'
                       src='https://www.fakespot.com/assets/home/bestbuy-logo-a3ea8ddda222a15b6cc86d09fb4660d2798123a071f507b291c082fd60df40ef.svg'
                       alt='Bestbuy logo'/>
              </Grid.Column>
              <Grid.Column>
                <Image className='logo'
                       src='https://www.fakespot.com/assets/home/sephora-logo-790e328f3933397de27ed4aee4d0d9fd610731014a8e65192c3c8ad9d9aafeff.svg'
                       alt='Sephora logo'/>
              </Grid.Column>
              <Grid.Column>
                <Image className='logo'
                       src='https://www.fakespot.com/assets/home/walmart-logo-61bff6f98f222d9dce24a8e205cc95aa8a2f96f9ce31f06692623a5fb35dccd2.svg'
                       alt='Walmart logo'/>
              </Grid.Column>
            </Grid.Row>
          </Container>
        </Container>
    );
  }
}
