import { calculateInvestmentResults as calc, formatter } from "../util/investment"

function Results({ userInput }) {   
  let totalInterest = 0
  const returnCalc = calc(userInput).map(yearData => {    
    totalInterest += yearData.interest
    return (
      <tr key={yearData.year}>
        <td>{yearData.year}</td>
        <td>{formatter.format(yearData.valueEndOfYear)}</td>
        <td>{formatter.format(yearData.interest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(yearData.valueEndOfYear - totalInterest)}</td>
      </tr>
    )    
  })

  return (     
      <table id="result">      
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {returnCalc}
        </tbody>
      </table>
   )
}

export default Results;