; import React from "react";
import "./Select.less";
import { SelectProps, SelectBare } from "./SelectBare";

export function Select<T>(props: SelectProps<T>) {
    return <div className='select-desktop'>
        <SelectBare
            {...props}
            renderAdditionalNodes={
                (isOpenState, setIsOpen) => (
                    <div
                        className='select-toggle'
                        onClick={() => setIsOpen(!isOpenState)}>
                        &#9660;
                    </div>)
            }
        />
    </div>
}
