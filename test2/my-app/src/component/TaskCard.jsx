function TaskCard({ task }) {
  const isComplete = task.status === 'Done'

  return (
    <article className="rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="font-medium">{task.title}</h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
            isComplete
              ? 'bg-green-100 text-green-800'
              : 'bg-secondary text-secondary-foreground'
          }`}
        >
          {task.status}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">{task.description}</p>
      {task.dueDate && (
        <p className="mt-4 text-xs text-muted-foreground">Due {task.dueDate}</p>
      )}
    </article>
  )
}

export default TaskCard