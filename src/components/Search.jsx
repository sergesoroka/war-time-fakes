function Search({ value, handleChange, placeholder }) {
  return (
    <div>
      <input
        className="h-8 w-96 rounded-full border-indigo-600 px-4"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Search;
