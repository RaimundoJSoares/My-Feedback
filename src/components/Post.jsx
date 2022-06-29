import { Avatar } from './Avatar'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from './Comment'
import styles from './Post.module.css'

const Post = ({author, publishedAt}) => {
  const publishedDateFormatted = format(publishedAt, 
    
  {locale: ptBR})

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar}  />
          <div className={styles.authorInfo}>
            <strong>{author.name} </strong>
            <span>{author.role} </span>
          </div>
        </div>

        <time title='' dateTime='2022-06-11 09:01:00' > 
        {publishedDateFormatted}
        </time>
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
