import PropTypes from 'prop-types';

import { Card } from '@components';

import styles from './ListaCards.module.css';
import { useState } from 'react';

export const ListaCards = ({ produtos }) => {
  const [ids, SetIds] = useState([])
  return(
  <ul className={styles.lista}>
    {produtos.map((produto) => (
      <li className={styles.listaItem} key={produto.id}>
        <Card produto={produto} selecionado onSelecionado={()=> console.log("Card clicado")} />
      </li>
    ))}
  </ul>
)};

ListaCards.propTypes = {
  produtos: PropTypes.array.isRequired,
};
