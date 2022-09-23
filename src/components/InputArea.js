import AddIcon from "@mui/icons-material/Add"
import React, { useState } from "react"

import { ModalCreate } from "./ModalCreate"

export default function InputArea(props) {
  const [show, setShow] = useState(false)
  const [taskInput, setTaskInput] = useState()
  const [startTimeInput, setStartTimeInput] = useState()
  const [endTimeInput, setEndTimeInput] = useState()
  const [detailedInput, setDetailedInput] = useState()
  const [colorInput, setColorInput] = useState("#F3B55E")
  // const [currentHour, setCurrentHour] = useState()
  // const [nextHour, setNextHour] = useState()
  const [resetShow, setResetShow] = useState(false)

  const handleTaskInputChange = (e) => setTaskInput(e.target.value)
  const handleStartTimeInputChange = (e) => setStartTimeInput(e.target.value)
  const handleEndTimeInputChange = (e) => setEndTimeInput(e.target.value)
  const handleDetailedInputChange = (e) => setDetailedInput(e.target.value)
  const handleColorInputChange = (e) => setColorInput(e.target.value)

  const handleResetClose = () => setResetShow(false)
  const handleResetShow = () => setResetShow(true)

  // const setUpHour = () => {
  //     const time = new Date()
  //     setCurrentHour(("0" + time.getHours()).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2))
  //     setNextHour(("0" + (time.getHours()+1)).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2))
  // }

  const handleInputReset = () => {
    setTaskInput("")
    setStartTimeInput("")
    setEndTimeInput("")
    setDetailedInput("")
    setColorInput("#F3B55E")
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="inputArea">
      <input
        type="text"
        onChange={handleTaskInputChange}
        placeholder="Type new activity..."
        value={taskInput}
      />
      <button
        type="submit"
        onClick={() => {
          // setUpHour()
          handleShow()
        }}
      >
        <AddIcon />
      </button>
      <>
        <ModalCreate
          show={show}
          handleTaskInputChange={handleTaskInputChange}
          handleClose={handleClose}
          taskInput={taskInput}
          handleStartTimeInputChange={handleStartTimeInputChange}
          startTimeInput={startTimeInput}
          handleEndTimeInputChange={handleEndTimeInputChange}
          endTimeInput={endTimeInput}
          colorInput={colorInput}
          handleColorInputChange={handleColorInputChange}
          handleDetailedInputChange={handleDetailedInputChange}
          detailedInput={detailedInput}
          onAdd={props.onAdd}
          index={props.index}
          handleInputReset={handleInputReset}
          handleResetShow={handleResetShow}
          handleResetClose={handleResetClose}
          resetShow={resetShow}
          handleShow={handleShow}
        />
      </>
    </div>
  )
}
