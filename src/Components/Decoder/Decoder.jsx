import React,{useState} from "react";



import  './Decoder.css'

function Decoder()
{
 
  const [text, SetText] = useState('Enter here');
  const [text2, SetText2] = useState('Enter here');
 const decode = () =>
 {

  var decodedString = atob(text);
  SetText(decodedString)

 }
 const encode = () =>
 {

  var encoded = btoa(text2);
  SetText2(encoded)

 }
 const handleOnChange = (event) =>
 {

SetText(event.target.value)

 }
 const handleOnChange2 = (event) =>
 {

SetText2(event.target.value)

 }

return (
  <div>

<form action="/"/>
<div style={{display:"inline-flex",alignItems:"center", margin:"10em" , justifyContent:"space-between",width:"55%"}}>
<label for="fname">Decode</label><br/>
  <textarea name="BAse64"  cols="100" rows="10" value={text} onChange={handleOnChange}></textarea>
  
  <button onClick={decode} className="butt" >Convert to ASCII</button>
</div>
  
<div style={{display:"inline-flex",alignItems:"center", margin:"10em" , justifyContent:"space-between",width:"55%"}}>
  <form action="/"/>
  <label for="fname">Encode</label><br/>
  <textarea name="BAse64"  cols="100" rows="10" value={text2} onChange={handleOnChange2}></textarea>
  
  <button onClick={encode} className="butt" >Convert to Base64</button>

  </div>
  </div>
)




}
export default Decoder;