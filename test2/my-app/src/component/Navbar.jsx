function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-5">
      <a href="#tasks" className="text-lg font-semibold tracking-tight text-foreground">
        My App
      </a>
      <button
        type="button"
        className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
      >
        Menu
      </button>
    </header>
  )
}

export default Navbar