import React from 'react';
import { useQuery } from 'react-query';

import styles from './styles.module.scss';

function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const fetchCharById = (id: number) =>
  fetch(`https://rickandmortyapi.com/api/character/${id}`).then((res) => res.json());

const id = getRandomIntInclusive(1, 100);

export default function Gallery() {
  const { data } = useQuery(['getImage', id], () => fetchCharById(id));

  return (
    <section className={styles.Gallery}>
      {data && <img width={256} src={data.image} alt={data.name} className={styles.Image} />}
    </section>
  );
}
