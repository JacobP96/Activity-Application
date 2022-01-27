
import {useState,useEffect} from "react";
import Activity from "./activity"
import * as ReactBootStrap from "react-bootstrap";
import {Button} from "react-bootstrap"

const FindActivity = () =>{
  const [show,setShow]=useState(null);
  const [loading,setLoading] = useState(false)

const SearchRandomActivity = () => {

    fetch("http://www.boredapi.com/api/activity/")
    .then((response)=> response.json())
    .then((json)=> setShow(json));
    setLoading(true)
    setShow(null)
  }

  const ChooseParticipants = () =>{
    
    let value = document.querySelector("#aktivitet").value
    fetch(`http://www.boredapi.com/api/activity?participants=${value}`)
    .then((response)=> response.json())
    .then((json)=> setShow(json));
    setLoading(true)
    setShow(null)
 
  }
  
  return (
    <div className="App">  
    <br />
     <Button variant="success"
        onClick={() => {
          SearchRandomActivity();
            }}
      >
        Find a random activity
      </Button>
      <br/>
      <br />
      <label for="aktivitet">Choose a activity based on participants:</label>
      <select className="select" name="aktivitet" id="aktivitet">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="4">4</option>  
</select>
 
  <Button variant="success" onClick={() => {
         ChooseParticipants();
         
        }}>Find activity</Button>
<br />
<br />
{loading && show  ?  <Activity show={show}/> : <ReactBootStrap.Spinner animation="border" />  }

    </div>
  );
};

export default FindActivity;