import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import CloseIcon from '@mui/icons-material/Close';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useState} from 'react'
import DoneIcon from '@mui/icons-material/Done';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ColorizeIcon from '@mui/icons-material/Colorize';

export default function Task(props) {
    const [detailsShow, setDetailsShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
    const [resetShow, setResetShow] = useState(false);
    const [taskInput, setTaskInput] = useState(props.taskContent)
    const [isTaskEditable, setIsTaskEditable] = useState(false)
    const [isEndTimeEditable, setIsEndTimeEditable] = useState(false)
    const [endTimeInput, setEndTimeInput] = useState(props.endHour)
    const [startTimeInput, setStartTimeInput] = useState(props.startHour)
    const [isStartTimeEditable, setIsStartTimeEditable] = useState(false)
    const [detailedInput, setDetailedInput] = useState(props.details)
    const [isDetailedEditable, setIsDetailedEditable] = useState(false)
    const [colorInput, setColorInput] = useState(props.color)
    const [isColorEditable, setIsColorEditable] = useState(false)

    const handleTaskInputChange = e => setTaskInput(e.target.value)
    const handleStartTimeInputChange = e => setStartTimeInput(e.target.value)
    const handleEndTimeInputChange = e => setEndTimeInput(e.target.value)
    const handleDetailedInputChange = e => setDetailedInput(e.target.value)
    const handleColorInputChange = e => setColorInput(e.target.value)

    const setTaskEditable = () => setIsTaskEditable(true)
    const setTaskNotEditable = () => setIsTaskEditable(false)

    const setEndTimeEditable = () => setIsEndTimeEditable(true)
    const setEndTimeNotEditable = () => setIsEndTimeEditable(false)

    const setStartTimeEditable = () => setIsStartTimeEditable(true)
    const setStartTimeNotEditable = () => setIsStartTimeEditable(false)

    const setDetailedEditable = () => setIsDetailedEditable(true)
    const setDetailedNotEditable = () => setIsDetailedEditable(false)

    const setColorEditable = () => setIsColorEditable(true)
    const setColorNotEditable = () => setIsColorEditable(false) 

    const handleDetailsClose = () => setDetailsShow(false);
    const handleDetailsShow = () => setDetailsShow(true);
    const handleDeleteClose = () => setDeleteShow(false);
    const handleDeleteShow = () => setDeleteShow(true);
    const handleResetClose = () => setResetShow(false);
    const handleResetShow = () => setResetShow(true);
    const handleInputReset = () => {
        setEndTimeInput(props.endHour)
        setStartTimeInput(props.startHour)
        setTaskInput(props.taskContent)
        setDetailedInput(props.details)
        setColorInput(props.color)
    }

    const setAllNotEditable = () => {
        setColorNotEditable()
        setDetailedNotEditable()
        setStartTimeNotEditable()
        setEndTimeNotEditable()
        setTaskNotEditable()
    }

    const saveTask = () => {
        props.onDelete(props.id)
        props.onAdd({
            id: props.id,
            startHour: startTimeInput,
            endHour: endTimeInput,
            taskContent: taskInput,
            color: colorInput,
            details: detailedInput,
        })
    }


    return (
        <div className="taskContainer">
            <div className="taskTopContainer">
                <p className="hour">{props.startHour} - {props.endHour}</p>
                <div>
                    <button type="button" className="delete-btn btn btn-danger btn-sm" onClick={e => {
                        e.preventDefault()
                        e.target.blur()
                        handleDeleteShow()

                    }}><DeleteOutlineIcon fontSize='small'/></button>
                    <button className="details-btn btn btn-outline-primary btn-sm" onClick={e => {
                        e.preventDefault()
                        e.target.blur()
                        handleDetailsShow()
                    }}><MoreHorizIcon fontSize='small'/></button>

                </div>

            </div>
            <p className="taskContent">{props.taskContent}</p>

            <Modal show={detailsShow} onHide={handleDetailsClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Activity details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Activity</Form.Label>
                                <div className='labelContainer'>
                                    <Form.Control
                                        onChange={handleTaskInputChange}
                                        disabled={isTaskEditable ? null : "disabled"}
                                        type="text"
                                        placeholder="Input new task..."
                                        value={taskInput}
                                        className='activityInput'
                                        onBlur={setTaskNotEditable}
                                        autoFocus={isTaskEditable ? "autoFocus" : null}
                                    />
                                    <button type='button' hidden={isTaskEditable ? "hidden" : null} className='btn btn-light btn-sm edit-notes-activity-btn' onClick={() => {setAllNotEditable(); setTaskEditable() }}>
                                        <div className='centerButtonContent'>
                                            <EditIcon fontSize="small" />
                                        </div>
                                    </button>
                                </div>

                                {/* <Form.Control.Feedback type="invalid">
                                    Please input your task.
                                </Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Row>
                                    <Col>
                                        <Form.Label>Start time</Form.Label>
                                        <div className='labelContainer'>
                                            <Form.Control
                                                disabled={isStartTimeEditable ? null : "disabled"}
                                                type="time"
                                                onChange={handleStartTimeInputChange}
                                                value={startTimeInput}
                                                onBlur={setStartTimeNotEditable}
                                                autoFocus={isStartTimeEditable ? "autoFocus" : null}
                                            ></Form.Control>
                                            <button type='button' hidden={isStartTimeEditable ? "hidden" : null} className='btn btn-light btn-sm edit-btn' onClick={() => {setAllNotEditable(); setStartTimeEditable()}}>
                                                <div className='centerButtonContent'>
                                                    <EditIcon fontSize="small" />
                                                </div>
                                            </button>
                                        </div>
                                    </Col>
                                    <Col>
                                        <Form.Label>End time</Form.Label>
                                        <div className='labelContainer'>
                                            <Form.Control
                                                disabled={isEndTimeEditable ? null : "disabled"}
                                                type="time"
                                                onChange={handleEndTimeInputChange}
                                                value={endTimeInput}
                                                onBlur={setEndTimeNotEditable}
                                                id="endTimeInputField"
                                                autoFocus={isEndTimeEditable ? "autoFocus" : null}
                                            />

                                            <button type='button' className='btn btn-light btn-sm edit-btn'
                                            hidden={isEndTimeEditable ? "hidden" : null} onClick={() => {setAllNotEditable(); setEndTimeEditable()}}>
                                                <div className='centerButtonContent'>
                                                    <EditIcon fontSize="small" />
                                                </div>
                                            </button>
                                        </div>
                                    </Col>
                                    <Col>
                                        <Form.Label>Pick label color</Form.Label>
                                        <div className='labelContainer'>
                                            <Form.Control

                                                disabled={isColorEditable ? null : "disabled"}
                                                type="color"
                                                id="exampleColorInput"
                                                value={colorInput}
                                                onChange={handleColorInputChange}
                                                title="Choose your color"
                                                className='colorInputArea'
                                                onBlur={setColorNotEditable}
                                                autoFocus={isColorEditable ? "autoFocus" : null}
                                            />
                                            <button type='button'  className='btn btn-light btn-sm edit-clr-btn' onClick={() => {setAllNotEditable(); setColorEditable()}}>
                                                <div className='centerButtonContent'>
                                                    {isColorEditable ? <ColorizeIcon fontSize='small' /> : <EditIcon fontSize="small" />} 
                                                </div>
                                            </button>
                                        </div>
                                    </Col>
                                </Row>

                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                            >
                                <Form.Label>Notes</Form.Label>
                                <div className='labelContainer'>
                                    <Form.Control 
                                        as="textarea" 
                                        rows={3} 
                                        value={detailedInput} 
                                        disabled={isDetailedEditable ? null : "disabled"} 
                                        className='notesTextArea' 
                                        onChange={handleDetailedInputChange}
                                        onBlur={setDetailedNotEditable}
                                        autoFocus={isDetailedEditable ? "autoFocus" : null}
                                        onClick={setDetailedEditable}
                                    />
                                    <button type='button' hidden={isDetailedEditable ? "hidden" : null} className='btn btn-light btn-sm edit-notes-btn' onClick={() => {setAllNotEditable(); setDetailedEditable()}}>
                                        <div className='centerButtonContent'>
                                            <EditIcon fontSize="small" />
                                        </div>
                                    </button>
                                </div>
                            </Form.Group>
                         </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => {
                            handleDetailsClose()
                            handleResetShow()
                        }}>
                            <div className='centerButtonContent'>
                                <RestartAltIcon/> Reset
                            </div>
                             
                        </Button>
                        <Button variant="secondary" onClick={handleDetailsClose}>
                            <div className='centerButtonContent'>
                                <CloseIcon/> Close
                            </div>  
                        </Button>
                        <Button variant="primary" onClick={() => {
                            saveTask()
                            handleDetailsClose()
                        }}>
                            <div className='centerButtonContent'>

                                <DoneIcon/> <span className='buttonsLabel'>Save activity</span>
                            </div>
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={deleteShow} onHide={handleDeleteClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete activity</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you want to permanently delete this activity?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleDeleteClose}>
                            <div className='centerButtonContent'>
                                <CloseIcon font/>  <span>Cancel</span>
                            </div>

                        </Button>
                        <Button variant="danger" onClick={()=>{
                            props.onDelete(props.id)
                            handleDeleteClose()
                        }}>
                            <div className='centerButtonContent'>
                                <DeleteOutlineIcon />  <span>Delete</span>
                            </div>

                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={resetShow} onHide={() => {
                    handleResetClose()
                    handleDetailsShow()
                }}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Reset activity</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Do you want to reset this activity?</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => {
                    handleResetClose()
                    handleDetailsShow()
                }}>
                                        <div className='centerButtonContent'>
                                            <CloseIcon font/>  <span>Cancel</span>
                                        </div>

                                    </Button>
                                    <Button variant="danger" onClick={()=>{
                                        handleInputReset()
                                        handleResetClose()
                                        handleDetailsShow()
                                    }}>
                                        <div className='centerButtonContent'>
                                            <RestartAltIcon/>  <span>Reset</span>
                                        </div>

                                    </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    )
}