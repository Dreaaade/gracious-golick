import { useState } from "react";

export default function PotluckTracker() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");
  const [categories, setCategories] = useState({
    mainDish: "",
    sideDish: "",
    dessert: "",
    drinks: "",
    other: "",
  });

  const addItem = () => {
    const newItems = Object.entries(categories)
      .filter(([_, item]) => item)
      .map(([category, item]) => ({ name, category, item }));

    if (name && newItems.length > 0) {
      setItems([...items, ...newItems]);
      setSavedName(name);
      setCategories({
        mainDish: "",
        sideDish: "",
        dessert: "",
        drinks: "",
        other: "",
      });
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setSavedName("");
  };

  const handleCategoryChange = (category, value) => {
    setCategories({ ...categories, [category]: value });
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Lato, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        background: "linear-gradient(135deg, #800080, #a64ca6)",
        color: "#fff",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ color: "#fff" }}>At Her Table Bring & Share Sign Up</h2>
      <p>
        {" "}
        Please list what you will be{" "}
        <b>
          <i>Bringing</i>
        </b>{" "}
        &{" "}
        <b>
          <i>Sharing</i>
        </b>{" "}
        at <i>At Her</i> table.
      </p>
      {!savedName ? (
        <input
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
          style={{
            display: "block",
            marginBottom: "10px",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "100%",
          }}
        />
      ) : (
        <div style={{ marginBottom: "10px" }}>
          <strong>Name: {savedName}</strong>{" "}
          <button onClick={() => setSavedName("")}>Change</button>
        </div>
      )}
      {["Main Dish", "Side Dish", "Dessert", "Drinks", "Other"].map(
        (category) => (
          <div key={category}>
            <h3 style={{ color: "#fff" }}>{category}</h3>
            <input
              placeholder={category}
              value={categories[category.toLowerCase().replace(" ", "")]}
              onChange={(e) =>
                handleCategoryChange(
                  category.toLowerCase().replace(" ", ""),
                  e.target.value
                )
              }
              style={{
                display: "block",
                marginBottom: "10px",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "100%",
              }}
            />
          </div>
        )
      )}
      <button
        onClick={addItem}
        style={{
          backgroundColor: "#FFD700",
          color: "#800080",
          padding: "10px 15px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Add Item
      </button>

      <h2 style={{ marginTop: "20px", color: "#fff" }}>
        Potluck Contributions
      </h2>
      {items.length > 0 ? (
        items.map((i, index) => (
          <div
            key={index}
            style={{
              marginTop: "10px",
              backgroundColor: "#e9ecef",
              color: "#000",
              padding: "10px",
              borderRadius: "4px",
            }}
          >
            <strong>{i.name}</strong>: {i.item}{" "}
            {i.category && <span> - {i.category}</span>}
          </div>
        ))
      ) : (
        <p>No contributions yet. Be the first to add yours!</p>
      )}
    </div>
  );
}
