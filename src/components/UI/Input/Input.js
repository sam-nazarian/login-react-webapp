import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

// if ref is set from parent, then we can access ref
// forwardRef needs to be used to enable the second parameter (the ref parameter)
// forwardRef returns a react component that is cable of being bound to a ref
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  // activate will be called from outside the input
  const activate = () => {
    inputRef.current.focus();
  };

  // make a function or value available to the parent elm through refs
  useImperativeHandle(ref, () => {
    return {
      // accesible to the outside/parent
      focus: activate,
    };
  });

  return (
    <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={inputRef} type={props.type} id={props.id} value={props.value} onChange={props.onChange} onBlur={props.onBlur} />
    </div>
  );
});

export default Input;
