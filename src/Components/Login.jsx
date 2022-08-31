import React, { useRef } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { useNavigate} from 'react-router-dom';

const Login = () => {
    const history = useNavigate();
    const mail = useRef("");
    const pass = useRef("");
    function submit() {
        console.log(mail.current.value);
        console.log(pass.current.value);
        history("/moviecard");
    }
    return (
        <>
            <div className='container py-5 my-5'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='px-3'>SOFT</h1>
                        <h1 className='px-3'>ROBOTICS</h1>
                        <img className='img rounded-4 my-3' src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2F530024a/MediaObjects/41586_2016_BF530024a_Figa_HTML.jpg" height={300} alt="softrobotics" />

                    </div>

                    <div className='col my-5'>
                        <h1 className='my-3'> <BsFillPersonFill /><span className='mx-3'>Log In</span></h1>
                        <input ref={mail} type='text' id='mail' name='mail' className='my-3 py-2 px-4 rounded-4'/>
                        <br />
                        <input ref={pass} type='password' id='pass' name='pass' className="my-3 py-2 px-4 rounded-4"/>
                        <br />
                        <button className='my-3 btn btn-success' onClick={submit}>Log In</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login