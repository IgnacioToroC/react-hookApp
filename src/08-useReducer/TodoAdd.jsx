import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputchange, onResetForm  } = useForm({
        description:''
    })     


    const onFormSubmit = ( event ) =>{
        event.preventDefault();
        if( description.length <= 1 ) return;

        const newTodo = {
            id: new Date(),
            done:false,
            description: description
        }
     
        onNewTodo( newTodo );
        onResetForm()
    }

        
    return (
        <>
            <form onSubmit={ onFormSubmit }>
                <input
                    type="text"
                    placeholder='¿Que hay que hacer?'
                    className='form-control'
                    name="description"
                    value={ description }
                    onChange={ onInputchange }
                />
                <button 
                    type='submit'
                    className='btn btn-outline-primary mt-1'
                    onClick={ onNewTodo }
                >
                    Agregar
                </button>
            </form>

        </>
    )
}
