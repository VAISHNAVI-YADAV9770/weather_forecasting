function SearchBar() {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter city name..."
      />

      <button>
        Search
      </button>
    </div>
  );
}

export default SearchBar;