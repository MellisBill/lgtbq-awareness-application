import React, { ReactElement, ReactNode } from 'react'
import { useState, useEffect } from 'react';
import { FormAcceptModal } from './FormAcceptModal';

export const Modal = ({children, storageKey}: any) => {

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
    
    return <>
        {open && <div>
            <div className='modal-backdrop'/>
            <div className='modal-content'>
                {childrenWithProps}
            </div>
        </div>}
    </>  
}

