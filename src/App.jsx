import Header from "./components/Header/Header";
import { Box, Flex } from "reflexbox";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useFormik } from "formik"

function getAge(dateString) {
  const date = new Date();
  const birthDate = new Date(dateString);
  let age = date.getFullYear() - birthDate.getFullYear();

  date.setFullYear(birthDate.getFullYear());

  if (date < birthDate) {
    age--;
  }

  return age;
}

const App = () => {
  const formik = useFormik({
		initialValues: {
      nome: "",
      nascimento: "",
      idade: "",
      peso: "",
      altura: "",
      turma: "",
      emagrecimento: false,
      hipertrofia: false,
      fisico: false,
      outros: false,
      "objetivos-quais": "",
      exercicios: false,
      "exercicios-tempo": "",
      "exercicios-quais": "",
      "exercicios-ultimo": "",
      fumante: false,
      colesterol: false,
      diabetes: false,
      dores: false,
      "dores-quais": "",
      coluna: false,
      "coluna-quais": "",
      patologias: false,
      "patologias-quais": "",
      limitacoes: false,
      "limitacoes-quais": "",
      cirurgias: false,
      "cirurgias-quais": "",
      medicamentos: false,
      "medicamentos-quais": ""
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

  const handleNascimento = e => {
    const newValue = e.target.value;
    formik.setFieldValue("nascimento", newValue);

    formik.setFieldValue("idade", getAge(newValue));
  }

  return ( 
    <>
      <Header></Header>
      <Box maxWidth={1000} width="100%" height="100vh" m="0 auto" p={20}>
        <Form onSubmit={formik.handleSubmit}>
          <Box mx={20} className="my-3">
            <h4>Dados pessoais</h4>
          </Box>
          <Flex>
            <Box flexGrow={1} mx={20}>
              <Form.Group className="mb-3" controlId="nome">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    name="nome"
                    placeholder="Ex.: Fulano de Tal"
                    onChange={formik.handleChange}
                    value={formik.values.nome} />
              </Form.Group>
            </Box>
          </Flex>
          <Flex>
            <Box flexGrow={1} mx={20}>
              <Form.Group className="mb-3" controlId="nascimento">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control
                  type="date"
                  name="nascimento"
                  placeholder="Ex.: 01/09/1989"
                  onChange={handleNascimento}
                  value={formik.values.nascimento} />
              </Form.Group>
            </Box>
            <Box flexGrow={2} mx={20}>
              <Form.Group className="mb-3" controlId="idade">
                <Form.Label>Idade</Form.Label>
                <Form.Control disabled
                  type="number"
                  name="idade"
                  placeholder="Ex.: 45"
                  onChange={formik.handleChange}
                  value={formik.values.idade} />
              </Form.Group>
            </Box>
          </Flex>
          <Flex>
            <Box flexGrow={1} mx={20}>
              <Form.Group className="mb-3" controlId="peso">
                <Form.Label>Peso (kg)</Form.Label>
                <Form.Control
                  type="number"
                  name="peso"
                  placeholder="Ex.: 56,5"
                  onChange={formik.handleChange}
                  value={formik.values.peso} />
              </Form.Group>
            </Box>
            <Box flexGrow={1} mx={20}>
              <Form.Group className="mb-3" controlId="altura">
                <Form.Label>Altura (m)</Form.Label>
                <Form.Control
                  type="number"
                  name="altura"
                  placeholder="Ex.: 1,76"
                  onChange={formik.handleChange}
                  value={formik.values.altura} />
              </Form.Group>
            </Box>
            <Box flexGrow={1} mx={20}>
              <Form.Group className="mb-3" controlId="turma">
                <Form.Label>Turma</Form.Label>
                <Form.Control
                  type="text"
                  name="turma"
                  placeholder="Sua turma"
                  onChange={formik.handleChange}
                  value={formik.values.turma} />
              </Form.Group>
            </Box>
          </Flex>
          <Box mx={20} className="mb-3 mt-5">
            <h4>Objetivo do treinamento</h4>
          </Box>
          <Box mx={20}>
            <Form.Group className="mb-3">
              <Form.Check inline
                type="checkbox"
                name="emagrecimento"
                id="emagrecimento"
                label="Emagrecimento"
                onChange={formik.handleChange}
                value={formik.values.emagrecimento}
              />
              <Form.Check inline
                type="checkbox"
                name="hipertrofia"
                id="hipertrofia"
                label="Hipertrofia"
                onChange={formik.handleChange}
                value={formik.values.hipertrofia}
              />
              <Form.Check inline
                type="checkbox"
                name="fisico"
                id="fisico"
                label="Condicionamento físico"
                onChange={formik.handleChange}
                value={formik.values.fisico} />
              <Form.Check inline
                type="checkbox"
                name="outros"
                id="outros"
                label="Outros"
                className="mb-3"
                onChange={formik.handleChange}
                value={formik.values.outros}
              />
              {formik.values.outros && (<Form.Group controlId="objetivos-quais">
                <Form.Label>
                  Quais?
                </Form.Label>
                <Form.Control
                  type="text"
                  name="objetivos-quais"
                  placeholder="Ex.: Objetivo 1, objetivo 2 etc."
                  onChange={formik.handleChange}
                  value={formik.values['objetivos-quais']} />
              </Form.Group>)}
            </Form.Group>
          </Box>
          <Box mx={20} className="mb-3 mt-5">
            <h4>Experiências</h4>
          </Box>
          <Flex>
            <Box flexGrow={1}>
              <Form.Group>
                <Flex mx={20}>
                  <Box flexGrow={1}>
                    <Form.Label>
                      Você já praticou exercício físico antes?
                    </Form.Label>
                  </Box>
                  <Box flexGrow={1}>
                    <Form.Check inline
                      label="Sim"
                      name="exercicios"
                      type="radio"
                      checked={formik.values.exercicios === true}
                      onChange={() => formik.setFieldValue("exercicios", true)} />
                    <Form.Check inline
                      label="Não"
                      name="exercicios"
                      type="radio"
                      checked={formik.values.exercicios === false}
                      onChange={() => formik.setFieldValue("exercicios", false)} />
                  </Box>
                </Flex>
                {formik.values.exercicios && (<Box mx={20}>
                  <Form.Group className="mb-3" controlId="exercicios-tempo">
                    <Form.Label>
                      Por quanto tempo?
                    </Form.Label>
                    <Form.Control
                      name="exercicios-tempo"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values['exercicios-tempo']} />
                  </Form.Group>
                </Box>)}
                {formik.values.exercicios && (<Box mx={20}>
                  <Form.Group className="mb-3" controlId="exercicios-quais">
                    <Form.Label>
                      Quais?
                    </Form.Label>
                    <Form.Control
                      name="exercicios-quais"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values['exercicios-quais']} />
                  </Form.Group>
                </Box>)}
                {formik.values.exercicios && (<Box mx={20}>
                  <Form.Group className="mb-3" controlId="exercicios-ultimo">
                    <Form.Label>
                      Há quanto tempo está sem fazer?
                    </Form.Label>
                    <Form.Control
                      name="exercicios-ultimo"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values['exercicios-ultimo']} />
                  </Form.Group>
                </Box>)}
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
              <Form.Check inline
                label="Sim"
                name="fumante"
                type="radio"
                checked={formik.values.fumante === true}
                onChange={() => formik.setFieldValue("fumante", true)} />
              <Form.Check inline
                label="Não"
                name="fumante"
                type="radio"
                checked={formik.values.fumante === false}
                onChange={() => formik.setFieldValue("fumante", false)} />
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
              <Form.Check inline
                label="Sim"
                name="colesterol"
                type="radio"
                checked={formik.values.colesterol === true}
                onChange={() => formik.setFieldValue("colesterol", true)} />
              <Form.Check inline
                label="Não"
                name="colesterol"
                type="radio"
                checked={formik.values.colesterol === false}
                onChange={() => formik.setFieldValue("colesterol", false)} />
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
                <Form.Check inline
                  label="Sim"
                  name="diabetes"
                  type="radio"
                  checked={formik.values.diabetes === true}
                  onChange={() => formik.setFieldValue("diabetes", true)} />
                <Form.Check inline
                  label="Não"
                  name="diabetes"
                  type="radio"
                  checked={formik.values.diabetes === false}
                  onChange={() => formik.setFieldValue("diabetes", false)} />
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
                  <Form.Check inline
                    label="Sim"
                    name="dores"
                    type="radio"
                    checked={formik.values.dores === true}
                    onChange={() => formik.setFieldValue("dores", true)} />
                  <Form.Check inline
                    label="Não"
                    name="dores"
                    type="radio"
                    checked={formik.values.dores === false}
                    onChange={() => formik.setFieldValue("dores", false)} />
                </Box>
              </Flex>
              {formik.values.dores && (<Box mx={20}>
                <Form.Group className="mb-3" controlId="dores-quais">
                  <Form.Label>
                    Onde?
                  </Form.Label>
                  <Form.Control
                    name="dores-quais"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values['dores-quais']} />
                </Form.Group>
              </Box>)}
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
                  <Form.Check inline
                    label="Sim"
                    name="coluna"
                    type="radio"
                    checked={formik.values.coluna === true}
                    onChange={() => formik.setFieldValue("coluna", true)} />
                  <Form.Check inline
                    label="Não"
                    name="coluna"
                    type="radio"
                    checked={formik.values.coluna === false}
                    onChange={() => formik.setFieldValue("coluna", false)} />
                </Box>
              </Flex>
              {formik.values.coluna && (<Box mx={20}>
                <Form.Group className="mb-3" controlId="coluna-quais">
                  <Form.Label>
                    Quais?
                  </Form.Label>
                  <Form.Control
                    name="coluna-quais"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values['coluna-quais']} />
                </Form.Group>
              </Box>)}
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
                  <Form.Check inline
                    label="Sim"
                    name="patologias"
                    type="radio"
                    checked={formik.values.patologias === true}
                    onChange={() => formik.setFieldValue("patologias", true)} />
                  <Form.Check inline
                    label="Não"
                    name="patologias"
                    type="radio"
                    checked={formik.values.patologias === false}
                    onChange={() => formik.setFieldValue("patologias", false)} />
                </Box>
              </Flex>
              {formik.values.patologias && (<Box mx={20}>
                <Form.Group className="mb-3" controlId="patologias-quais">
                  <Form.Label>
                    Quais?
                  </Form.Label>
                  <Form.Control
                    name="patologias-quais"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values['patologias-quais']} />
                </Form.Group>
              </Box>)}
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
                  <Form.Check inline
                    label="Sim"
                    name="limitacoes"
                    type="radio"
                    checked={formik.values.limitacoes === true}
                    onChange={() => formik.setFieldValue("limitacoes", true)} />
                  <Form.Check inline
                    label="Não"
                    name="limitacoes"
                    type="radio"
                    checked={formik.values.limitacoes === false}
                    onChange={() => formik.setFieldValue("limitacoes", false)} />
                </Box>
              </Flex>
              {formik.values.limitacoes && (<Box mx={20}>
                <Form.Group className="mb-3" controlId="limitacoes-quais">
                  <Form.Label>
                    Quais?
                  </Form.Label>
                  <Form.Control
                    name="limitacoes-quais"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values['limitacoes-quais']} />
                </Form.Group>
              </Box>)}
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
                  <Form.Check inline
                    label="Sim"
                    name="cirurgias"
                    type="radio"
                    checked={formik.values.cirurgias === true}
                    onChange={() => formik.setFieldValue("cirurgias", true)} />
                  <Form.Check inline
                    label="Não"
                    name="cirurgias"
                    type="radio"
                    checked={formik.values.cirurgias === false}
                    onChange={() => formik.setFieldValue("cirurgias", false)} />
                </Box>
              </Flex>
              {formik.values.cirurgias && (<Box mx={20}>
                <Form.Group className="mb-3" controlId="cirurgias-quais">
                  <Form.Label>
                    Quaia?
                  </Form.Label>
                  <Form.Control
                    name="cirurgias-quais"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values['cirurgias-quais']} />
                </Form.Group>
              </Box>)}
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
                  <Form.Check inline
                    label="Sim"
                    name="medicamentos"
                    type="radio"
                    checked={formik.values.medicamentos === true}
                    onChange={() => formik.setFieldValue("medicamentos", true)} />
                  <Form.Check inline
                    label="Não"
                    name="medicamentos"
                    type="radio"
                    checked={formik.values.medicamentos === false}
                    onChange={() => formik.setFieldValue("medicamentos", false)} />
                </Box>
              </Flex>
              {formik.values.medicamentos && (<Box mx={20}>
                <Form.Group className="mb-3" controlId="medicamentos-quais">
                  <Form.Label>
                    Quais?
                  </Form.Label>
                  <Form.Control
                    name="medicamentos-quais"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values['medicamentos-quais']} />
                </Form.Group>
              </Box>)}
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
