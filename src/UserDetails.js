import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSingleUser, clearUserDetails } from './actions/userActions';
import { useLocation } from 'react-router-dom'
const UserDetails = () => {
    let location = useLocation();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.users)
    let id = location.pathname.split('/')[2];

    useEffect(() => {
        if(id){
            dispatch(getSingleUser(id))
        }
        return () => {
            dispatch(clearUserDetails())
        }
    }, [id])

    

    return (
        <div className="user-details">
            {user ? (
                <div>
                    <div><img src={user.picture.medium} /></div>
                    <h3>{user.name.first} {user.name.last}</h3>
                    <p>Age: {user.dob.age}</p>
                    <p>{user.phone}</p>
                    <p>{user.email}</p>
                    
                </div>
            ): <h3>Click on user to see details!</h3>}
        </div>
    )
}

export default UserDetails
