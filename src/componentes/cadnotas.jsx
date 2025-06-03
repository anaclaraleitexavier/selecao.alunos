import React, { useState } from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  background-color: #000000;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;
  padding: 20px;
`;

const Card = styled.form`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 40px;
  width: 360px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #006400;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;

  &:focus {
    border-color: #006400;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #006400;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004d00;
  }
`;

function Cadnotas() {
  const [aluno, setAluno] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [nota, setNota] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ aluno, disciplina, nota });
    // Aqui você pode enviar os dados para uma API
  };

  return (
    <PageWrapper>
      <Card onSubmit={handleSubmit}>
        <Title>Cadastro das Notas</Title>
        <Input
          type="text"
          placeholder="Nome do Aluno"
          value={aluno}
          onChange={(e) => setAluno(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Disciplinas"
          value={disciplina}
          onChange={(e) => setDisciplina(e.target.value)}
          required
        />
        <Input
          type="number"
          step="0.1"
          placeholder="Notas"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          required
        />
        <Button type="submit">Cadastrar Notas</Button>
      </Card>
    </PageWrapper>
  );
}

export default Cadnotas;

