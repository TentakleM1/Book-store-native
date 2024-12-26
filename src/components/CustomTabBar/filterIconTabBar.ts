import images from 'src/assets/imgs/images';

export const filterIconTabBar = (icon: string) => {
  let result: number;
  switch (icon) {
    case 'Books':
      result = images.homeTab;
      break;
    case 'Profile':
      result = images.profileTab;
      break;
    case 'Favorite':
      result = images.unionTab;
      break;
    default:
      result = images.cartTab;
      break;
  }
  return result;
};
