import { PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

export interface Footer {
}

export default function Footer({children}: PropsWithChildren<Footer>) {

    return (
        <footer className={styles.footer}>
            <p>© 2023 Charles Gourdin</p>
            <div className={styles.social}>
                <div className={styles.imgContainer}>
                    <a href='https://github.com/charlesgourdin' target='_blank'>
                        <Image
                            className={styles.logo}
                            src='/images/github-logo.svg'
                            alt='github logo'
                            title='github'
                            fill
                        />
                    </a>
                </div>

                <div className={styles.imgContainer}>
                    <a href='https://twitter.com/GourdinCharles' target='_blank'>
                        <Image
                            className={styles.logo}
                            src='/images/twitter-logo.svg'
                            alt='twitter logo'
                            title='twitter'
                            fill
                        />
                    </a>
                </div>

                <div className={styles.imgContainer}>
                    <a href='https://www.linkedin.com/in/charles-gourdin/' target='_blank'>
                        <Image
                            className={styles.logo}
                            src='/images/linkedin-logo.svg'
                            alt='linkedin logo'
                            title='linkedin'
                            fill
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}