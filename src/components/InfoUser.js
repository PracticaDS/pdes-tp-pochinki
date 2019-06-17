import React from 'react';


const InfoUser = ({match: {params}}) => {

    const username = params.username;
    let userN
    let loading = true

    fetch('http://localhost:3001/api/users/' + username)
    .then(res => res.json())
    .then(user => {
        userN = user
        loading = false
    })

    return (
        <div>
            <h2>Bienvenido {!loading ? userN.username : "Usuario"}!</h2>
        </div>
            )
  
}
  
export default InfoUser;