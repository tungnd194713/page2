import React from 'react-dom'
import Group from './Group'
function Button(props) {
    return (
        <Group>
            <input type="submit" className="button" value={props.value} />
        </Group>
    )
}
export default Button