import React, { ReactElement } from 'react'
import ReactDom from 'react-dom'
import { useState } from 'react';

export const Modal = ({children}: any) => {

    // state reflecting if modal is visible or not
    const [open, setOpen] = useState(true);

    // clone children woth props passed to them 
    const childrenWithProps = React.Children.map<ReactElement, ReactElement>(children, child => {
        const newProps = {
            setOpen: setOpen
        }
        if (React.isValidElement(child)) {
          return React.cloneElement(child, newProps);
        }
        return child;
      });
    
    // target element to render modal
    const modalPortal: HTMLElement = document.getElementById('portal')!;
    
    return ReactDom.createPortal(
        <>
            {open && <div>
                <div className='modal-backdrop'/>
                <div className='modal-content'>
                    {childrenWithProps}
                </div>
            </div>}
        </>,
        modalPortal
    ) 
}

