import React, { useState } from 'react';

const NumberPlusMinus = (props) => {
    const [count, setCount] = useState(Number(0));

    return(
        <>
            <button className='minus' onClick={() => {
                setCount( count-Number(props.step) )}}>-
            </button>

            {count}
        
            <button className='plus' onClick={() => {
                setCount( count+Number(props.step) )}}>+
            </button>
        </>
    )
}

export default NumberPlusMinus;