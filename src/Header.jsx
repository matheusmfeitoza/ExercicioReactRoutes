import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyle } from "./Styles/HeaderStyle";
import { Navigation } from "./Styles/Navigation";

const Header = () => {
  return (
    <HeaderStyle>
      <Navigation>
        <Link to="/">Produtos</Link>
        <Link to="contato">Contato</Link>
      </Navigation>
    </HeaderStyle>
  );
};

export default Header;
