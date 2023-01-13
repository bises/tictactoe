import { MouseEventHandler } from 'react';
import './squares.css'

interface SquareProp {
    value: string;
    isComplete: boolean;
    onSquareClick: MouseEventHandler;
}

export const Square = ({value, isComplete, onSquareClick} : SquareProp) => {
    return <button className={'squares'} onClick={onSquareClick} disabled={isComplete}>
        {value}
    </button>
}