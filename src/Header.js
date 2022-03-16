const Header = ({ title }) => {
  const headerStyle = {
    backgroundColor: "mediumblue",
    color: "#fff",
  };

  return (
    <header style={headerStyle}>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Coding To-Do List",
};

export default Header;
