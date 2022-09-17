import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CloseIcon from '@mui/icons-material/Close';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function InputArea(props) {
    const [show, setShow] = useState(false);
    const [taskInput, setTaskInput] = useState()
    const [startTimeInput, setStartTimeInput] = useState()
    const [endTimeInput, setEndTimeInput] = useState()
    const [detailedInput, setDetailedInput] = useState()
    const [colorInput, setColorInput] = useState("#F3B55E")
    const [currentHour, setCurrentHour] = useState()
    const [nextHour, setNextHour] = useState()
    const [resetShow, setResetShow] = useState(false);

    const handleTaskInputChange = e => setTaskInput(e.target.value)
    const handleStartTimeInputChange = e => setStartTimeInput(e.target.value)
    const handleEndTimeInputChange = e => setEndTimeInput(e.target.value)
    const handleDetailedInputChange = e => setDetailedInput(e.target.value)
    const handleColorInputChange = e => setColorInput(e.target.value)

    const handleResetClose = () => setResetShow(false);
    const handleResetShow = () => setResetShow(true);

    const setUpHour = () => {
        const time = new Date()
        setCurrentHour(("0" + time.getHours()).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2))
        setNextHour(("0" + (time.getHours()+1)).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2))
    }

    const handleInputReset = () => {
        setTaskInput("")
        setStartTimeInput("")
        setEndTimeInput("")
        setDetailedInput("")
        setColorInput("#F3B55E")
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="inputArea">
            <input type="text" onChange={handleTaskInputChange} placeholder="Type new activity..." value={taskInput}/>
            <button type='submit' onClick={() => {
                setUpHour()
                handleShow()
            }}><AddIcon /></button>
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
                                            defaultValue={currentHour}
                                            value={startTimeInput}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>End time</Form.Label>
                                        <Form.Control
                                            type="time"
                                            onChange={handleEndTimeInputChange}
                                            defaultValue={nextHour}
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
                            <Form.Group
                                className="mb-3"
                            >
                                <Form.Label>Notes</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={handleDetailedInputChange} value={detailedInput}/>
                            </Form.Group>
                         </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => {
                            handleClose()
                            handleResetShow()
                        }}>
                            <div className='centerButtonContent'>
                                <RestartAltIcon/> Reset
                            </div>
                             
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            <div className='centerButtonContent'>
                                <CloseIcon/> Close
                            </div>
                             
                        </Button>
                        <Button variant="primary" onClick={() => {
                            props.onAdd({
                                id: props.index ,
                                startHour: startTimeInput,
                                endHour: endTimeInput,
                                taskContent: taskInput,
                                color: colorInput,
                                details: detailedInput,
                            })
                            handleInputReset()
                            handleClose()
                        }}>
                            <div className='centerButtonContent'>
                                <LibraryAddIcon/> <span className='buttonsLabel'>Save new activity</span>
                            </div>
                            
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={resetShow} onHide={() => {
                    handleResetClose()
                    handleShow()
                }}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Reset activity</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Do you want to reset this activity?</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => {
                    handleResetClose()
                    handleShow()
                }}>
                                        <div className='centerButtonContent'>
                                            <CloseIcon font/>  <span>Cancel</span>
                                        </div>

                                    </Button>
                                    <Button variant="danger" onClick={()=>{
                                        handleInputReset()
                                        handleResetClose()
                                        handleShow()
                                    }}>
                                        <div className='centerButtonContent'>
                                            <RestartAltIcon/>  <span>Reset</span>
                                        </div>

                                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}