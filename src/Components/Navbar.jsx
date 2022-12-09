import React, {useContext} from "react"; 
import { Link} from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
const{dispatch,state}=useContext(ContextGlobal)
console.log(state)  
return (
    <nav id="nav" className={state.theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className="links">
      <Link to="/">Home</Link>
          <Link to="/contacto">Contact</Link>
          <Link to="/favs">Favs</Link>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className="favButton" onClick={() => dispatch({type: "theme"})}>Change theme</button>
    </nav>
  )
}

export default Navbar