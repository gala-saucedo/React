import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({ products }) => {
    return (
        <div className="item-list-container" onClick={() => console.log('list clicked')}>
            {products.map(product => (
                <Item key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ItemList;