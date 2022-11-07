import  Modal  from "react-modal";
import { createShapeContainer } from '../../stores/createShapeStore';
import { librariesContainer } from '../../stores/libsData';
// import { LibrarieLi } from '../BibliotecaLi/liBlioteca';
import { useForm } from "react-hook-form";


export const CreateShapeModal = () => {
    const [ isModal , isOpenModal , isCloseModal ] = createShapeContainer((state) => [
        state.isModal,
        state.isOpenModal,
        state.isCloseModal
    ])

    const [ listLibraries ] = librariesContainer((state) => [
        state.listLibraries
    ])

    const customStyles = {
        overlay: {backgroundColor: "rgba(69, 67, 67, 0.6)"},
        content: {
          width: '65vw',
          height: '80vh',
          backgroundColor: '#09061E',
          display: 'flex',
          alignItems: 'center',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }
    
    const { register , handleSubmit , formState } = useForm();

    const date = (data:object)=>{
        console.log(data);
        
    }
    return(
        <Modal
            isOpen={isModal}
            onRequestClose={isCloseModal}
            style={customStyles}       contentLabel="Example Modal"
            ariaHideApp={false}
            className="absolute"
        >
            <form onSubmit={handleSubmit(date)}>
                <main className="w-full h-full flex flex-col justify-center gap-1 items-center">

                    <h1 className="text-grey-5 text-2xl">Crie seu shape</h1>

                    <section className="w-full flex justify-center flex-wrap gap-3">
                    
                    <div className="w-5/12 gap-2 flex flex-col	items-center text-center">
                        <label className="text-grey-5 w-11/12">Qual o nome do comando?</label>
                        <input {...register('nameComand')} className="w-11/12 text-grey-5 p-2 border-2  border-purple-1  rounded bg-inherit" placeholder="Nome do comando" type="text"/>
                        <p className="text-red-900"></p>
                    </div>

                    <div className="w-5/12 gap-2 flex flex-col	items-center ">
                        
                        <label className="text-grey-5">Qual o gerenciador de pacotes?</label>
                        
                        <select {...register('manager')} className="p-2 rounded text-grey-5 border-2 border-purple-1 w-11/12  bg-footer-landing-2">
                        <option disabled >NPM ou Yarn</option>
                        <option value="npm">NPM</option>
                        <option value="yarn">YARN</option>
                        </select>

                    </div>

                    <div className="w-5/12 gap-2 flex flex-col	items-center ">
                        <label className="text-grey-5">Qual ferramenta de construção?</label>
                        <select {...register('tool')} className="p-2 rounded text-grey-5 border-2 border-purple-1 w-11/12  bg-footer-landing-2" placeholder="">
                        <option disabled selected>Create React App ou Vite</option>
                        <option value="create react-app">Create React App</option>
                        <option value="vite">Vite</option>
                        </select>
                    </div>

                    <div className="w-5/12 gap-2 flex flex-col	items-center ">
                        <label className="text-grey-5">Qual linguagem de programação?</label>
                        <select {...register('language')} className="p-2 rounded text-grey-5 border-2 border-purple-1 w-11/12  bg-footer-landing-2">
                        <option disabled selected>Javascript ou Typescript</option>
                        <option value="javascript">Javascript</option>
                        <option value="typescript">Typescript</option>
                        </select>
                    </div>

                    </section>

                    <h4 className="text-grey-5 mt-4">Quais bibliotecas você deseja?</h4>

                    <section className="w-full flex justify-center flex-wrap">
                        <ul className="grid grid-rows-2 grid-flow-col gap-4 mt-4 overflow-x-auto max-w-xl p-1 text-center scrollbar-thin scrollbar-thumb-purple-1 scrollbar-track-border-Inputs pb-5 scrollbar-thumb-rounded-md ">
                                {/* <LibrarieLi listLibraries={listLibraries} /> */}

                                <li className="text-grey-5 text-base font-light hover:text-purple-2 cursor-pointer mw-14">React router-dom</li>
                                <li className="text-grey-5 text-base font-light hover:text-purple-2 cursor-pointer mw-14">React hook/form</li>
                                <li className="text-grey-5 text-base font-light hover:text-purple-2 cursor-pointer mw-14">React hook-form/resolver</li>
                                <li className="text-grey-5 text-base font-light hover:text-purple-2 cursor-pointer mw-14">Zustand</li>
                                <li className="text-grey-5 text-base font-light hover:text-purple-2 cursor-pointer mw-14">React Modal</li>
                                <li className="text-grey-5 text-base font-light hover:text-purple-2 cursor-pointer mw-14">React Joyride</li>
                                <li className="text-grey-5 text-base font-light hover:text-purple-2 cursor-pointer mw-14">Styled-Components</li>
                                <li className="text-grey-5 text-base font-light hover:text-purple-2 cursor-pointer mw-14">TailwindCSS</li>
                        
                        </ul>
                    </section>

                    <button type="submit" className="font-medium bg-gradient-to-r from-button-gradient-2 to-button-gradient-1 shadow-md hover:ease-in duration-200 hover:shadow-purple-1/50 px-3 py-1 rounded-lg flex items-center">Criar Shape</button>
                
                </main>
            </form>

        </Modal>
    )
};