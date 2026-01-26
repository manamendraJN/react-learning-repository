function NameList() {
  const names = ['Navodya', 'Alex', 'Sam']

  return (
    <div>
      <h3>Name List</h3>
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default NameList
