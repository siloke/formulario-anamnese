import styled from "styled-components";
import { Box } from "reflexbox";

const StyledHeader = styled(Box)`
    background-color: red;
    color: white;
`

const Header = () => {
    return ( 
        <StyledHeader width={1} padding="20px" textAlign="center"><h1>Anamnese</h1></StyledHeader>
    );
}
 
export default Header;