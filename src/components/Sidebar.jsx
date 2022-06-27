import styles from './Sidebar.module.css'
import { PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'


export function Sidebar() {
    return(
       <aside className={styles.sidebar}>
            <img className={styles.cover} src='https://1.bp.blogspot.com/-q9iLej6jCdg/YNaNBwf6b8I/AAAAAAAAaQc/OuN3nZisypQ6b9ikF1pMv8PamAT-kLs9ACLcBGAsYHQ/s450/imagem_2021-06-25_231210.png'/>

            <div className={styles.profile}>
                <Avatar src="https://ahoradoplay.com/wp-content/uploads/2021/03/genshin-impact-hu-tao-trailer-1280x720.jpg"/>
                <strong>Raimundo</strong>
                <span>Full stack Developer </span>
            </div>
            <footer>
                <a href="https://www.youtube.com/watch?v=YfuYocExB6U&list=RDYfuYocExB6U&start_radio=1">
                    <PencilLine size={20} />
                Edit profile
                </a>
            </footer>
       </aside>
    )
}