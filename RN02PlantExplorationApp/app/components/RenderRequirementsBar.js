import React from 'react';
import {View} from 'react-native';

import {icons, SIZES} from '../constants';
import RequirementBar from './RequirementBar';

const RenderRequirementsBar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        justifyContent: 'space-between',
      }}>
      <RequirementBar icon={icons.sun} barPercentage="50%" />
      <RequirementBar icon={icons.drop} barPercentage="25%" />
      <RequirementBar icon={icons.temperature} barPercentage="80%" />
      <RequirementBar icon={icons.garden} barPercentage="30%" />
      <RequirementBar icon={icons.seed} barPercentage="50%" />
    </View>
  );
};

export default RenderRequirementsBar;
