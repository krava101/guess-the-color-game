import { colors } from '../../dataColors';
import css from './BottleList.module.css';

export default function BottleList ({onClick, arr}) {
  return (
    <ul className={css.bottleList} onClick={onClick}>
      {arr.length > 0 && arr.map((b, i) =>
        <li
          key={i}
          className={css.bottle}
          style={{ backgroundColor: colors[b] }}
          data-num={b}>
          <div className={css.bottleLid}></div>
        </li>
      )}
    </ul>
  )
}