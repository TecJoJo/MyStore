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
  Snackbar,
  Alert,
} from "@mui/material"
import { alpha } from "@mui/material/styles"
import { MdClose as CloseIcon } from "react-icons/md"
import { useState } from "react"
import { useAppSelector } from "../../../app/hooks"
import { useAppDispatch } from "../../../app/hooks"
import { toggleProductCreationSidebar } from "../productsManagementSlice"
import { createProductApiRequest } from "../../../api/products/createProductApiRequest"
import { useEffect } from "react"

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

const SIDEBAR_WIDTH = 360

const ProductCreationSidebar: React.FC = () => {
  const isProductCreationSidebarOpen = useAppSelector(
    state => state.productsManagement.isProductCreationSidebarOpen,
  )
  const [name, setName] = useState("ProductName")
  const [description, setDescription] = useState("ProductDescription")
  const [price, setPrice] = useState(0)
  const [imageUrl, setImageUrl] = useState("http://example.com/image.png")
  const [category, setCategory] = useState("Category")
  const [stock, setStock] = useState(0)
  const [submissionState, setSubmissionState] = useState<
    "idle" | "pending" | "succeeded" | "failed"
  >("idle")

  useEffect(() => {
    if (!isProductCreationSidebarOpen) {
      setSubmissionState("idle")
    }
  }, [setSubmissionState, isProductCreationSidebarOpen])

  const dispatch = useAppDispatch()

  const onSubmit = async () => {
    try {
      if (submissionState === "pending") return

      setSubmissionState("pending")
      await createProductApiRequest({
        name,
        description,
        price,
        imageUrl,
        category,
        stock,
      })

      setSubmissionState("succeeded")
    } catch {
      setSubmissionState("failed")
    }
  }

  const onSidebarToggling = () => {
    dispatch(toggleProductCreationSidebar())
  }

  return (
    <Drawer
      anchor="right"
      open={isProductCreationSidebarOpen}
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
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          New Product
        </Typography>
        <IconButton
          aria-label="close sidebar"
          size="small"
          onClick={onSidebarToggling}
        >
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
              setPrice(Number(e.target.value))
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
              setStock(Number(e.target.value))
            }}
          />
        </Stack>
        <Box sx={{ mt: 3, display: "flex", gap: 1 }}>
          <Button
            disabled={submissionState === "pending"}
            variant="contained"
            onClick={() => {
              void onSubmit()
            }}
            fullWidth
          >
            Create Product
          </Button>
          <Button variant="outlined" fullWidth onClick={onSidebarToggling}>
            Cancel
          </Button>
        </Box>
      </Box>
      <Box>
        <Snackbar
          open={submissionState === "succeeded" || submissionState === "failed"}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            severity={submissionState === "succeeded" ? "success" : "error"}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {submissionState === "succeeded"
              ? "Product created successfully."
              : "Failed to create product. Please try again."}
          </Alert>
        </Snackbar>
      </Box>
    </Drawer>
  )
}

export default ProductCreationSidebar
