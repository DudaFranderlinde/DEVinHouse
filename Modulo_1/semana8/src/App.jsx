import { Footer, Header, Secao } from '@components';
import produtos from '@services/produtos.json';
import { FiltroSecao } from './components/FiltroSecao/FiltroSecao';
import styles from './App.module.css';
import { useState } from 'react';

function App() {
  function handleSelecionarSecao(titulo) {
    secaoSelecionada == titulo ? (secaoSelecionada == []) : (setSecaoSelecionada((e)=> [...e, titulo]));
  }
  const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subSecao));
  const subSecoesPrincipais = new Set(produtos.principais.map((p) => p.subSecao));
  //console.log(subSecoesEntradas, subSecoesPrincipais);
  const [secaoSelecionada, setSecaoSelecionada] = useState([]);

  let arraySub = [
    {
      nome: "Entradas",
      itens: produtos.entradas,
      subSecoes: Array.from(subSecoesEntradas),
    },

    {
      nome: "Principais",
      itens: produtos.principais,
      subSecoes: Array.from(subSecoesPrincipais),
    },

    {
      nome: "Sobremesas",
      itens: produtos.sobremesas,
      subSecoes: null,
    },
  ];

  

  return (
    <div className={styles.app}>
      <Header />
      <FiltroSecao secoes={arraySub.nome} onSelecionarSecao={()=>handleSelecionarSecao} />


      <main className={styles.main}>
        {setSecaoSelecionada == null? produtos.map((secao) => (
          <Secao key={secao.nome} nome={secao.nome} produtos={secao.itens} subSecoes={secao.subSecoes && Array.from(secao.subSecoes)} /> )) : arraySub.map((secao) => (
          <Secao key={secao.nome} nome={secao.nome} produtos={secao.itens} subSecoes={secao.subSecoes && Array.from(secao.subSecoes)} />
        ))
        }
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
