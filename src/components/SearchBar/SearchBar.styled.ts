import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const SearchBarForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const SearchBarInput = styled.input`
  width: 20rem;
  height: 2rem;
  margin-right: 1rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const SearchBarButton = styled.button`
  height: 2rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: #2a313a;
  color: white;
  cursor: pointer;
`;
