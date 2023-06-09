import { useState } from "react";
import "./App.css";
import backgroundImg from '../../assets/background.jpg'
import Header from "../Header/Header";
import AddItem from "../AddItem/AddItem";
import SearchItem from "../SearchItem/SearchItem";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todoList"))
  );

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const itemToAdd = { id, checked: false, item };
    const listItems = [...items, itemToAdd];
    setAndSaveItems(listItems);
  };

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("todoList", JSON.stringify(newItems));
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);

    setAndSaveItems(listItems);
  };

  return (
    <div className="App container-fluid">
      <Header title="To-Do List"/>
      <div  className="form-control mb-4" style={{ width:"100%"}}>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      </div>

      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;