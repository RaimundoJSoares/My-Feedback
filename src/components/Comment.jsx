import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { useState } from 'react';

export function Comment( { content, onDeleteComment } ) {
    const [likeCount, setLikeCount] = useState(0);

    function handleNewLike() {  //clousure to keep the likeCount state
        setLikeCount((state) => {
            return ( state + 1 );
        }) 
    }

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return(
        <div className={styles.comment}>
            <Avatar src="https://ahoradoplay.com/wp-content/uploads/2021/03/genshin-impact-hu-tao-trailer-1280x720.jpg" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Raimundo</strong>
                            <time title='26 de junho as 09:01' dateTime='2022-06-11 09:01:00' >Cerca de 1h atrás</time>
                        </div>

                        <button onClick={ handleDeleteComment } title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer className={styles.footer}> 
                <button onClick={handleNewLike}>
                    <ThumbsUp size={20}/>
                    Aplaudir <span>{likeCount} </span>
                </button>
                </footer>
            </div>
         </div>
    )
}