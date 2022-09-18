import Heading from "../components/Heading"
import InputArea from "../components/InputArea"
import Task from "../components/Task"
import React, {useState} from "react"

export default function Box() {
    const [tasks, setTasks] = useState(
        [
            {
                id: "0" ,
                startHour: "15:00",
                endHour: "16:00",
                taskContent: "Example activity",
                color: "#F3B55E",
                details: "Notes about your activity",
            }
        ])

    const saveNewTask = newTask => setTasks(prevValue => [...prevValue, newTask])

    const compareByHour = (firstTask, secondTask) => {
          if ( firstTask.startHour < secondTask.startHour ){
            return -1;
          }
          else if ( firstTask.startHour > secondTask.startHour ){
            return 1;
          }
          else if ( firstTask.endHour < secondTask.endHour ){
            return -1;
          }
          else if ( firstTask.endHour > secondTask.endHour ){
            return 1;
          }
          return 0;
    }

    const constructTask = task => {
        return (
            <Task
                key={task.id}
                id={task.id} 
                startHour={task.startHour}
                endHour={task.endHour}
                color={task.color}
                taskContent={task.taskContent}
                details={task.details}
                onDelete={deleteTask}
                onAdd={saveNewTask}
            />
        )
    }

    const deleteTask = id => setTasks(tasks.filter(task => task.id !== id))

    return (<div className="box">
        <Heading />
        <InputArea onAdd={saveNewTask} index={tasks.length}             />
        {tasks.sort(compareByHour).map(constructTask)}
    </div>)
}