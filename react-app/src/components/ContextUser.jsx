import { useContext } from 'react'
import UserContext from '../context/UserContext'

function ContextUser() {
  const user = useContext(UserContext)

  return (
    <div>
      <h2>Context User</h2>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  )
}

export default ContextUser
