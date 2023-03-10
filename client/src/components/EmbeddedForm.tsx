import React from 'react'

export const EmbeddedForm = ({url}: {url: string}) => {

    const style = {
        "border": "none", 
        "maxWidth":"100%", 
        "maxHeight":"100vh",
        "width": "600px",
        "height": "600px",
    }

    return (
        <iframe 
            src={url}  
            style={style} > 
        </iframe>
    )
}

