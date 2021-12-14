import icons from './icons';

const screens = {
  mainLayout: 'MainLayout',
  home: 'Home',
  search: 'Search',
  cart: 'Cart',
  favourite: 'Favourite',
  notification: 'Notification',
  my_wallet: 'My Wallet',
};

const drawerTabsTop = [
  {
    id: 0,
    label: 'Home',
    icon: icons.home,
  },
  {
    id: 1,
    label: 'My Wallet',
    icon: icons.wallet,
  },
  {
    id: 2,
    label: 'Notification',
    icon: icons.notification,
  },
  {
    id: 3,
    label: 'Favourite',
    icon: icons.favourite,
  },
];

const drawerTabsBottom = [
  {
    id: 0,
    label: 'Track Your Order',
    icon: icons.location,
  },
  {
    id: 1,
    label: 'Coupons',
    icon: icons.coupon,
  },
  {
    id: 2,
    label: 'Settings',
    icon: icons.setting,
  },
  {
    id: 3,
    label: 'Invite a Friend',
    icon: icons.profile,
  },
  {
    id: 4,
    label: 'Help Center',
    icon: icons.help,
  },
];

const bottomTabs = [
  {
    id: 0,
    label: screens.home,
  },
  {
    id: 1,
    label: screens.search,
  },
  {
    id: 2,
    label: screens.cart,
  },
  {
    id: 3,
    label: screens.favourite,
  },
  {
    id: 4,
    label: screens.notification,
  },
];

const deliveryTime = [
  {
    id: 1,
    label: '10 Mins',
  },
  {
    id: 2,
    label: '20 Mins',
  },
  {
    id: 3,
    label: '30 Mins',
  },
];

const ratings = [
  {
    id: 1,
    label: 1,
  },
  {
    id: 2,
    label: 2,
  },
  {
    id: 3,
    label: 3,
  },
  {
    id: 4,
    label: 4,
  },
  {
    id: 5,
    label: 5,
  },
];

const tags = [
  {
    id: 1,
    label: 'Burger',
  },
  {
    id: 2,
    label: 'Fast Food',
  },
  {
    id: 3,
    label: 'Pizza',
  },
  {
    id: 4,
    label: 'Asian',
  },
  {
    id: 5,
    label: 'Dessert',
  },
  {
    id: 6,
    label: 'Breakfast',
  },
  {
    id: 7,
    label: 'Vegetable',
  },
  {
    id: 8,
    label: 'Taccos',
  },
];

export default {
  screens,
  bottomTabs,
  deliveryTime,
  ratings,
  tags,
  drawerTabsTop,
  drawerTabsBottom,
};
