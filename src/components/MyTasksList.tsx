import React, { useContext } from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';
import AppTheme from '../../styles/AppTheme';
import { ThemeContext } from '../../ThemeContext';

function FlatListHeaderComponent() {
  const { theme } = useContext(ThemeContext);
  return (
    <View>
      <Text 
        style={[styles.header, theme.mode === 'light'
        ? { color: AppTheme.light.headerColorTask }
        : { color: AppTheme.dark.headerColorTask }]}
      >
      Minhas tasks
      </Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={item.done 
              ? [styles.taskButtonDone, theme.mode === 'light' 
                  ? { backgroundColor: AppTheme.light.buttonDoneBackground } 
                  : { backgroundColor: AppTheme.dark.buttonDoneBackground }
                ] 
              : styles.taskButton
            }
          >
            <View 
              testID={`marker-${index}`}
              style={item.done 
                ? [styles.taskMarkerDone, theme.mode === 'light' 
                    ? { backgroundColor: AppTheme.light.taskDone } 
                    : { backgroundColor: AppTheme.dark.taskDone }
                  ] 
                : [styles.taskMarker, theme.mode === 'light' 
                    ? { borderColor: AppTheme.light.borderTask } 
                    : { borderColor: AppTheme.dark.borderTask }
                  ]
              }
            />
            <Text 
            style={item.done 
              ? [styles.taskTextDone, theme.mode === 'light' 
                  ? { color: AppTheme.light.textTaskDone } 
                  : { color: AppTheme.dark.textTaskDone }
                ] 
              : [styles.taskText, theme.mode === 'light' 
                  ? { color: AppTheme.light.colorTask } 
                  : { color: AppTheme.dark.colorTask }
                ]
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10
  },
  taskTextDone: {
    textDecorationLine: 'line-through'
  }
})