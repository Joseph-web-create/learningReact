import Tuesday from "./tuesday";

const Header = ({ tj }) => {
  return (
    <>
      <h1 style={tj}>Monday</h1>
      <Tuesday same={tj} />
    </>
  );
};

export default Header;
