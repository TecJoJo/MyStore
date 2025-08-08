import React from "react"
import {
  Drawer,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Stack,
  TextField,
  Divider,
  Button,
  Switch,
  FormControlLabel,
} from "@mui/material"
import { alpha } from "@mui/material/styles"
import { CiSquarePlus as AddIcon } from "react-icons/ci"
import { MdClose as CloseIcon } from "react-icons/md"

// UI-only component. Parent supplies all state & handlers.
// Intentionally no redux, no async logic.

export interface ProductCreationSidebarValues {
  name: string
  description: string
  price: string
  imageUrl: string
  category: string
  stock: string
}

export interface ProductCreationSidebarProps {
  open: boolean
  onClose: () => void
  values: ProductCreationSidebarValues
  dense?: boolean
  submitting?: boolean
  disableSubmit?: boolean
  onFieldChange: (
    field: keyof ProductCreationSidebarValues,
    value: string,
  ) => void
  onToggleDense?: (next: boolean) => void
  onSubmit: () => void
}

const SIDEBAR_WIDTH = 360

const ProductCreationSidebar: React.FC<ProductCreationSidebarProps> = ({
  open,
  onClose,
  values,
  dense = false,
  submitting = false,
  disableSubmit,
  onFieldChange,
  onToggleDense,
  onSubmit,
}) => {
  const size = dense ? "small" : "medium"

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: theme => ({
            width: SIDEBAR_WIDTH,
            display: "flex",
            flexDirection: "column",
            bgcolor: alpha(theme.palette.background.paper, 0.98),
          }),
        },
      }}
    >
      <Toolbar
        sx={theme => ({
          gap: 1,
          px: 2,
          minHeight: 64,
          bgcolor: alpha(
            theme.palette.primary.main,
            theme.palette.action.activatedOpacity,
          ),
        })}
      >
        <AddIcon size={22} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          New Product
        </Typography>
        <IconButton onClick={onClose} aria-label="close sidebar" size="small">
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <Box
        sx={{
          p: 2,
          flexGrow: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack spacing={dense ? 1 : 2}>
          <TextField
            label="Name"
            value={values.name}
            size={size}
            onChange={e => {
              onFieldChange("name", e.target.value)
            }}
            required
            autoFocus
          />
          <TextField
            label="Description"
            value={values.description}
            size={size}
            multiline
            minRows={3}
            onChange={e => {
              onFieldChange("description", e.target.value)
            }}
          />
          <TextField
            label="Price"
            value={values.price}
            size={size}
            type="number"
            slotProps={{ htmlInput: { step: "0.01", min: 0 } }}
            onChange={e => {
              onFieldChange("price", e.target.value)
            }}
          />
          <TextField
            label="Image URL"
            value={values.imageUrl}
            size={size}
            onChange={e => {
              onFieldChange("imageUrl", e.target.value)
            }}
          />
          <TextField
            label="Category"
            value={values.category}
            size={size}
            onChange={e => {
              onFieldChange("category", e.target.value)
            }}
          />
          <TextField
            label="Stock"
            value={values.stock}
            size={size}
            type="number"
            slotProps={{ htmlInput: { step: 1, min: 0 } }}
            onChange={e => {
              onFieldChange("stock", e.target.value)
            }}
          />
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={dense}
                onChange={e => onToggleDense?.(e.target.checked)}
              />
            }
            label="Dense fields"
            sx={{ alignSelf: "flex-start", mt: 0.5 }}
          />
        </Stack>
        <Box sx={{ mt: 3, display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            disabled={(disableSubmit ?? false) || submitting}
            onClick={onSubmit}
            fullWidth
          >
            {submitting ? "Saving..." : "Create"}
          </Button>
          <Button variant="outlined" onClick={onClose} fullWidth>
            Cancel
          </Button>
        </Box>
      </Box>
    </Drawer>
  )
}

export default ProductCreationSidebar
