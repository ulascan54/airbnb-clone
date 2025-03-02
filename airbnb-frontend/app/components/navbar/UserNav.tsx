import { Menu, User } from "lucide-react"

const UserNav = () => {
  return (
    <p className="p-2 relative inline-block border rounded-full">
      <button className="flex items-center">
        <Menu size={18} />
        <User size={18} />
      </button>
    </p>
  )
}

export default UserNav
