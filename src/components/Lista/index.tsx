

export function Lista() {

    return (
      <main className='min-h-screen bg-zinc-950 dark:bg-[#fff] flex justify-center'>
          <div className="w-[min(80%,58rem)] h-min(100%, 40rem) md:w-[70%] lg:w-[45%] lg:mt-[6%] sm:mt-[10%] sm:bg-scroll">
            
            <div className='p-8 bg-[#272729] dark:bg-[#fff] rounded-lg text-white text-center '>
              <div className=" p-4 rounded-md ring-1 mt-10 ring-[#D4D4D4]">
                  <div className="flex justify-between p-2 mt-3">
                    <div className="text-bold dark:text-zinc-900">Aplicativo: Só Eventos</div>
                    <div className="text-bold dark:text-zinc-900">Data: 21/10/2024</div>
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
              <div className=" p-4 rounded-md ring-1  mt-10 ring-[#D4D4D4]">
                  <div className="flex justify-between p-2 mt-3">
                    <div className="text-bold dark:text-zinc-900">Aplicativo: Paga Só</div>
                    <div className="text-bold dark:text-zinc-900">Data: 18/02/202</div>
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
              <div className=" p-4 rounded-md ring-1  mt-10 ring-[#D4D4D4]">
                  <div className="flex justify-between p-2 mt-3">
                    <div className="text-bold dark:text-zinc-900">Aplicativo: Só Money</div>
                    <div className="text-bold dark:text-zinc-900">Data: 05/12/2024</div>
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

          <div className="flex justify-center mt-5">
              <button>
                <svg width="28" height="28" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="27" height="27" rx="13.5" fill="#EEEEEE"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2197 14.5051C9.92678 14.2261 9.92678 13.7739 10.2197 13.4949L14.7197 9.20921C15.0126 8.93026 15.4874 8.93026 15.7803 9.20921C16.0732 9.48815 16.0732 9.94042 15.7803 10.2194L11.8107 14L15.7803 17.7806C16.0732 18.0596 16.0732 18.5118 15.7803 18.7908C15.4874 19.0697 15.0126 19.0697 14.7197 18.7908L10.2197 14.5051Z" fill="#BCBCBC"/>
                </svg>
              </button>
            <span className='dark:text-zinc-700 text-white mr-2 ml-2 flex'>
                <div className="text-[#277FE3] mr-2">1</div>
                <div className="mr-2">2</div>
                <div>3</div>
            </span>
              <button className="">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="27" height="27" rx="13.5" fill="#277FE3"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7803 13.4949C17.0732 13.7739 17.0732 14.2261 16.7803 14.5051L12.2803 18.7908C11.9874 19.0697 11.5126 19.0697 11.2197 18.7908C10.9268 18.5118 10.9268 18.0596 11.2197 17.7806L15.1893 14L11.2197 10.2194C10.9268 9.94042 10.9268 9.48816 11.2197 9.20921C11.5126 8.93026 11.9874 8.93026 12.2803 9.20921L16.7803 13.4949Z" fill="white"/>
                </svg>
              </button>
          </div>  
          </div>
        
      </main>
         
    );
  };
  