

type navLinkProps =  {
    name: string;
    onClick?: () => void;
    
}

function NavLink({name,onClick}: navLinkProps): React.JSX.Element {
  return (
    <button onClick={onClick} className="mx-1 text-blue-600 hover:underline bg-transparent border-none p-0 cursor-pointer">{name}</button>
  )
}

export default NavLink