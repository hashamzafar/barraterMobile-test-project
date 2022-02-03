import { useState } from "react";
import Button from "@mui/material/Button";
import SwipeableEdgeDrawer from "../Demo/Demo";
const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  console.log(...title);
  console.log(...description);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting title and description ${title} ${description}`);
  };

  const toggleDrawer = (newOpen, value) => () => {
    setOpen(newOpen);
    setSelected(value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            className="d-block"
            type="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onClick={toggleDrawer(true, "title")}
          />
        </label>

        <label>
          Description:
          <input
            className="d-block"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onClick={toggleDrawer(true, "description")}
          />
        </label>
        <Button type="submit" value="Submit">
          Submit
        </Button>
      </form>
      <SwipeableEdgeDrawer
        open={open}
        selected={selected}
        title={title}
        description={description}
        toggleDrawer={toggleDrawer}
        setTitle={setTitle}
        setDescription={setDescription}
        setSelected={setSelected}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};
export default Form;
