import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

import { VictoryPie } from 'victory-native';

import { COLORS, SIZES, FONTS } from '../constants';

import { Svg } from 'react-native-svg';

import processCategoryDataToDisplay from '../helpers/processCatData';
import setSelectedCategoryByName from '../helpers/setSelectedCatByName';

export default function RenderChart({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  let chartData = processCategoryDataToDisplay(categories);
  let colorScales = chartData.map(item => item.color);
  let totalExpenseCount = chartData.reduce(
    (a, b) => a + (b.expenseCount || 0),
    0,
  );

  if (Platform.OS === 'ios') {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <VictoryPie
          data={chartData}
          colorScale={colorScales}
          labels={datum => `${datum.y}`}
          radius={({ datum }) =>
            selectedCategory && selectedCategory.name === datum.name
              ? SIZES.width * 0.4
              : SIZES.width * 0.4 - 10
          }
          innerRadius={70}
          labelRadius={({ innerRadius }) =>
            (SIZES.width * 0.4 + innerRadius) / 2.5
          }
          style={{
            labels: { fill: COLORS.white, ...FONTS.body3 },
            parent: {
              ...styles.shadow,
            },
          }}
          width={SIZES.width * 0.8}
          height={SIZES.width * 0.8}
          events={[
            {
              target: 'data',
              eventHandlers: {
                onPress: () => {
                  return [
                    {
                      target: 'labels',
                      mutation: props => {
                        let categoryName = chartData[props.index].name;
                        setSelectedCategoryByName(
                          categoryName,
                          categories,
                          setSelectedCategory,
                        );
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />

        <View style={{ position: 'absolute', top: '42%', left: '42%' }}>
          <Text style={{ ...FONTS.h1, textAlign: 'center' }}>
            {totalExpenseCount}
          </Text>
          <Text style={{ textAlign: 'center', ...FONTS.body3 }}>Expenses</Text>
        </View>
      </View>
    );
  } else {
    // Android workaround by wrapping VictoryPie with SVG
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Svg
          width={SIZES.width}
          height={SIZES.width}
          style={{ width: '100%', height: 'auto' }}>
          <VictoryPie
            data={chartData}
            colorScale={colorScales}
            labels={datum => `${datum.y}`}
            radius={({ datum }) =>
              selectedCategory && selectedCategory.name === datum.name
                ? SIZES.width * 0.4
                : SIZES.width * 0.4 - 10
            }
            innerRadius={70}
            labelRadius={({ innerRadius }) =>
              (SIZES.width * 0.4 + innerRadius) / 2.5
            }
            style={{
              labels: { fill: COLORS.white, ...FONTS.body3 },
              parent: {
                ...styles.shadow,
              },
            }}
            width={SIZES.width * 0.8}
            height={SIZES.width * 0.8}
            events={[
              {
                target: 'data',
                eventHandlers: {
                  onPress: () => {
                    return [
                      {
                        target: 'labels',
                        mutation: props => {
                          let categoryName = chartData[props.index].name;
                          setSelectedCategoryByName(
                            categoryName,
                            categories,
                            setSelectedCategory,
                          );
                        },
                      },
                    ];
                  },
                },
              },
            ]}
          />
        </Svg>

        <View style={{ position: 'absolute', top: '42%', left: '42%' }}>
          <Text style={{ ...FONTS.h1, textAlign: 'center' }}>
            {totalExpenseCount}
          </Text>
          <Text style={{ textAlign: 'center', ...FONTS.body3 }}>Expenses</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
