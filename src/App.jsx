import { Header } from './components/Header'
import './globalStyles.css'
import styles from './App.module.css'
import Post from './components/Post'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
   <>
    < Header />

    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post author='Raimundo' text='Eu amo React'/>
      </main>
    </div>
    </>
  )
}

export default App
