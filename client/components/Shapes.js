
import { useDispatch } from 'react-redux';
import { setSelectedShape } from '../state/shapes/shapesSlice';
const Shapes = ({
    shapes,
    onClick
}) => {
    const dispatch = useDispatch();
  return (
    <div className="shapes">
        <h1>Shapes</h1>
        <ul>
            {shapes.map((shape, i) => (
                <li key={i} onClick={() => dispatch(setSelectedShape(shape))}>{shape}</li>
            ))}
        </ul>
    </div>
  );
}

export default Shapes;
