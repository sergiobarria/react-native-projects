import React from 'react';
import {View} from 'react-native';

import {icons, SIZES} from '../constants';

import RequirementDetail from './RequirementDetail';

const RenderRequirements = () => {
  return (
    <View
      style={{
        flex: 2.5,
        marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        justifyContent: 'space-around',
      }}>
      <RequirementDetail icon={icons.sun} label="Sunlight" detail="15°C" />
      <RequirementDetail
        icon={icons.drop}
        label="Water"
        detail="250 ML Daily"
      />
      <RequirementDetail
        icon={icons.temperature}
        label="Room Temp"
        detail="25°C"
      />
      <RequirementDetail icon={icons.garden} label="Soil" detail="3 Kg" />
      <RequirementDetail icon={icons.seed} label="Fertilizer" detail="150 mg" />
    </View>
  );
};

export default RenderRequirements;
