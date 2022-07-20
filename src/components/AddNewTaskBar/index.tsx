import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react';
import styles from './AddNewTaskBar.module.css';

interface Task {
  id: string;
  content: string;
  checked: boolean;
}

interface AddNewTaskBarProps {
  setTaskListing: (Dispatch<SetStateAction<Task[]>>);
  taskListing: Task[];
}

export function AddNewTaskBar({taskListing, setTaskListing}: AddNewTaskBarProps) {
  const [newTask, setNewTask] = useState<string>('');

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTaskListing([...taskListing, {
      id: uuidv4(),
      content: newTask,
      checked: false
    }]);
    setNewTask('');
  };

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  };

  return (
    <form onSubmit={handleCreateNewTask} className={styles.AddNewTaskBarWrapper}>
      <input
        type="text" 
        placeholder='Adicionar nova tarefa' 
        onChange={handleNewTaskChange}
        value={newTask}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <button>
        Criar
        <PlusCircle size={16} weight="bold"/>
      </button>
    </form>
  );
}