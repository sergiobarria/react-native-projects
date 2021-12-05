import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';

import {icons, COLORS, SIZES, FONTS} from '../constants';

import RenderNewPlants from './RenderNewPlants';

const NewPlants = ({newPlants}) => {
  const renderNewPlants = item => <RenderNewPlants item={item} />;

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <View style={styles.cardsRootContainer}>
          <View style={styles.cardsContainer}>
            <Text style={{color: COLORS.white, ...FONTS.h2}}>New Plants</Text>
            <TouchableOpacity onPress={() => console.log('Focus on password')}>
              <Image
                source={icons.focus}
                resizeMode="contain"
                style={styles.img}
              />
            </TouchableOpacity>
          </View>

          <View style={{marginTop: SIZES.base}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={newPlants}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => renderNewPlants(item)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default NewPlants;

const styles = StyleSheet.create({
  section: {
    height: '30%',
    backgroundColor: COLORS.white,
  },
  sectionHeader: {
    flex: 1,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: COLORS.primary,
  },
  cardsRootContainer: {
    marginTop: SIZES.padding * 2,
    marginHorizontal: SIZES.padding,
  },
  cardsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    width: 20,
    height: 20,
  },
});
