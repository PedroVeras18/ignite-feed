import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Post from './components/Post/Post';

interface Posts {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  },
  content: {
    type: 'paragraph' | 'link';
    content: string;
  }[],
  publishedAt: Date
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/PedroVeras18.png',
      name: 'Pedro Veras',
      role: 'Desenvolvedor Front-end'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: '👉 pedroveras/doctorcare'},
    ],
    publishedAt: new Date('2022-12-20 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',   
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite Lab evento da Rocketseat.🚀',},
      {type: 'link', content: '👉 diegofernandes/igniteLab'},
    ],
    publishedAt: new Date('2022-12-23 20:00:00'),
  },
];

function App() {
  return (
    <div className="App">
      <Header />

      <div className="Wrapper">
        <Sidebar />
        <main>
          {posts.map(post => {
            return(
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>  
    </div>
  );
}

export default App;
