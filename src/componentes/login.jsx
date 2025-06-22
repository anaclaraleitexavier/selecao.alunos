import styled from 'styled-components';
import React, { useState } from 'react';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
  background-color: #000000;
  font-family: 'Segoe UI', sans-serif;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 600px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 360px;
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
  font-size: 1.1rem;
  line-height: 1.5;

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

const Mensagem = styled.p`
  margin-top: 10px;
  color: #000;
  font-weight: bold;
`;



function Login() {
  const [form, setForm] = useState({
    email: '',
    senha: '',
  });

  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    // Aqui, como o placeholder é "Login", vamos mapear para "email"
    const name = e.target.placeholder.toLowerCase() === 'login' ? 'email' : 'senha';
    setForm({ ...form, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch('https://selecao1.vercel.app/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await resp.json();

      if (resp.ok) {
        setMensagem('✅ Login realizado com sucesso!');
        console.log('Usuário logado:', data);
        // Aqui você pode salvar token, redirecionar, etc.
      } else {
        setMensagem(`❌ ${data.error || 'Falha no login.'}`);
      }
    } catch (err) {
      console.error('Erro no login:', err);
      setMensagem('❌ Erro de conexão com o servidor.');
    }
  };

  return (
    <PageWrapper>
      <Card as="form" onSubmit={handleSubmit}>
        <LeftPanel>
          <Message>
            <p><strong>Bem-vindo de volta!</strong></p>
            <p>Acesse sua conta para continuar navegando.</p>
          </Message>
        </LeftPanel>
        <RightPanel>
          <Title>Fazer Login</Title>
          <Input type="text" placeholder="Login" value={form.email} onChange={handleChange} />
          <Input type="password" placeholder="Senha" value={form.senha} onChange={handleChange} />
          <Button type="submit">Entrar</Button>
          {mensagem && <Mensagem>{mensagem}</Mensagem>}
          <RegisterLink>
            Não tem cadastro ainda? <a href="/cadastro">Cadastre-se</a>
          </RegisterLink>
        </RightPanel>
      </Card>
    </PageWrapper>
  );
}

export default Login;
