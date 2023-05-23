import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const initialState =[{
    id: new Date().getTime(),
    description:'Recolectar la piedra del alma',
    done:false,
},{
    id: new Date().getTime() * 3,
    description:'Recolectar la piedra del poder',
    done:false,
}]

export const TodoApp = () => {

    const [todos, dispatch ] = useReducer(todoReducer, initialState)

    const handleNewTodo = (todo) => {
        const action ={
            type:'[TODO] Add Todo',
            payload: todo
        }

        dispatch( action )
    }

  return (
    <>
        <br />
        <br />
        <br />
        <br />

        <h1>TodoApp: 10 <small>Pendientes: 2</small></h1>
        <div className='row'>   
            <div className='col-7'>

                { /* TodoList */ }
                <TodoList todos={ todos } />
                { /*FIN  TodoList */ }
            </div>
            
             <div className='col-5'>
         
                <h4>Agregar TODO</h4>
                { /* TodoAdd */ }
                { /* TodoAdd onNewTodo( todo ) */ }
                { /*  { id: new Date()... , descripttion:'', done: false } */ }
               <TodoAdd onNewTodo={ handleNewTodo } />
                { /* FIN TodoAdd */ }
            </div>
        </div>



        <hr />

    </>
  )
}
