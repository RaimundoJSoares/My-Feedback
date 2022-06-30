import { Header } from './components/Header'
import './globalStyles.css'
import styles from './App.module.css'
import Post from './components/Post'
import { Sidebar } from './components/Sidebar'

//author: {avatar_url: '', name:"", role:""}
//publishedat: date
//content: string

const posts = [
  {
    id: 1,
    author: {
      name: 'Raimundo',
      avatar:'https://ahoradoplay.com/wp-content/uploads/2021/03/genshin-impact-hu-tao-trailer-1280x720.jpg' ,
      role: 'Full stack Developer'
    },
    content: [
      {type: 'paragraph', content: 'Olá a todos, estou fazendo mais um projeto em React JS.'},
      {type: 'paragraph', content: 'Dessa vez estou fazendo o MyFeedback que é um sistema de feedback para o usuário.'},

      {type: 'link', content: "github.com/RaimundoJSoares"},
    ],
    publishedAt: new Date ('2020-06-11 09:01:00'),
  },
  {
    id: 2,
    author: {
      name: 'Yoimiya',
      avatar:'https://asset.vg247.com/genshin-impact-yoimiya-build.jpg/BROK/thumbnail/1200x900/quality/100/genshin-impact-yoimiya-build.jpg' ,
      role: 'Queen of the Summer Festival'
    },
    content: [
      {type: 'paragraph', content: 'Fireworks are for now, but friends are forever.'},
      {type: 'paragraph', content: "Did you know? A lot of the fireworks used during Liyue's Lantern Rite were purchased from our shop. I made them to order before asking Beidou to ship them to Liyue. Exports like these aren't allowed under the Sakoku Decree, but... How can there be festivals without fireworks"},

      {type: 'link', content: "github.com/RaimundoJSoares"},
    ],
    publishedAt: new Date ('2022-06-30 07:18:00')
  },
] 

function App() {
  return (
   <>
    < Header />

    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map(post =>{
          return(
           <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
           />
           )})}
      </main>
    </div>
    </>
  )
}

export default App
