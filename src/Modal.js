import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "50px",
  zIndex: 1000,
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid purple",
  gap: "20px",
  width: "300px",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
    

        <button className="close-btn" onClick={onClose}>
       
          X
        </button>
        {children}
        <div>
          {" "}
          <button className="btn-vote" onClick={() => {
            alert("You gave 1 point",onClose())
          }}>1</button>
          <button className="btn-vote" onClick={()=>alert("You gave 2 points",onClose())}>2</button>
          <button className="btn-vote" onClick={()=>alert("You gave 3 points",onClose())}>3</button>
          <button className="btn-vote" onClick={()=>alert("You gave 4 points",onClose())}>4</button>
          <button className="btn-vote" onClick={()=>alert("You gave 5 points",onClose())}>5</button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
