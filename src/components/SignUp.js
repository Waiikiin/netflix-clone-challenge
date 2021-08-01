import { auth } from '../firebase';
import React, { useRef, useState} from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/SignUp.css';

function SignUp() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const history = useHistory();

    const [errorMessage, setErrorMessage] = useState('');

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            setErrorMessage('');
            history.push('/');
        }).catch(error => {
            setErrorMessage(error.message);
        })
    }

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            setErrorMessage('');
            history.push('/');
        }).catch((error) => {
            setErrorMessage(error.message);
        })
    }

    return (
        <div className="signUp">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email"/>
                <input ref={passwordRef} placeholder="Password" type="password"/>        
                <h5> <span className="signup__error">{errorMessage}</span></h5>
                <button onClick={signIn} type="submit"> Sign In </button>

                <h4> 
                    <span className="signUp-gray"> New to Netflix? </span>
                    <span onClick={register} className="signUp_link"> Sign Up now! </span>
                </h4>

                
            </form>
        </div>
    )
}

export default SignUp