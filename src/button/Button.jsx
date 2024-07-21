function Button(props){
    return (
    <button
    style={{
        border :"1px solid black",
        borderRadius: "50px",
        width :"36px",
        height :"36px",
        margin : "5px",
        textAlign :'center',
        backgroundColor : "gray",
        color : "black",
       
    }}
    onClick={props.action}>
         {props.action }
         {props.text}
         
    
  </button>


    )
}
export default Button;