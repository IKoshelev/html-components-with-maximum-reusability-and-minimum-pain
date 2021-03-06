import { useState, useEffect, ReactNode } from "react";
import React from "react";

export interface SelectProps<T> {
    items: T[],
    selectedItem?: T,
    allowSelectUndefind?: boolean,

    getKey: (item: T) => string,
    renderSelectedItem?: (item: T) => React.ReactNode,
    renderItemForSelection?: (item: T) => React.ReactNode,

    placeholderWhenNoSelectedItem?: string,
    isOpen?: boolean,

    renderAdditionalNodes?: (isOpenState: boolean, setIsOpen: (state: boolean) => void) => React.ReactNode,

    onSelect: (item: T | undefined) => void,
    onOpen?: () => void,
    onClose?: () => void
}

export function SelectBare<T>(props: SelectProps<T>) {

    const [isOpenState, setIsOpen] = useState<boolean>(false);
    const isOpen = props.isOpen ?? isOpenState;
    const selectedItem = props.selectedItem && props.items.find(x => x === props.selectedItem);

    const selectedItemNode: ReactNode =
        (selectedItem && props.renderSelectedItem?.(selectedItem))
        ?? (selectedItem && (selectedItem as any).toString?.())
        ?? props.placeholderWhenNoSelectedItem
        ?? "select...";

    useEffect(() => {
        if (isOpen) {
            props.onOpen?.();
        } else {
            props.onClose?.();
        }
    },
        [isOpen])

    return <>
        <div
            className='selected-item'
            data-select-is-open={isOpen}
            onClick={() => setIsOpen(true)}>

            {selectedItemNode}
        </div>

        {
            isOpen &&
            <div className='selectable-items-container'>
                {/* selectable-items-container is needed for positioning purposes */}
                <div className='selectable-items'>
                    {
                        props.allowSelectUndefind !== false &&
                        <div
                            key={'select-undefined__special__value'}
                            className='selectable-item'
                            data-item-index={-1}
                            data-item-is-seleceted={selectedItem === undefined}
                            onClick={() => {
                                props.onSelect(undefined);
                                setIsOpen(false);
                            }}>
                            &nbsp;
                        </div>
                    }
                    {
                        props.items.map((item, index) =>
                            <div
                                key={props.getKey(item)}
                                className='selectable-item'
                                data-item-index={index}
                                data-item-is-seleceted={item === selectedItem}
                                onClick={() => {
                                    props.onSelect(item);
                                    setIsOpen(false);
                                }}>
                                {
                                    (props.renderSelectedItem?.(item))
                                    ?? (item as any).toString?.()
                                    ?? 'template missing'
                                }
                            </div>)
                    }
                </div>
            </div>
        }

        {
            props.renderAdditionalNodes?.(isOpenState, setIsOpen)
        }

    </>;

}