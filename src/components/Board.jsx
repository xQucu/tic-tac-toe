import { useEffect, useState } from 'react';
import '../styles/Board.css';
import Tile from './Tile';

const Board = () => {
  const [status, setStatus] = useState(Array(9).fill(null));
  const [sign, setSign] = useState('X');
  const update = (number) => {
    if (status[number] === null) {
      setSign((lastState) => (lastState === 'X' ? 'O' : 'X'));
      setStatus((lastStatus) =>
        lastStatus.map((item, index) => (index === number ? sign : item))
      );
    }
  };
  useEffect(() => {
    const isWon = () => {
      const calculateIfWon = (a, b, c) => {
        if (
          status[a] === status[b] &&
          status[b] === status[c] &&
          status[a] !== null
        ) {
          return status[a];
        } else {
          return false;
        }
      };
      return (
        calculateIfWon(0, 1, 2) ||
        calculateIfWon(0, 4, 8) ||
        calculateIfWon(0, 3, 6) ||
        calculateIfWon(2, 5, 8) ||
        calculateIfWon(2, 4, 6) ||
        calculateIfWon(3, 4, 5) ||
        calculateIfWon(6, 7, 8) ||
        calculateIfWon(1, 4, 7)
      );
    };
    if (isWon()) {
      setStatus(Array(9).fill(null));
      alert(`${isWon()} won!`);
    } else if (!status.includes(null)) {
      setStatus(Array(9).fill(null));
      alert('draw');
    }
  }, [status]);

  return (
    <div className="board">
      {Array(9)
        .fill()
        .map((_, index) => (
          <Tile
            key={index}
            value={status[index]}
            action={() => update(index)}
          />
        ))}
    </div>
  );
};

export default Board;
