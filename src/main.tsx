import React from 'react'
import ReactDOM from 'react-dom/client'
import {createServer, Model} from 'miragejs'
import { App } from './App'

 createServer({
   
   models: {
     transition: Model
   },

    seeds(server) {
      server.db.loadData({
        transitions: [
          {
            id:1,
            title:'Desenvolvedor web front-end',
            type: 'deposit',
            category:  'Dev',
            amount: 7000,
            createAT: new Date('2023-03-14 14:00:23' ),

          },
          {
            id:2,
            title:'"Aluguel da casa"',
            type: 'withdraw',
            category:  'Pagar',
            amount: 1000,
            createAT: new Date('2023-03-14 14:00:23' ),

          }
        ],
      })
    },
   
    routes() {
    this.namespace = 'api';

    this.get('/transition', ()=>{
      return this.schema.all('transition')
    })

    this.post('/transition', (schema, resquest)=> {
      const data = JSON.parse(resquest.requestBody)

      return schema.create('transition', data)
    })
  }
 }) 
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
