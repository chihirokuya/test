function NavIcon({ Icon, text }) {
    return (
        <div className="cursor-pointer flex flex-col items-center group text-white hover:text-gray-300">
            <Icon
                className="w-10 sm:w-8 group-hover:animate-bounce"
            />
            {/* <p className="opacity-0 group-hover:opacity-100">{text}</p> */}
        </div>
    )     
}

export default NavIcon