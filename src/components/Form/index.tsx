import styles from "./Form.module.css"

export function Form() {
    return(

        <div className={styles.form}>
            <form id="form" metoh="post" styles="background-color: #csc;">
                <select class="select">
                    <option>...</option>
                </select>
                <select class="select-metodo">
                    <option>...</option>
                </select><br/><br/>
                
                <div class="input-single">
                <label for="nome">Título</label>
                    <input type="text" id="titulo" class="input" autocomplete="off"/>
                    
                </div>
                <br/><br/>

                <div class="input-single">
                    <label for="nome">Sub-Título</label>
                    <input type="text" id="titulo" name="subtitulo" autocomplete="off"/>
                    
                </div>
                <br/><br/>

                <div class="input-single">
                    <textarea class="mensagem" id="mensagem" placeholder="  Escreva aqui sua mensagem"/>
                </div>
                
                <button type="submit" class="enviar" id="enviar">Enviar</button>
                
            </form>
            
        </div>

    );    
};