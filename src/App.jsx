import Header from "./components/Header/Header";
import { Box, Flex } from "reflexbox";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const App = () => {
  return ( 
    <>
      <Header></Header>
      <Box maxWidth={1000} width="100%" height="100vh" m="0 auto" p={20}>
        <Form>
          <Box mx={20} className="my-3">
            <h4>Dados pessoais</h4>
          </Box>
          <Flex>
            <Box flexGrow={1} mx={20}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="email" placeholder="Ex.: Fulano de Tal" />
              </Form.Group>
            </Box>
          </Flex>
          <Flex>
            <Box flexGrow={1} mx={20}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control type="date" placeholder="Ex.: 01/09/1989" />
              </Form.Group>
            </Box>
            <Box flexGrow={2} mx={20}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Idade</Form.Label>
                <Form.Control type="number" placeholder="Ex.: 45" />
              </Form.Group>
            </Box>
          </Flex>
          <Flex>
            <Box flexGrow={1} mx={20}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Peso (kg)</Form.Label>
                <Form.Control type="number" placeholder="Ex.: 56,5" />
              </Form.Group>
            </Box>
            <Box flexGrow={1} mx={20}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Altura (m)</Form.Label>
                <Form.Control type="text" placeholder="Ex.: 1,76" />
              </Form.Group>
            </Box>
            <Box flexGrow={1} mx={20}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Turma</Form.Label>
                <Form.Control type="text" placeholder="Sua turma" />
              </Form.Group>
            </Box>
          </Flex>
          <Box mx={20} className="mb-3 mt-5">
            <h4>Objetivo do treinamento</h4>
          </Box>
          <Box mx={20} >
            <Form.Group className="mb-3" controlId="custom-switch">
              <Form.Check inline type="checkbox" id="custom-switch" label="Emagrecimento" />
              <Form.Check inline type="checkbox" id="custom-switch" label="Hipertrofia" />
              <Form.Check inline type="checkbox" id="custom-switch" label="Condicionamento físico" />
              <Form.Check inline type="checkbox" id="custom-switch" label="Outros" className="mb-3" />
              <Form.Group>
                <Form.Label>
                  Quais?
                </Form.Label>
                <Form.Control type="text" placeholder="Ex.: Objetivo 1, objetivo 2 etc." />
              </Form.Group>
            </Form.Group>
          </Box>
          <Box mx={20} className="mb-3 mt-5">
            <h4>Experiências</h4>
          </Box>
          <Flex>
            <Box flexGrow={1} mx={20}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Você já praticou exercício físico antes? Se sim quanto tempo praticou e o que praticou?</Form.Label>
                <Form.Control type="text" placeholder="Ex.: 2 meses de caminhada" />
              </Form.Group>
            </Box>
          </Flex>
          <Flex>
            <Box flexGrow={1} mx={20}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Quanto tempo está sem fazer exercícios?</Form.Label>
                <Form.Control type="text" placeholder="Ex.: 6 meses" />
              </Form.Group>
            </Box>
          </Flex>
          <Box mx={20} className="mb-3 mt-5">
            <h4>Condicionamento</h4>
          </Box>
          <Form.Group>
            <Flex mx={20}>
              <Box flexGrow={1}>
                <Form.Label>
                  É fumante?
                </Form.Label>
              </Box>
              <Box flexGrow={1}>
                <Form.Check inline label="Sim" name="fumante" type="radio" />
                <Form.Check inline label="Não" name="fumante" type="radio" />
              </Box>
            </Flex>
          </Form.Group>
          <Form.Group>
            <Flex mx={20}>
              <Box flexGrow={1}>
                <Form.Label>
                  Tem colesterol elevado?
                </Form.Label>
              </Box>
              <Box flexGrow={1}>
                <Form.Check inline label="Sim" name="colesterol" type="radio" />
                <Form.Check inline label="Não" name="colesterol" type="radio" />
              </Box>
            </Flex>
          </Form.Group>
          <Form.Group>
          <Flex mx={20}>
              <Box flexGrow={1}>
                <Form.Label>
                  Tem diabetes?
                </Form.Label>
              </Box>
              <Box flexGrow={1}>
                <Form.Check inline label="Sim" name="diabetes" type="radio" />
                <Form.Check inline label="Não" name="diabetes" type="radio" />
              </Box>
          </Flex>
          </Form.Group>
          <Box my={30}>
            <Form.Group>
              <Flex mx={20}>
                <Box flexGrow={1}>
                  <Form.Label>
                    Sente dores nas costas ou articulações?
                  </Form.Label>
                </Box>
                <Box flexGrow={1}>
                  <Form.Check inline label="Sim" name="dores" type="radio" />
                  <Form.Check inline label="Não" name="dores" type="radio" />
                </Box>
              </Flex>
              <Box mx={20}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Onde?
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Box>
            </Form.Group>
          </Box>
          <Box my={30}>
            <Form.Group>
              <Flex mx={20}>
                <Box flexGrow={1}>
                  <Form.Label>
                    Possui alguma disfunção ortopédica na coluna?
                  </Form.Label>
                </Box>
                <Box flexGrow={1}>
                  <Form.Check inline label="Sim" name="coluna" type="radio" />
                  <Form.Check inline label="Não" name="coluna" type="radio" />
                </Box>
              </Flex>
              <Box mx={20}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Qual?
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Box>
            </Form.Group>
          </Box>
          <Box my={30}>
            <Form.Group>
              <Flex mx={20}>
                <Box flexGrow={1}>
                  <Form.Label>
                    Apresenta alguma patologia?
                  </Form.Label>
                </Box>
                <Box flexGrow={1}>
                  <Form.Check inline label="Sim" name="patologia" type="radio" />
                  <Form.Check inline label="Não" name="patologia" type="radio" />
                </Box>
              </Flex>
              <Box mx={20}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Qual?
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Box>
            </Form.Group>
          </Box>
          <Box my={30}>
            <Form.Group>
              <Flex mx={20}>
                <Box flexGrow={1}>
                  <Form.Label>
                    Apresenta alguma limitação de movimentos?
                  </Form.Label>
                </Box>
                <Box flexGrow={1}>
                  <Form.Check inline label="Sim" name="limitacao" type="radio" />
                  <Form.Check inline label="Não" name="limitacao" type="radio" />
                </Box>
              </Flex>
              <Box mx={20}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Qual?
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Box>
            </Form.Group>
          </Box>
          <Box my={30}>
            <Form.Group>
              <Flex mx={20}>
                <Box flexGrow={1}>
                  <Form.Label>
                    Passou por alguma cirurgia?
                  </Form.Label>
                </Box>
                <Box flexGrow={1}>
                  <Form.Check inline label="Sim" name="cirurgia" type="radio" />
                  <Form.Check inline label="Não" name="cirurgia" type="radio" />
                </Box>
              </Flex>
              <Box mx={20}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Qual?
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Box>
            </Form.Group>
          </Box>
          <Box my={30}>
            <Form.Group>
              <Flex mx={20}>
                <Box flexGrow={1}>
                  <Form.Label>
                    Faz uso de remédios controlados ou suplementos termogênicos?
                  </Form.Label>
                </Box>
                <Box flexGrow={1}>
                  <Form.Check inline label="Sim" name="medicamentos" type="radio" />
                  <Form.Check inline label="Não" name="medicamentos" type="radio" />
                </Box>
              </Flex>
              <Box mx={20}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Quais?
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Box>
            </Form.Group>
          </Box>
          <Box mx={20}>
            <Button variant="primary" type="submit">Gravar</Button>
          </Box>
        </Form>
      </Box>
    </>
  );
}
 
export default App;
