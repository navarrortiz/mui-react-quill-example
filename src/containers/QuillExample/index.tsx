import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Box} from "@mui/material";
import CustomToolbar from "../../components/CustomToolBar";


function insertStar() {
    // @ts-ignore
    const quill = this.quill;
    const cursorPosition = quill.getSelection().index;
    quill.insertText(cursorPosition, "★");
    quill.setSelection(cursorPosition + 1);
}

const modules = {
    toolbar: {
        container: "#toolbar",
        handlers: {
            insertStar,
        }
    },
    clipboard: {
        matchVisual: false,
    }
};

const QuillExample = ({}) => {
    const [value, setValue] = useState('');

    return  <Box className="text-editor">
              <CustomToolbar/>
              <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules}/>
              {value}
            </Box>;
}

export default QuillExample;
