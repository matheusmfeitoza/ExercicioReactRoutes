import React from "react";

const Produtos = () => {
  const [produto, setProduto] = React.useState([]);
  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, []);

  return (
    <div>
      {produto.map((item) => (
        <div key={item.id}>
          <h2>{item.nome}</h2>
          {item.fotos.map((foto) => (
            <div key={foto.titulo}>
              <img src={foto.src} alt={foto.titulo} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Produtos;
