import PropTypes from 'prop-types';

import { Card } from '@components';

import styles from './ListaCards.module.css';
import { useState } from 'react';

export const ListaCards = ({ produtos }) => {
const [ids, setIds] = useState([]);

const handleSelecionar = (recebido)=>{
  const verifica = ids.includes(recebido)
  const filtro = ids.filter(element=> element !== recebido);  
    if(verifica){
    }else{
      setIds((e)=>  [...e, recebido])

    }
    console.log(ids)
     
}

  return(
  <ul className={styles.lista}>
    {produtos.map((produto) => (
      <li className={styles.listaItem} key={produto.id}>
        <Card produto={produto} selecionado={ids.some(produto=> produto.id)}  onSelecionado={()=> (handleSelecionar(produto.id))} />
      </li>
    ))}
  </ul>
)};

ListaCards.propTypes = {
  produtos: PropTypes.array.isRequired,
};
