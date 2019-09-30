import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import PropTypes from 'prop-types';
import {Audio, } from 'expo-av';
import {MaterialCommunityIcons} from '@expo/vector-icons';


export default function SoundButton({color = '#999', sound, icon, handleSoundPlay}) {

  async function onPress() {
    if (sound) {
      try {
        const soundObject = new Audio.Sound();
        await soundObject.loadAsync(sound);
        await soundObject.playAsync();
        handleSoundPlay && handleSoundPlay(soundObject);
      } catch (error) {
        console.log('ERROR OCCURRED', error);
      }
    }
  }

  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: color}]} onPress={onPress} activeOpacity={.75}>
      {icon && <MaterialCommunityIcons name={icon} size={32} color="white" />}
    </TouchableOpacity>
  )
}

SoundButton.propTypes = {
  color: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAA',
    flexGrow: 1,
    borderWidth: .5,
    borderColor: '#eee',
    height: '25%',
    flexBasis: '33.3%',
    justifyContent: 'center',
    alignItems: 'center',
  },

});
