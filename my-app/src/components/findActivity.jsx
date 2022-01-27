
import {useState} from "react";
import Activity from "./activity"
import * as ReactBootStrap from "react-bootstrap";

const Test = () =>{
  const [show,setShow]=useState(null);
  const [loading,setLoading] = useState(false)

const SearchActivity = () => {
  
    fetch("http://www.boredapi.com/api/activity/")
    .then((response)=> response.json())
    .then((json)=> setShow(json));
    setLoading(true)
  }

  const Participants = () =>{
    
    let value = document.querySelector("#aktivitet").value
    fetch(`http://www.boredapi.com/api/activity?participants=${value}`)
    .then((response)=> response.json())
    .then((json)=> setShow(json));
    setLoading(true)
  }
  
  return (
    <div>  
      <button
        onClick={() => {
          SearchActivity();
          
        }}
      >
        Hitta en random aktivitet
      </button>
      <br />
      <label for="aktivitet">Välj en aktivitet baserat på deltagare:</label>

<select name="aktivitet" id="aktivitet">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="4">4</option>
  
</select>
<button  onClick={() => {
         Participants();
         
        }}>Hitta aktivitet</button>
<br />
<br />
    { loading && show ?  <Activity show={show}/> : <ReactBootStrap.Spinner animation="border" /> }
    </div>
  );
};

export default Test;