import './Box.css'

function Box(props) {
    return (
        <div className={props.styleClass + " box"} style={{backgroundColor: props.domObj.style}}>
            {props.domObj.value}
        </div>
    );
}

export default Box;