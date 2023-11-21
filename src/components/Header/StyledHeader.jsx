import styled from "styled-components";
import { Box } from "reflexbox";

export const StyledHeader = styled(Box)`

  .container-navbar {
    background: linear-gradient(to left, #f0f0f0, #ffffff);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    height: 80px;
    width: 100%;
  }

  .logo {
    font-size: 3.5vh;
    height: auto;
    width: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: #333333;
    border-radius: 15px;
    font-family: 'Dancing Script', cursive;
  }

  .lupa {
    color: #333333;
  }

  .container-header {
    display: flex;
    width: 100%;
    height: auto;
    align-content: center;
  }

  .mb-1 {
    width: 30%;
  }
  .links {
    color: #333333;
    font-size: 15px;
    transition: color 0.3s ease, transform 0.3s ease;
    width: auto;
    height: auto;
    background-color: #FFD3D4;
    border-radius: 10px;
  }

  .links:hover {
    transform: scale(1.1);
    font-weight: bold;
  }

`