import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css'
import styles from './App.module.css';

function App() {


  return (
    <div className="">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
        author="ThiGato"
        content="This is the content of the post"
      />
        </main>
      </div>
    </div>
  )
}

export default App
