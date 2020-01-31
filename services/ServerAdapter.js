const USERSURL = 'http://10.137.6.122:3000/users'
const QUESTIONSURL = 'http://10.137.6.122:3000/questions'
const CHOICESURL = 'http://10.137.6.122:3000/choices'
const DECISIONSURL = 'http://10.137.6.122:3000/decisions'


 class ServerAdapter {
  static fetchUser(body){
      console.log(body)
    return fetch(`${USERSURL}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
            .catch(err=> console.log(err))
  }

  //adding field
  static addQuestion(body){
    return fetch(`${QUESTIONS}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
    
  }

  static addChoice(body){
    return fetch(`${CHOICESURL}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
    
  }

  static addDecision(body){
    return fetch(`${DECISIONSURL}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
  }
   //edits

  static editDecision(body){
    return fetch(`${DECISIONSURL}/${body.id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
  }

 
  //deletes

  static deleteUser(id){
    return fetch(`${USERSURL}/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'}
            })
            .then(res => res.json())
  }

  static deleteQuestion(id){
    return fetch(`${QUESTIONSURL}/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'}
            })
            .then(res => res.json())
  }


}

//   static deleteSkill(id){
//     return fetch(`${SKILLSURL}/${id}`, {
//             method: 'DELETE',
//             headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'}
//             })
//             .then(res => res.json())
//   }
  
//   static deleteProject(id){
//     return fetch(`${PROJECTSURL}/${id}`, {
//             method: 'DELETE',
//             headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'}
//             })
//             .then(res => res.json())
//   }


export default ServerAdapter