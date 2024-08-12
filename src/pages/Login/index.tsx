import { User} from 'lucide-react';


export function Login(){
    return(
        <main className='min-h-screen bg-[#1E1E1E]'>
        <div className="grid grid-cols-1 gap-4 place-items-center h-svh shadow-lg">
            <div className="rounded-lg max-w-[600px] p-[60px] shadow-2xl bg-[#272729]">  
            <div className="grid grid-cols-1 gap-4 place-items-center h-6 p-2">   
                <User size={80} strokeWidth={1.75} color='white'/>
            </div><br/>
                <form className="mt-12 " id="form">
                    
                        <label className="text-slate-50 ">Email</label>
                            <input required placeholder='Introduza seu email...' className="mt-1 block w-full p-1 border border-slate-100
                                rounded-md shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                 focus:invalid:ring-red-500"
                                   type="text" id="titulo"/>
                
                    <br/>

                    <div>
                        <label className="text-slate-50">Senha</label>
                        <input required type="text" id="subTitulo" name="subtitulo" placeholder='Introduza sua senha...' className="
                                mt-1 block w-full p-1 border border-slate-100
                                rounded-md shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                 focus:invalid:ring-red-500"/>
                        
                    </div>
                    <br/> 
                    <div className="mt-1 justify-center grid grid-cols-1 place-items-center">
                        <button type="submit" id="_enviar" className="
                        rounded-md bg-[#277FE3] text-md font-semibold text-white hover:bg-[#0061CF]
                        transition hover:translate-y-1 duration-300 h-8 w-[70%]">Entrar</button>
                    </div>
                                        
                </form>
                  
            </div>
           
        </div>
        </main>
    )
}