import React, { Component, useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { setImmediate } from 'timers/promises';


export function RichText ({ handleMessage }: { handleMessage: (text: string) => void }) {
    
  const [state, setState] = useState({
    editorState: EditorState.createEmpty(),
  } )

  const onEditorStateChange = (editorState: any) => {
    setState({
      editorState,
    });
  };

    const { editorState } = state;
    
    const message = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    handleMessage(message)
    //console.log(draftToHtml(convertToRaw(editorState.getCurrentContent()))) //conteudo em html

    return (
      <div>
       
        <Editor 
          editorState={editorState}
          wrapperClassName="demo-wrapper mt-1"
          placeholder='Digite o texto aqui...'
          editorClassName="demo-editor bg-white t-0 block w-full p-2 text-sm
                                rounded-md shadow-sm placeholder-[#8A8A8A] h-[100px] md:h-[150px] 
                                focus:outline-none dark:ring-1 dark:ring-[#EEEEEE] 
                                min-h-[150px]" 
          onEditorStateChange={onEditorStateChange}
          
        />
        
        {/*<textarea
          className='opacity-0 h-1'
          disabled
          value={message}
          maxLength={255}
        />*/}
      </div>
    );
  }

