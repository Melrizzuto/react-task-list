import tasks from "../data/tasks";

const TaskManager = () => {
    // Filtra i task per stato
    const currentTasks = tasks.filter(task => task.state === "backlog" || task.state === "in_progress");
    const completedTasks = tasks.filter(task => task.state === "completed");

    return (
        <div>
            <h1>Task Manager</h1>

            <section>
                <h2>Task in Corso</h2>
                <ul>
                    {currentTasks.map(task => (
                        <li key={task.id}>
                            <h3>{task.title}</h3>
                            <p>Priorità: {task.priority}</p>
                            <p>Tempo stimato: {task.estimatedTime}</p>
                            <p>Stato: {task.state}</p>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Task Completati</h2>
                <ul>
                    {completedTasks.map(task => (
                        <li key={task.id}>
                            <h3>{task.title}</h3>
                            <p>Priorità: {task.priority}</p>
                            <p>Tempo stimato: {task.estimatedTime}</p>
                            <p>Stato: {task.state}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default TaskManager;