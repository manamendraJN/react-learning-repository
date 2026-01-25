function StatusMessage({ isLoggedIn }) {
  return (
    <p>{isLoggedIn ? 'Welcome back!' : 'Please log in'}</p>
  )
}

export default StatusMessage
