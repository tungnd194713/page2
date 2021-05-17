import React from 'react'
import Group from './Group'
import InputBar from './InputBar'
import Button from './Button'
class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            remember: true,
            submitWarning: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleValidation = this.handleValidation.bind(this)
    }
    handleValidation() {
        let formIsValid = true;
        const nameReg = /^[a-z][^\W_]{7,14}$/i
        const passReg = /^(?=[^a-z]*[a-z])(?=\D*\d)[^:&.~\s]{5,20}$/


        // username && password
        if (!nameReg.test(this.state.username) || !passReg.test(this.state.password))
            formIsValid = false;
        this.setState({ submitWarning: !formIsValid })
        return formIsValid
    }
    handleSubmit(e) {
        if (!this.handleValidation())
            alert('Errors occur!')
        else
            alert('Submit succesfully')
        e.preventDefault()
    }
    handleChange(e) {
        const target = e.target
        const name = target.name
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({ [name]: value })
    }
    render() {
        return (
            <form className="sign-in-htm" action={this.props.action} method='POST' onSubmit={this.handleSubmit}>
                <Group>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvzBxli2n8EqumtdrO09C7heLkSy0QbaKAgw&usqp=CAU" id="image" />
                    <InputBar
                        labelClass='label'
                        label='username'
                        name='Username'
                        type='text'
                        inputClass='input'
                        value={this.state.username}
                        onChange={this.handleChange}
                        autocomplete={true}
                    />
                </Group>
                <Group>
                    <InputBar
                        labelClass='label'
                        label='password'
                        name='Password'
                        type='password'
                        inputClass='input'
                        value={this.state.password}
                        onChange={this.handleChange}
                        autocomplete={true}
                    />
                </Group>
                {this.state.submitWarning ? <span className='warning'>Tài khoản, mật khẩu không chính xác</span> : null}
                <Group>
                    <input id="check" type="checkbox" className="check" checked={this.state.remember} onChange={this.handleChange} name='remember' />
                    <label htmlFor="check"><span className="icon"></span>            Keep me Signed in</label>
                </Group>
                <Button value='Sign in' />
            </form>
        )
    }
}
export default SignInForm