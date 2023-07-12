import { FC, MouseEventHandler } from "react";
import { Button, CardActions, Menu, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  id: number;
  handleMenuOpen: MouseEventHandler<HTMLButtonElement>;
  handleMenuClose: () => void;
  handleRemove: () => void;
  handleEdit: () => void;
  anchorEl: (EventTarget & HTMLButtonElement) | null;
}

export const CategoriesCardActions: FC<Props> = ({
  handleMenuOpen,
  handleMenuClose,
  handleRemove,
  handleEdit,
  id,
  anchorEl,
}) => {
  return (
    <CardActions>
      <Button size="small" onClick={handleMenuOpen}>
        Actions
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleRemove}>Remove</MenuItem>
      </Menu>
      <Button size="small">
        <NavLink to={`/tasks/${id}`}>More</NavLink>
      </Button>
    </CardActions>
  );
};
