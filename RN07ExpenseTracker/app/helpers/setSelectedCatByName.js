export default function setSelectedCategoryByName(
  name,
  categories,
  setSelectedCategory,
) {
  let category = categories.filter(a => a.name === name);
  setSelectedCategory(category[0]);
}
