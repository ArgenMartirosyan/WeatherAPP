import styled from 'styled-components';
import { UNITS } from '../../constants/unit.contsnts';

const { CELCIUS, FAHREN } = UNITS;

interface ToggleUniteProps {
  $currentunit: string;
}

export const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 3.5rem;
  height: 2rem;
  background-color: #faf8f8;
  border-radius: 1.5rem;
  transition: 0.2s;
`;

export const ToggleCircle = styled.button<ToggleUniteProps>`
  position: absolute;
  left: ${(props) => props.$currentunit === CELCIUS && 0};
  right: ${(props) => props.$currentunit === FAHREN && 0};
  width: 2rem;
  height: 2rem;
  border-radius: 1.5rem;
  background-color: #2b2b2b;
  border: 2px solid #faf8f8;
  transition: 0.2s;
`;
