
import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

 interface HeaderProps{
    onNewOpenModal:() => void;
 }
export function Header({onNewOpenModal}:HeaderProps) { 
   
    return( 
        
        <Container>
            <Content>
            <img src={logo} alt="logo" />
            <button type='button' onClick={onNewOpenModal}>
                Nova transaçao
            </button>
            </Content>
        </Container>
       
    )
}