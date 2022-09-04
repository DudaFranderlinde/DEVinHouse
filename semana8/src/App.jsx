import { Footer, Header, Secao } from '@components';
import produtos from '@services/produtos.json';
import { FiltroSecao } from './components/FiltroSecao/FiltroSecao';
import styles from './App.module.css';

function App() {
  const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subSecao));
  const subSecoesPrincipais = new Set(produtos.principais.map((p) => p.subSecao));
  //console.log(subSecoesEntradas, subSecoesPrincipais);

  let ArraySub = [
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

  let ArrayProd = [
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

  function handleSelecionarSecao(titulo) {

  }

  return (
    <div className={styles.app}>
      <Header />
      <FiltroSecao secoes={ArrayProd} onSelecionarSecao={()=>handleSelecionarSecao()} />


      <main className={styles.main}>
        {ArraySub.map((secao) => (
          <Secao key={secao.nome} nome={secao.nome} produtos={secao.itens} subSecoes={secao.subSecoes && Array.from(secao.subSecoes)} />
        ))}

      </main>
      <Footer />
    </div>
  );
}

export default App;
