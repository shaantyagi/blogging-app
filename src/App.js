import React, { useEffect, useState } from 'react';
import './App.css';
import BasicTable from './components/Table';
import {getUsers} from './Api/getApi';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Posts from './components/Posts';
import PostDetail from './components/PostDetail';
import NavBar from './components/NavBar';

//Getting users and setting routes
function App() {
  const [users,setUsers]= useState([]);
   useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      }).catch((error) => alert(error));
     }, []);
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
          <Route exact path='/' render={(props) => 
          <div>
          <NavBar />
          <BasicTable {...props} users={users}/>
          </div>}  />  
          <Route exact path='/posts/:userid' component={Posts} />
          <Route exact path='/postDetail/:postid/comments/:userid' component={PostDetail} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
