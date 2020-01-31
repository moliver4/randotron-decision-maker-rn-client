export const LOGIN = 'LOGIN';
export const GUEST = 'GUEST';
export const LOGOUT = 'LOGOUT';


  
export const login = (email, name, id) => {
    return {
        type: LOGIN, 
        user: {
            name: name, 
            email: email, 
            id: id
        }
    } 
};
