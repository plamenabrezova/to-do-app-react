import AddItem from "../AddItem/AddItem";
import SearchItem from "../SearchItem/SearchItem";

function TopSection({newItem, setNewItem, handleSubmit, search, setSearch}) {
  return (
    <div className="form-control mb-4" style={{ width: "100%" }}>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
    </div>
  );
}

export default TopSection;
