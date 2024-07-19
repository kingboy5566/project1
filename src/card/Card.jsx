function Card(props){
return(
    
  <div  style={{
    border:"1px solid red",
    width :"300px",
    height:"50px",
    margin:"10px",
    padding:"70px 10px",
    borderRadius:"4px",
    backgroundColor:"#e2e2e3",
    coloe:"#dddde3",
   

   
  }}>
   

 

    {props.text}<br/>
    {props.p}
  </div>
)
}

export default Card;