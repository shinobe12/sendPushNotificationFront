

export function Lista() {
    return (
      <main className='min-h-screen bg-zinc-950 dark:bg-[#fff]'>
          <div className="flex justify-center items-center max-w-[30%] ml-[35%] mt-10">
            <div className=' p-8 bg-[#272729] dark:bg-[#fff] rounded-lg text-white text-center mt-10 flex justify-center'>
              <div className=" p-4 rounded-md ring-1 ring-[#D4D4D4]">
                  <div className="flex justify-between p-2 mt-3">
                    <div className="text-bold dark:text-zinc-900">Aplicativo: </div>
                    <div className="text-bold dark:text-zinc-900">Data: </div>
                  </div>
                  <div className="text-justify mt-3 bg-[#454545] dark:bg-[#E8F2FF] rounded-md p-3">
                    <h2 className="text-start font-semibold dark:text-zinc-900">Titulo da Mensagem: ...</h2>
                      <p className="font-light dark:text-zinc-900">
                        Em linguística, a noção de texto é ampla e ainda aberta a uma 
                        definição mais precisa. Grosso modo, pode ser entendido como manifestação 
                        linguística das ideias de um autor, que serão interpretadas pelo 
                        leitor de acordo com seus conhecimentos linguísticos e culturais.
                        Seu tamanho é variável. Wikipédia
                      </p>
                  </div>
              </div>

          </div>
          </div>
      </main>
         
    );
  };
  