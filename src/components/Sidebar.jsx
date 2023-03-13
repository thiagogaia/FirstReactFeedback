import styles from './Sidebar.module.css';
import { PencilLine} from '@phosphor-icons/react'
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="ThiGato" />
      <div className={styles.profile}>
        <img src="https://github.com/thiagogaia.png" alt="thiGato" />
        <strong>ThiGato</strong>
        <span>WEb Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  )
}