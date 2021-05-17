import React from 'react'
function FormNote(props) {
    return (
        <em> 
            {props.children}
            <br />
        </em>
    )
}
export default FormNote