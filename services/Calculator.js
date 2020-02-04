//class for logic to generate answers
class Calculator {

    static getDecision = (choices) => {
        let weighted
        choices.forEach(choice => {
            if (choice.weight > 0) {
                weighted = true
            }
        })
        if (weighted) {
            console.log('weighted')
        }
        return choices[0]
        //returns an index number
        //currently hard coded for test purposes!
        
    }

    static reRun = (choices) => {
        return choices[1]
    }




}

export default Calculator