import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

const API_URL = 'https://skylift-db.herokuapp.com/riders'
const placeHolderImage = ''

const cards = [
  {
    text: 'Ben Sullivan',
    name: 'Ben',
    image: require('../../Assets/ListPhotos/skilyft-ben.jpg'),
    vehicle: '2011 Range Rover Sport',
    location: 'Denver, CO'
  },
  {
    text: 'Will Sheehan',
    name: 'Will',
    image: require('../../Assets/ListPhotos/will.jpg'),
    vehicle: 'Falcon Heavy Rocket',
    location: 'Denver, CO'
  },
  {
    text: 'Austen Elswick',
    name: 'Austen',
    image: require('../../Assets/ListPhotos/austen.png'),
    vehicle: 'Truck',
    location: 'Denver, CO'
  },
  {
    text: 'Adam Basila',
    name: 'Adam',
    image: require('../../Assets/ListPhotos/Adam.png'),
    vehicle: 'An Ostrich',
    location: 'Denver, CO'
  },
  {
    text: 'Jacob Crane',
    name: 'Jacob',
    image: require('../../Assets/ListPhotos/jacob.png'),
    vehicle: 'Marty McFly\'s DeLorean',
    location: 'Denver, CO'
  },
  {
    text: 'Catfish',
    name: '',
    image: require('../../Assets/ListPhotos/snowbunny.jpg'),
    vehicle: 'Want a ride? ;)'
  }
];
export default class List extends Component {
  state = {
    users: {}
  }
  componentDidMount() {
    fetch(API_URL)
      .then(response => response.json())
      .then(response => this.setState({users: response['riders']}))
  }
  render() {
    return (
      <Container>   
        <Header />
        <View>
          <DeckSwiper
            dataSource={this.state.users}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={require('../../Assets/ListPhotos/snowbunny.jpg')} />
                    <Body>
                      <Text>{item.userName}</Text>
                      <Text note>{item.userName}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={require('../../Assets/ListPhotos/snowbunny.jpg')} />
                </CardItem>
                <CardItem>
                  <Icon name="ios-car" style={{ color: '#333' }} />
                  <Text>{item.userName}  -  Vehicle: {item.userName}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}