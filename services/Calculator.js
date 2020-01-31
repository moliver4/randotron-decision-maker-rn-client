//class for logic to generate answers
class Calculator {

    static getDecision = (question, choices) => {
        let weighted
        choices.forEach(choice => {
            if (choice.weight > 0) {
                weighted = true
            }
        })
        if (weighted) {
            console.log('weighted')
        }
        return choices.first
        
    }




}

export default Calculator