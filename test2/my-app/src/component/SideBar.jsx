const navigationItems = ['Overview', 'My tasks']

function SideBar() {
  return (
    <aside className="w-full border-b border-border bg-sidebar p-3 text-sidebar-foreground md:min-h-[calc(100vh-64px)] md:w-48 md:border-b-0 md:border-r">
      <nav aria-label="Main navigation" className="flex gap-2 md:flex-col">
        {navigationItems.map((item, index) => (
          <a
            key={item}
            href="#tasks"
            aria-current={index === 0 ? 'page' : undefined}
            className={`rounded-md px-3 py-2 text-sm ${
              index === 0
                ? 'bg-sidebar-accent font-medium text-sidebar-accent-foreground'
                : 'text-sidebar-foreground hover:bg-sidebar-accent'
            }`}
          >
            {item}
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default SideBar