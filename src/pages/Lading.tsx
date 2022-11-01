import { Link } from 'react-router-dom';

import  shapeLogo  from '../assets/logo.png';
import react from '../assets/react.svg';
import books from '../assets/Vector.svg'

export const Lading = () => {
    return(
        <div className='bg-bg-page w-auto h-auto min-h-screen text-white  flex flex-col gap-10'>
            <header className='h-20 px-40 flex flex-row justify-between items-center border-grey-1 border-b'>
                <img className='w-15 h-7'  src={shapeLogo} alt="Logo Shape" />
                <div className='flex items-center gap-6'>
                    <Link to='/login' >Entrar</Link>
                    <Link className='bg-button-gradient-1 px-3 py-1 rounded-lg flex items-center' to='/register'>Cadastrar</Link>
                </div>
            </header>

            <main>

                <section className='h-full	flex flex-col justify-around items-center gap-5'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <img className='w-10/12' src={react} alt="logo React" />
                        <div className='flex flex-col justify-center items-center gap-1'>
                            <img className='w-2/12' src={shapeLogo} alt="logo React" />
                            <h3>for React</h3>
                        </div>
                    </div>
                    <h3>Uma ferramenta comum que pode poupar muito tempo seu.</h3>
                    <div className='max-w-2xl px-40 flex flex-row self-start items-center'>
                            <img src={books} alt="icone livros juntos" />
                            <h4 className='text-purple-2'>bibliotecas</h4>
                    </div>
                </section>

                <section className='mt-1 h-heightSection border-grey-1 border-t border-b flex flex-col '>

                    <div className=' flex items-center justify-evenly mt-12'>
                        <h1 className='text-3xl'>Bibliotecas disponiveis<br/> em nosso sistema</h1>
                        <h2 className='text-purple-2'>Bibliotecas que você pode escolher<br/> para iniciar seu projeto react</h2>
                    </div>

                    <div className='mt-32 flex justify-center items-center'>
                        <ul className='mx-40 flex flex-wrap gap-16	 justify-center items-center'>
                            <li className='w-2/12 text-center'><h1 className='text-grey-2 hover:text-purple-2'>React Modal</h1></li>
                            <li className='w-2/12 text-center'><h1 className='text-grey-2 hover:text-purple-2'>Styled Components</h1></li>
                            <li className='w-2/12 text-center'><h1 className='text-grey-2 hover:text-purple-2'>Axios</h1></li>
                            <li className='w-2/12 text-center'><h1 className='text-grey-2 hover:text-purple-2'>React Hook Form</h1></li>
                            <li className='w-2/12 text-center'><h1 className='text-grey-2 hover:text-purple-2'>React Toastify</h1></li>
                            <li className='w-2/12 text-center'><h1 className='text-grey-2 hover:text-purple-2'>React hook Toast</h1></li>
                            <li className='w-2/12 text-center'><h1 className='text-grey-2 hover:text-purple-2'>React Router Dom</h1></li>
                            <li className='w-2/12 text-center'><h1 className='text-grey-2 hover:text-purple-2'>Framer Motion</h1></li>
                            <li className='w-2/12 text-center'><h1 className='text-grey-2 hover:text-purple-2'>React Icons</h1></li>
                        </ul>
                    </div>
                </section>

                <footer className='h-40	 flex gap-4 justify-center items-center'>
                    <img className='w-15 h-7'  src={shapeLogo} alt="Logo Shape" />
                    <h4 className='text-center text-xs	text-grey-3'>Projeto criado por estudantes da Kenzie Academy Brasil,<br/> como finalização do módulo de Front-End.</h4>
                    <h4 className='text-center text-xs	text-grey-3'>Criadores - Gabriel Modena - Gabriel Costa<br/> - Gabriel Carriel - Breno -  wesley carvalho - talles simão</h4>
                </footer>

            </main>
        </div>
    )
}