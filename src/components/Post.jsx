import styles from './Post.module.css'
import {Comment} from './Comment'
import { Avatar } from './Avatar'

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
export function Post(props) {
  const publishedFormat = format(props.publishedAt, "d 'de' LLLL '`as' HH:mm'h'", {
    locale: ptBR
  })

  const publishedRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} alt={props.author.name} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time title={publishedFormat} dateTime={props.publishedAt.toISOString()}>
          {publishedRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {props.content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
        
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}