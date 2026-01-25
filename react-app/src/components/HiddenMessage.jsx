function HiddenMessage({ isVisible }) {
  if (!isVisible) {
    return null
  }

  return <p>This message is visible</p>
}

export default HiddenMessage
