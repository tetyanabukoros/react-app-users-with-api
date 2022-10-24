import { Modal, Box, Button, Stack } from '@mui/material';
import React from 'react';
import { modalStyle } from '../styles/Styles';
import { User } from '../types/User';
import { getBirthdayFormat } from "./functionHelper/getBirthdayFormat";

interface Props {
  openEditForm: boolean;
  handleCloseEditForm: () => void;
  user: User;
  handleDeleteUser: (selectedUserEmail: string) => void;
}

export const EditModal: React.FC<Props> = (props) => {
  const { openEditForm, handleCloseEditForm, user, handleDeleteUser } = props;

  const { date } = user.dob;
  const { phone } = user;
  const { first, last } = user.name;
  const { number, name } = user.location.street;

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
          <div className="modal__userInfo">
            <img
              className="modal__image"
              src={user?.picture.large}
              alt={`${first} ${last}`}
            />
            <h2 className="modal__name">{first} {last}</h2>
            <p className="modal__birth">{getBirthdayFormat(user.dob.date)}</p>
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
                className="modal__input"
                value={`${first} ${last}`}
                type="text"
              />
              <Button
                style={{
                  backgroundColor: "#52228C",
                  borderTopRightRadius: "12px",
                  borderBottomRightRadius: "12px",
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                  fontSize: "16px",
                  fontFamily: 'Poppins',
                  textTransform: 'none',
                  padding: "12px 57px",
                  height: "52px",
                }}
                variant="contained"
              >
                {'Edit'}
              </Button>
            </Stack>
            <Stack direction="row">
              <input
                className="modal__input"
                value={user.email}
                type="text"
              />
              <Button
                style={{
                  backgroundColor: "#52228C",
                  borderTopRightRadius: "12px",
                  borderBottomRightRadius: "12px",
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                  fontSize: "16px",
                  fontFamily: 'Poppins',
                  textTransform: 'none',
                  padding: "12px 57px",
                  height: "52px",
                }}
                variant="contained"
              >
                {'Edit'}
              </Button>
            </Stack>
            <Stack direction="row">
              <input
                className="modal__input"
                value={`+38${phone.slice(1, 4)}0${phone.slice(7, 9)}${phone.slice(10, 14)}`}
                type="text"
              />
              <Button
                style={{
                  backgroundColor: "#52228C",
                  borderTopRightRadius: "12px",
                  borderBottomRightRadius: "12px",
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                  fontSize: "16px",
                  fontFamily: 'Poppins',
                  textTransform: 'none',
                  padding: "12px 57px",
                  height: "52px",
                }}
                variant="contained"
              >
                {'Edit'}
              </Button>
            </Stack>
            <Stack direction="row">
              <input
                className="modal__input"
                value={user.location.city}
                type="text"
              />
              <Button
                style={{
                  backgroundColor: "#52228C",
                  borderTopRightRadius: "12px",
                  borderBottomRightRadius: "12px",
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                  fontSize: "16px",
                  fontFamily: 'Poppins',
                  textTransform: 'none',
                  padding: "12px 57px",
                  height: "52px",
                }}
                variant="contained"
              >
                {'Edit'}
              </Button>
            </Stack>
            <Stack direction="row">
              <input
                className="modal__input"
                value={`${name} ${number}`}
                type="text"
              />
              <Button
                style={{
                  backgroundColor: "#52228C",
                  borderTopRightRadius: "12px",
                  borderBottomRightRadius: "12px",
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                  fontSize: "16px",
                  fontFamily: 'Poppins',
                  textTransform: 'none',
                  padding: "12px 57px",
                  height: "52px",
                }}
                variant="contained"
              >
                {'Edit'}
              </Button>
            </Stack>
            <Stack direction="row">
              <input
                className="modal__input"
                value={`${date.slice(8, 10)}.${date.slice(5, 7)}.${date.slice(0, 4)}`}
                type="text"
              />
              <Button
                style={{
                  backgroundColor: "#52228C",
                  borderTopRightRadius: "12px",
                  borderBottomRightRadius: "12px",
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                  fontSize: "16px",
                  fontFamily: 'Poppins',
                  textTransform: 'none',
                  padding: "12px 57px",
                  height: "52px",
                }}
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