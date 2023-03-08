import React from 'react'
import { useState, useEffect } from 'react';
import { FormAcceptModal } from './FormAcceptModal';

export const Modal = (props: any) => {

    const { children } = props
    const [open, setOpen] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('accepted')) {
          setOpen(false);
        };
      }, []);
    
    return <>
        {open && <div>
            <div className='modal-backdrop'/>
            <div className='modal-content'>
                <FormAcceptModal setOpen={setOpen}/>
            </div>
        </div>}
    </>  
}

