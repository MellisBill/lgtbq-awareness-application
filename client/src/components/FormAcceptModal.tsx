import React from 'react'
import { useState, useEffect } from 'react'

export const FormAcceptModal = (props: any) => {

  const { setOpen, content, storageKey } = props;
  const [accepted, setAccepted] = useState(false);

  const onContinue = () => {
    if (accepted) {
      localStorage.setItem(`accepted-${storageKey}`, 'true');
      setOpen(false);
    }
  }

  return <>
  <h2>Terms and Conditions</h2>
    <p className='terms-content'>{content}</p>
    <form className='accept-terms-form' onSubmit={(e => e.preventDefault())}>
      <div className='check-box-container'>
        <button className='button-no-style' onClick={() => setAccepted(!accepted)}>
          <span className="material-symbols-outlined">
            { accepted ? 'check_box' : 'check_box_outline_blank' }
          </span>
        </button>
        <p>I have read and accepted the terms and conditions</p>
      </div>
      <button className='continue' disabled={!accepted} onClick={() => onContinue()}>Continue</button>
    </form>
  </>
}
