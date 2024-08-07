import {useState} from "react"
import styles from "./Form.module.css"

export function Form() {     
    
    function enviar(e: any){
        e.preventDefault();

        console.log( 
            formObject
        );

        alert("Dados enviados com sucesso");
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
            <form id="form">
                <select  id="select" value={formObject.select} onChange={
                        e => {
                            if(e.currentTarget.options.selectedIndex===1){
                                setMostrar(true)
                            }
                            else{
                                setMostrar(false);
                            }
                            setFormObject({...formObject, select: e.target.value})
                        } 
                    }> 
                    <option>--Enviar para--</option>
                    <option id="utilizador">Um utilizador</option>
                    <option>Todos utilizadores</option>
                </select>
                <select id="selected_app" value={formObject.app} onChange={
                        e =>setFormObject({...formObject, app: e.target.value})
                    }>
                    <option className="sele">--Selecionar App--</option>
                    <option>Só Money</option>
                    <option>Paga Só</option>
                </select><br/><br/>
                        {mostrar 
                          && <input id="id" placeholder="Insira o ID do utilizador" value={formObject.id} onChange={
                          e =>setFormObject({...formObject, id: e.target.value})
                          }/>
                        } 
                    <br/><br/>

                <label>Título</label>
                    <input value={formObject.titulo} onChange={
                        e =>setFormObject({...formObject, titulo: e.target.value})
                    }  type="text" id="titulo"  />
                    
              
                <br/><br/>

                <div>
                    <label >Sub-Título</label>
                    <input type="text" id="subTitulo" name="subtitulo" value={formObject.subTitulo} onChange={
                        e => setFormObject({...formObject, subTitulo: e.target.value})
                    } />
                    
                </div>
                <br/><br/>

                <div >
                    <textarea  id="mensagem" placeholder="Escreva aqui sua mensagem" value={formObject.mensagem} onChange={
                        e => {setFormObject({...formObject, mensagem: e.target.value})}
                    } />
                </div>
                
                <button type="submit" id="_enviar" onClick={enviar}>Enviar</button>
                <button type="reset" id="_limpar" className="limpar">Cancelar</button>
            </form>
            
        </div>

    );      
};