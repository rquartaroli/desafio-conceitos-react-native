import React, { useContext } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AppTheme from '../../styles/AppTheme';
import { ThemeContext } from '../../ThemeContext';

export function Header() {
  const { theme, changeTheme } = useContext(ThemeContext);
  function handleChangeMode() {
    if (theme.mode === 'light') {
      changeTheme({mode: 'dark'});
    } else {
      changeTheme({mode: 'light'});
    }
  }

  return (
    <View 
     style={[styles.header, theme.mode === 'light' 
      ? { backgroundColor: AppTheme.light.headerBackground } 
      : { backgroundColor: AppTheme.dark.headerBackground } 
          ]}
    >
      <Text></Text>
      <View style={{flexDirection: 'row'}}>
        <Text 
          style={[styles.headerText, theme.mode === 'light'
            ? { color: AppTheme.light.headerTextColor }
            : { color: AppTheme.dark.headerTextColor }
          ]}>
          to.
        </Text>
        <Text 
          style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' },
            theme.mode === 'light'
            ? { color: AppTheme.light.headerTextColor }
            : { color: AppTheme.dark.headerTextColor }
          ]}>
          do
        </Text>
      </View>
      <Icon 
        name={theme.mode === 'light' ? 'sun' : 'moon'} 
        style={[styles.headerText, { marginLeft: 8, marginBottom: 4 },
          theme.mode === 'light'
          ? { color: AppTheme.light.colorIcon }
          : { color: AppTheme.dark.colorIcon }
        ]} 
        onPress={handleChangeMode} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  }
});
