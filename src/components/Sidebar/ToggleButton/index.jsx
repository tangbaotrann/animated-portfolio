import IconSvgToggle from "../IconSvgToggle";

function ToggleButton({ setOpen }) {
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <button className="toggle-btn" onClick={handleOpen}>
      <IconSvgToggle />
    </button>
  );
}

export default ToggleButton;
