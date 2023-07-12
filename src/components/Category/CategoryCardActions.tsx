import { FC, MouseEventHandler, useState } from "react";
import { Button, CardActions, Menu, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks.ts";
import { removeCategory } from "../../redux/category/operations.ts";
import { setToggleEditModal } from "../../redux/category/slice.ts";
import { WarningDialog } from "../WarningDialog.tsx";

interface Props {
  id: number;
}

export const CategoryCardActions: FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);
  const [openWarningModal, setOpenWarningModal] = useState<boolean>(false);
  const handleMenuOpen: MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenWarningModal = () => {
    setOpenWarningModal(true);
  };

  const handleCloseWarningModal = () => {
    setOpenWarningModal(false);
  };

  const handleEditCategory = () => {
    void dispatch(setToggleEditModal({ categoryId: id, isOpen: true }));
    handleMenuClose();
  };

  const handleRemoveCategory = () => {
    void dispatch(removeCategory(id));
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
          <MenuItem onClick={handleOpenWarningModal}>Remove</MenuItem>
        </Menu>
        <Button size="small">
          <NavLink to={`./${id}`}>More</NavLink>
        </Button>
      </CardActions>
      <WarningDialog
        handleCloseModal={handleCloseWarningModal}
        action={handleRemoveCategory}
        openModal={openWarningModal}
        warningText={"Do you really want to delete this category?"}
      />
    </>
  );
};
