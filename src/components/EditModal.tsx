import { Modal, Box, Button, Stack } from '@mui/material';
import React, { useState } from 'react';
import { modalStyle } from '../styles/Styles';
import { User } from '../types/User';
import { getBirthdayFormat } from "./functionHelper/getBirthdayFormat";

interface Props {
  openEditForm: boolean;
  handleCloseEditForm: () => void;
  user: User;
  handleDeleteUser: (userId: string) => void;
  handleRenameUser: (userId: string, name: string) => void;
  handleChangeEmail: (userId: string, email: string) => void;
  handleChangePhone: (userId: string, phone: string) => void;
  handleChangeCity: (userId: string, city: string) => void;
  handleChangeAdress: (userId: string, adress: string) => void;
  handleChangeDate: (userId: string, date: string) => void;
}

export const EditModal: React.FC<Props> = (props) => {
  const {
    openEditForm,
    handleCloseEditForm,
    user,
    handleDeleteUser,
    handleRenameUser,
    handleChangeEmail,
    handleChangePhone,
    handleChangeCity,
    handleChangeAdress,
    handleChangeDate
  } = props;

  const [userName, setUserName] = useState(user.name.fullname)
  const [editName, setEditName] = useState(false);
  const [userEmail, setUserEmail] = useState(user.email)
  const [editEmail, setEditEmail] = useState(false);
  const [userPhone, setUserPhone] = useState(user.phone)
  const [editPhone, setEditPhone] = useState(false);
  const [userCity, setUserCity] = useState(user.location.city)
  const [editCity, setEditCity] = useState(false);
  const [userAdress, setUserAdress] = useState(user.location.street.adress)
  const [editAdress, setEditAdress] = useState(false);
  const [userDate, setUserDate] = useState(user.dob.date)
  const [editDate, setEditDate] = useState(false);

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
              alt={user.name.fullname}
            />
            <h2 className="modal__name">{userName}</h2>
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
              onClick={() => {
                handleDeleteUser(user.login.uuid);
                handleCloseEditForm();
              }}
            >
              Delete
            </Button>
          </div>
          <Stack spacing={1.5}>
            <Stack direction="row">
              <input
                className={`${editName ? 'modal__input-active' : 'modal__input'}`}
                value={userName}
                type="text"
                onChange={(event) => {
                  if (editName) {
                    setUserName(event.target.value);
                  }
                }}
              />
              <button
                className="modal__editButton"
                onClick={() => {
                  setEditName(true)

                  if (editName) {
                    handleRenameUser(user.login.uuid, userName);
                    setEditName(false)
                  }
                }}
              >
                {!editName ? 'Edit' : 'Update'}
              </button>
            </Stack>
            <Stack direction="row">
              <input
                className={`${editEmail ? 'modal__input-active' : 'modal__input'}`}
                value={userEmail}
                type="text"
                onChange={(event) => {
                  if (editEmail) {
                    setUserEmail(event.target.value);
                  }
                }}
              />
              <button
                className="modal__editButton"
                onClick={() => {
                  setEditEmail(true)
                  if (editEmail) {
                    handleChangeEmail(user.login.uuid, userEmail);
                    setEditEmail(false)
                  }
                }}
              >
                {!editEmail ? 'Edit' : 'Update'}
              </button>
            </Stack>
            <Stack direction="row">
              <input
                className={`${editPhone ? 'modal__input-active' : 'modal__input'}`}
                value={userPhone}
                type="text"
                onChange={(event) => {
                  if (editPhone) {
                    setUserPhone(event.target.value);
                  }
                }}
              />
              <button
                className="modal__editButton"
                onClick={() => {
                  setEditPhone(true)
                  if (editPhone) {
                    handleChangePhone(user.login.uuid, userPhone);
                    setEditPhone(false)
                  }
                }}
              >
                {!editPhone ? 'Edit' : 'Update'}
              </button>
            </Stack>
            <Stack direction="row">
              <input
                className={`${editCity ? 'modal__input-active' : 'modal__input'}`}
                value={userCity}
                type="text"
                onChange={(event) => {
                  if (editCity) {
                    setUserCity(event.target.value);
                  }
                }}
              />
              <button
                className="modal__editButton"
                onClick={() => {
                  setEditCity(true)
                  if (editCity) {
                    handleChangeCity(user.login.uuid, userCity);
                    setEditCity(false)
                  }
                }}
              >
                {!editCity ? 'Edit' : 'Update'}
              </button>
            </Stack>
            <Stack direction="row">
              <input
                className={`${editAdress ? 'modal__input-active' : 'modal__input'}`}
                value={userAdress}
                type="text"
                onChange={(event) => {
                  if (editAdress) {
                    setUserAdress(event.target.value);
                  }
                }}
              />
              <button
                className="modal__editButton"
                onClick={() => {
                  setEditAdress(true)
                  if (editAdress) {
                    handleChangeAdress(user.login.uuid, userAdress);
                    setEditAdress(false)
                  }
                }}
              >
                {!editAdress ? 'Edit' : 'Update'}
              </button>
            </Stack>
            <Stack direction="row">
              <input
                className={`${editDate ? 'modal__input-active' : 'modal__input'}`}
                value={userDate}
                type="text"
                onChange={(event) => {
                  if (editDate) {
                    setUserDate(event.target.value);
                  }
                }}
              />
              <button
                className="modal__editButton"
                onClick={() => {
                  setEditDate(true)
                  if (editDate) {
                    handleChangeDate(user.login.uuid, userDate);
                    setEditDate(false)
                  }
                }}
              >
                {!editDate ? 'Edit' : 'Update'}
              </button>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Modal >
  )
}