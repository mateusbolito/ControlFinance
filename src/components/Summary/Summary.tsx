 import { useContext } from 'react';
import income from '../../assets/income.svg'
 import outcome from '../../assets/outcome.svg'
 import totalIMG from '../../assets/total.svg'
import { TransitionContext } from '../TransisitonContext';
import { Container } from "./styles";

export function Summary() { 

    const  {transitions} = useContext( TransitionContext)
      
    const summaryTotal = transitions.reduce((acc, transisiton)=> {
          if(transisiton.type === 'deposit') {
            acc.deposits += transisiton.amount;
          } else {
            acc.withdraw += transisiton.amount;
            acc.total -= transisiton.amount;
          }
          return acc;
        }, {
        deposits: 0,
        withdraw: 0,
        total: 0,

    })
       
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="entrada" />
                </header>
                <strong>{summaryTotal.deposits} </strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcome} alt="saida" />
                </header>
                <strong>-{summaryTotal.withdraw} </strong>
            </div>

            <div className='backGreen'>
                <header>
                    <p>Total</p>
                    <img src={totalIMG} alt="total" />
                </header>
                <strong>{summaryTotal.total} </strong>
            </div>
        </Container>
    )
}