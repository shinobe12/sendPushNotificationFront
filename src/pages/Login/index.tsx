import { User} from 'lucide-react';


export function Login(){
    return(
        <main className='min-h-screen bg-zinc-950'>
        <div className="grid grid-cols-1 gap-4 place-items-center h-svh shadow-lg">
            <div className="rounded-lg max-w-[600px] p-[30px] shadow-2xl bg-zinc-800">  
            <div className="grid grid-cols-1 gap-4 place-items-center h-6 p-1">   
                <User size={80} strokeWidth={1.75} color='white'/>
            </div><br/>
                <form className="mt-12 m-10" id="form">
                    
                        <label className="text-slate-50 ">Email</label>
                            <input required className="mt-1 block w-full p-1 border border-slate-100
                                rounded-md shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                 focus:invalid:ring-red-500"
                                   type="text" id="titulo"/>
                
                    <br/>

                    <div>
                        <label className="text-slate-50">Senha</label>
                        <input required type="text" id="subTitulo" name="subtitulo" className="mt-1 block w-full p-1 border border-slate-100
                                rounded-md shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                 focus:invalid:ring-red-500"  />
                        
                    </div>
                    <br/> 
                    <div className="mt-1 justify-center grid grid-cols-1 place-items-center">
                        <button type="submit" id="_enviar" className="
                        rounded-md bg-green-600 text-md font-semibold text-white hover:bg-green-700
                        transition hover:translate-y-1 duration-300 w-full">Entrar</button>
                    </div>
                                        
                </form>
                  
            </div>
           
        </div>
        </main>
    )
}