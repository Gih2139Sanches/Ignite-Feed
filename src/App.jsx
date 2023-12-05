import {Header} from './components/Header';
import {Post} from './components/Post';

import styles from './App.module.css';

import './global.css';
import {Sidebar} from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatar: 'https://github.com/gih2139sanches.png',
      name: 'Giovana Sanches',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉jane.design/doctorcare'},
    ],
    publishdAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatar: 'https://github.com/Dibimo.png',
      name: 'Diogo Bissoli',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉jane.design/doctorcare'},
    ],
    publishdAt: new Date('2022-05-10 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishdAt={post.publishdAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
