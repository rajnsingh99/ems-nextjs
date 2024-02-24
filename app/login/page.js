
import Cookies from "js-cookie";

export default function Login() {

    async function submit(formData) {
        'use server'
        console.log('Submit called');
        Cookies.set('username', 'raj');
    }

    return (
        <>
            <div className='login-form-container'>
                <h2>Login</h2>
                <form className='login-form' action={submit}>
                    <input placeholder='Username' />
                    <input placeholder='Password' />
                    <button type='submit'>Login</button>
                </form>
            </div>

        </>
    );
}