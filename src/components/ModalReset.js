import React from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import RestartAltIcon from "@mui/icons-material/RestartAlt"
import CloseIcon from "@mui/icons-material/Close"

const ModalReset = ({
  resetShow,
  handleResetClose,
  handleShow,
  handleInputReset,
}) => {
  return (
    <Modal
      show={resetShow}
      onHide={() => {
        handleResetClose()
        handleShow()
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Reset activity</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want to reset this activity?</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            handleResetClose()
            handleShow()
          }}
        >
          <div className="centerButtonContent">
            <CloseIcon font /> <span>Cancel</span>
          </div>
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            handleInputReset()
            handleResetClose()
            handleShow()
          }}
        >
          <div className="centerButtonContent">
            <RestartAltIcon /> <span>Reset</span>
          </div>
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalReset
