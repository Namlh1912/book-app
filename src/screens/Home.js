/**
 * This is the Main file
 **/

// React native and others libraries imports
import React, {Component} from 'react';
import {Container, Content, View, Left, Right, Button, Icon, Grid, Col} from 'native-base';
import {withNavigation} from 'react-navigation';

// Our custom files and classes import
import Navbar from '../components/Navbar';
import Book from '../components/Book';
import books from './mock-data';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    this.setState({items: books});
  }

  render() {

    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this.props.navigation.openDrawer()} transparent>
          <Icon name='ios-menu-outline' />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button  transparent>
          <Icon name='ios-search-outline' />
        </Button>
        <Button  transparent>
          <Icon name='ios-cart' />
        </Button>
      </Right>
    );
    return (
      <Container style={{backgroundColor: '#fdfdfd'}}>
        <Navbar left={left} right={right} title="Book Store" />
        <Content padder>
          {this.renderProducts()}
        </Content>
      </Container>
    );
  }

  renderProducts = () => {
    let items = [];
    let stateItems = this.state.items;
    for (var i = 0; i < stateItems.length; i += 2) {
      if (stateItems[i + 1]) {
        items.push(
          <Grid key={i}>
            <Book key={stateItems[i].id} book={stateItems[i]}/>
            <Book key={stateItems[i + 1].id} book={stateItems[i + 1]} isRight/>
          </Grid>
        );
      }
      else {
        items.push(
          <Grid key={i}>
            <Book key={stateItems[i].id} book={stateItems[i]}/>
            <Col key={i + 1}/>
          </Grid>
        );
      }
    }
    return items;
  }
}

export default Home;