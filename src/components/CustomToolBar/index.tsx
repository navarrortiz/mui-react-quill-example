import React, { memo} from 'react';
import {Button} from "@mui/material";

const CustomToolbar = () => {
    return <div id="toolbar">
        <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
            <option value="1"/>
            <option value="2"/>
            <option selected/>
        </select>
        <button className="ql-bold"/>
        <button className="ql-italic"/>
        <select className="ql-color">
            <option value="red"/>
            <option value="green"/>
            <option value="blue"/>
            <option value="orange"/>
            <option value="violet"/>
            <option value="#d0d1d2"/>
            <option selected/>
        </select>
        <Button className="ql-insertStar" size={'small'} variant={'text'} sx={{width: "unset !important"}}>
            Material btn ★
        </Button>
    </div>
};

export default memo(CustomToolbar);
