function Input(props){
    return(
        <input type="text"
        style={{
            borderRadius:"4px",
            width: "97%",
            height :"36px",
            overflow : "hidden",
            backgroundColor : "lightgray",
            fontSize : "30px",
            paddingLeft : "2px",
             paddingRight : "2px",
             position : "relative"
        }} value={props.value} />
      

    )
}


export default Input;