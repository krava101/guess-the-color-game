import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <Link to='/about'>About the game</Link>
      <Link to='/game'>Play</Link>
    </div>
  )
}