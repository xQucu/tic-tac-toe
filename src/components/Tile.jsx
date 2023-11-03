import Cross from './Cross';
import Circle from './Circle';
const Tile = ({ action, value }) => {
  return (
    <div onClick={action}>
      {value === 'X' ? <Cross /> : value === 'O' && <Circle />}
    </div>
  );
};``

export default Tile;
