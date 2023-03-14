import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/thiagogaia.png" alt="thiGato" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thiago Gaia</strong>
              <time title="11 de julho às 07:22" dateTime="2022-07-22 07:22:22">Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom, parabéns!!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}