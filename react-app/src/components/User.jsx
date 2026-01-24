function User(props) {
  return (
    <div>
      <h3>User Name: {props.name}</h3>
      <p>Age: {props.age}</p>
    </div>
  )
}

export default User