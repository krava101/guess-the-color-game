import { NavLink } from "react-router-dom";
import GameBar from "../../components/GameBar/GameBar";
import { useEffect, useState } from "react";
import { getUniqNumber } from "../../getUniqNum";
import css from './GamePage.module.css';
import { colors } from '../../dataColors';


export default function GamePage() {
  const [bottles, setBottles] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [length, setLength] = useState(0);
  const [firstBottle, setFirstBottle] = useState(null);
  const [secondBottle, setSecondBottle] = useState(null);

  useEffect(() => {
    if (length) {
      setBottles(getUniqNumber(length));
      setNumbers(getUniqNumber(length));
      setLength(0);
    }
    if (secondBottle) {
      bottleSwitch();
    }
  }, [length, secondBottle, bottles]);

  const bottleSwitch = () => {
    const firstBottleInd = bottles.indexOf(firstBottle);
      const secondBottleInd = bottles.indexOf(secondBottle);
      if (firstBottleInd < secondBottleInd) {
        setBottles([...bottles.slice(0, firstBottleInd), secondBottle , ...bottles.slice(firstBottleInd + 1, secondBottleInd), firstBottle, ...bottles.slice(secondBottleInd + 1, bottles.length)])
      } else {
        setBottles([...bottles.slice(0, secondBottleInd), firstBottle , ...bottles.slice(secondBottleInd + 1, firstBottleInd), secondBottle, ...bottles.slice(firstBottleInd + 1, bottles.length)])
      }
      setFirstBottle(null);
      setSecondBottle(null);
  }
  
  const setNewLength = (num) => {
    setLength(num);
  }

  const handleBottleClick = (event) => {
    if (event.target !== event.currentTarget && getCoincidence() < bottles.length) {
      const value = event.target.dataset.num
      if (!firstBottle) {
        setFirstBottle(value);
      }
      else if (firstBottle && value !== firstBottle) {
        setSecondBottle(value);
      }
    }
  }

  const getCoincidence = () => {
    let coincidence = 0;
    for (let i = 0; i < bottles.length; i++){
      if (bottles[i] === numbers[i]) coincidence++;
    }
    return coincidence
  }

  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <GameBar onSubmit={setNewLength} />
      <ul className={css.bottleList} onClick={handleBottleClick}>
        {bottles.length > 0 && bottles.map((b, i) =>
          <li
            key={i}
            className={css.bottle}
            style={{ backgroundColor: colors[b] }}
            data-num={b}>
          </li>
        )}
      </ul>
      <p>Correct: {getCoincidence()}</p> 
      {getCoincidence() == bottles.length && bottles.length > 0 && <p>You win!</p>}
    </div>
  )
}