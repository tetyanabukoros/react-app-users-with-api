import { Modal, Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { modalStyle, modalButtonStyle } from '../styles/Styles';
import { User } from '../types/User';
import { getBirthdayFormat } from './UserCard';

interface Props {
  openEditForm: boolean;
  handleCloseEditForm: () => void;
  user: User;
  handleDeleteUser: (selectedUserEmail: string) => void;
}

export const EditModal: React.FC<Props> = ({ openEditForm, handleCloseEditForm, user, handleDeleteUser }) => {
  const { date } = user.dob;
  const { phone } = user;
  const { first, last } = user.name;

  return (
    <Modal
      open={openEditForm}
      onClose={handleCloseEditForm}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Button
          style={{
            backgroundColor: "#52228C",
            fontSize: "16px",
            fontFamily: 'Poppins',
            textTransform: 'none',
            padding: "12px 57px",
            height: "48px",
            marginBottom: "73px",
            borderRadius: "12px"
          }}
          variant="contained"
          onClick={() => handleCloseEditForm()}
        >
          {'< Back'}
        </Button>
        <Stack direction="row" spacing={0}>
          <div style={{ textAlign: "center", marginRight: "48px" }}>
            <img
              style={{ borderRadius: "100px", height: "200px" }}
              src={user?.picture.large}
              alt={`${first} ${last}`}
            />
            <Typography
              style={{
                fontFamily: 'Work Sans',
                fontWeight: "700",
                fontSize: "34px",
                lineHeight: "40px",
                textAlign: "center",
                color: "#121212",
                maxWidth: "200px",
                margin: "16px 0 1px 0"
              }}
            >
              {`${first} ${last}`}
            </Typography>
            <p className="userBirth">{getBirthdayFormat(user.dob.date)}</p>
            <Button
              style={{
                backgroundColor: "#E33030",
                fontSize: "16px",
                fontFamily: 'Poppins',
                textTransform: 'none',
                padding: "12px 57px",
                height: "48px",
                width: "200px",
                marginBottom: "73px",
                borderRadius: "12px"
              }}
              variant="contained"
              onClick={() => handleDeleteUser(user.email)}
            >
              Delete
            </Button>
          </div>
          <Stack spacing={1.5}>
            <Stack direction="row">
              <input
                className="modalInputStyle"
                placeholder={`${first} ${last}`}
                type="text"
              />
              <Button
                sx={modalButtonStyle}
                variant="contained"
              >
                {'Edit'}
              </Button>
            </Stack>
            <Stack direction="row">
              <input
                className="modalInputStyle"
                placeholder={user.email}
                type="text"
              />
              <Button
                sx={modalButtonStyle}
                variant="contained"
              >
                {'Edit'}
              </Button>
            </Stack>
            <Stack direction="row">
              <input
                className="modalInputStyle"
                placeholder={`+38${phone.slice(1, 4)}0${phone.slice(7, 9)}${phone.slice(10, 14)}`}
                type="text"
              />
              <Button
                sx={modalButtonStyle}
                variant="contained"
              >
                {'Edit'}
              </Button>
            </Stack>
            <Stack direction="row">
              <input
                className="modalInputStyle"
                placeholder={user.location.city}
                type="text"
              />
              <Button
                sx={modalButtonStyle}
                variant="contained"
              >
                {'Edit'}
              </Button>
            </Stack>
            <Stack direction="row">
              <input
                className="modalInputStyle"
                placeholder={`${user.location.street.name} ${user.location.street.number}`}
                type="text"
              />
              <Button
                sx={modalButtonStyle}
                variant="contained"
              >
                {'Edit'}
              </Button>
            </Stack>
            <Stack direction="row">
              <input
                className="modalInputStyle"
                placeholder={`${date.slice(8, 10)}.${date.slice(5, 7)}.${date.slice(0, 4)}`}
                type="text"
              />
              <Button
                sx={modalButtonStyle}
                variant="contained"
              >
                {'Edit'}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  )
}