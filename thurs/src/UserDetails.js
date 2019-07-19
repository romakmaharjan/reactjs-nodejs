import React from 'react'

function UserDetails(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <img src = {props.imgUrl} />
            <h5>{props.email}</h5>
        </div>
    )
}

export default UserDetails