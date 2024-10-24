import React, { Component, useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


export class RichText extends Component {
    
  state = {
    editorState: EditorState.createEmpty(),
  } 

  onEditorStateChange = (editorState: any) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    const conteudo = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent()))) //conteudo em html
    
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper mt-1"
          placeholder='Digite o texto aqui...'
          editorClassName="demo-editor bg-white t-0 block w-full p-1 lg:p-3 text-sm
                                rounded-md shadow-sm placeholder-[#8A8A8A] h-[100px] md:h-[150px] 
                                focus:outline-none dark:ring-1 dark:ring-[#EEEEEE]"
          onEditorStateChange={this.onEditorStateChange}
          
        />
        {/*<textarea
          className='opacity-0 h-1'
          disabled
          value={conteudo}
          maxLength={255}
        />*/}
      </div>
    );
  }
}