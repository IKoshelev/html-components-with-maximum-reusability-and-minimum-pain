import React from "react";
import { SelectProps, SelectBare } from "./SelectBare";
import "./SelectRoller.less";

export function SelectRoller<T>(props: SelectProps<T>) {

    const selectedItemIndex = (props.selectedItem
        && props.items.findIndex((i) => i === props.selectedItem))
        ?? -1;

    const indexsToRender = [-3, -2, -1, +1, +2, +3];

    return <div className='select-roller'>
        <SelectBare
            {...props}
            isOpen={false}
            renderAdditionalNodes={
                (isOpenState, setIsOpen) => (
                    indexsToRender.map(index => {

                        const item = props.items[selectedItemIndex + index];
                        if (!item) {
                            return undefined;
                        }

                        return <div
                            className='select-roller-item'
                            data-item-grid-index={4 + index}
                            onClick={() => props.onSelect(item)}
                        >
                            {
                                (props.renderSelectedItem?.(item))
                                ?? (item as any).toString?.()
                                ?? 'template missing'
                            }
                        </div>
                    })

                )
            }
        />
    </div>
}