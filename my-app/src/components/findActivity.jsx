
import {useState} from "react";
import Activity from "./activity"
import * as ReactBootStrap from "react-bootstrap";
import {Button} from "react-bootstrap"

const FindActivity = () =>{
  const [show,setShow]=useState(null);
  const [loading,setLoading] = useState(false)
  const [xloading,setXLoading] = useState(false)

const SearchRandomActivity = () => {
    setShow(null)
    setLoading(true)
    fetch("http://www.boredapi.com/api/activity/")
    .then((response)=> response.json())
    .then((json)=> setShow(json));
    setLoading(false)
    setXLoading(true)
  }

  const ChooseParticipants = () =>{
    setShow(null)
    setLoading(true)
    let value = document.querySelector("#aktivitet").value
    fetch(`http://www.boredapi.com/api/activity?participants=${value}`)
    .then((response)=> response.json())
    .then((json)=> setShow(json));
    setLoading(false)
    setXLoading(true)
 
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
{!loading && show ?  <Activity show={show}/> :!loading && !show && xloading? <ReactBootStrap.Spinner animation="border" /> : null}

    </div>
  );
};

export default FindActivity;