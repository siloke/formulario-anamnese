import styled from "styled-components";
import {Box} from "reflexbox";

export const StyledBreadcumb = styled(Box)`
  width: 100%;
  height: auto;
  text-decoration: none;
  background-color: #FFEBEC;
  padding: 0 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adicione a sombra desejada */
  
  .breadcrumb-item {
    text-decoration: none;
  }
`