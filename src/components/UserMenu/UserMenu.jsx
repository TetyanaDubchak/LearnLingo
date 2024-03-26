import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
  return (
      <div>
          <NavLink to="/favorites">Favorites</NavLink>
          <button type='button'>Log Out</button>
    </div>
  );
};