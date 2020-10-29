
const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
  }

  return (
    <header style={headerStyle}>
      <h3 style={{ fontSize: "25px", marginBottom: "15px" }}>Things React App</h3>
      <p style={{ fontSize: "19px" }}>Please add thing(s) through the input field.</p>
    </header>
  )
}

export default Header