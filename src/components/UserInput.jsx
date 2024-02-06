function UserInput({ userInput, onHandleChange }) {

  function handleChange(event) { 
    onHandleChange(event.target.name, event.target.value)
  }  

  return ( 
    <>
      <div id="user-input">
        <div>
          <label>INITIAL INVESTIMENT</label>
          <input 
            name="initialInvestment" 
            type="number" 
            required 
            value={userInput.initialInvestment} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>ANNUAL INVESTIMENT</label>
          <input 
            name="annualInvestment" 
            type="number" 
            required 
            value={userInput.annualInvestment} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>EXPECTED RETURN</label>
          <input 
            name="expectedReturn" 
            type="number" 
            required 
            value={userInput.expectedReturn} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>DURATION</label>
          <input 
            name="duration" 
            type="number" min="1" 
            required 
            value={userInput.duration} 
            onChange={handleChange} />
        </div>
      </div>      
    </>      
   );
}

export default UserInput;