import { ReactNode } from "react";

interface SidebarMenuItemProps {
  name: string;
  icon: ReactNode;
  className?: string;
  action?: () => void;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ name, icon, className, action }) => {
  return (
    <li key={name} className={`pl-6 py-3 rounded-lg hover:bg-[#0000000D] hover:cursor-pointer ${className}`} onClick={action}>
      <a href='/' className='flex items-center gap-5 text-2xl'>
        {icon}
        <span className='text-base'>
          {name}
        </span>
      </a>
    </li>
  )
}

export default SidebarMenuItem;
