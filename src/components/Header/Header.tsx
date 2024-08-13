import React from 'react';
import { HeaderContainer, UnitsContainer, UnitsText } from './Header.styled';
import SearchBar from '../SearchBar/SearchBar';
import ToggleUnit from '../ToggleUnit/ToggleUnit';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <SearchBar />
      <UnitsContainer>
        <UnitsText>°C</UnitsText>
        <ToggleUnit />
        <UnitsText>°F</UnitsText>
      </UnitsContainer>
    </HeaderContainer>
  );
};

export default Header;
