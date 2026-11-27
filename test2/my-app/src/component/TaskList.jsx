import TaskCard from './TaskCard'

const sampleTasks = [
  {
    id: 1,
    title: 'Plan the week',
    description: 'Review priorities and organize this week’s work.',
    status: 'In progress',
    dueDate: 'Today',
  },
  {
    id: 2,
    title: 'Update project notes',
    description: 'Add the latest decisions to the project documentation.',
    status: 'To do',
    dueDate: 'Tomorrow',
  },
  {
    id: 3,
    title: 'Send meeting summary',
    description: 'Share action items with the project team.',
    status: 'Done',
  },
]

function TaskList({ tasks = sampleTasks }) {
  return (
    <section id="tasks" className="flex-1 p-6">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold tracking-tight">My tasks</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Keep track of what needs to get done.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  )
}

export default TaskList