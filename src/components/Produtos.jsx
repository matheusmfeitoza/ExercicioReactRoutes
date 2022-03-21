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
          {item.fotos.map((foto) => (
            <div key={foto.titulo}>
              <Imagens src={foto.src} alt={foto.titulo} />
            </div>
          ))}
        </div>
      ))}
    </Container>
  );
};

export default Produtos;
