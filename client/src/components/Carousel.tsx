import React, { ReactElement, Children, useState, useRef, useMemo, useEffect } from 'react'
import { CarouselProps } from '../types/types'

const defaultProps: CarouselProps = {
    height: '30rem',
    children: null,
    auto: false,
    interval: 0,
}

export const Carousel = ({height, children, auto, interval}: CarouselProps) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState<number>(0)

    // Timer to increment the cound every <interval> seconds
    useEffect(() => {
        if (!auto) return;
        const timer = setInterval(() => handleInc(), interval);
        return () => {
          clearInterval(timer);
        };
      }, [index]);

    // styles for carousel container
    const carouselStyles = {
        height: height,
    }

    // Increment index; this moves the carousel on by one; wraps around to 0
    const handleInc = () => {
        setIndex((index + 1) % Children.count(children));
    }

    // Decremenet index; this moves the carousel back by one; wraps around to 0
    const handleDec = () => {
        setIndex(prev => {
            var next = (prev - 1) % Children.count(children);
            next =  next < 0 ? next + Children.count(children) : next;
            console.log(next)
            return next;
        })
    }

    // Styles that sets the offset of the children of the carousel. This makes the children move left & right
    const innerStyles = useMemo(() => {
        if (containerRef.current == null) {
            return {};
        }
        const offset = (containerRef.current?.offsetWidth) * index;
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
