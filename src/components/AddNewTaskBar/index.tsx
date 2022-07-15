import { PlusCircle } from 'phosphor-react';
import styles from './AddNewTaskBar.module.css'

export function AddNewTaskBar() {
  return (
    <div className={styles.AddNewTaskBarWrapper}>
      <input type="text" placeholder='Adicionar nova tarefa' />
      <button>
        Criar
        <PlusCircle size={16} weight="bold"/>
      </button>
    </div>
  );
}