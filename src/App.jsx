import { useState, useRef } from "react";
import Header from "./components/Header/Header";
import { Box, Flex } from "reflexbox";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useFormik } from "formik"
import regeneratorRuntime from "regenerator-runtime"; // Se tirar isso não funciona
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"

const getAge = dateString => {
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
  // Comandos de voz
  const formRef = useRef(null);
  const [elemento, setElemento] = useState('');
  const commands = [
    {
      command: ["próximo", "próxima", "ok"],
      callback: () => avancarEntrada(true)
    },
    {
      command: "voltar",
      callback: () => avancarEntrada(false)
    },
    {
      command: "escreva *",
      callback: (texto) => {
        if (texto) {
          formik.setFieldValue(elemento.name, texto)
        }
      }
    },
    {
      command: "*",
      callback: (texto) => console.log(texto)
    },
    {
      command: "confere",
      callback: () => {
        if (elemento.type === 'checkbox') {
          console.log(formik.setFieldValue(elemento.name, true))
        }
      }
    },
    {
      command: "salvar (formulário)",
      callback: () => handleSubmit(formik.values)
    }
  ];
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition 
  } = useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    alert("Seu navegador não suporta os comandos de voz!");
  } else {
    SpeechRecognition.startListening({
      continuous: true,
      language: "pt-br",
    });
  }

  const handleFocus = (e) => {
    setElemento(e.target);
  }

  const avancarEntrada = proximo => {
    const inputs = Array.from(formRef.current.querySelectorAll('[name]'));
    const indiceAtual = inputs.findIndex(input => input.name === elemento.name)

    if (proximo) {
      if (indiceAtual !== inputs.length - 1) {
        inputs[indiceAtual + 1].focus();
      }
    } else {
      if (indiceAtual !== 0) {
        inputs[indiceAtual - 1].focus();
      }
    }
  }

  // Formik
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
		onSubmit: values => handleSubmit(values)
	});

  const handleNascimento = e => {
    const newValue = e.target.value;
    formik.setFieldValue("nascimento", newValue);

    formik.setFieldValue("idade", getAge(newValue));
  }

  const handleSubmit = values => {
    console.log(values);
  }

  return ( 
    <>
      <Header></Header>
      <Box maxWidth={1000} width="100%" height="100vh" m="0 auto" p={20}>
        <Form ref={formRef} onSubmit={formik.handleSubmit}>
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
                    value={formik.values.nome}
                    onFocus={handleFocus} />
              </Form.Group>
            </Box>
          </Flex>
          <Flex>
            <Box flexGrow={1} mx={20}>
              <Form.Group className="mb-3" controlId="nascimento">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control
                  type="text"
                  name="nascimento"
                  placeholder="Ex.: 01/09/1989"
                  onChange={handleNascimento}
                  value={formik.values.nascimento}
                  onFocus={handleFocus} />
              </Form.Group>
            </Box>
            <Box flexGrow={2} mx={20}>
              <Form.Group className="mb-3" controlId="idade">
                <Form.Label>Idade</Form.Label>
                <Form.Control
                  type="number"
                  name="idade"
                  placeholder="Ex.: 45"
                  onChange={formik.handleChange}
                  value={formik.values.idade}
                  onFocus={handleFocus} />
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
                  value={formik.values.peso}
                  onFocus={handleFocus} />
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
                  value={formik.values.altura}
                  onFocus={handleFocus} />
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
                  value={formik.values.turma}
                  onFocus={handleFocus} />
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
                checked={formik.values.emagrecimento}
                onChange={formik.handleChange}
                value={formik.values.emagrecimento}
                onFocus={handleFocus} />
              <Form.Check inline
                type="checkbox"
                name="hipertrofia"
                id="hipertrofia"
                label="Hipertrofia"
                checked={formik.values.hipertrofia}
                onChange={formik.handleChange}
                value={formik.values.hipertrofia}
                onFocus={handleFocus} />
              <Form.Check inline
                type="checkbox"
                name="fisico"
                id="fisico"
                label="Condicionamento físico"
                checked={formik.values.fisico}
                onChange={formik.handleChange}
                value={formik.values.fisico}
                onFocus={handleFocus} />
              <Form.Check inline
                type="checkbox"
                name="outros"
                id="outros"
                label="Outros"
                className="mb-3"
                checked={formik.values.outros}
                onChange={formik.handleChange}
                value={formik.values.outros}
                onFocus={handleFocus} />
              {formik.values.outros && (<Form.Group controlId="objetivos-quais">
                <Form.Label>
                  Quais?
                </Form.Label>
                <Form.Control onFocus={handleFocus}
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
          <Box flexGrow={1}>
            <Box mx={20}>
              <Form.Check inline
                type="checkbox"
                name="exercicios"
                label="Já praticou exercícios físicos antes"
                className="mb-3"
                checked={formik.values.exercicios}
                onChange={formik.handleChange}
                value={formik.values.exercicios}
                onFocus={handleFocus} />
            </Box>
            {formik.values.exercicios && (<Box mx={20}>
              <Form.Group className="mb-3" controlId="exercicios-tempo">
                <Form.Label>
                  Por quanto tempo?
                </Form.Label>
                <Form.Control
                  name="exercicios-tempo"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values['exercicios-tempo']}
                  onFocus={handleFocus} />
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
                  value={formik.values['exercicios-quais']}
                  onFocus={handleFocus} />
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
                  value={formik.values['exercicios-ultimo']}
                  onFocus={handleFocus} />
              </Form.Group>
            </Box>)}
          </Box>
          <Box mx={20} className="mb-3 mt-5">
            <h4>Condicionamento</h4>
          </Box>
          <Box mx={20}>
            <Form.Check inline
              type="checkbox"
              name="fumante"
              label="É fumante"
              className="mb-3"
              checked={formik.values.fumante}
              onChange={formik.handleChange}
              value={formik.values.fumante}
              onFocus={handleFocus} />
            <Form.Check inline
              type="checkbox"
              name="colesterol"
              label="Apresenta colesterol elevado"
              className="mb-3"
              checked={formik.values.colesterol}
              onChange={formik.handleChange}
              value={formik.values.colesterol}
              onFocus={handleFocus} />
            <Form.Check inline
              type="checkbox"
              name="diabetes"
              label="Tem diabetes"
              className="mb-3"
              checked={formik.values.diabetes}
              onChange={formik.handleChange}
              value={formik.values.diabetes}
              onFocus={handleFocus} />
          </Box>
          <Box my={30}>
            <Box mx={20}>
              <Form.Check inline
                type="checkbox"
                name="dores"
                label="Sente dores nas costas e/ou articulações"
                className="mb-3"
                checked={formik.values.dores}
                onChange={formik.handleChange}
                value={formik.values.dores}
                onFocus={handleFocus} />
            </Box>
            {formik.values.dores && (<Box mx={20}>
              <Form.Group className="mb-3" controlId="dores-quais">
                <Form.Label>
                  Onde?
                </Form.Label>
                <Form.Control
                  name="dores-quais"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values['dores-quais']}
                  onFocus={handleFocus} />
              </Form.Group>
            </Box>)}
          </Box>
          <Box my={30}>
            <Box mx={20}>
              <Form.Check inline
                type="checkbox"
                name="coluna"
                label="Disfunções ortopédicas na coluna"
                className="mb-3"
                checked={formik.values.coluna}
                onChange={formik.handleChange}
                value={formik.values.coluna}
                onFocus={handleFocus} />
            </Box>
            {formik.values.coluna && (<Box mx={20}>
              <Form.Group className="mb-3" controlId="coluna-quais">
                <Form.Label>
                  Quais?
                </Form.Label>
                <Form.Control
                  name="coluna-quais"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values['coluna-quais']}
                  onFocus={handleFocus} />
              </Form.Group>
            </Box>)}
          </Box>
          <Box my={30}>
            <Box mx={20}>
              <Form.Check inline
                type="checkbox"
                name="patologias"
                label="Apresenta patologias"
                className="mb-3"
                checked={formik.values.patologias}
                onChange={formik.handleChange}
                value={formik.values.patologias}
                onFocus={handleFocus} />
            </Box>
            {formik.values.patologias && (<Box mx={20}>
              <Form.Group className="mb-3" controlId="patologias-quais">
                <Form.Label>
                  Quais?
                </Form.Label>
                <Form.Control
                  name="patologias-quais"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values['patologias-quais']}
                  onFocus={handleFocus} />
              </Form.Group>
            </Box>)}
          </Box>
          <Box my={30}>
            <Box mx={20}>
              <Form.Check inline
                type="checkbox"
                name="limitacoes"
                label="Limitações de movimentos"
                className="mb-3"
                checked={formik.values.limitacoes}
                onChange={formik.handleChange}
                value={formik.values.limitacoes}
                onFocus={handleFocus} />
            </Box>
            {formik.values.limitacoes && (<Box mx={20}>
              <Form.Group className="mb-3" controlId="limitacoes-quais">
                <Form.Label>
                  Onde?
                </Form.Label>
                <Form.Control
                  name="limitacoes-quais"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values['limitacoes-quais']}
                  onFocus={handleFocus} />
              </Form.Group>
            </Box>)}
          </Box>
          <Box my={30}>
            <Box mx={20}>
              <Form.Check inline
                type="checkbox"
                name="cirurgias"
                label="Cirurgias"
                className="mb-3"
                checked={formik.values.cirurgias}
                onChange={formik.handleChange}
                value={formik.values.cirurgias}
                onFocus={handleFocus} />
            </Box>
            {formik.values.cirurgias && (<Box mx={20}>
              <Form.Group className="mb-3" controlId="cirurgias-quais">
                <Form.Label>
                  Quais?
                </Form.Label>
                <Form.Control
                  name="cirurgias-quais"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values['cirurgias-quais']}
                  onFocus={handleFocus} />
              </Form.Group>
            </Box>)}
          </Box>
          <Box my={30}>
            <Box mx={20}>
              <Form.Check inline
                type="checkbox"
                name="remedios"
                label="Uso de remédios controlados ou suplementos termogênicos"
                className="mb-3"
                checked={formik.values.remedios}
                onChange={formik.handleChange}
                value={formik.values.remedios}
                onFocus={handleFocus} />
            </Box>
            {formik.values.remedios && (<Box mx={20}>
              <Form.Group className="mb-3" controlId="remedios-quais">
                <Form.Label>
                  Quais?
                </Form.Label>
                <Form.Control
                  name="remedios-quais"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values['remedios-quais']}
                  onFocus={handleFocus} />
              </Form.Group>
            </Box>)}
          </Box>
          <Box mx={20}>
            <Button variant="primary" type="submit">Salvar</Button>
          </Box>
        </Form>
      </Box>
    </>
  );
}
 
export default App;
