import { AiFillCheckCircle } from "react-icons/ai"

export const ToastCreateShape = (props: string) => {
    return (
        <div className="bg-bg-formRegister w-96 pl-2 pt-1 pb-1">
            <p className="flex items-center text-icon-checked text-xl font-semibold mb-1">
                <AiFillCheckCircle className="text-3xl mr-1" /> Shape criado com sucesso!
            </p>
            <p className="mb-0.5 text-white">
            Para acessar o seu comando basta clicar <span
            onClick={() => navigator.clipboard.writeText('modenalindo')}
            className="text-button-register cursor-pointer font-semibold"
            >aqui</span>, que será copiado à sua área de transferência. 
            </p>
            <p className="text-white">
            Se tiver alguma duvida de como utilizar, clique <span className="text-button-register cursor-pointer font-semibold">aqui</span> para ver o tutorial.
            </p>
        </div>
    );
};
