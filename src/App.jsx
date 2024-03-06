import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import {useState} from "react";
function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment:1200,
    expectedReturn : 6,
    duration : 10,
});
const inputIsValid = userInput.duration >= 1;
function handleChange(inputIdentifier,newValue){
    setUserInput(prevUserInput =>{
        return{
            ...prevUserInput,
            [inputIdentifier] : +newValue
        }
            
    })

}
  return (
    <div id = "app-container">
    <UserInput change = {handleChange} userInput={userInput}/>
    {inputIsValid && <Results input={userInput}/>}
    {!inputIsValid && alert("Plaese enter valid Input")}
    </div>
  );
}

export default App
