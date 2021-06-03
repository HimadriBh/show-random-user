import './App.css';
import { useEffect } from 'react'
import SideBar from './SideBar';
import UserDetails from './UserDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersName } from './actions/userActions';
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.users)
  
  useEffect(() => {
    dispatch(getUsersName());

    
  }, []);

  // useEffect(() => {
  //   if(users){
  //     localStorage.setItem('users', JSON.stringify(users));
  //   }
  // }, [])

  return (
    <div className="app">
      <SideBar users={users} />
      {/* <UserDetails user={user}  /> */}
      <div className="main">
        <Switch>
          <Route to='/user/:userId'>
              <UserDetails  />
          </Route>
          <Route>
            <h1>Not Found!</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
