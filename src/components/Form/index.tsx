import {useEffect, useState} from "react"
import styles from "./Form.module.css"

export function Form({formId, timestamp}:{formId: string, timestamp: number}) {     
    
    /*consumindo uma api*/
    const [api, setApi] = useState<any[]>([])
    function getLanguges(){
        fetch('https://alefesouza.dev/api/languages.php')
        .then(responde => responde.json())
        .then(_api => {
            setApi(_api)})
    }

    useEffect(() => {
        console.log(formId,timestamp)
        getLanguges()
      }, []);

    
    function enviar(e: any){
        e.preventDefault();

        if(formObject.app === "" || formObject.app ==="--Selecionar App--"){
            alert("Selecione a App")
        }else{
            console.log(formObject)
            alert('Dados envados com sucesso!')}
    }

    const [mostrar, setMostrar] = useState(false)

    const [formObject, setFormObject]=useState({
        id: "",
        select: "",
        app : "",
        titulo:"",
        subTitulo: "",
        mensagem: "" 
    })

    return(

        <div className={styles.form}>
                
            <form id="form" onSubmit={enviar}>
                <select required id="select" value={formObject.select} onChange={
                        e => {
                            if(e.currentTarget.options.selectedIndex === 1){
                                setMostrar(true)
                            }
                            else{
                                setMostrar(false);
                            }
                            setFormObject({...formObject, select: e.target.value})
                        } 
                    }> 
                    <option>Todos utilizadores</option>
                    <option id="utilizador">Um utilizador</option>
                    
                </select>
                <select required id="selected_app" value={formObject.app} onChange={
                        e =>setFormObject({...formObject, app: e.target.value})
                    }>
                    <option >--Selecionar App--</option>
                    <option>Só Money</option>
                    <option>Paga Só</option>
                </select><br/><br/>
                        {mostrar 
                          && <input required id="id" placeholder="Insira o ID do utilizador" value={formObject.id} onChange={
                          e =>setFormObject({...formObject, id: e.target.value})
                          }/>
                        } 
                    <br/><br/>

                <label>Título</label>
                    <input required value={formObject.titulo} onChange={
                        e =>setFormObject({...formObject, titulo: e.target.value})
                    }  type="text" id="titulo"  />
                    
              
                <br/><br/>

                <div>
                    <label >Sub-Título</label>
                    <input required type="text" id="subTitulo" name="subtitulo" value={formObject.subTitulo} onChange={
                        e => setFormObject({...formObject, subTitulo: e.target.value})
                    } />
                    
                </div>
                <br/><br/>

                <div >
                    <textarea required  id="mensagem" placeholder="Escreva aqui sua mensagem" value={formObject.mensagem} onChange={
                        e => {setFormObject({...formObject, mensagem: e.target.value})}
                    } />
                </div>
                
                <button type="submit" id="_enviar"><label>Enviar</label></button>
                <button type="reset" id="_limpar"><p>Cancelar</p></button>
            </form>
            
        </div>

    );      
};