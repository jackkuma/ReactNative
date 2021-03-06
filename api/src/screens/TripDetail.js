import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import btnStyles from '../styles/btnStyles'
import textStyles from '../styles/textStyles'
import blockStyles from '../styles/blockStyles'

export default function TripDetailScreen(props) {
    // const [cityName, setCityName] = useState('Taipei')
    const passProps = props.route.params.passProps || 'Nothing Get!'

    return (
        <View>
          <ImageBackground style={blockStyles.sightView}
           source={{uri: passProps.Photo}}>
             <Text style={textStyles.cityName}>{passProps.City}</Text>
           </ImageBackground>
            <Text style={[textStyles.word, {textAlign: 'center'}]}>{passProps.Name}</Text>
            <ScrollView style={blockStyles.scroll} alwaysBounceVertical={true} keyboardDismissMode='on-drag'>
              <Text style={textStyles.summary}>{passProps.Introduction}</Text>
            </ScrollView>
            <Text style={textStyles.item}><FontAwesome5 name={'info-circle'} size={18} color={'#75b79e'} /> 景點資訊:</Text>
            <View style={blockStyles.info}>
              <Text style={textStyles.infoText}><FontAwesome5 name={'map-marker-alt'} size={15} /> 地址: {passProps.Address}</Text>
              <Text style={textStyles.infoText}><FontAwesome5 name={'phone'} size={15} /> 電話: {passProps.Tel}</Text>
            </View>
            <View style={styles.location}>
              <TouchableOpacity style={styles.geo}
               onPress={() => Linking.canOpenURL('https://www.google.com.tw/maps/place/' + passProps.Coordinate)
                .then(supported => {
                  if (!supported) {
                    console.log('Unsupported URL')
                  } else {
                    return Linking.openURL('https://www.google.com.tw/maps/place/' + passProps.Coordinate)
                  }
                }).catch(err => console.error('An error occurred ', err))}
              >
                <Text style={{color: '#fff'}}><FontAwesome5 name={'map-pin'} size={15} color={'#feb72b'} /> 座標：{passProps.Coordinate}</Text>
              </TouchableOpacity>
            </View>
            
            {/* <Button title='返回景點列表' onPress={() => props.navigation.pop()} />
             <Button
              title='change My Live City'
              onPress={() => props.route.params.liveCity('Tainan')}
              /> */}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  geo: {
    backgroundColor: '#fd5e53',
    borderRadius: 16,
    padding: 5,
    paddingLeft: 16,
    paddingRight: 16,
    margin: 10,
  },
});