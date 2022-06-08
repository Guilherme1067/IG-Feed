import styles from "./Post.module.css";
export const Posts = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/guilherme1067.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Guilherme Reis</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio as 09:39" dateTime="2022-06-08 09:39:00 ">
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#"> #novoprojeto</a>
          <a href="#"> #nlw</a>
          <a href="#"> #rocketseat</a>
        </p>
      </div>
    </article>
  );
};
