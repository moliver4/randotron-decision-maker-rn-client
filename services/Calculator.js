//class for logic to generate answers
class Calculator {

    static getDecision = (choices) => {
        let weighted
        let length = choices.length
        const arr = []
        let ans;
        choices.forEach(choice => {
            if (choice.weight > 0) {
                weighted = true
            }
        })

        if (weighted) {
            choices.forEach(choice => {
                let weight = choice.weight
                for(let i=0; i<weight; i++) {
                    arr.push(choice)
                }
            })
           
            let newLength = arr.length
            let weightedAns = this._getRandomInt(newLength)
            return arr[weightedAns]
        } 
        ans = this._getRandomInt(length)
        return choices[ans]
      
    }

    static _getRandomInt =(max) =>{
        return Math.floor(Math.random() * Math.floor(max));
      }


    static reRun = (choices) => {
        return choices[1]
    }




}

export default Calculator