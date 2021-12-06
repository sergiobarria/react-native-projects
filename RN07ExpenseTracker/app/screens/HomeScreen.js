import React, { useRef } from 'react';
import { View, ScrollView, Animated } from 'react-native';

import { COLORS } from '../constants';

import categoriesData from '../assets/data/dummyData';

import RenderNavbar from '../components/RenderNavbar';
import RenderHeader from '../components/RenderHeader';
import RenderCategoryHeaderSection from '../components/RenderCategoryHeaderSection';
import RenderCategoryList from '../components/RenderCategoryList';
import RenderIncomingExpenses from '../components/RenderIncomingExpenses';
import RenderChart from '../components/RenderChart';
import RenderExpenseSummary from '../components/RenderExpenseSummary';

export default function HomeScreen() {
  const categoryListHeightAnimationValue = useRef(
    new Animated.Value(115),
  ).current;

  const [categories, setCategories] = React.useState(categoriesData);
  const [viewMode, setViewMode] = React.useState('chart');
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [showMoreToggle, setShowMoreToggle] = React.useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
      {/* Navbar Section */}
      <RenderNavbar />

      {/* Header Section */}
      <RenderHeader />

      {/* Category Header Section */}
      <RenderCategoryHeaderSection
        categories={categories}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {viewMode === 'list' && (
          <View>
            <RenderCategoryList
              categories={categories}
              setSelectedCategory={setSelectedCategory}
              showMoreToggle={showMoreToggle}
              setShowMoreToggle={setShowMoreToggle}
              categoryListHeightAnimationValue={
                categoryListHeightAnimationValue
              }
            />
            <RenderIncomingExpenses selectedCategory={selectedCategory} />
          </View>
        )}

        {viewMode === 'chart' && (
          <View>
            <RenderChart
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <RenderExpenseSummary
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
