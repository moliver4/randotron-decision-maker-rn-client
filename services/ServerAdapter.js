const USERSURL = 'https://immense-ocean-72084.herokuapp.com/users'
const QUESTIONSURL = 'https://immense-ocean-72084.herokuapp.com/questions'

const DECISIONSURL = 'https://immense-ocean-72084.herokuapp.com/decisions'


 class ServerAdapter {
  static fetchUser(body){
    return fetch(`${USERSURL}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
            .catch(err=> console.log('error on server', err))
  }

  static getSignedInUser(id){
    return fetch(`${USERSURL}/${id}`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
            })
            .then(res => res.json())
            .catch(err=> console.log('error on server', err))
    }

  //adding field
  static newQuestion(body){
    return fetch(`${QUESTIONSURL}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
    
  }



  static newDecision(body){
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

  static editDecision(id, body){
    return fetch(`${DECISIONSURL}/${id}`, {
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



export default ServerAdapter