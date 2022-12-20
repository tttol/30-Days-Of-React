import './Box.css'

function Box(props) {
    return (
        <div className={props.domObj.styleClass + " box"}>
            {props.domObj.number}
        </div>
    );
}

export default Box;