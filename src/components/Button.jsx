function Button(props) {
  return (
    <div>
        <label htmlFor={props.htmlFor} className={props.className}>{props.labelText}</label>
        <input className={props.classNameInput} type={props.type} name={props.name}  id={props.id}/>
    </div>
  )
}

export default Button