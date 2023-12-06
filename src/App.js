import "./App.css";
import React, { useState } from "react";
import { marked } from "marked";
import { useLocalStorage } from "./useLocalStorage";
import Document from "./component/Document";

const App = () => {
  const { setItem, getItem } = useLocalStorage("value");
  const [code, setCode] = useState(getItem("value"));
  const [compiled, setCompiled] = useState("");
  const [preview, showPreview] = useState(true);
  const [md, showMd] = useState(true);
  const [docs, showDocs] = useState(true);

  const openMD = () => {
    console.log(0);
    showMd(true);
    showPreview(false);
    showDocs(false);
  };

  const openPreview = () => {
    console.log(0);
    showPreview(true);
    showMd(false);
    showDocs(false);
  };

  const openDocs = () => {
    console.log(0);
    showDocs(true);
    showMd(false);
    showPreview(false);
  };

  const handleChange = (e) => {
    setCode(e.target.value);
    setItem(e.target.value);
    setCompiled(marked.parse(code));
  };

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="btn">
            MarkDown
          </button>
          <button onClick={openPreview}>Preview</button>
          <button onClick={openDocs}>Docs</button>
        </div>
        {docs && !md && !preview ? (
          <Document />
        ) : preview && !docs && !md ? (
          <div>
            <textarea value={compiled} />
          </div>
        ) : (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
