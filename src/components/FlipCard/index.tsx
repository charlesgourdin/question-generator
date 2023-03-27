import { useSpring, animated } from '@react-spring/web'
import { PropsWithChildren, useEffect } from 'react';
import styles from './styles.module.scss'

export interface FlipCardProps {
}

export default function FlipCard({children}: PropsWithChildren<FlipCardProps>) {
    const [spring, setSpring] = useSpring(() => ({
        config: {
            duration: 300
        },
        from: { 
            rotateX: 0,
            boxShadow: '-1px 0px 28px 5px rgba(0,0,0,0)',
            transform: 'scale(1)',
            filter: 'blur(0)'
        },
    }))

    useEffect(() => {
        setSpring.start({
            from: { 
                rotateX: 180,
                boxShadow: '-1px 0px 28px 5px rgba(0,0,0,0.3)',
                transform: 'scale(1.2)',
                filter: 'blur(1px)'
            },
            to: {
                rotateX: 0,
                boxShadow: '-1px 0px 28px 5px rgba(0,0,0,0)',
                transform: 'scale(1)',
                filter: 'blur(0)'
            },
        })
    }, [children])

    return (
        <animated.div
        className={styles.flipCard}
        style={{
            borderRadius: '10px',
            ...spring,
        }}
        >
            {children}
        </animated.div>
    )
}