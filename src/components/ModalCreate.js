import React from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { Form } from "react-bootstrap"
import LibraryAddIcon from "@mui/icons-material/LibraryAdd"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import RestartAltIcon from "@mui/icons-material/RestartAlt"
import CloseIcon from "@mui/icons-material/Close"
import ModalReset from "./ModalReset"

export const ModalCreate = ({
  show,
  handleClose,
  handleColorInputChange,
  handleDetailedInputChange,
  handleEndTimeInputChange,
  handleInputReset,
  handleResetShow,
  handleStartTimeInputChange,
  handleTaskInputChange,
  startTimeInput,
  colorInput,
  detailedInput,
  onAdd,
  index,
  taskInput,
  endTimeInput,
  resetShow,
  handleShow,
  handleResetClose,
}) => (
  <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create new activity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Activity</Form.Label>
            <Form.Control
              onChange={handleTaskInputChange}
              type="text"
              placeholder="Type new activity..."
              value={taskInput}
              autoFocus
            />
            {/* <Form.Control.Feedback type="invalid">
                                    Please input your task.
                                </Form.Control.Feedback> */}
          </Form.Group>
          <Form.Group className="mb-3">
            <Row>
              <Col>
                <Form.Label>Start time</Form.Label>
                <Form.Control
                  type="time"
                  onChange={handleStartTimeInputChange}
                  value={startTimeInput}
                />
              </Col>
              <Col>
                <Form.Label>End time</Form.Label>
                <Form.Control
                  type="time"
                  onChange={handleEndTimeInputChange}
                  value={endTimeInput}
                />
              </Col>
              <Col>
                <Form.Label>Pick label color</Form.Label>
                <Form.Control
                  type="color"
                  id="exampleColorInput"
                  value={colorInput}
                  onChange={handleColorInputChange}
                  title="Choose your color"
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleDetailedInputChange}
              value={detailedInput}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger"
          onClick={() => {
            handleClose()
            handleResetShow()
          }}
        >
          <div className="centerButtonContent">
            <RestartAltIcon /> Reset
          </div>
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          <div className="centerButtonContent">
            <CloseIcon /> Close
          </div>
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            onAdd({
              id: index,
              startHour: startTimeInput,
              endHour: endTimeInput,
              taskContent: taskInput,
              color: colorInput,
              details: detailedInput,
            })
            handleInputReset()
            handleClose()
          }}
        >
          <div className="centerButtonContent">
            <LibraryAddIcon />{" "}
            <span className="buttonsLabel">Save new activity</span>
          </div>
        </Button>
      </Modal.Footer>
    </Modal>
    <ModalReset
      resetShow={resetShow}
      handleResetClose={handleResetClose}
      handleShow={handleShow}
      handleInputReset={handleInputReset}
    />
  </>
)
