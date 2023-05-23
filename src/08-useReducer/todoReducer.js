export const todoReducer =( initialState, action ) =>{
    switch (action.payload) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ]
            //return initialState;
    
        default:
            return initialState;
    }
}