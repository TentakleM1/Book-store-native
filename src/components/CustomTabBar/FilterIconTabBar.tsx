import Profile from 'src/assets/svg/profile.svg';
import Cart from 'src/assets/svg/cart.svg';
import Heart from 'src/assets/svg/heart.svg';
import Home from 'src/assets/svg/home.svg';

export const FilterIconTabBar = (icon: string) => {
  let result;
  switch (icon) {
    case 'Books':
      result = Home;
      break;
    case 'Profile':
      result = Profile;
      break;
    case 'Favorite':
      result = Heart;
      break;
    default:
      result = Cart;
      break;
  }
  return result;
};
