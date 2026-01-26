function UserList() {
  const users = [
    { id: 1, name: 'Navodya', age: 22 },
    { id: 2, name: 'Alex', age: 25 },
    { id: 3, name: 'Sam', age: 20 }
  ]

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
