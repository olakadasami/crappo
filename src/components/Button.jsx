
function Button({ children, style }) {
    return (
        <button
            className={`flex gap-3 ${style} px-5 py-3 items-center capitalize active:-translate-y-1 cursor-pointer hover:-translate-y-2 duration-300 text-white font-[600] bg-secondary rounded-2xl rounded-tl-none rounded-br-none `}>
            {children}
        </button>
    )
}

export default Button