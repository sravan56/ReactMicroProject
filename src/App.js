import "./App.css";
import CardDetails from "./components/CardDetails";
import Credit from "./components/Credit";
import "./styles/style.css";
import { useState } from "react";

function App() {
  const [creditDetails,setCreditDetails]=useState({
    cardName:"",
    cardNumber:"",
    month:"",
    year:"",
    cvc:""
  })
  const updateCreditDetails=(details)=>{
    setCreditDetails(details);
  }
  return (
    <div className="App">
      <CardDetails updateCreditDetails={updateCreditDetails}/>
      <Credit {...creditDetails}/>
    </div>
  );
}

export default App;
