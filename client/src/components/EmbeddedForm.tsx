import React from 'react'

export const EmbeddedForm = ({url, title}: {url: string, title: string}) => {

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
            style={style}
            title={title} 
        > 
        </iframe>
    )
}

