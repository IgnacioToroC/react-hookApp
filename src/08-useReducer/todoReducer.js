export const todoReducer =( initialState, action ) =>{

    switch (action.type) {
        case 'ABC':
            throw new Error('Actiontype = ABC no está implementada');
            //return initialState;
    
        default:
            return initialState;
    }
}