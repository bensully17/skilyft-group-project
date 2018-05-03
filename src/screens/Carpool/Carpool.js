import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

const API_URL = 'https://skylift-db.herokuapp.com/riders'

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
                    <Thumbnail source={{uri: item.imageUrl}} />
                    <Body>
                      <Text>{item.userName}</Text>
                      <Text note>{item.userName}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={{uri: item.imageUrl}} />
                </CardItem>
                <CardItem>
                  <Icon name="ios-car" style={{ color: '#333' }} />
                  <Text>{item.userName}  -  Vehicle: {item.vehicle}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}