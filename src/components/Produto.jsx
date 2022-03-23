import React from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";
import { Imagens } from "../Styles/Imagens";

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const params = useParams();

  React.useEffect(() => {
    async function getProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        console.log(erro);
        setError("Algum erro foi encontrado, por favor tente novamente.");
      } finally {
        setLoading(false);
      }
    }
    getProduto(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`);
  }, [params.id]);
  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (produto === null) return null;
  return (
    <section>
      <Head
        title={`Renek | ${produto.id}`}
        description={`Página do produto ${produto.id} com preço e descrição`}
      />
      <div>
        {produto.fotos.map((item) => {
          return <Imagens key={item.src} src={item.src} alt={item.titulo} />;
        })}
      </div>
      <h2>{produto.nome}</h2>
      <span>R$ {produto.preco}</span>
      <p>{produto.descricao}</p>
      {produto.vendido ? <p>Disponível em estoque</p> : <p>Sem Estoque</p>}
    </section>
  );
};

export default Produto;
