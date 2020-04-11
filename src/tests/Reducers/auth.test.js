import authReducer from '../../Reducers/auth';

test('Should test the Login reducer', () => {
    const action = {
        type: 'LOGIN',
        uid: '12ab'
    }

    const state = authReducer(undefined, action)
    expect(state.uid).toBe(action.uid)
})

test('Should clear uid upon logging out',()=>{
    const action={
        type:'LOGOUT',
        
    }
    const state=authReducer({uid:'1212'},action)
    expect(state).toEqual({})
})