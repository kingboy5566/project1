import Button from "../button/Button";
import Input from "./Input/Input";
import React,{useState} from "react";



function Calculator(){
const [number, setNumber]= useState('')

function handle(e){
    setNumber(number+e.target.innerHTML)

}
function equal(){
    setNumber(eval(number))
};
function del(){
    setNumber(number.slice(0, -1))
}
function AC(){
    setNumber("")
};


    return(


<div  style={{
    borderRadius :"4px",
    width  : "18%",
    height :  "50%",
    textAlign :"center",
    margin :"10px 10px",
    position : "absolute",
    background : "black",
}}>

<Input value={number}/> <br />
<div style={{
    position : "relative",
    marginTop :"10px"
}}>
<Button text="AC"action = {AC} /><Button text="DEL"action = {del}/> <Button text="%" /> <Button text="/" action = {handle}/> <br />
<Button text="7" action = {handle}/> <Button text="8"  action = {handle}/> <Button text="9"  action = {handle}/> <Button text="*" action = {handle}/><br />
<Button text="4"  action = {handle}/> <Button text="5"  action = {handle}/> <Button text="6" action = {handle}/> <Button text="+" action = {handle}/> <br />
<Button text="1" action = {handle}/> <Button text="2"  action = {handle}/> <Button text="3" action = {handle}/> <Button text="-"action = {handle}/><br />
<Button text="0" action = {handle}/> <Button text="00" action = {handle}/> <Button text="." action = {handle}/> <Button text="=" action = {equal} /> <br /></div>
 

</div>
    )
}

export default Calculator;