import './App.css';
import {useState} from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import Profile from './profile-data/profile';
import FlexTuts from './learning-flex/flex';
import ChartingAnimeData from './charting/charting-anime';

function App() {
  const [userName, setUserName] = useState('');
  const [getProfileForUserName, setProfileForUserName] = useState('');

  function onSearch(data) {
    console.log("Search button clicked", userName);
    setProfileForUserName(userName);
  }

  function updateUserName(userName){
    console.log(userName.target.value);
    setUserName(userName.target.value);
  }

  return (
    <div className="dashboard">

      <div className="dashboard-container">
        <AppBar className="dashboard-top-bar" position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="top-bar-heading">
              Anime Dashboard
            </Typography>

            <InputBase
              className="search-username"
              placeholder="Search User Name"
              value={userName}
              onChange={updateUserName}
              inputProps={{ 'aria-label': 'search username' }}
            />
            <IconButton type="submit" onClick={onSearch} className="search-username-icon" aria-label="search">
              <SearchIcon />
            </IconButton>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        {/* <FlexTuts ></FlexTuts> */}
        <Profile userName={getProfileForUserName}>
        </Profile>
        <ChartingAnimeData />
      </div>

    </div>
  );
}

export default App;
