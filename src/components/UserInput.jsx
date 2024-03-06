export default function UserInput({change,userInput}){
    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={userInput.initialInvestment} onChange={(event)=>change('initialInvestment',event.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={userInput.annualInvestment} onChange={(event)=>change('annualInvestment',event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={userInput.expectedReturn} onChange={(event)=>change('expectedReturn',event.target.value)}/>
                </p>
                <p>
                    <label>Duration (Years)</label>
                    <input type="number" required value={userInput.duration} onChange={(event)=>change('duration',event.target.value)}/>
                </p>
            </div>
        </section>
    );
}