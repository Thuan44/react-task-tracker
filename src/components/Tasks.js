import { useState } from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'Homework',
                day: 'Feb 7th at 4:30pm',
                reminder: false,
            },
            {
                id: 2,
                text: 'App dev',
                day: 'Feb 8th at 1:30pm',
                reminder: true,
            },
            {
                id: 3,
                text: 'Food Shopping',
                day: 'Feb 5th at 2:30pm',
                reminder: false,
            }
        ]
    )
    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
