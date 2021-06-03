import React from 'react'
import { NavLink } from 'react-router-dom'
const SideBar = ({ users }) => {

    return (
        <div className="sidebar">
            { users && users.map(user => (
                <NavLink key={user.login.uuid} style={{ border: '1px solid grey' }} to={`/user/${user.login.uuid}`} >
                    <h3>{user.name.first}</h3>
                </NavLink>
            )) }
        </div>
    )
}

export default SideBar
