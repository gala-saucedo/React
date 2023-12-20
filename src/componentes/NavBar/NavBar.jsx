import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>WooShop</h3>
            <div>
                <button>Remeras</button>
                <button>Pantalones</button>
                <button>Camperas</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar