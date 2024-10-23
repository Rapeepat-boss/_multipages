import './Variable.css';
function Variable({type, name, value, setValue}) {
    
    
  return (
    <div className='Variable-container'>
  <h3 className='Variable-title'>{name ||  "Counter"}</h3>
  <button className='btn btn-danger btn-variable' onClick={() => setValue(value - 1)}>-</button>
  <span className='Variable-value'>{type && type === 'int' ? value : value.toFixed(2)}</span>
  <button className='btn btn-success btn-variable' onClick={() => setValue(value + 1)}>+</button>
  </div>
);
}

export default Variable;
