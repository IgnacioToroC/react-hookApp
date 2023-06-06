import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodos } from '../hooks/useTodos';


export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount , handleNewTodo, handleDeleteTodo, onToggleTodo } = useTodos();

    return (
    <>
        <br />
        <br />
        <br />
        <br />

        <h1>TodoApp: { todosCount() } <small>Pendientes: { pendingTodosCount() }</small></h1>
        <div className='row'>   
            <div className='col-7'>
                <TodoList 
                    todos={ todos } 
                    onDeleteTodo = { id => handleDeleteTodo(id) } 
                    onToggleTodo = { id => onToggleTodo(id) }
                />
            </div>
            
             <div className='col-5'>         
                <h4>Agregar TODO</h4>
               <TodoAdd onNewTodo={ todo => handleNewTodo(todo) } />
            </div>
        </div>

        <hr />
    </>
  )
}
