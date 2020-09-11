
import React, {useEffect,useState} from 'react';
import {Avatar} from '@material-ui/core';

import './SideBarChat.css';

const SideBarChat=({addNewChat})=> {
  const [seed,setSeed]=useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random()*5000));
  }, []);
  const createChat=()=>{
    const roomName= prompt("Please enter name for chat");
    if(roomName){
      //do some clever stuff
    }
  }

    return !addNewChat ?(
        <div className='sidebarchat'>
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
          <div className="sidebarchatinfo">
          <h2> room name</h2>
          <p>chat info</p>
          </div>  
            
        </div>
    ):(
      <div onClick={createChat} className="sidebarChat">
      <h2>Add new chat</h2>
      
      </div>
    )
}

export default SideBarChat
