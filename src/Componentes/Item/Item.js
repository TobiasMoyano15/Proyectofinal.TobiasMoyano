import Item from "../Item/Item.css"
import { Link } from "react-router-dom"

const Item = ({ id, nombre, img, precio, stock }) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <link to={'/Item' / ${id}} className="Option">Ver Detalle</link>
            </footer>
        </article >
    )}
export default Item