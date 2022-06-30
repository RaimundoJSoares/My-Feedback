import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

const Post = ({author, publishedAt, content}) => {

  const publishedDateFormatted = format( publishedAt,"dd 'de' LLLL 'às' HH:mm'h'",
  {
    locale: ptBR,
    addSufix  : true
  }
  
);

//hooks
  const [comments, setComments] = useState(['Noice Post!'])
  const [newComment, setNewComment] = useState('')

  //functions to handle comments
  function handleCreateNewComment() {
    event.preventDefault()
    
    setComments([...comments, newComment]) //adiciona um novo comentario

    setNewComment('') // após adicionar o comentario, limpa o input
    
  }
 
 function handleNewCommentText () {
  setNewComment(event.target.value)
 }

  const publishDataRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  } );

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

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} > 
        {publishDataRelativeNow}
        </time>
      </header>
      
      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return  <p key={line.content}>{line.content}</p>
             

          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>
     <form 
     onSubmit={handleCreateNewComment} 
     className={styles.commentForm}
     >
      <strong>Deixe seu feedback</strong>

      <textarea
        
        value={newComment}
        placeholder='Deixe um comentário'
        name='comment'
        onChange={handleNewCommentText}
      />
      <footer>
        <button type='submit'>Publicar</button>
        </footer>
     </form>

     <div className={styles.commentList}>
     {comments.map(comment => {
      return ( <Comment key={comment} content={comment} /> )
     })}
     </div>
    </article>
  )
}

export default Post
