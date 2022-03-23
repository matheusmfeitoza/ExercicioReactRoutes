import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../Styles/Container";
import { Imagens } from "../Styles/Imagens";
import { Titulo } from "../Styles/Titulo";
import Head from "./Head";

const Produtos = () => {
  const [produto, setProduto] = React.useState([]);
  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, []);

  if (!produto) {
    return null;
  }
  return (
    <Container>
      <Head title="Renek | Produtos" description="Página de Produtos" />
      {produto.map((item) => (
        <div key={item.id}>
          <Titulo>{item.nome}</Titulo>
          <Link to={`produto/${item.id}`}>
            <Imagens
              src={item.fotos[0].src}
              alt={"É um " + item.fotos[0].titulo}
            />
          </Link>
        </div>
      ))}
    </Container>
  );
};

export default Produtos;
