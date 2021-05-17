import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function LoginForm(props) {
    return (
        <div id='main_part'>
            <div className='login-wrap'>
                <div className='login-html'>
                    <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
                    <label htmlFor="tab-1" className="tab">Sign In</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" />
                    <label htmlFor="tab-2" className="tab">Sign Up</label>
                    <div className='login-form'>
                        <SignInForm />
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm