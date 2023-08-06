import reactLogo from "../../assets/logo.jpg"
import carritoSvg from "../../assets/carrito.svg"
import style from "./HeaderContainer.module.css"

const HeaderContainer = () => {
  return (
    <div className={style["__containerHeader"]}>
        <img src={reactLogo} className={style["__logo"]} alt="React logo" />

        <div className={style["__containerFrom"]}>
        <input type="text" className="form-control m-3"   placeholder="BUSCAR" aria-label="Recipie"/> 
        <button className="btn btn-success">BUSCAR</button>
        </div>

        <div className={style["__containerCarrito"]}>
        <img src={carritoSvg} className={style["__containerCarritoSvgCarrito"]} alt="React carrito" />
            <p>0</p>
        </div>    
    </div>
  )
}

export default HeaderContainer