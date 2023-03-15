import React, { ReactElement, Children, useState, useRef, useMemo } from 'react'
import { CarouselProps } from '../types/types'

const defaultProps: CarouselProps = {
    height: '20rem',
    children: null
}

export const Carousel = ({height, children}: CarouselProps) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState<number>(0)

    const carouselStyles = {
        height: height,
    }

    const handleInc = () => {
        setIndex((index + 1) % Children.count(children));
    }

    const handleDec = () => {
        setIndex(prev => {
            var next = (prev - 1) % Children.count(children);
            next =  next < 0 ? next + Children.count(children) : next;
            console.log(next)
            return next;
        })
    }

    const innerStyles = useMemo(() => {
        if (containerRef.current == null) {
            return {};
        }
        const offset = (containerRef.current?.offsetWidth - 1) * index;
        return {
                transform: `translateX(-${offset}px)`
            }
    }, [containerRef.current, index]);


    // clone children woth props passed to them 
    const childrenWithProps = React.Children.map<ReactElement, ReactElement>(children, child => {
        const newProps = {
            height: height
        }
        if (React.isValidElement(child)) {
            return React.cloneElement(child, newProps);
        }
        return child;
      });

    return <>
        <div 
            className='carousel-container'
            style={carouselStyles}
            ref={containerRef}
        >
            <div
                className='carousel-inner'
                style={innerStyles}
            >
                {childrenWithProps}
            </div>
            <div className='carousel-button-container'>
                <button onClick={() => handleDec()}>
                    <span className="material-symbols-outlined">
                        arrow_back
                    </span>
                </button>
                <button onClick={() => handleInc()}>
                    <span className="material-symbols-outlined">
                        arrow_forward
                    </span>
                </button>
            </div>
        </div>
        <div className='carousel-dot-container'>
            {
                Array.from({length: Children.count(children)}, (v, i) => i).map((i) => {
                    return <div key={i} className={`${index == i && 'current-dot'}`}/>
                })
            }
        </div>
    </>
}

Carousel.defaultProps = defaultProps;
