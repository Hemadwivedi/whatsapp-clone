import React,{useState,useEffect} from 'react';
import './Chats.css';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons';

function Chats() {
    const [seed, setSeed]=useState("");
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    }, []);
    return (
        <div className="chat">
        <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className="chat_headerInfo">
        <h3>Room name</h3>
        <p>last seen at....</p>
        </div>
        <div className="chat_headerRight">
        <IconButton>
        <SearchOutlined/>
        </IconButton>
        <IconButton>
       <AttachFile/>
        </IconButton>
        <IconButton>
       <MoreVert/>
        </IconButton>
        </div>
        </div>
        <div className="chat_body">
       <p className="chat_message">
       hey guys
       hey gyus
       </p>
       <p className="chat_message">
       hey guys
       hey gyus
       </p>

        </div>
        <div className="chat_footer"></div>
            
        </div>
    )
}

export default Chats
