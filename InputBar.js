import React from 'react'
import Fragment from 'react'
function InputBar(props) {
    return (
        <div>
            <label className={props.labelClass} htmlFor={props.label}>{props.name}{props.require ? <em>(*)</em> : null}:</label>
            {(props.type === 'date') ?
                <input id={props.label} type={props.type} name={props.label} onChange={props.onChange} value={props.val} max={props.end} className={props.inputClass} />
                :
                <input id={props.label} type={props.type} name={props.label} onChange={props.onChange} value={props.val} className={props.inputClass} autoComplete={props.autoComplete}/>
            }
            <span>{props.error_msg}</span>
        </div>
    )
}

export default InputBar

