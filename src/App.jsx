import { Header } from "./components/Header";
import { Posts } from "./components/Posts";
import { SideBar } from "./components/SideBar";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Posts />
          <Posts />
          <Posts />
        </main>
      </div>
    </>
  );
}

export default App;
