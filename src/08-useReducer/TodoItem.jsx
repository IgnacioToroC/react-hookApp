export const TodoItem = ( { todo, onDeleteTodo } ) => {
  return (
    <>
        <li className='list-group-item d-flex justify-content-between' >
            <span className='aling-self-center'>{ todo.description }</span>    
            <button 
              className='btn btn-danger btn-sm'
              onClick={ () => onDeleteTodo( todo.id ) }
            >Borrar</button>
        </li>  
    </>
  )
}
