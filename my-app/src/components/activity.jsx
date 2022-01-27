
const Avctivity = (props) =>{
return(
  <div className="Info">
<label > Activity: </label>
 {props.show.activity}
<br></br>
<br></br>
<label > Type: </label>
 {props.show.type}
<br></br>
<br></br>
<label > Participants: </label>
 {props.show.participants}
 
</div>
)
}
export default Avctivity;