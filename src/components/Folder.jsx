import { useState } from "react";

const Folder = ({ data, isRoot }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showInputBox, setShowInputBox] = useState(false);
  const [folderName, setFolderName] = useState("");

  const handleOnClickFolder = () => {
    setIsOpen(!isOpen);
  };

  const handleNewFolder = () => {
    setShowInputBox(!showInputBox);
    setFolderName("");
  };

  const handleInputChange = (e) => {
    setFolderName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("New folder name:", folderName);
      setShowInputBox(false);
      setFolderName("");
    }
  };

  return (
    <div style={{ marginTop: "5px", marginLeft: isRoot ? "0px" : "15px" }}>
      <div
        onClick={handleOnClickFolder}
        style={{
          backgroundColor: "#8f96a3",
          textAlign: "left",
          padding: "4px",
          width: "300px",
          border: "solid",
          borderRadius: "5%",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>
          {data?.type == "file" ? "💾" : "📁"} {data?.name}
        </span>
        {data?.type != "file" && (
          <span>
            <button
              onClick={(e) => {
                handleNewFolder(e);
              }}
              style={{ cursor: "pointer" }}
            >
              📁
            </button>
            <button style={{ cursor: "pointer" }}>💾</button>
          </span>
        )}
      </div>
      {showInputBox && (
        <div style={{ marginLeft: "8px" }}>
          📁
          <input
            type="text"
            autoFocus
            placeholder="name"
            style={{ margin: "2px 0px", marginLeft: "10px" }}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      )}

      <div>
        {isOpen &&
          data?.contents?.map((item, idx) => {
            return <Folder key={idx} data={item} isRoot={false} />;
          })}
      </div>
    </div>
  );
};

export default Folder;
