import styles from './Post.module.css'
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/thiagogaia.png" alt="Thiago Gaia" />
          <div className={styles.authorInfo}>
            <strong>ThiGato</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de julho às 07:22" dateTime="2022-07-22 07:22:22">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Necessitatibus voluptatum excepturi, est quisquam enim perferendis, 
          alias maxime repellat, aut tenetur magni corporis ab debitis molestias 
          magnam eligendi id. Nisi, similique?
        </p>
        <p><a href="">#pah</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
        
      </form>
    </article>
  )
}