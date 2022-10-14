import react, {useState} from 'react';

import './ItemCount.css';

const ItemCount = ({ stock, initial,  onAdd }) => {
    const [stockAvailable, setStockAvailable] = useState(stock);
    const [disabled, setDisabled] = useState(stockAvailable <= 0);  // Si no queda stock entonces deshabilita este componente
    const [counter, setCounter] = useState(initial); // Si no queda stock entonces el contador es 0

    const increase = () => {
        if(counter < stockAvailable)
            setCounter(counter+1)
    }

    const decrease = () => {
        (counter > 0) && setCounter(counter - 1);
    }

    return (
        <div className='container'>
            <button onClick={decrease}>-</button>
            <span>{counter}</span>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default ItemCount;
   