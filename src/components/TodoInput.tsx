import React, { useContext, useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import AppTheme from '../../styles/AppTheme';
import { ThemeContext } from '../../ThemeContext';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');
  const { theme } = useContext(ThemeContext);

  function handleAddNewTask() {
    addTask(task);
    setTask('');
  }

  return (
    <View style={[styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput 
        style={[styles.input, theme.mode === 'light' 
          ? { backgroundColor: AppTheme.light.inputBackground, color: AppTheme.light.inputTextColor } 
          : { backgroundColor: AppTheme.dark.inputBackground, color: AppTheme.dark.inputTextColor } 
        ]} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor={theme.mode === 'light' ? AppTheme.light.inputTextColor : AppTheme.dark.inputTextColor}
        returnKeyType="send"
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
        value={task}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton, , theme.mode === 'light' 
          ? { backgroundColor: AppTheme.light.buttonAddBackground } 
          : { backgroundColor: AppTheme.dark.buttonAddBackground }
        ]}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    // backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});