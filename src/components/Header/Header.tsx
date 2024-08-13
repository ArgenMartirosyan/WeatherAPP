import React from 'react';
import { HeaderContainer } from './Header.styled';
import SearchBar from '../SearchBar/SearchBar';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <SearchBar />
    </HeaderContainer>
  );
};

export default Header;
