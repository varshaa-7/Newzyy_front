import React from 'react'
import axios from 'axios';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Notes from './Notes';
import { baseURL } from '../utils/constant';
import './NotesItem.css'

const NotesItem = ({text,id, setUpdateUI,setShowPopup,setPopupContent})=> {
    const deleteNotes=()=>{
        axios.delete(`${baseURL}/delete/${id}`).then(res =>{
            console.log(res.data);
            setUpdateUI((prevState)=>!prevState)
        })
    }
    const updateNotes =()=>{
        setPopupContent({text, id});
        setShowPopup(true);
    }

    

  return (
    <>
      <div className='notes text-center' style={notesContainerStyle}>
                <div className='text-center' style={noteStyle}>
                    <div style={innerContainerStyle}>
                        <div style={textStyle}>{text}</div>
                        <CiEdit className='icon' style={iconStyle} onClick={updateNotes} />
                        <MdDelete className='icon' style={iconStyle} onClick={deleteNotes} />
                    </div>
                </div>
            </div>
    </>
  );
};
const notesContainerStyle = {
    display: 'flex',
    color: 'black',
    alignItems: 'center',
    gap: '20px',
};

const noteStyle = {
    display: 'flex',
    color: 'black',
    alignItems: 'center',
    gap: '20px',
    backgroundColor: '#d1c4e9', // Light purple background
    margin: '5px',
    borderRadius: '15px',
    padding: '10px 15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const innerContainerStyle = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
};

const textStyle = {
    color: '#512da8', // Darker purple text
    fontSize: '16px',
    fontWeight: 'bold',
};

const iconStyle = {
    cursor: 'pointer',
    color: '#1e88e5', // Blue for icons
    fontSize: '20px',
};

export default NotesItem
