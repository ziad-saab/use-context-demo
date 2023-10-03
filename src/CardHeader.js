import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import { DataContext } from "./DataContext";

export function CardHeader() {
  const { darkMode } = useContext(DarkModeContext);
  const {data, loading} = useContext(DataContext);
  const styles = {
    fontWeight: 'bold',
    background: darkMode ? '#555' : '#ddd',
    color: darkMode ? '#ddd' : '#555'
  }
  return (
    <div style={styles}>HEADER {loading ? 'loading...' : data}</div>
  )
}