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


  
export const guest = () => {
    return {
        type: GUEST, 
        user: {
            name: 'Guest', 
            email: null, 
            id: null
        }
    } 
};

  
export const logout = () => {
    return {
        type: LOGOUT
    } 
};
