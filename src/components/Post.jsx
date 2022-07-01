import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from "react";

const Post = ({ author, publishedAt, content }) => {
  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
      addSufix: true,
    }
  );

  //HOOKS
  const [comments, setComments] = useState(["Noice Post!"]);
  const [newComment, setNewComment] = useState("");


  //FUNCTION to handle comments
  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newComment]); //adiciona um novo comentario

    setNewComment(""); // após adicionar o comentario, limpa o input
  }

  function handleNewCommentText() {
    event.target.setCustomValidity('')
    setNewComment(event.target.value);
  }

  function handleInvalidComment() {
   event.target.setCustomValidity('Campo inválido, não pode ser vazio')
  }

  const publishDataRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function deleteComment(commentToDelete) { 
    //remove um comentario da lista de comentarios
    const CommentListWithoutDeletedOne = comments.filter(comment => { //retorna um novo array(lista) sem o comentario que foi deletado
      return ( 
        comment !== commentToDelete  //retorna true se o comentario for diferente do comentario que foi deletado
      )
    }) 
    setComments(CommentListWithoutDeletedOne); //atualiza a lista de comentarios
  }


  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar} />
          <div className={styles.authorInfo}>
            <strong>{author.name} </strong>
            <span>{author.role} </span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishDataRelativeNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={newComment}
          placeholder="Deixe um comentário"
          name="comment"
          onChange={handleNewCommentText}
          onInvalid={handleInvalidComment}
          required
        />
        <footer>
          <button type="submit" > Publicar </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment} //passa a função para o componente Comment
            />
          );
        })}
      </div>
    </article>
  );
};

export default Post;
