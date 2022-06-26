import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://ahoradoplay.com/wp-content/uploads/2021/03/genshin-impact-hu-tao-trailer-1280x720.jpg" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Raimundo</strong>
                            <time title='26 de junho as 09:01' dateTime='2022-06-11 09:01:00' >Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom parabéns!</p>
                </div>

                <footer className={styles.footer}> 
                <button>
                    <ThumbsUp size={20}/>
                    Aplaudir <span>20</span>
                </button>
                </footer>
            </div>
         </div>
    )
}