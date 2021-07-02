import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
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
    <SafeAreaView 
      style={theme.mode === 'light' 
        ? { backgroundColor: AppTheme.light.headerBackground } 
        : { backgroundColor: AppTheme.dark.headerBackground }
      }
    >
      <View 
        style={[styles.header, theme.mode === 'light' 
        ? { backgroundColor: AppTheme.light.headerBackground } 
        : { backgroundColor: AppTheme.dark.headerBackground } 
            ]}
      >
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
        <Icon 
        name={theme.mode === 'light' ? 'sun' : 'moon'} 
        style={[styles.headerText, { marginLeft: 8, marginBottom: 4 },
          theme.mode === 'light'
          ? { color: AppTheme.light.headerTextColor }
          : { color: AppTheme.dark.headerTextColor }
        ]} 
        onPress={handleChangeMode} 
      />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: '#273FAD',
  // },
  header: {
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  }
});
