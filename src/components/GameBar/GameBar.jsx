
export default function GameBar({ onSubmit }) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.currentTarget.elements.lengthInp.value);
    event.currentTarget.reset();
  }

  return (
    <form id="form" onSubmit={handleSubmit}>
      <input
        type="number"
        name="lengthInp"
        id="length"
        min="4"
        max="10"
      />
      <button type="submit">Play</button>
    </form>
  )
}