import { FormEvent, useState, useContext } from 'react';
import  ReactModal  from 'react-modal';
import closeIMG from '../../assets/close.svg'
import incomeIMG from '../../assets/income.svg'
import outcomeIMG from '../../assets/outcome.svg'
import { TransitionContext } from '../TransisitonContext';
import { Container, TransitionContainer, RadioBox} from './styles';

interface  NewModalOpenProps{
    isOpen: boolean;
    onRequestClose:() => void;
}

 export function ModalOpen({isOpen, onRequestClose}: NewModalOpenProps) {
    const {createTransition} = useContext(TransitionContext)
   
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit'); 
  
    async function handleCreateNewTransition(event: FormEvent) {
       event.preventDefault();
     
     await createTransition({
        title,
        amount,
        category,
        type,
        
       }) 
       setAmount(0);
       setCategory('')
       setTitle("");
       setType('deposit');
       onRequestClose()
      }
    return(
        <ReactModal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName='react-Modal'
        className ='react-content'
        >
         <button type='button' 
         onClick={onRequestClose} 
         className="react-close">
            <img src={closeIMG} alt="fechar" />
         </button>
       <Container >
        
        <h2>Nova transaçao</h2>
        <input 
        placeholder='Título'
        value={title}
        onChange={event => setTitle(event.target.value)}
        />
          
        <input type='number' 
        placeholder='Valor'
        value={amount}
        onChange={event => setAmount(Number(event.target.value))}
        
        />
          
          <TransitionContainer>
            <RadioBox type='button' 
            onClick={()=> setType('deposit')}
            isActive={type === 'deposit'} 
            > 
            
               <img src={incomeIMG} alt="Entrada" />
               <span>Entrada</span>
            </RadioBox> 

            <RadioBox 
              type='button'
              onClick={()=> setType('withdraw')} 
              isActive={type === 'withdraw'}
              > 
              <img src={outcomeIMG} alt="Saida" />
              <span>Saida</span>
            </RadioBox>
          </TransitionContainer>

        <input  
         placeholder='Categoria'
         value={category}
         onChange={event => setCategory(event.target.value) }
          
         /> 
         
         <button type="submit" onClick={handleCreateNewTransition}>Cadastrar</button>
      
        </Container>    
      </ReactModal>
    );
}