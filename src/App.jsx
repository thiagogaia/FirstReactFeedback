import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css'
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/1234',
      name: 'John Doe',
      role: 'Developer',
    },
    content: [
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet'},
      {type: 'link', content: 'https://github.com/thiagogaia'},
    ],
    publishedAt: new Date('2023-07-22 07:22:22'),
  },
   {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/thiagogaia.png',
      name: 'John Doe',
      role: 'Developer',
    },
    content: [
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet'},
      {type: 'link', content: 'https://github.com/thiagogaia'},
    ],
    publishedAt: new Date('2023-03-13 23:50:50'),
  },
   {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/thiagogaia.png',
      name: 'ThiGato',
      role: 'Developer',
    },
    content: [
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet'},
      {type: 'link', content: 'https://github.com/thiagogaia'},
    ],
    publishedAt: new Date('2023-03-13 23:50:50'),
  }
];
function App() {


  return (
    <div className="">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post

                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
