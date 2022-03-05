import {
  LoginIcon
} from "@heroicons/react/outline"
import Link from "next/link"
import Home from "../../pages"
import NavIcon from "./NavIcon"

function Nav() {
  return (
    <div className="flex items-center space-x-10">
      <Link href={"/register"}>
        <p className="text-white cursor-pointer hover:text-gray-300">Sign up</p>
      </Link>
      <NavIcon Icon={LoginIcon} text={'HOME'} />
    </div>
  )
}

export default Nav