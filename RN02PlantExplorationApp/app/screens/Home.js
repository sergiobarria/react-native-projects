import React from 'react';
import {StyleSheet, View} from 'react-native';

import {images} from '../constants';

import NewPlants from '../components/NewPlants';
import TodaysShares from '../components/TodayShares';
import AddedFriends from '../components/AddedFriends';

export default function Home({navigation}) {
  // Dummy data
  const [newPlants, setNewPlants] = React.useState([
    {
      id: 0,
      name: 'Plant 1',
      img: images.plant1,
      favourite: false,
    },
    {
      id: 1,
      name: 'Plant 2',
      img: images.plant2,
      favourite: true,
    },
    {
      id: 2,
      name: 'Plant 3',
      img: images.plant3,
      favourite: false,
    },
    {
      id: 3,
      name: 'Plant 4',
      img: images.plant4,
      favourite: false,
    },
  ]);

  const [friendList, setFriendList] = React.useState([
    {
      id: 0,
      img: images.profile1,
    },
    {
      id: 1,
      img: images.profile2,
    },
    {
      id: 2,
      img: images.profile3,
    },
    {
      id: 3,
      img: images.profile4,
    },
    {
      id: 4,
      img: images.profile5,
    },
  ]);

  return (
    <View style={styles.container}>
      {/* New Plants */}
      <NewPlants newPlants={newPlants} />

      {/* Today's Share */}
      <TodaysShares navigation={navigation} />

      {/* Added Friend */}
      <AddedFriends friendList={friendList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
