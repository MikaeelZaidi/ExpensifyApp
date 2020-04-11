import { login, logout } from '../../actions/auth';

test('This should test the Login action generator', () => {
    const action = login('121')
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '121'
    })
})

test('This should test the Logout action generator',()=>{
    const action= logout()
    expect(action).toEqual({
        type:'LOGOUT'
    })
})