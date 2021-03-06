import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

// import { Route, BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';



const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <div className='app-wrapper'>
          <Header />
          <Navbar state={props.state.sidebar}/>
          <div className='app-wrapper-content'>
            <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/> 
            <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostChange={props.updateNewPostChange}/>}/>
            <Route path='/news' render={() => <News />}/>
            <Route path='/music' render={() => <Music />}/>
            <Route path='/settings' render={() => <Settings />}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;