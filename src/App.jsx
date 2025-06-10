import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, Sun } from "phosphor-react"
import Botao from "./components/Botao/Botao"
import { useState } from "react"


function App() {

  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode)
  function handleChangeMode() {
    //O handle tem que ser chamado quando houver uma função a ser realizado,por exemplo clicar em um botão
    //o operador de negação ! inverte o valor do boolean
    //se o dark mode estiver ligado ele desliga e vice versa
    //isso é usado para alternar entre os modos claro e escuro
    setDarkMode(!darkMode);
  }

  return (
    <main className={`w-full h-screen overflow-hidden ${darkMode === true ? "bg-black text-white" : "bg-white text-black"} transition-all hover: duration-300`}>
      <header className="flex p-4 justify-end ">
        <button
          onClick={handleChangeMode} className={`p-2 text-black hover:bg-gray-200 transition-all duration-300 rounded-lg cursor-pointer transform hover:scale-105 ${darkMode === true ? "bg-black text-white" : "bg-white text-black"}`} >
          <Sun size={25} />
        </button>
      </header>

      <main className="flex justify-center items-center h-sreen w-full">
        <section className="flex flex-col justify-center items-center gap-2 border-2 border-gray-400 rounded-lg w-sm h-[500px]">
          <img className="border-3 border-gray-300 flex mt-4 w-32 h-32 rounded-full" src="https://github.com/Isaaclima001.png" alt="foto de perfil" />

          <h1 className="text-2xl font-bold">Isaac Lima</h1>
          <p className="text-gray-500">Desenvolvedor Full Stack</p>

          <section className="mt-10 space-y-4">
            <Botao type="button">
              <a target="_blank" href="https://www.instagram.com/oisaac_lima1/profilecard/?igsh=aGJsdThjZDY0eHpq" className="flex justify-center items-center gap-5 w-full h-full bg--200 bg-linear-65 from-amber-500 to-pink-600 text-white">
                <InstagramLogo size={25} />
                <p>Instagram</p>
              </a>
            </Botao>
            <Botao>
              <a target="_blank" href="https://github.com/Isaaclima001" className="flex justify-center items-center gap-5 w-full h-full bg--200 bg-linear-65 from-gray-400 to-gray-900 text-white">
                <GithubLogo size={32} />
                <p>Github</p>
              </a>
            </Botao>
            <Botao>
              <a target="_blank" href="https://github.com/Isaaclima001" className="flex justify-center items-center gap-5 w-full h-full bg--200 bg-linear-65 from-blue-300 to-blue-900 text-white">
                <FacebookLogo size={32} />
                <p>Facebook</p>
              </a>
            </Botao>
          </section>
        </section>
      </main>
    </main>
  )
}

export default App
