import { NavLink } from 'react-router-dom';


export const Navigation = () => {

  return (
      <nav>
      <NavLink to="/" end>
        <svg width='28px' height='28px'>
          <use href='#icon-flag'></use>
        </svg>
        LearnLingo</NavLink>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
    </nav>
  );
};