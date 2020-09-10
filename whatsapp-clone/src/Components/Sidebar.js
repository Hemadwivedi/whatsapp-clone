import React from 'react';
import './Sidebar.css';
import {Avatar,IconButton} from '@material-ui/core';
import {SearchOutlined} from '@material-ui/icons'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SideBarChat from './SideBarchat/SideBarChat';
const sideBars=()=>{
    return(
        <div className='sidebar'>
        {/*<h1>Sidebar</h1>*/}
       <div className='sidebar_header'>
       <Avatar/>
       <div className='sidebar_headerright'>
       <IconButton>
       <DonutLargeIcon/>
       
       <ChatIcon/>
       <MoreVertIcon/>
       </IconButton>
       </div>
       </div>
       <div className='sidebar_search'>
       <div className="sidebar_searchcontainer">
       <SearchOutlined/>
       <input placeholder="search or start new chat" type="text"/>
       </div>
       </div>
       <div className='sidebar_chats'>
       <SideBarChat addNewChat/>
       <SideBarChat/>
       <SideBarChat/>
       <SideBarChat/>
       
       </div>
        </div>
    )
}
export default sideBars;