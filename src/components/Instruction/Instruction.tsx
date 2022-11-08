const Instruction = () => {
  return (
    <section className=" flex flex-col items-center justify-evenly mt-12 border-b-2 border-solid border-gray-900">
      <h1
        className="text-4xl font-semibold mb-12 text-left"
        data-aos="fade-right"
      >
        Como usar o shape
      </h1>

      <div
        className="mb-12 w-2/4 justify-center items-center relative mt-1  border-gray-900 flex flex-col"
        data-aos="zoom-in"
      >
        <ul className="flex flex-wrap items-center gap-12 justify-evenly mt-12">
          <li className="w-60 p-4 bg-purple-1 rounded-md h-24 justify-center items-center">
            <h2>Passo 1</h2>
            <a
              href="/register"
              className="text-grey-3 hover:text-purple-2 hover:ease-in duration-200"
            >
              Cadastrar no Shape
            </a>
          </li>
          <li className="w-60 p-4 bg-purple-1 rounded-md h-24 justify-center items-center">
            <h2>Passo 2</h2>
            <a
              href="/login"
              className="text-grey-3 hover:text-purple-2 hover:ease-in duration-200"
            >
              Logar no Shape
            </a>
          </li>

          <li className="w-60 p-4 bg-purple-1 rounded-md h-24 justify-center items-center">
            <h2>Passo 3</h2>
            <a
              href="/dashboard"
              className="text-grey-3 hover:text-purple-2 hover:ease-in duration-200"
            >
              Entrar no dashboard
            </a>
          </li>

          <li className="w-60 p-4 bg-purple-1 rounded-md h-24 justify-center items-center">
            <h2>Passo 4</h2>
            <a
              href="/tutorial"
              className="text-grey-3 hover:text-purple-2 hover:ease-in duration-200"
            >
              Criar um shape
            </a>
          </li>

          <li className="w-60 p-4 bg-purple-1 rounded-md h-24 justify-center items-center">
            <h2>Passo 5</h2>
            <a
              href="/tutorial"
              className="text-grey-3 hover:text-purple-2 hover:ease-in duration-200"
            >
              Colar seu comando no terminal
            </a>
          </li>

          <li className="w-60 p-4 bg-purple-1 rounded-md h-24 justify-center items-center">
            <h2>Passo 6</h2>
            <a
              href="/tutorial"
              className="text-grey-3 hover:text-purple-2 hover:ease-in duration-200"
            >
              Ser um shapado feliz! 💙
            </a>
          </li>
        </ul>

        <a href="/tutorial" className="mt-12">
          Não entendeu? <strong> Assista aqui um vídeo tutorial </strong>
        </a>
      </div>
    </section>
  );
};

export default Instruction;
