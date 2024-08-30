import { useEffect, useState } from "react";
import { usePagination } from "./pagination";


interface listNotifications {
  id: number;
  select: string;
  app: string;
  titulo: string;
  subTitulo: number;
  mensagem: string;
}

export function Lista() {
  const [notify, setNotify] = useState<listNotifications[] | null>([]);
  const {
    actualPage,
    getItemsPage,
    handleBackPage,
    handleNextPage,
    totalPages,
  } = usePagination(notify!, 3);

  const fetchNotifications = () => {
    fetch("http://localhost:5000/notifications")
      .then((response) => response.json())
      .then((data) => setNotify(data));
  }

  useEffect(() => {
    fetchNotifications()
  }, []);

  return (
    <main className='min-h-screen bg-zinc-950 dark:bg-[#fff] flex justify-center'>
      <div className="w-[min(80%,58rem)] animate-fade mt-20 h-min(100%, 40rem) md:w-[70%] lg:w-[45%] lg:mt-[6%]">
        <div className=' md:mt-0 p-8 bg-[#272729] dark:bg-[#fff] rounded-lg text-white text-center '>
          {getItemsPage().map(item =>
            <div className="p-4 rounded-md ring-1 mt-10 ring-[#D4D4D4]" key={item.mensagem}>
              <div className="md:flex justify-between p-2 text-sm md:text-md">
                <div className="text-bold dark:text-zinc-900 flex">Aplicativo: <p className="font-light ml-1">{item.app}</p></div>
                <div className="text-bold flex justify-start dark:text-zinc-900  w-[90%] md:w-[35%] lg:w-[40%] md:justify-end mr-[42%] sm:mr-[75%] md:mr-[0%]">Data: <p className="font-light ml-1">{item.date}</p></div>
              </div>
              <div className="md:text-justify mt-3 bg-[#454545] dark:bg-[#E8F2FF] rounded-md p-3">
                <h2 className="text-start dark:text-zinc-900 flex">Titulo da Mensagem: <p className="font-light ml-1">{item.titulo}</p></h2>
                <p className="font-light dark:text-zinc-900 text-sm">
                  {item.mensagem}
                </p>
              </div>
            </div>
          )}
          <div className="flex justify-center mt-5 animate-fade">
            <button type="button" onClick={handleBackPage} disabled={actualPage === 1}>
              <svg width="28" height="28" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="27" height="27" rx="13.5" fill="#EEEEEE" />
                <path fillRule="evenodd" clipRule="evenodd" d="M10.2197 14.5051C9.92678 14.2261 9.92678 13.7739 10.2197 13.4949L14.7197 9.20921C15.0126 8.93026 15.4874 8.93026 15.7803 9.20921C16.0732 9.48815 16.0732 9.94042 15.7803 10.2194L11.8107 14L15.7803 17.7806C16.0732 18.0596 16.0732 18.5118 15.7803 18.7908C15.4874 19.0697 15.0126 19.0697 14.7197 18.7908L10.2197 14.5051Z" fill="#BCBCBC" />
              </svg>
            </button>

            <div className="fon-light mr-2 ml-2 flex"><p className="mr-1 text-sky-500">{actualPage}</p> de {totalPages}</div>

            <button type="button" onClick={handleNextPage} disabled={actualPage === totalPages}>
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="27" height="27" rx="13.5" fill="#277FE3" />
                <path fillRule="evenodd" className="evenodd" d="M16.7803 13.4949C17.0732 13.7739 17.0732 14.2261 16.7803 14.5051L12.2803 18.7908C11.9874 19.0697 11.5126 19.0697 11.2197 18.7908C10.9268 18.5118 10.9268 18.0596 11.2197 17.7806L15.1893 14L11.2197 10.2194C10.9268 9.94042 10.9268 9.48816 11.2197 9.20921C11.5126 8.93026 11.9874 8.93026 12.2803 9.20921L16.7803 13.4949Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>

  );
};