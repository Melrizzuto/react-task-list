import tasks from "../data/tasks";

const TaskManager = () => {

    const taskList = [...tasks];

    const currentTasks = taskList.filter(
        (task) => task.state === "backlog" || task.state === "in_progress");
    const completedTasks = taskList.filter((task) => task.state === "completed");

    return (
        <div className="container mt-4">
            <header className="text-center bg-info p-3">
                <h1>Task Manager</h1>
            </header>

            <main className="container-fluid">
                <section>
                    <h2 className="m-3">Current Tasks ({currentTasks.length})</h2>

                    <ul className="list-group mb-4">
                        {currentTasks.map((task) => (
                            <li
                                key={task.id} //per una lista di cose scrivere sempre per ogni elemento una chiave id.
                                className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <h5 className="mb-1">{task.title}</h5>
                                    <p className="mb-1">Priority: {task.priority}</p>
                                    <p className="mb-1">Est. time: {task.estimatedTime} minutes</p>
                                </div>
                                <span className="badge bg-warning rounded-pill">
                                    {task.state}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="m-3">Completed Tasks ({completedTasks.length})</h2>

                    <ul className="list-group">
                        {completedTasks.map((task) => (
                            <li
                                key={task.id}
                                className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <h5 className="mb-1">{task.title}</h5>
                                    <p className="mb-1">Priority: {task.priority}</p>
                                    <p className="mb-1">Est. time: {task.estimatedTime} minutes</p>
                                </div>
                                <span className="badge bg-success rounded-pill">
                                    {task.state}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default TaskManager;