import { FC, MouseEventHandler, useState } from "react";
import { Button, CardActions, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks.ts";
import { removeCategory } from "../../redux/category/operations.ts";
import { setToggleEditModal } from "../../redux/category/slice.ts";
import { WarningDialog } from "../WarningDialog.tsx";
import { useWarningDialog } from "../../hooks/useWarningDialog.ts";
import { Category } from "../../types/category.ts";

interface Props {
  category: Category;
}

export const CategoryCardActions: FC<Props> = ({ category }) => {
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);
  const { open, handleOpen, handleClose } = useWarningDialog();
  const handleMenuOpen: MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEditCategory = () => {
    void dispatch(setToggleEditModal({ category }));
    handleMenuClose();
  };

  const handleRemoveCategory = () => {
    void dispatch(removeCategory(category.id));
    handleMenuClose();
  };

  return (
    <>
      <CardActions>
        <Button size="small" onClick={handleMenuOpen}>
          Actions
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleEditCategory}>Edit</MenuItem>
          <MenuItem onClick={handleOpen}>Remove</MenuItem>
        </Menu>
        <Button size="small">
          <Link to={`/${category.id}/tasks`}>More</Link>
        </Button>
      </CardActions>
      <WarningDialog
        handleCloseModal={handleClose}
        action={handleRemoveCategory}
        openModal={open}
        warningText={"Do you really want to delete this category?"}
      />
    </>
  );
};
