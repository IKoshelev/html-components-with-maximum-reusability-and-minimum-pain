import { SelectProps, SelectBare } from "./SelectBare";
import React from "react";
import './SelectForPOSTerminal.less';

export function SelectForPOSTerminal<T>(props: SelectProps<T>) {
    return <div className='select-pos-terminal'>
        <SelectBare
            {...props}
        />
    </div>
}