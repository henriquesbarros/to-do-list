import { Dispatch, SetStateAction } from 'react';
import { ClipboardText } from 'phosphor-react';
import { Task } from '../Task';
import styles from './TaskListing.module.css';

interface Task {
  id: string;
  content: string;
  checked: boolean;
}

interface TaskListingProps {
  taskListing: Task[],
  setTaskListing: (Dispatch<SetStateAction<Task[]>>);
}

export function TaskListing({taskListing, setTaskListing}: TaskListingProps) {
  function deleteTask(taskToDelete: Task) {
    const tasksWithoutDeletedOne = taskListing.filter(task => {
      return task !== taskToDelete
    }); 

    setTaskListing(tasksWithoutDeletedOne);
  }

  function completeTask(taskToChecked: Task) {
    const tasks = taskListing.map((task, index) => {
      if (task.id === taskToChecked.id) {
        return {
          ...task,
          checked: !task.checked,
        }
      }
      return task
    }); 

    setTaskListing(tasks);
  }

  function countTasksChecked() {
    let count = 0;
    taskListing.forEach(({checked}) => checked && count++);

    return count;
  }

  return (
    <div className={styles.taskListing}>
      <div className={styles.listingHeader}>
        <div className={styles.listingHeaderOption}>
          <p>Tarefas criadas</p>
          <span>{taskListing.length}</span>
        </div>
        <div className={styles.listingHeaderOption}>
          <p>Concluídas</p>
          <span>{taskListing.length > 0 ? `${countTasksChecked()} de ${taskListing.length}` : 0}</span>
        </div>             
      </div>

      {
        !taskListing.length ? (
          <>
            <hr />

            <div className={styles.emptyTaskListing}>
              <ClipboardText size={56} />
              <div className={styles.emptyTaskListingTexts}>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p> 
              </div>
            </div>
          </>
        ) : (
        <div>
          {
            taskListing.map(task => {
              return (
                <Task 
                  key={task.id} 
                  task={task}
                  onDeleteTask={deleteTask}
                  onCompleteTask={completeTask}
                />
              )
            })
          }
        </div>)
      }
    </div>
  );
}
