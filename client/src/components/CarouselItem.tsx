import React, { ReactElement } from 'react'
import { CarouselItemProps } from '../types/types'

export const CarouselItem = ({height, children}: CarouselItemProps) => {

    const styles = {
        height: height,
    }

    // clone children woth props passed to them 
    const childrenWithProps = React.Children.map<ReactElement, ReactElement>(children, child => {
        const newProps = {
            style: { height: '100%', width: '100%' }
        }
        if (React.isValidElement(child)) {
            return React.cloneElement(child, newProps);
        }
        return child;
      });
      
    return (
        <div 
            style={styles}
            className='carousel-item'
        >
            {childrenWithProps}
        </div>
    )
}

