import styles from '../styles/components/ChallengeBox.module.css'
import Image from 'next/image'
import levelUp from '../../public/icons/level-up.svg'
import body from '../../public/icons/body.svg'
import eye from '../../public/icons/eye.svg'
import { ChallengesContext } from '@/contexts/ChallengesContext'
import { useContext } from 'react'
import { CountdownContext } from '@/contexts/CountdownContext'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completedChallege } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded(){
        completedChallege();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetCountdown();
        resetChallenge();
    }
    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header> Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        {activeChallenge.type === 'body'
                            ? <Image src={body} alt='Body' />
                            : <Image src={eye} alt='Eye' />
                        }
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >Falhei</button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >Completei</button>
                    </footer>
                </div>
            ) : (<div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <Image src={levelUp} alt="Level Up" />
                    Avance de level completando desafios !
                </p>
            </div>)}
        </div>
    )
}