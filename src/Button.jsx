import React from "react";

function Button(props){
    return(
        <button className="button1" onClick={props.onClick}>{props.text}</button>
    );
}

export default Button;