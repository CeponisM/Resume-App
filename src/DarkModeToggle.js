import React from 'react';
import styled from 'styled-components';
import { useTheme } from './ThemeContext'; // Make sure this path is correct
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Switch = styled.label`
  float: right;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  margin-top: 6px;
  margin-right:12px;
  justify-content: center; /* Center the icons */
  width: 60px;
  height: 34px;
  background-color: ${({ theme }) => theme === 'dark' ? '#333' : '#FFF'};
  border-radius: 34px;
  cursor: pointer;
  transition: background-color 0.3s;
  outline: 1px solid #9DB4C0;l
`;

const IconWrapper = styled.span`
  position: absolute;
  justify-content: center;
  transition: opacity 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
  opacity: ${({ theme, mode }) => (theme === mode ? '1' : '0')};

  /* Center the icon in the switch */
  margin-top: 1px;
`;

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch onClick={toggleTheme} theme={theme}>
      <IconWrapper className="light" theme={theme} mode="light">
        <LightModeIcon />
      </IconWrapper>
      <IconWrapper className="dark" theme={theme} mode="dark">
        <DarkModeIcon />
      </IconWrapper>
    </Switch>
  );
};

export default DarkModeToggle;
