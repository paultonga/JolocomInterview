import { useColorScheme } from 'react-native';

export const pallette = {
  light: {
    background: '#FFFFFF',
    primaryText: '#000000',
  },
  dark: {
    background: '#3D4849',
    primaryText: '#FFFFFF',
  },
};

export const usePallette = () => {
  const theme = useColorScheme();
  const colors = theme ? pallette[theme] : pallette.light;

  return {
    colors,
    theme,
  };
};
