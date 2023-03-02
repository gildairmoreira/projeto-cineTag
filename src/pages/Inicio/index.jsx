import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import React, { useEffect, useState } from "react";
import styles from "./Inicio.module.scss";

export default function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/gildairmoreira/cinetag-api/videos"
    )
    .then(resposta => resposta.json())
    .then(dado => {
      setVideos(dado)
    })
  }, []);
  
  return (
    <>
      <Banner imagem="home" />

      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>

      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}
