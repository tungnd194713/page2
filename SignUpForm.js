import React from 'react'
import Group from './Group'
import InputBar from './InputBar'
import Button from './Button'
import FormNote from './FormNote'
class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signUsername: '',
            signPassword: '',
            repeatPassword: '',
            submitWarning: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleValidation = this.handleValidation.bind(this)
    }
    handleValidation() {
        let formIsValid = true;
        const nameReg = /^[a-z][^\W_]{7,14}$/i
        const passReg = /^(?=[^a-z]*[a-z])(?=\D*\d)[^:&.~\s]{5,20}$/
        var error_msg = ''

        // username && password
        if (!nameReg.test(this.state.signUsername) || !passReg.test(this.state.signPassword)) {
            formIsValid = false;
            error_msg = "Tài khoản, mật khẩu không hợp lệ"
        }
        if (this.state.repeatPassword !== this.state.signPassword) {
            formIsValid = false;
            error_msg = 'Mật khẩu không trùng khớp'
        }
        this.setState({
            submitWarning: !formIsValid,
            msg: error_msg
        })
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
        console.log(this.state)
        const target = e.target
        const name = target.name
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({ [name]: value })
    }
    render() {
        return (
            <form action={this.props.action} className="sign-up-htm" onSubmit={this.handleSubmit}>
                <Group>
                    <InputBar
                        label='signUsername'
                        labelClass='label'
                        type='text'
                        inputClass='input'
                        value={this.state.signUsername}
                        name='Username'
                        onChange={this.handleChange}
                    />
                </Group>
                <Group>
                    <InputBar
                        label='signPassword'
                        labelClass='label'
                        type='password'
                        inputClass='input'
                        name='Password'
                        onChange={this.handleChange}
                        value={this.state.signPassword}
                    />
                </Group>
                <Group>
                    <InputBar
                        label='repeatPassword'
                        labelClass='label'
                        type='password'
                        inputClass='input'
                        name='Repeat Password'
                        onChange={this.handleChange}
                        value={this.state.repeatPassword}
                    />
                </Group>
                {
                    this.state.submitWarning ? <span class='warning'>{this.state.msg}</span> : null
                }
                <FormNote class='warning'>
                    Tài khoản là một xâu chứa từ 7 đến 14 ký tự.
                    Mật khẩu phải chứa ít nhất một số và một chữ cái.
                </FormNote>
                <Group>
                    <Button value='Sign up' />
                </Group>

            </form>
        )
    }
}
export default SignUpForm