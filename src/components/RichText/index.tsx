import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';


export function RichText({ handleMessage }: { handleMessage: (text: string) => void }) {
  
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );
  
  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
  };

  useEffect(() => {
    const message = draftToHtml(convertToRaw(editorState?.getCurrentContent()))
    handleMessage(message)
  }, [editorState])

  return (
    <div className='-z-50'>
      <Editor
        editorState={editorState}
        wrapperClassName="mt-1 z-10"
        placeholder='Digite o texto aqui...'
        editorClassName="demo-editor bg-white t-0 block w-full p-2 text-sm -z-50
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
