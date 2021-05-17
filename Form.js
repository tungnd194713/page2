import React from 'react'
import FormNote from './FormNote'
import InputBar from './InputBar'

const nameRegex = /[^\p{L} ]/u
const ICregex1 = /\d{9}/
const ICregex2 = /\d{12}/
function copyObjectOf(obj) {
    return JSON.parse(JSON.stringify(obj))
}
const fieldNames = {
    gender: 'gender',
    iN: 'identityNumber',
    dob: 'dob',
    regNum: 'registrationNumber',
    phoneNum: 'phoneNumber',
    name: 'name',
    email: 'email',
    ngayKhaiBao: 'ngayKhaiBao',
    vungDich: 'vungdich',
    symtoms: 'symtoms',
}
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                gender: '-Chọn-',
                name: '',
                dob: '',
                registrationNumber: '',
                phoneNumber: '',
                email: '',
                ngayKhaiBao: '',
                vungDich: '',
                symtoms: '',
            },
            errors: {

            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleValidation = this.handleValidation.bind(this)
    }
    handleValidation(event) {
        const fields = copyObjectOf(this.state.fields);
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields[fieldNames.name]) {
            formIsValid = false;
            errors[fieldNames.name] = 'Hãy điền trường còn trống';
        }

        if (typeof fields[fieldNames.name] !== 'undefined') {
            if (fields[fieldNames.name].match(nameRegex)) {
                formIsValid = false;
                errors[fieldNames.name] = 'Chỉ các chữ cái';
            }
            if (fields[fieldNames.name].match(/\s{2,}/u)) {
                formIsValid = false;
                errors[fieldNames.name] = 'Tên không hợp lệ'
            }
        }



        // Date of birth
        if (!this.state.fields[fieldNames.dob]) {
            formIsValid = false;
            errors[fieldNames.dob] = 'Chọn ngày sinh'
        }

        // CMND
        if (!fields[fieldNames.iN]) {
            formIsValid = false;
            errors[fieldNames.iN] = 'Hãy điền trường còn trống';
        }

        if (typeof fields[fieldNames.iN] !== 'undefined') {
            if (!(fields[fieldNames.iN].match(ICregex1) || fields[fieldNames.iN].match(ICregex2))) {
                formIsValid = false;
                errors[fieldNames.iN] = 'CCCD/CMT không hợp lệ';
            }
        }
        // gender
        if (this.state.fields[fieldNames.gender] === '-Chọn-') {
            formIsValid = false;
            errors[fieldNames.gender] = 'Hãy chọn giới tính của bạn'
        }

        // mã nhân khẩu
        if (!fields[fieldNames.regNum]) {
            formIsValid = false;
            errors[fieldNames.regNum] = 'Hãy điền trường còn trống';
        }

        if (typeof fields[fieldNames.regNum] !== 'undefined') {
            if (!fields[fieldNames.regNum].match(ICregex2)) {
                formIsValid = false;
                errors[fieldNames.regNum] = 'Mã không hợp lệ';
            }
        }

        // số điện thoại
        if (typeof fields[fieldNames.phoneNum] !== 'undefined') {
            if (!fields[fieldNames.phoneNum].match(/\d{10}/)) {
                formIsValid = false;
                errors[fieldNames.phoneNum] = 'Số điện thoại không hợp lệ';
            }
        }

        // email
        if (typeof fields[fieldNames.email] !== 'undefined') {
            if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(fields.email))) {
                formIsValid = false;
                errors[fieldNames.email] = 'Email không hợp lệ';
            }
        }
        // ngày khai báo
        if (!this.state.fields[fieldNames.ngayKhaiBao]) {
            formIsValid = false;
            errors[fieldNames.ngayKhaiBao] = 'Chưa đặt ngày khai báo'
        }

        // Vùng dịch
        if (!this.state.fields[fieldNames.vungDich]) {
            formIsValid = false;
            errors[fieldNames.vungDich] = 'Trường bắt buộc'
        }

        // symtoms
        if (!this.state.fields[fieldNames.symtoms]) {
            formIsValid = false;
            errors[fieldNames.symtoms] = 'Điền biểu hiện'
        }
        this.setState({ errors: errors });
        return formIsValid;


    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
    }
    tick() {
        this.setState({ today: formatDate(new Date()) })
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    handleSubmit(e) {
        console.log(this.state.fields)
        this.componentWillUnmount()
        if (!this.handleValidation())
            alert('Errors occur!')
        else
            alert('Submit succesfully')

        e.preventDefault()
    }
    handleChange(e) {
        console.log(this.state.fields)
        const target = e.target
        const name = target.name
        const value = target.type === 'checkbox' ? target.checked : target.value
        const fields = copyObjectOf(this.state.fields)
        fields[name] = value
        this.setState({ fields: fields })
    }
    render() {
        const action = this.props.action || '#'
        const method = this.props.method
        const fields = copyObjectOf(this.state.fields)
        const today = this.state.today
        return (
            <div>
                <form onSubmit={this.handleSubmit} action={action} method={method}>
                    <fieldset>
                        <legend>Thông tin cá nhân</legend>
                        <InputBar
                            label={fieldNames.name}
                            name='Họ và tên'
                            type='text'
                            onChange={this.handleChange}
                            require={true}
                            error_msg={this.state.errors[fieldNames.name]}
                            val={fields[fieldNames.name].toUpperCase()}
                        />
                        <InputBar
                            label={fieldNames.dob}
                            name='Ngày sinh'
                            require={true}
                            error_msg={this.state.errors[fieldNames.dob]}
                            type='date'
                            onChange={this.handleChange}
                            val={fields.dob}
                            end={today}
                        />
                        <InputBar
                            label={fieldNames.iN}
                            name='CCCD/CMND' require={true}
                            type='text'
                            error_msg={this.state.errors[fieldNames.iN]}
                            onChange={this.handleChange}
                        />
                        <label htmlFor={fieldNames.gender}>Giới tính<em>(*)</em>: </label>
                        <select
                            id={fieldNames.gender}
                            name={fieldNames.gender}
                            value={this.state.fields[fieldNames.gender]}
                            onChange={this.handleChange}
                        >
                            <option disabled defaultValue={true} value='-Chọn-'>-Chọn-</option>
                            <option value='male'>Nam</option>
                            <option value='female'>Nữ</option>
                        </select>
                        <span>{this.state.errors[fieldNames.gender]}</span>
                        <InputBar
                            label={fieldNames.regNum}
                            name='Mã nhân khẩu'
                            type='text'
                            onChange={this.handleChange}
                            require={true}
                            error_msg={this.state.errors[fieldNames.regNum]}
                            val={fields[fieldNames.regNum]}
                        />
                        <InputBar
                            label={fieldNames.phoneNum}
                            name='Số điện thoại'
                            onChange={this.handleChange}
                            type='text'
                            require={false}
                            error_msg={this.state.errors[fieldNames.phoneNum]}
                            val={fields[fieldNames.phoneNum]}
                        />
                        <InputBar
                            label={fieldNames.email}
                            name='Emails'
                            val={fields[fieldNames.email]}
                            error_msg={this.state.errors[fieldNames.email]}
                            type='text'
                            require={false}
                            onChange={this.handleChange}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Thông tin dịch tễ</legend>
                        <InputBar
                            type='date'
                            val={fields[fieldNames.ngayKhaiBao]}
                            label={fieldNames.ngayKhaiBao}
                            onChange={this.handleChange}
                            require={true}
                            error_msg={this.state.errors[fieldNames.ngayKhaiBao]}
                            name='Ngày khai báo'
                            end={today}
                        />

                        <InputBar
                            label={fieldNames.vungDich}
                            name='Vùng dịch'
                            require={true}
                            error_msg={this.state.errors[fieldNames.vungDich]}
                            type='text'
                            onChange={this.handleChange}
                            val={fields[fieldNames.vungDich]}
                        />
                        <InputBar
                            label={fieldNames.symtoms}
                            name='Biểu hiện, triệu chứng'
                            require={true}
                            error_msg={this.state.errors[fieldNames.symtoms]}
                            onChange={this.handleChange}
                            val={fields[fieldNames.symtoms]}
                            type='text'
                        />
                    </fieldset>
                    <FormNote>((*): Những trường bắt buộc phải điền)</FormNote>
                    <input type='submit' value='Thêm mới' />
                </form>
            </div>
        )
    }
}
export default Form