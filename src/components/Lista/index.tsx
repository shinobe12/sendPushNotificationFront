

export function Lista() {
    return (
      <main className='min-h-screen bg-zinc-950'>
        <div className="flex justify-center grid grid-cols-3 sm- mt-14 shadow-lg">
          <div></div>
          <div className='w-full md:w-full p-4 ring-1 ring-[#D4D4D4] rounded-lg text-white text-center mt-10'>
            <h2>Lista de Notificaões</h2>
            <div className="grid grid-cols-2 mt-3">
              <div>Aplicativo: ...</div>
              <div>Data: ...</div>
            </div>
            <div className="text-justify mt-3">Em linguística, a noção de texto é ampla e ainda aberta a uma 
              definição mais precisa. Grosso modo, pode ser entendido como manifestação 
              linguística das ideias de um autor, que serão interpretadas pelo 
              leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável. Wikipédia</div>
          </div>
          </div>
      </main>
         
    );
  };
  