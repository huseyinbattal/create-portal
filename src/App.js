import React, { useState } from "react";
import Modal from "./Modal";
import "./App.css";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
  margin: "20px 20px",
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "pink",
  color: "black",
  padding: "20px",
  marginTop: "100px",
  width: "500px",
  margin: "0 auto",
  border: "1px solid purple",
  borderRadius: "20px",
  boxShadow:"10px 10px wheat"
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
  

      <div style={OTHER_CONTENT_STYLES}>
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid modi
        voluptatem voluptatum provident! Ad magnam vel id sapiente enim
        excepturi, nulla dicta quia suscipit fugit eos, ducimus soluta explicabo
        totam exercitationem ullam alias maxime nesciunt aliquid aperiam.
        Doloribus, mollitia molestiae, a rem ea similique eum explicabo
        repellendus perferendis ullam recusandae ut cupiditate ex! Quaerat
        repudiandae atque omnis ullam reprehenderit autem suscipit eaque totam
        enim id libero, deserunt voluptate quisquam. Optio sapiente, unde
        dignissimos corrupti voluptatibus accusantium. Possimus doloremque fuga
        ex, cumque beatae sint sunt libero, est cupiditate accusantium unde
        consectetur, perspiciatis hic. Veniam soluta ducimus, voluptatem illum
        rerum facere nesciunt?
      </div>
          <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log("clicked")}>
        <button className="open-btn" onClick={() => setIsOpen(true)}>Rate The Text</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Please, rate the text.
        </Modal>
      </div>
    </div>
  );
}
