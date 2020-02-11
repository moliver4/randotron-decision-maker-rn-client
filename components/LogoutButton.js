import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const LogoutButton= props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={AntDesign}
      iconSize={20}
      color={Platform.OS === 'android' ? 'white' : Colors.extra}
    />
  );
};

export default LogoutButton;
