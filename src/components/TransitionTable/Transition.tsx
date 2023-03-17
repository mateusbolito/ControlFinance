import { useContext,  } from "react";
import { TransitionContext } from "../TransisitonContext";
import { Container } from "./styles";
 

export function TransitionTable() {
   const {transitions} = useContext(TransitionContext);
  
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transitions.map(transitions =>{
                        return(
                            <tr key={transitions.id}>
                        <td> {transitions.title} </td>
                        <td className={transitions.type}>
                            {new Intl.NumberFormat('pt-br', {
                            style:'currency',
                            currency: 'BRL'
                        }).format(transitions.amount)} </td>
                        
                        <td>{transitions.category} 
                        </td>
                        <td>{new Intl.DateTimeFormat('pt-br').format(new Date(transitions.createAT))} </td>
                    </tr>
                        )
                    })}
                   
                </tbody>
            </table>
        </Container>
    )
}