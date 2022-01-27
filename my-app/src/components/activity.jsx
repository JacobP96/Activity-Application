
const RenderAvctivity = (props) =>{
return(
  <div>
Aktivitet: {props.show.activity}
<br></br>
<br></br>
Typ: {props.show.type}
<br></br>
<br></br>
Antal deltagare: {props.show.participants}
 
</div>
)
}
export default RenderAvctivity;