import React, { useEffect, useState } from "react";
import NotesItem from "./NotesItem";
import axios from "axios";
import { baseURL } from "../utils/constant";
import Popup from "./Popup";
import "./Home.css";
import "./NotesItem.css";

const Notes = () => {
  const [note, setNote] = useState([]);
  const [input, setInput] = useState({notes: ""});
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  const fetchNotes = async () => {
    try {
      const res = await axios.get(`${baseURL}/notes`);
      setNote(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [updateUI]);

  const saveNotes = () => {
    axios
      .post(`${baseURL}/save`, input)
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setInput({ notes: "",});
      })
      .catch((err) => console.log(err));
  };

  const inputStyle = {
    backgroundColor: "#e0f7fa",
    border: "2px solid #0288d1",
    borderRadius: "20px",
    padding: "10px 15px",
    fontSize: "16px",
    color: "#0277bd",
    outline: "none",
    transition: "border-color 0.3s ease",
    marginRight: "10px",
  };

 
  const renderNotes= () => {
    return note
      
      .map((el) => (
        <NotesItem
          key={el._id}
          text={el.notes}
          
          id={el._id}
          setUpdateUI={setUpdateUI}
          setShowPopup={setShowPopup}
          setPopupContent={setPopupContent}
          popupContent={popupContent}
        />
      ));
  };


  return (
    <>
      <div className="background"></div>
      <div
        className="container"
        style={{
          color: "#87CEEB",
          fontWeight: "bold",
          margin: "10px 0px",
          marginTop: "80px",
          alignItems: "center",
        }}
      >
        <h1 className="title text-center">Notes</h1>

        <div className="input_holder text-center">
          <input
            value={input.notes}
            onChange={(e) => setInput({ ...input, notes: e.target.value })}
            style={inputStyle}
            type="text"
            placeholder="Add a note"
            onFocus={(e) => (e.target.style.borderColor = "#01579b")}
            onBlur={(e) => (e.target.style.borderColor = "#0288d1")}
          />
         
          
          <button onClick={saveNotes} className="beautiful-button">
            Add
          </button>
        </div>
        {/* <div className='list'>
            <h1 className='title text-center'>HR</h1>
            <h1 className='title text-center'>Safety</h1>
            <h1 className='title text-center'>Worker</h1>
                  {note.map(el =><NotesItem key={el._id} text={el.notes} post={el.posts} id={el._id} setUpdateUI={setUpdateUI} setShowPopup={setShowPopup} setPopupContent={setPopupContent} popupContent={popupContent} />)}
            </div> */}
        {/* <div className="dropdown">
                  <button className="dropbtn">Dropdown</button>
                  <div className="dropdown-content">
                  {note.map(el =><NotesItem key={el._id} text={el.notes} post={el.posts} id={el._id} setUpdateUI={setUpdateUI} setShowPopup={setShowPopup} setPopupContent={setPopupContent} popupContent={popupContent} />)}
                  </div>
                </div> */}

        <div className="list">
       {renderNotes()}
      </div>
      {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          popupContent={popupContent}
          setUpdateUI={setUpdateUI}
        />

      )}
      </div>
    </>
  );
};
export default Notes;
