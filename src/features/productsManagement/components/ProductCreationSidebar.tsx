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
} from "@mui/material"
import { alpha } from "@mui/material/styles"
import { CiSquarePlus as AddIcon } from "react-icons/ci"
import { MdClose as CloseIcon } from "react-icons/md"
import { useState } from "react"

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
}

const SIDEBAR_WIDTH = 360

const ProductCreationSidebar: React.FC<ProductCreationSidebarProps> = ({
  open,
}) => {
  const [name, setName] = useState("ProductName")
  const [description, setDescription] = useState("ProductDescription")
  const [price, setPrice] = useState("0")
  const [imageUrl, setImageUrl] = useState("http://example.com/image.png")
  const [category, setCategory] = useState("Category")
  const [stock, setStock] = useState("0")

  const onSubmit = () => {
    console.log("Submitting product creation form with values:", {
      name,
      description,
      price,
      imageUrl,
      category,
      stock,
    })
  }

  return (
    <Drawer
      anchor="right"
      open={open}
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
        <IconButton aria-label="close sidebar" size="small">
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
        <Stack spacing={2}>
          <TextField
            label="Name"
            value={name}
            onChange={e => {
              setName(e.target.value)
            }}
            required
            autoFocus
          />
          <TextField
            label="Description"
            value={description}
            multiline
            minRows={3}
            onChange={e => {
              setDescription(e.target.value)
            }}
          />
          <TextField
            label="Price"
            value={price}
            type="number"
            slotProps={{ htmlInput: { step: "0.01", min: 0 } }}
            onChange={e => {
              setPrice(e.target.value)
            }}
          />
          <TextField
            label="Image URL"
            value={imageUrl}
            onChange={e => {
              setImageUrl(e.target.value)
            }}
          />
          <TextField
            label="Category"
            value={category}
            onChange={e => {
              setCategory(e.target.value)
            }}
          />
          <TextField
            label="Stock"
            value={stock}
            type="number"
            slotProps={{ htmlInput: { step: 1, min: 0 } }}
            onChange={e => {
              setStock(e.target.value)
            }}
          />
        </Stack>
        <Box sx={{ mt: 3, display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={onSubmit}
            fullWidth
          >
            Create Product
          </Button>
          <Button variant="outlined" fullWidth>
            Cancel
          </Button>
        </Box>
      </Box>
    </Drawer>
  )
}

export default ProductCreationSidebar
