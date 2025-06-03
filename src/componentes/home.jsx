import React, { useState } from 'react';
import styled from 'styled-components';

// Dados simulados organizados por curso
const turmas = {
  'Agropecuária': [
    { id: 1, nome: 'Ana Silva' },
    { id: 2, nome: 'Bruno Costa' }
  ],
  'Administração': [
    { id: 3, nome: 'Carlos Souza' },
    { id: 4, nome: 'Laura Martins' }
  ],
  'Informática': [
    { id: 5, nome: 'Maria Oliveira' },
    { id: 6, nome: 'João Pedro' }
  ],
  'Energias Renováveis': [
    { id: 7, nome: 'João Santos' }
  ],
  'Finanças': [
    { id: 8, nome: 'Paula Lima' }
  ]
};

// Estilos
const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
`;

const Sidebar = styled.div`
  background-color: #006400;
  color: white;
  width: ${({ aberto }) => (aberto ? '250px' : '60px')};
  transition: width 0.3s ease;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

const MenuToggle = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  margin-bottom: 20px;
  cursor: pointer;
  align-self: ${({ aberto }) => (aberto ? 'flex-end' : 'center')};
`;

const SidebarTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  white-space: nowrap;
  opacity: ${({ aberto }) => (aberto ? 1 : 0)};
  transition: opacity 0.2s ease;
`;

const SidebarItem = styled.div`
  font-size: 1.1rem;
  margin: 10px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: white;
  position: relative;
  width: 100%;
  justify-content: ${({ aberto }) => (aberto ? 'flex-start' : 'center')};
  text-align: ${({ aberto }) => (aberto ? 'left' : 'center')};

  &::after {
    content: attr(data-tooltip);
    visibility: ${({ aberto }) => (aberto ? 'hidden' : 'visible')};
    opacity: ${({ aberto }) => (aberto ? 0 : 1)};
    position: absolute;
    left: 70px;
    background: #006400;
    color: white;
    padding: 4px 8px;
    border-radius: 5px;
    font-size: 0.9rem;
    white-space: nowrap;
    transition: opacity 0.2s ease;
    z-index: 10;
  }

  span {
    margin-left: ${({ aberto }) => (aberto ? '10px' : '0')};
    opacity: ${({ aberto }) => (aberto ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: #006400;
  color: white;
  padding: 25px;
  text-align: center;
  font-size: 2.2rem;
`;

const Content = styled.main`
  padding: 40px;
  background-color: white;
  flex: 1;
`;

const CursoNav = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding-bottom: 20px;
  justify-content: center;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #006400;
    border-radius: 4px;
  }
`;

const CursoButton = styled.button`
  background-color: ${({ ativo }) => (ativo ? '#006400' : '#f0fff0')};
  color: ${({ ativo }) => (ativo ? '#fff' : '#006400')};
  border: 2px solid #006400;
  padding: 14px 28px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ ativo }) => (ativo ? '#005000' : '#e0ffe0')};
  }
`;

const AlunoBox = styled.div`
  margin-top: 40px;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  color: #006400;
`;

function Home() {
  const cursosOrdenados = Object.keys(turmas).sort();
  const [turmaSelecionada, setTurmaSelecionada] = useState(cursosOrdenados[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <PageWrapper>
      <Sidebar aberto={isSidebarOpen}>
        <MenuToggle onClick={toggleSidebar} aberto={isSidebarOpen}>
          ☰
        </MenuToggle>
        <SidebarTitle aberto={isSidebarOpen}>Menu</SidebarTitle>

        {/* Novo item: Página Inicial */}
        <SidebarItem aberto={isSidebarOpen} data-tooltip="Página Inicial">
          🏠 <span>Página Inicial</span>
        </SidebarItem>
        <SidebarItem aberto={isSidebarOpen} data-tooltip="Dashboard">
          📊 <span>Dashboard</span>
        </SidebarItem>
      </Sidebar>

      <ContentWrapper>
        <Header>Turmas Disponíveis</Header>
        <Content>
          <CursoNav>
            {cursosOrdenados.map((curso) => (
              <CursoButton
                key={curso}
                ativo={turmaSelecionada === curso}
                onClick={() => setTurmaSelecionada(curso)}
              >
                {curso}
              </CursoButton>
            ))}
          </CursoNav>

          <AlunoBox>
            {turmas[turmaSelecionada].length} aluno(s) cadastrados
          </AlunoBox>
        </Content>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default Home;
