import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(markTaskTitle: string) {
    if (markTaskTitle != '') {
      const newTask = {
        id: new Date().getTime(),
        title: markTaskTitle,
        done: false,
      }

      setTasks([...tasks, newTask]);
    } else {
      Alert.alert('Insira um nome para sua tarefa');
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const indexTask = tasks.findIndex(task => task.id === id);

    let markTask : Task[];

    markTask = [...tasks];

    if (markTask[indexTask].done) {
      markTask[indexTask].done = false;
    } else {
      markTask[indexTask].done = true;
    }
    setTasks(markTask);
  }

  function handleRemoveTask(id: number) {
    setTasks(tasks.filter(task => task.id != id))
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}