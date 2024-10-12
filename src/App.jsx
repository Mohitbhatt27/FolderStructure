import { useState } from "react";
import folderData from "./data/folderData.json";
import Folder from "./components/Folder.jsx";

function App() {
  const [mainData, setMainData] = useState(folderData);

  return (
    <div>
      <div className="main">
        <Folder
          data={mainData}
          isRoot={true}
          setData={(data) => setMainData(data)}
        />
      </div>
    </div>
  );
}

export default App;
