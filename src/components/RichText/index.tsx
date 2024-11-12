import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { json } from 'stream/consumers';
import { Upload } from 'lucide-react';


export function RichText({ handleMessage }: { handleMessage: (text: string) => void }) {


  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
  };

  useEffect(() => {

    const message = draftToHtml(convertToRaw(editorState?.getCurrentContent())) // em html    
    handleMessage(message)

  }, [editorState])

  //const messageNormal = htmlToDraft()
  //console.log(messageNormal)


  return (
    <div className=''>

      <Editor
        editorState={editorState}
        wrapperClassName="mt-1 -z-10 "
        placeholder='Digite o texto aqui...'
        editorClassName="bg-white w-full p-2 text-sm sticky 
                              rounded-md shadow-sm placeholder-[#8A8A8A] h-[100px] md:h-[150px] 
                             focus:outline-none dark:ring-1 dark:ring-[#EEEEEE] 
                              min-h-[150px]"
        onEditorStateChange={onEditorStateChange}
        readOnly={false}
        editorStyle={{
          fontSize: 16,
        }}
        toolbar={
          {
            options: ["inline", "fontSize", "list", "link", "textAlign", "image", "history"],
            inline: {
              options: ['bold', 'italic', 'underline'],
            },
            list: { 
            options: ["unordered", "ordered"],
            },
            textAlign: { 
              inDropdown: false 
            },
          }
        }
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
