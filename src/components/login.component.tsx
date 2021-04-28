import { useEffect, useReducer } from 'react';

interface AuthState {
    loading: boolean;
    token: string | null;
    user: User;
}
interface User {
    name: string;
    email: string;
}

type LoginPayload={
    user:User;
}

type AuthAction = 
    | { type: 'logout' }
    | {type:'login',payload:LoginPayload}

const initialState: AuthState = {
    loading: true,
    token: null,
    user: {
        name: '',
        email: ''
    }
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout': return { loading: false, token: null, user: { name: '', email: '' } };
        case 'login':
            const {user}=action.payload;
            return {loading:false,token:'abcde',user};
        default: return state;
    }
}
const LoginComponent = () => {
    const [{ token, loading,user:{name} }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {

        setTimeout(() => {
            dispatch({ type: 'logout' });
        }, 1000)

    }, []);

    const login=()=>{
            dispatch({type:'login',payload:{user:{name:'Francisco Alfredo Falcón',email:'Francisco@gmail.com'}}});
    }

    const logout=()=>{
        dispatch({ type: 'logout' });
    }

    if (loading) {
        return (
            <>
                <h2>Login</h2>
                <div className="alert alert-warning">Loading ...</div>
            </>
        )
    }
    return (
        <>
            <h2>Login</h2>
            {token?<div className="alert alert-success">Success ... Ingreso correctamente {name}</div>:<div className="alert alert-danger">Not authenticate</div>}
            <div className="d-grid gap-2">
                {token? <button className="btn btn-danger" onClick={logout}>Logout</button>:<button className="btn btn-login" onClick={login}>Login</button>}
            </div>

        </>
    )

}

export default LoginComponent;