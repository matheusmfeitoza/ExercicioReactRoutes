import React from "react";
import { ContainerContato } from "../Styles/ContainerContato";
import { ContatoInfo } from "../Styles/ContatoInfo";
import { ImagemContato } from "../Styles/ImagemContato";

const Contato = () => {
  return (
    <ContainerContato>
      <div>
        <ImagemContato
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJmWlXA5oQoaqoF1KyILsIxU7uKfWCZrbAw&usqp=CAU"
          alt="Imagem de contato com o fornecedor"
        />
      </div>
      <ContatoInfo>
        <h1>Contato</h1>
        <p>Email: contato@contato.com</p>
        <p>Telefone: (31)3232-3232</p>
        <p>Endereço: Rua Norte, 42, Confidente, MG</p>
      </ContatoInfo>
    </ContainerContato>
  );
};

export default Contato;
