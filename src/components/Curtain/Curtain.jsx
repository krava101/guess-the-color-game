import css from './Curtain.module.css';

export default function Curtain({ winCondition }) {
  return (
    <ul className={css.curtainList} id='curtain'>
      {[...Array(6).keys()].map(index => (
        <li key={index} style={{ transform: `translateY(${index * (winCondition ? 0 : 40)}px)`, zIndex: index + 1 }}></li>
      ))}
    </ul>
  )   
}