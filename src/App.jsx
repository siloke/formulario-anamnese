import { useState, useRef } from "react";
import Header from "./components/Header/Header";
import { Box, Flex } from "reflexbox";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useFormik } from "formik"
import regeneratorRuntime from "regenerator-runtime"; // Se tirar isso não funciona
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"
import {Breadcumb} from "./components/Breadcrumbs/Breadcumb.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { createGlobalStyle } from "styled-components";
import Modal from 'react-bootstrap/Modal';
import * as yup from 'yup';
import Alert from 'react-bootstrap/Alert';
import { MdMicOff, MdMic } from "react-icons/md";


const getAge = dateString => {
  const date = new Date();
  const birthDate = new Date(dateString);
  const age = date.getFullYear() - birthDate.getFullYear();

  date.setFullYear(birthDate.getFullYear());
  return date < birthDate ? age - 1 : age;
}

const Styles = createGlobalStyle`
  .instrucoes-voz {
    border-radius: 10px;

    code {
      padding: 5px;
      background-color: #DDD;
      border-radius: 5px;
      margin: 2px;
      display: inline-block;
      color: #ab7d00
    }

    ul { 
      li::after {
        content: ';'
      }

      li:last-child::after {
        content: '.'
      }
    }
  }
`

const App = () => {
  // Comandos de voz
  const formRef = useRef(null);
  const [elemento, setElemento] = useState('');
  const commands = [
    {
      command: ["próxim(o)(a)", "ok"],
      callback: () => setTimeout(() => avancarEntrada(true), 500)
    },
    {
      command: "voltar",
      callback: () => setTimeout(() => avancarEntrada(false), 500)
    },
    {
      command: "escrev(a)(e) *",
      callback: (texto) => {
        if (texto) {
          formik.setFieldValue(elemento.name, texto)
        }
      }
    },
    {
      command: "limpar",
      callback: () => {
        if (elemento.type === 'checkbox') {
          formik.setFieldValue(elemento.name, false)
        } else {
          formik.setFieldValue(elemento.name, "")
        }
      }
    },
    {
      command: "*",
      callback: (texto) => {
        if (texto) {
          resetTranscript()
        }
      }
    },
    {
      command: ["confere", "marcar"],
      callback: () => {
        if (elemento.type === 'checkbox') {
          formik
            .setFieldValue(elemento.name, !formik.values[elemento.name])
            .then(() => setTimeout(() => avancarEntrada(true), 500)
          )
        }
      }
    },
    {
      command: ["salvar", "enviar"],
      callback: () => handleSubmit(formik.values)
    }
  ];
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition 
  } = useSpeechRecognition({ commands });

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

  const handleMic = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({
        continuous: true,
        language: "pt-br",
      });
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
    validationSchema: yup.object().shape({
      nome: yup.string().required(),
      nascimento: yup.date().max(new Date()).required(),
      idade: yup.number().min(0).required(),
      peso: yup.number().positive().required(),
      altura: yup.number().positive().required(),
      turma: yup.string(),
      emagrecimento: yup.boolean().required(),
      hipertrofia: yup.boolean().required(),
      fisico: yup.boolean().required(),
      outros: yup.boolean().required(),
      "objetivos-quais": yup.string(),
      exercicios: yup.boolean().required(),
      "exercicios-tempo": yup.string(),
      "exercicios-quais": yup.string(),
      "exercicios-ultimo": yup.string(),
      fumante: yup.boolean().required(),
      colesterol: yup.boolean().required(),
      diabetes: yup.boolean().required(),
      dores: yup.boolean().required(),
      "dores-quais": yup.string(),
      coluna: yup.boolean().required(),
      "coluna-quais": yup.string(),
      patologias: yup.boolean().required(),
      "patologias-quais": yup.string(),
      limitacoes: yup.boolean().required(),
      "limitacoes-quais": yup.string(),
      cirurgias: yup.boolean().required(),
      "cirurgias-quais": yup.string(),
      medicamentos: yup.boolean().required(),
      "medicamentos-quais": yup.string()
    }),
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

  const [showModal, setShowModal] = useState(false);

  return ( 
    <>
      <Styles />
      <Header />
      <Breadcumb />
      <Box maxWidth={1000} m="0 auto" p={20}>
        <Box className="instrucoes-voz" p={10} bg="#F5F5F5">
          <Box mx={20} className="my-3">
            <h5>Instruções de voz</h5>
          </Box>
          <Box mx={20} className="my-3">
            {browserSupportsSpeechRecognition && (
            <>
              <ul>
                <li>
                  Diga <code>próximo(a)</code>/<code>ok</code> para avançar para a próxima entrada
                </li>
                <li>
                  Diga <code>voltar</code> para voltar à entrada anterior
                </li>
                <li>
                  Diga <code>escreva(e) ...</code> para preencher/substituir a entrada
                </li>
                <li>
                  Diga <code>limpar</code> para zerar o campo focado
                </li>
                <li>
                  Diga <code>confere</code>/<code>marcar</code> para checar as caixas
                </li>
                <li>
                  Diga <code>salvar</code>/<code>enviar</code> para submeter os dados
                </li>
              </ul>
              <Button
                variant={listening ? 'danger' : 'secondary'}
                onClick={handleMic}
                title={(listening ? 'Desativar' : 'Ativar') + ' comandos de voz'}>
                {listening ? (<MdMic />) : (<MdMicOff />)}
              </Button>
            </>
            ) || (
              <p>Seu navegador não suporta os comandos de voz!</p>
            )}
          </Box>
        </Box>

        <Modal show={!!transcript} keyboard={false}>
          <Modal.Header>
            <Modal.Title>Você disse...</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            "{transcript}"
          </Modal.Body>
        </Modal>

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
                {formik.errors.nome && (<Alert variant="danger">
                  {formik.errors.nome}
                </Alert>)}
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
                  {formik.errors.nascimento && (<Alert variant="danger">
                    {formik.errors.nascimento}
                  </Alert>)}
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
                  {formik.errors.idade && (<Alert variant="danger">
                    {formik.errors.idade}
                  </Alert>)}
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
                  {formik.errors.peso && (<Alert variant="danger">
                    {formik.errors.peso}
                  </Alert>)}
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
                  {formik.errors.altura && (<Alert variant="danger">
                    {formik.errors.altura}
                  </Alert>)}
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
                  {formik.errors.turma && (<Alert variant="danger">
                    {formik.errors.turma}
                  </Alert>)}
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
                  {formik.errors['objetivos-quais'] && (<Alert variant="danger">
                    {formik.errors['objetivos-quais']}
                  </Alert>)}
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
                  {formik.errors["exercicios-tempo"] && (<Alert variant="danger">
                    {formik.errors["exercicios-tempo"]}
                  </Alert>)}
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
                  {formik.errors["exercicios-quais"] && (<Alert variant="danger">
                    {formik.errors["exercicios-quais"]}
                  </Alert>)}
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
                  {formik.errors["exercicios-ultimo"] && (<Alert variant="danger">
                    {formik.errors["exercicios-ultimo"]}
                  </Alert>)}
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
                  {formik.errors["dores-quais"] && (<Alert variant="danger">
                    {formik.errors["dores-quais"]}
                  </Alert>)}
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
                  {formik.errors["coluna-quais"] && (<Alert variant="danger">
                    {formik.errors["coluna-quais"]}
                  </Alert>)}
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
                  {formik.errors["patologias-quais"] && (<Alert variant="danger">
                    {formik.errors["patologias-quais"]}
                  </Alert>)}
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
                  {formik.errors["limitacoes-quais"] && (<Alert variant="danger">
                    {formik.errors["limitacoes-quais"]}
                  </Alert>)}
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
                  {formik.errors["cirurgias-quais"] && (<Alert variant="danger">
                    {formik.errors["cirurgias-quais"]}
                  </Alert>)}
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
                  {formik.errors["remedios-quais"] && (<Alert variant="danger">
                    {formik.errors["remedios-quais"]}
                  </Alert>)}
              </Form.Group>
            </Box>)}
          </Box>
          <Flex mx={20} justifyContent="flex-end">
            <Button variant="primary" type="submit">Salvar</Button>
          </Flex>
        </Form>
      </Box>
      <Footer />
    </>
  );
}
 
export default App;
