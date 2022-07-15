import styles from './App.module.css';
import { Header } from './components/Header';
import { AddNewTaskBar } from './components/AddNewTaskBar';

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <AddNewTaskBar />
      </div>
    </>
  )
}

export default App
