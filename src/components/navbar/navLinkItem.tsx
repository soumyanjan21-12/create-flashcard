import { NavLink } from "react-router";


export default function NavLinkItem({ routeDescription , route  }:{ routeDescription:string, route:string}) {
  return (
     <NavLink to={route} className={({ isActive }) =>
        isActive ? 'text-teal-500 underline font-bold z-10' : ''
      } end>{routeDescription}</NavLink>
  )
}
