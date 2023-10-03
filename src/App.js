import { useContext } from "react";
import { Card } from "./Card";
import { DarkModeContext } from "./DarkModeContext";
import { DataContext } from "./DataContext";

function App() {

  const { darkMode, switchModes } = useContext(DarkModeContext);
  const {fetchData} = useContext(DataContext);
  const styles = {
    background: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black',
    width: '100vw',
    height: '100vh'
  }


  return (
    <div style={styles}>
      <Card>
        hello
      </Card>
      <button onClick={switchModes}>switch modes</button>
      <button onClick={fetchData}>refresh data</button>
    </div>
  );
}

export default App;
