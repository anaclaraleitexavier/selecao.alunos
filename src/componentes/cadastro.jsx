import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
  background-color: #000000;
  font-family: 'Segoe UI', sans-serif;
`;

const RegisterLink = styled.p`
  text-align: center;
  margin-top: 15px;
  font-size: 0.8rem; /* Tamanho de fonte reduzido */

  a {
    color: #006400;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 700px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 400px;
  }
`;

const LeftPanel = styled.div`
  flex: 1;
  background-color: #006400;
  color: white;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Message = styled.div`
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const RightPanel = styled.div`
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #006400;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
  margin-bottom: 15px;

  &:focus {
    border-color: #006400;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #006400;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004d00;
  }
`;

function Cadastro() {
  const [form, setForm] = useState({ nome: '', sobrenome: '', email: '', senha: '' })
  const [mensagem, setMensagem] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { placeholder, value } = e.target
    let key = placeholder.toLowerCase()
    // Ajustes caso placeholder não bata com o nome da propriedade
    if (key === 'criar senha') key = 'senha'
    setForm({ ...form, [key]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const resp = await fetch('https://selecao1.vercel.app/alunos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await resp.json()

      if (resp.ok) {
        setMensagem('✅ Cadastro realizado com sucesso! Redirecionando para login...')
        setTimeout(() => navigate('/login'), 1500)
      } else {
        setMensagem(`❌ ${data.error || 'Erro no cadastro.'}`)
      }
    } catch (err) {
      setMensagem('❌ Erro de conexão com o servidor.')
    }
  }

  return (
    <PageWrapper>
      <Card as="form" onSubmit={handleSubmit}>
        <LeftPanel>
          <Message>
            <p><strong>Bem-vindo!</strong></p>
            <p>Cadastre-se e aproveite todos os recursos da plataforma.</p>
          </Message>
        </LeftPanel>
        <RightPanel>
          <Title>Cadastro</Title>
          <Input type="text" placeholder="Nome" value={form.nome} onChange={handleChange} />
          <Input type="text" placeholder="Sobrenome" value={form.sobrenome} onChange={handleChange} />
          <Input type="text" placeholder="Email" value={form.email} onChange={handleChange} />
          <Input type="password" placeholder="Criar senha" value={form.senha} onChange={handleChange} />
          <Button type="submit">Cadastrar</Button>
          {mensagem && <Mensagem>{mensagem}</Mensagem>}
          <RegisterLink>
            Já tem cadastro? <Link to="/login">Voltar para o login</Link>
          </RegisterLink>
        </RightPanel>
      </Card>
    </PageWrapper>
  )
}

export default Cadastro

const Mensagem = styled.p`
  margin-top: 10px;
  color: #fff;
  font-weight: bold;
`
