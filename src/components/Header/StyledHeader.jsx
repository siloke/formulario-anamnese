import styled from "styled-components";
import { Box } from "reflexbox";

export const StyledHeader = styled(Box)`
  .container-navbar {
    background: linear-gradient(to left, #f0f0f0, #ffffff);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  img {
    max-width: 100px;
  }

  .lupa {
    color: #333333;
  }

  .container-header {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    gap: 20px;
    padding: 10px 20px
  }

  .links {
    color: #333333;
    font-size: 15px;
    transition: color 0.3s ease, transform 0.3s ease;
    background-color: #FFD3D4;
    border-radius: 10px;
  }

  .search {
    max-width: 200px
  }

  .links:hover {
    transform: scale(1.1);
  }

`