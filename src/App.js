import "./styles.css";
import { useState, useEffect } from "react";
import Search from "./Search";
export default function App() {
  const [data, setData] = useState([]);
  const [copyData, setCopyData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const searchFunc = (val) => {
    if (val === "") {
      setData(copyData);
      return;
    }
    let res = copyData.filter(
      (item) =>
        item.firstName.toLowerCase().startsWith(val) ||
        item.email.toLowerCase().startsWith(val)
    );
    setData(res);
  };
  const fetchData = () => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data.users);
        setCopyData(data.users);
      });
  };
  return (
    <div className="App">
      <h1 style={{ color: "purple" }}>Fetch & Filter</h1>
      <Search search={searchFunc} />
      <table style={{ border: 1 }}>
        {data &&
          data.map((user) => {
            return (
              <tbody key={user.id}>
                <tr>
                  <td>{user.firstName + " " + user.lastName}</td>
                  <td>{user.email}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
}
