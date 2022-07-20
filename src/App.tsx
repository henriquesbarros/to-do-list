import { useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header';
import { AddNewTaskBar } from './components/AddNewTaskBar';
import { TaskListing } from './components/TaskListing';
import './index.css';

interface Task {
  id: string;
  content: string;
  checked: boolean;
}

function App() {
  const [taskListing, setTaskListing] = useState<Task[]>([]);

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <AddNewTaskBar 
          taskListing={taskListing} 
          setTaskListing={setTaskListing} 
        />
        <TaskListing
          taskListing={taskListing}
          setTaskListing={setTaskListing}
        />
      </div>
    </>
  )
}

export default App
