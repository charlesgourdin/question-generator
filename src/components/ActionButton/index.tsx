import { useSpring, animated } from '@react-spring/web'
import { PropsWithChildren, useEffect } from 'react';
import styles from './styles.module.scss'

export interface ActionButtonProps {
    onClick: () => void;
}

export default function ActionButton({children, onClick}: PropsWithChildren<ActionButtonProps>) {
    const [spring, setSpring] = useSpring(() => ({
        from: { transform: 'scale(1)' },
    }))

    const handleClick = () => {
        setSpring.start({
            from: { transform: 'scale(0.9)' },
            to: { transform: 'scale(1)' },
        })
    }

    return (
        <animated.div
            style={{
                ...spring,
            }}
        >
            <button 
            className={styles.actionButton}
                onClick={() => {
                onClick()
                handleClick()
                }}>
                {children}
            </button>
        </animated.div>
    )
}