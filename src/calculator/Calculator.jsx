import Button from "../button/Button";
import Input from "./Input/Input";
import React,{useState} from "react";



function Calculator(){
const [number, setNumber]= useState('')
const [number1, setNumber1]= useState('')
const [result, setresult]= useState('')
function handle(e){
    setNumber(number+e.target.innerHTML)

}
function add(){
   setresult(number+number1)

}


    return(


<div style={{
    border :" 1px solid red",
    borderRadius :"4px",
    width  : "20%",
    height :  "auto",
    textAlign :"center",
    margin :"10px 10px",
    position : "absolute"
    // background : "black"
}}>

<Input value={number}/> <br />
<div style={{
    position : "relative"
}}>
<Button text="AC" /><Button text="DEL"/><Button text="%"/> <Button text="/"/><br />
<Button text="7" action = {handle}/> <Button text="8"  action = {handle}/> <Button text="9"  action = {handle}/> <Button text="*" action = {handle}/><br />
<Button text="4"  action = {handle}/> <Button text="5"  action = {handle}/> <Button text="6" action = {handle}/> <Button text="+" action = {add}/> <br />
<Button text="1" action = {handle}/> <Button text="2"  action = {handle}/> <Button text="3" action = {handle}/> <Button text="-"action = {handle}/><br />
<Button text="0" action = {handle}/> <Button text="00" action = {handle}/> <Button text="="action = {handle} /> <br /></div>


</div>
    )
}

export default Calculator;