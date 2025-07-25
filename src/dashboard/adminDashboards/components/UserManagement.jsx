import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Avatar,
  Chip,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';

import AdminDialog from "./AdminDialog";

const UserManagement = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [currentItem, setCurrentItem] = useState(null);

  const open = Boolean(anchorEl);

  const users = [
{
      id: 1,
      name: "Ahmed Khaled",
      email: "ahmed.khaled@example.com",
      role: "Instructor",
      joinDate: "2023-01-15",
      status: "Active",
      lastLogin: "2025-06-14",
    },
    {
      id: 2,
      name: "Nour Ahmad",
      email: "nour.ahmad@example.com",
      role: "Student",
      joinDate: "2023-03-22",
      status: "Active",
      lastLogin: "2025-06-15",
    },
    {
      id: 3,
      name: "Mohammed Ali",
      email: "mohammed.ali@example.com",
      role: "Student",
      joinDate: "2024-02-10",
      status: "Suspended",
      lastLogin: "2025-05-28",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      role: "Instructor",
      joinDate: "2024-05-18",
      status: "Pending",
      lastLogin: "2025-06-10",
    },  ];

  const handleMenuClick = (event, item) => {
    setAnchorEl(event.currentTarget);
    setCurrentItem(item);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDialogOpen = (type) => {
    setDialogType(type);
    setOpenDialog(true);
    handleMenuClose();
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Box display="flex" justifyContent="flex-end" mb={3}>
        <Button 
          variant="contained" 
          startIcon={<PersonAddIcon />}
          onClick={() => handleDialogOpen("createUser")}
        >
          Add New User
        </Button>
      </Box>

      <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" mb={3}>
            User Management
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Join Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Last Login</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={2}>
                        <Avatar sx={{ width: 32, height: 32 }}>
                          <PersonIcon />
                        </Avatar>
                        {user.name}
                      </Box>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Chip 
                        label={user.role} 
                        color={user.role === "Instructor" ? "primary" : "default"} 
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{user.joinDate}</TableCell>
                    <TableCell>
                      <Chip 
                        label={user.status} 
                        color={
                          user.status === "Active" ? "success" : 
                          user.status === "Suspended" ? "error" : "warning"
                        } 
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="more"
                        aria-controls="user-menu"
                        aria-haspopup="true"
                        onClick={(e) => handleMenuClick(e, user)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleDialogOpen("editUser")}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          Edit User
        </MenuItem>
        <MenuItem onClick={() => handleDialogOpen("changeStatus")}>
          <ListItemIcon>
            {currentItem?.status === "Active" ? 
              <CancelIcon fontSize="small" color="warning" /> : 
              <CheckCircleIcon fontSize="small" color="success" />}
          </ListItemIcon>
          {currentItem?.status === "Active" ? "Suspend User" : "Activate User"}
        </MenuItem>
        <MenuItem onClick={() => handleDialogOpen("deleteUser")}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" color="error" />
          </ListItemIcon>
          <Typography color="error">Delete User</Typography>
        </MenuItem>
      </Menu>

      <AdminDialog 
        open={openDialog} 
        onClose={handleDialogClose} 
        dialogType={dialogType} 
        currentItem={currentItem} 
      />
    </>
  );
};

export default UserManagement;
