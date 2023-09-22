import { renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('Pruebas en el useCounter', () => { 
    
    test('debe de retonar los valores por defecto', () => { 
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(11);
        expect( decrement ).toEqual( expect.any( Function ));
        expect( increment ).toEqual( expect.any( Function ));
        expect( reset ).toEqual( expect.any( Function ));

    })
    
    test('Debe generar el counter con el valor 100', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(100);
    })
    

})