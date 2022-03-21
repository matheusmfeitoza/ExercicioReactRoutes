import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyle } from "./Styles/HeaderStyle";
import { Navigation } from "./Styles/Navigation";

const Header = () => {
  return (
    <HeaderStyle>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="produto">Produtos</Link>
      </Navigation>
    </HeaderStyle>
  );
};

export default Header;
