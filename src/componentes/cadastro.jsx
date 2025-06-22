import styled from 'styled-components';

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
  return (
    <PageWrapper>
      <Card>
        <LeftPanel>
          <Message>
            <p><strong>Bem-vindo!</strong></p>
            <p>Cadastre-se e aproveite todos os recursos da plataforma.</p>
          </Message>
        </LeftPanel>
        <RightPanel>
          <Title>Cadastro</Title>
          <Input type="text" placeholder="Nome" />
          <Input type="text" placeholder="Sobrenome" />
      
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Criar senha" />
          <Button type="submit">Cadastrar</Button>
        </RightPanel>
      </Card>
    </PageWrapper>
  );
}

export default Cadastro;




    
