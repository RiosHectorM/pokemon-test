import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';

export default function Detail(props) {
  const { detailId } = useParams();
  const [poke, setPoke] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await axios(`https://pokeapi.co/api/v2/pokemon/${detailId}`);
      console.log(data.data);
      setPoke(data.data);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.containerMain}>
      <div>
        <div>Atack</div>
        <div>Stats</div>
      </div>
      <div>
        <div>Data</div>
        <div>
          {poke && (
            <img src={poke.sprites?.other.home.front_default} alt={poke.name} />
          )}
        </div>
        <div>Name Types</div>
      </div>
    </div>
  );
}
