import { createContext, useState, useEffect, ReactNode } from "react"; 
import { api } from "./services/api";

   
 interface transition {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createAT: string;
 } 
 interface transitionInput {
   title: string;
   amount: number;
   type: string;
   category: string;

 }

 interface transitionsProviderProps {
    children: ReactNode;
  }

   interface transitionContextData {
      transitions: transition[];
      createTransition:(transition: transitionInput ) =>  Promise<void>;
   } 
   export const TransitionContext = createContext<transitionContextData>(
      {} as transitionContextData
      );
   
    export  function TransitionProvider ({children}: transitionsProviderProps) { 
   
    const [transitions,  setTransitions] =useState<transition[]>([])
  
    useEffect(()=> {
     api.get('/transition')
     .then(response => setTransitions(response.data.transitions))

    }, [])

      async function createTransition(transitionInput: transitionInput) {  
        const response = await api.post('/transition', {
         ...transitionInput,
         createAT: new Date(),
        })
        const {transition} = response.data; 

        setTransitions([...transitions, transition]);
      }

     return (
        <TransitionContext.Provider value={{transitions, createTransition }}>
             {children}
        </TransitionContext.Provider>
     );
 }