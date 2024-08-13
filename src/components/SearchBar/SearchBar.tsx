import React, { useState } from 'react';
import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarForm,
  SearchBarInput,
} from './SearchBar.styled';
import { useAppDispatch } from '../../store/hooks/redux.hooks';
import { setWeatherCountry } from '../../store/reducers/weather/weather.slice';

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchInput, setSearchInput] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setWeatherCountry(searchInput));
  };

  return (
    <SearchBarContainer>
      <SearchBarForm onSubmit={handleSearch}>
        <SearchBarInput
          type="text"
          placeholder="Enter country name"
          value={searchInput}
          onChange={handleInputChange}
        />
        <SearchBarButton type="submit">Search</SearchBarButton>
      </SearchBarForm>
    </SearchBarContainer>
  );
};

export default SearchBar;
