import { InstagramLogo } from "phosphor-react";

function Botao({children}) {
    console.log(children)
    return (
        <button className="flex justify-center items-center rounded-lg border-2 border-gray-400 cursor-pointer w-80 h-10 text-black transform hover:scale-105 transition-all duration-150 overflow-hidden">
           {children}
        </button>
    )
}

export default Botao;