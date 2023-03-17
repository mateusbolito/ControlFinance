import styled from 'styled-components'
import { useState } from 'react';
import ReactModal from 'react-modal';
import { ModalOpen } from './components/ModalOpen/Modal'
import { Dashboard } from './components/Dashboard/Dashboard';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './styles/global';
import { TransitionProvider } from './components/TransisitonContext';

const Title = styled.h1 `
  color: #8257e6;
`
ReactModal.setAppElement('#root')

export function App() {

  const [modalopen, setModalOpen] = useState(false);
    
    function handleOpenModal() {
        setModalOpen(true);
    }
    function handleCloseModal() {
        setModalOpen(false);
    }
  return (
    <TransitionProvider>
     <Header onNewOpenModal={handleOpenModal} />


     <Dashboard />
       
     <ModalOpen
       isOpen={modalopen}
       onRequestClose={handleCloseModal}
      />
    
      <GlobalStyle />
    </TransitionProvider>
  );
}


