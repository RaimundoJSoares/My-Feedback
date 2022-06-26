import { Comment } from './Comment'
import styles from './Post.module.css'

const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img  className={styles.avatar} src="https://ahoradoplay.com/wp-content/uploads/2021/03/genshin-impact-hu-tao-trailer-1280x720.jpg"  />
          <div className={styles.authorInfo}>
            <strong>Raimundo</strong>
            <span>Full stack Developer </span>
          </div>
        </div>

        <time title='26 de junho as 09:01' dateTime='2022-06-11 09:01:00' >publicado a 1h</time>
      </header>
      
      <div className={styles.content}>
        <p> Olá a todos, estou fazendo mais um projeto em React JS.</p>
        <p> Dessa vez estou fazendo o MyFeedback que é um sistema de feedback para o usuário.</p>

        <p><a href='https://github.com/RaimundoJSoares'> github.com/RaimundoJSoares</a></p>
        <p><a href='https://www.linkedin.com/in/raimundo-junior-da-silva-soares-2852991b3/'> #novoprojeto</a> {''}
        <a href=''>#rocketseat</a> {''}
         <a href=''>#inLoveForReact</a> {''}
         </p>
      </div>
     <form className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>

      <textarea
        placeholder='Deixe um comentário'
      />
      <footer>
        <button type='submit'>Publicar</button>
        </footer>
     </form>

     <div className={styles.commentList}>
      <Comment/>
      <Comment/>
      <Comment/>
     </div>
    </article>
  )
}

export default Post
