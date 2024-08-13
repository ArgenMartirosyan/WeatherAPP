import React from 'react';
import { ToggleCircle, ToggleContainer } from './ToggleUnit.styled';
import { useAppDispatch } from '../../store/hooks/redux.hooks';
import { selectWeatherUnit, setCurrentUnit } from '../../store/reducers/weather/weather.slice';
import { useSelector } from 'react-redux';

const ToggleUnit: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentUnit = useSelector(selectWeatherUnit);

  return (
    <ToggleContainer onClick={() => dispatch(setCurrentUnit())}>
      <ToggleCircle $currentunit={currentUnit}></ToggleCircle>
    </ToggleContainer>
  );
};

export default ToggleUnit;
