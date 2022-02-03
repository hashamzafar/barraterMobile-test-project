import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState } from "react";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen, value) => () => {
    setOpen(newOpen);
    setSelected(value);
  };
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState("");
  console.log(...title);
  console.log(...description);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting title and description ${title} ${description}`);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <Box sx={{ textAlign: "center", pt: 1 }}>
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
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Puller />
        <Typography sx={{ p: 2, color: "text.secondary" }}></Typography>

        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          {selected === "title" ? (
            <label>
              Title:
              <textarea
                className="d-block"
                type="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Button type="submit" value="" onClick={toggleDrawer(false)}>
                Conferma
              </Button>
            </label>
          ) : (
            <label>
              description:
              <textarea
                className="d-block"
                type="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button
                type="submit"
                value=""
                className="btn-success"
                variant="success"
                onClick={toggleDrawer(false)}
              >
                Conferma
              </Button>
            </label>
          )}
          <Skeleton variant="rectangular" height="100%" />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
