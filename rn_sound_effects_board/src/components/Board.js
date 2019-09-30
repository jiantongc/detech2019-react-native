import React from "react";
import {StyleSheet, View, Button} from "react-native";

import SoundButton from './SoundButton';

import sound_air_horn from '../../assets/sound_effects/air_horn.mp3';
import sound_barney_legendary from '../../assets/sound_effects/barney_legendary.mp3';
import sound_buzzer_wrong from '../../assets/sound_effects/buzzer_wrong.mp3';
import sound_combo_breaker from '../../assets/sound_effects/combo_breaker.mp3';
import sound_crowd_laughter from '../../assets/sound_effects/crowd_laughter.mp3';
import sound_drumroll_snare from '../../assets/sound_effects/drumroll_snare.mp3';
import sound_joke_drum from '../../assets/sound_effects/joke_drum.mp3';
import sound_kawhi_laugh from '../../assets/sound_effects/kawhi_laugh.mp3';
import sound_kids_cheering from '../../assets/sound_effects/kids_cheering.mp3';
import sound_pentakill_lol from '../../assets/sound_effects/pentakill_lol.mp3';
import sound_tokyo_drift from '../../assets/sound_effects/tokyo_drift.mp3';
import sound_iphone_ding from '../../assets/sound_effects/iphone_ding.mp3';

const effects = [
  {color: "#ec407a", sound: sound_air_horn, icon: 'bullhorn'},
  {color: "#f06292", sound: sound_buzzer_wrong, icon: 'cancel'},
  {color: "#f8bbd0", sound: sound_iphone_ding, icon: 'bell-outline'},

  {color: "#ba68c8", sound: sound_crowd_laughter, icon: 'hand'},
  {color: "#ce93d8", sound: sound_kids_cheering, icon: 'face'},
  {color: "#e1bee7", sound: sound_barney_legendary, icon: 'crown'},

  {color: "#1e88e5", sound: sound_joke_drum, icon: 'thumb-up-outline'},
  {color: "#42a5f5", sound: sound_drumroll_snare, icon: 'hockey-sticks'},
  {color: "#90caf9", sound: sound_kawhi_laugh, icon: 'robot'},

  {color: "#26a69a", sound: sound_combo_breaker, icon: 'gamepad-variant', },
  {color: "#4db6ac", sound: sound_pentakill_lol, icon: 'sword'},
  {color: "#b2dfdb", sound: sound_tokyo_drift, icon: 'car-side'},
];

export default function Board() {
  const sounds = [];

  function stopAll() {
    sounds.forEach(s => s.stopAsync());
  }

  function handleSoundPlay(so) {
    sounds.push(so);
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {
          effects.map((props, index) => {
            return (<SoundButton key={`${index}`} handleSoundPlay={handleSoundPlay} {...props} />)
          })
        }
      </View>
      <View style={styles.bottomBar}>
        <Button title='Stop All' onPress={stopAll} />
      </View>
    </View >
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: 'white'
  },
  bottomBar: {
    height: 80,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  }
});
