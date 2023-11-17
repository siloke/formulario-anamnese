import Header from "./components/Header/Header";
import { Box, Flex } from "reflexbox";
import Form from "react-bootstrap/Form";

const App = () => {
  return ( 
    <>
      <Header></Header>
      <Box maxWidth="1600px" width="100%" height="100vh" m="0 auto">
        <Form>
          <Box mx="20px" className="my-3">
            <h4>Dados pessoais</h4>
          </Box>
          <Flex>
            <Box flexGrow={1} mx="20px">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu nome" />
                </Form.Group>
            </Box>
          </Flex>
          <Flex>
            <Box flexGrow={1} mx="20px">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Data de nascimento</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>
            </Box>
            <Box flexGrow={2} mx="20px">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Idade</Form.Label>
                    <Form.Control type="text" placeholder="Digite sua idade" />
              </Form.Group>
            </Box>
          </Flex>
          <Flex>
            <Box flexGrow={1} mx="20px">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Peso</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu peso"/>
                </Form.Group>
            </Box>
            <Box flexGrow={1} mx="20px">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Altura</Form.Label>
                    <Form.Control type="text" placeholder="Digite sua altura" />
              </Form.Group>
            </Box>
            <Box flexGrow={6} mx="20px">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Turma</Form.Label>
                    <Form.Control type="text" placeholder="Digite sua turma" />
              </Form.Group>
            </Box>
          </Flex>
          <Box mx="20px" className="mb-3">
            <h4>Objetivo do treinamento</h4>
          </Box>
          <Box mx="20px" >
            <Form.Group className="mb-3" controlId="custom-switch">
              <Form.Check inline type="checkbox" id="custom-switch" label="Emagrecimento"/>
              <Form.Check inline type="checkbox" id="custom-switch" label="Hipertrofia"/>
              <Form.Check inline type="checkbox" id="custom-switch" label="Condicionamento físico"/>
              <Form.Check inline type="checkbox" id="custom-switch" label="Outros" className="mb-3"/>
              <Form.Control type="text" placeholder="Quais?" />
            </Form.Group>
          </Box>
          <Flex>
            <Box flexGrow={1} mx="20px">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Você já praticou exercício físico antes? Se sim quanto tempo praticou e o que praticou?</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Box>
          </Flex>
          <Flex>
            <Box flexGrow={1} mx="20px">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Quanto tempo está sem fazer exercícios? </Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Box>
          </Flex>
        </Form>
      </Box>
    </>
  );
}
 
export default App;

