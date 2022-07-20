import { Trash } from 'phosphor-react';
import { FormEvent } from 'react';
import styles from './Task.module.css';

interface Task {
  id: string;
  content: string;
  checked: boolean;
}

interface TaskProps {
  task: Task;
  onDeleteTask: (taskToDelete: Task) => void;
  onCompleteTask: (taskToDelete: Task) => void;
}

export function Task({task, onDeleteTask, onCompleteTask}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task);
  }

  function handleCompleteTask() {
    onCompleteTask(task)
  }

  return (
    <div className={styles.taskWrapper}>
      <div className={styles.taskContent}>
        <input
          className="w-5 h-5"
          type="checkbox"
          checked={task.checked}
          onChange={handleCompleteTask}
        />
        <p className={task.checked ? styles.checked : ''}>{task.content}</p>
        <button onClick={handleDeleteTask}>
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}