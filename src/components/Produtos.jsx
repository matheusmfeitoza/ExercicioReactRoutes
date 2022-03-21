import React from "react";
import { Container } from "../Styles/Container";
import { Imagens } from "../Styles/Imagens";
import { Titulo } from "../Styles/Titulo";

const Produtos = () => {
  const [produto, setProduto] = React.useState([]);
  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, []);

  return (
    <Container>
      {produto.map((item) => (
        <div key={item.id}>
          <Titulo>{item.nome}</Titulo>
          <Imagens
            src={item.fotos[0].src}
            alt={"É um " + item.fotos[0].titulo}
          />
        </div>
      ))}
    </Container>
  );
};

export default Produtos;
