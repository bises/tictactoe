import { Square } from "./Square"
import './board.css'
import { useState } from "react"

export const Board = () => {
    const [board, setBoard] = useState([
        '', '', '', '', '', '', '', '', ''
    ])

    const [turn, setTurn] = useState('x');
    const [isComplete, setIsComplete] = useState(false)

    const handleSquareClick = (index: number): void => {
        board[index] = turn;
        setBoard(board);
        setTurn(turn === 'x' ? '0' : 'x');
        determineWinner()
    }

    const determineWinner = () => {
        if((board[0] === board[1] && board[2] === board[1] && board[2])
        || (board[3] === board[4] && board[4] === board[5] && board[4])
        || (board[6] === board[7] && board[7] === board[8] && board[7])
        || (board[0] === board[3] && board[3] === board[6] && board[3])
        || (board[1] === board[4] && board[4] === board[7] && board[4])
        || (board[2] === board[5] && board[5] === board[8] && board[5])
        || (board[0] === board[4] && board[4] === board[8] && board[4])
        || (board[2] === board[4] && board[4] === board[6] && board[4]))
        {
            setIsComplete(true);
            return true;
        }
    }

    const handleResetClick = () => {
        setBoard([
            '', '', '', '', '', '', '', '', ''
        ]);
        setIsComplete(false);
    }

    return isComplete 
    ? <><p>Winner is {turn} <button onClick={handleResetClick}>Reset</button></p></> 
    : <div className='board'>
        {board.map((x, index) => <Square isComplete={isComplete} value={x} key={index} onSquareClick={() => handleSquareClick(index)} />)}
    </div >
}
