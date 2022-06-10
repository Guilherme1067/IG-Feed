import { Header } from "./components/Header";
import { Posts } from "./components/Posts";
import { SideBar } from "./components/SideBar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/guilherme1067.png",
      name: "Guilherme Reis",
      role: "Front-End Engineer",
    },
    content: [
      { type: "paragraph", content: " Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-09 19:54:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Rocket",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: " Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-08-06 20:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => (
            <Posts
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
