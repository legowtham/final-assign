import _ from 'lodash';

import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image, ListView, Dimensions, TouchableOpacity, } from 'react-native';

import {
  Text,
  Card,
  Tile,
  Icon,
  ListItem,
  Avatar,
  Input,
  Button
} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import colors from './src/config/colors';


class Icons extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.headerContainer}></View>
        <View style={styles.buttonsContainer}>
        <Button
              title="Share Or Ask Or Create"
              buttonStyle={{
                backgroundColor: '#ff7170',
                borderRadius: 25,
                borderColor: '#fff',}}
              containerStyle={{ width: 150, overflow: 'hidden'}}
              titleStyle={{fontSize: 12}}
              />
              <Button
                title="P"
                buttonStyle={{ backgroundColor: '#c7c7c7',  borderRadius: 100,
                borderWidth:1, width:50, height:50,}}
                containerStyle={{ height: 40 }}
                titleStyle={{ color: 'white', }}
                />
              <Button
                title="Q"
                buttonStyle={{ backgroundColor: '#ff7170',  borderRadius: 100,
                borderWidth:1, width:50,height:50,}}
                containerStyle={{ height: 40 }}
                titleStyle={{ color: 'white', }}
                />
              <Button
                title="R"
                buttonStyle={{ backgroundColor: '#ff7170',  borderRadius: 100,
                borderWidth:1, width:50,height:50,}}
                containerStyle={{ height: 40 }}
                titleStyle={{ color: 'white', }}
                />
            </View>
            <View style={styles.list}>

            <ListItem
          leftAvatar={{ source: require('./images/avatar1.jpg') }}
          subtitle="Lubbock"
          title="Henry Fields"
          rightSubtitle="28 Sep, 2018"
          />
          
          <Text style={styles.fonts}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          <View style={[styles.row, { marginTop: 10}]}>
          <Image
        source={require('./images/arrow.png')}
        fadeDuration={0}
        style={{width: 30, height: 30}}
        tintColor='rgb(226, 226, 226)'
      />
      <Image
        source={require('./images/arrowdown.png')}
        fadeDuration={0}
        style={{width: 30, height: 30}}
        tintColor='#fe8888'
      />
      <Avatar
      large
      rounded
      source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
      />

      <Input style = {styles.input}
              inputContainerStyle={{
                backgroundColor: 'rgb(226, 226, 226)',
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'rgb(226, 226, 226)',
                height: 40,
                width: '60%',  }}
               placeholder="Comment"
              placeholderTextColor="rgb(112, 112, 112);"
              />
           
       </View>
        <ListItem
          leftAvatar={{ source: require('./images/avatar2.jpg') }}

          subtitle="Mountain House"
          title="David Wang"
          rightSubtitle="24 Sep, 2018"
          />
          <Text style={styles.fonts}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam </Text>
          
          <View style={[styles.row, { marginTop: 10}]}>
          <Image
        source={require('./images/arrow.png')}
        fadeDuration={0}
        style={{width: 30, height: 30}}
        tintColor='#fe8888'
      />
      <Image
        source={require('./images/arrowdown.png')}
        fadeDuration={0}
        style={{width: 30, height: 30}}
        tintColor='rgb(226, 226, 226)'
      />
      <Avatar
      large
      rounded
      source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
      />
      <Input style = {styles.input}
              inputContainerStyle={{
                backgroundColor: 'rgb(226, 226, 226)',
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'rgb(226, 226, 226)',
                height: 40,
                width: '60%',


              }}
               placeholder="Comment"
              placeholderTextColor="rgb(112, 112, 112);"
              />
           
          </View>
          <ListItem
          leftAvatar={{ source: require('./images/avatar3.jpg') }}

          subtitle="Newerk"
          title="John Doe"
          rightSubtitle="22 Sep, 2018"

          />
          <Text style={styles.fonts}>magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</Text>
          </View>
          <View style={[styles.row, { marginTop: 10}]}>
          <Image
        source={require('./images/arrow.png')}
        fadeDuration={0}
        style={{width: 30, height: 30}}
        tintColor='#fe8888'
      /><Image
        source={require('./images/arrowdown.png')}
        fadeDuration={0}
        style={{width: 30, height: 30}}
        tintColor='rgb(226, 226, 226)'
      />

  <Avatar
  large
  rounded
  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
/>

          <Input style = {styles.input}
              inputContainerStyle={{
                backgroundColor: 'rgb(226, 226, 226)',
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'rgb(226, 226, 226)',
                height: 40,
                width: '60%',


              }}
               placeholder="Comment"
              placeholderTextColor="rgb(112, 112, 112);"
      

            />
            <Image
        source={require('./images/arrow.png')}
        fadeDuration={0}
        style={{width: 30, height: 30}}
        tintColor='#fe8888'
      />
           
          </View>



        
        
       
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: colors.greyOutline,
    backgroundColor: '#fff',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#rgb(255, 113, 112)',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  fonts: {
    marginBottom: 8,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    width: '100%',
  },
   buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
   submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#68a0cf',
    borderRadius:25,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText:{
      color:'#fff',
      textAlign:'center',

  }
});

export default Icons;
