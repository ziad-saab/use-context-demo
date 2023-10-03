import { useContext } from "react";
import { CardHeader } from "./CardHeader"
import { DarkModeContext } from "./DarkModeContext";

export function Card(props) {
  const { darkMode } = useContext(DarkModeContext);

  const styles = {
    width: 300,
    height: 200,
    background: darkMode ? '#333' : '#eee',
    color: darkMode ? '#eee' : '#333',
    margin: '1em'
  }
  return (
    <div style={styles}>
      <CardHeader />
      {props.children}
    </div>
  )
}