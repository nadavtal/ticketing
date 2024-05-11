

const Shapes = ({
    shapes,
    onClick
}) => {
    
  return (
    <div className="shapes">
        <h1>Shapes</h1>
        <ul>
            {shapes.map((shape, i) => (
                <li key={i} onClick={() => onClick(shape)}>{shape}</li>
            ))}
        </ul>
    </div>
  );
}

export default Shapes;
