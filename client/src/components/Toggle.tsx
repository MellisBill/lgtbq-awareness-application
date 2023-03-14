import React from 'react'

export const Toggle = ({value, setValue}: {value: boolean, setValue: (value: boolean | ((prevVar: boolean) => boolean)) => void;}) => {
  return (
    <div className={`toggle-container ${value && 'toggle-container-selected'}`} 
        onClick={() => setValue(!value)}
    >
        <div 
            className={`toggle-inner ${value && 'toggle-inner-selected'}`}
        />
    </div>
  )
}
