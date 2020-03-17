import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  PixelRatio,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import api, {key} from '~/services/api';
import YouTube from 'react-native-youtube';

export default function ReactNativeYouTubeExample({ route }) {
  const { id } = route.params;
  const [isReady, setisReady] = useState(false);
  const [status, setstatus] = useState(null);
  const [quality, setquality] = useState(null);
  const [error, seterror] = useState(null);
  const [isPlaying, setisPlaying] = useState(true);
  const [duration, setduration] = useState(0);
  const [currentTime, setcurrentTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [keyMovie, setKeyMovie] = useState('');
  const [playerWidth] = useState(Dimensions.get('window').width);

   useEffect(() => {
     this.findTrailer();
   },[]);

  findTrailer = async () => {
    setIsLoading(true);
    const response = await api.get(`movie/${id}/videos?api_key=${key}`);
    const result = await response.data;
    const first = result.results[0].key;
    setKeyMovie(first);
    setIsLoading(false);
  }
  _youTubeRef = React.createRef();

  return (
    <ScrollView style={styles.container}>
      {isLoading ?
        <ActivityIndicator style={{ flex: 1 }} size="large" color="#e50914" animating={isLoading} />
        :
        <YouTube
          ref={this._youTubeRef}
          apiKey="AIzaSyA8a-OZomUGRXLCQJbIgnPKiMo_GVsv_Eg"
          videoId={keyMovie}
          play={true}
          loop={false}
          fullscreen={true}
          controls={1}
          style={[
            { height: PixelRatio.roundToNearestPixel(playerWidth / (16 / 9)) },
            styles.player,
          ]}
          onError={e => {
            seterror(e.error);
          }}
          onReady={e => {
            setisReady(true);
          }}
          onChangeState={e => {
            setstatus(e.state);
          }}
          onChangeQuality={e => {
            setquality(e.quality);
          }}
          onProgress={e => {
            setcurrentTime(e.currentTime);
          }}
        />
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex:1
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
});
