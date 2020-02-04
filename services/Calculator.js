//class for logic to generate answers
class Calculator {

    static getDecision = (choices) => {
        let weighted
        let length = choices.length
        choices.forEach(choice => {
            if (choice.weight > 0) {
                weighted = true
            }
        })
        if (weighted) {
            console.log('weighted')
        }

        const ans = this._getRandomInt(length)
        return choices[ans]
        //returns an index number
        //currently hard coded for test purposes!
        
    }

    static _getRandomInt =(max) =>{
        return Math.floor(Math.random() * Math.floor(max));
      }


    static reRun = (choices) => {
        return choices[1]
    }




}

export default Calculator