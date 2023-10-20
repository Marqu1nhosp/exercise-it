import Image from 'next/image'
import styles from '../styles/components/LevelUpModal.module.css'
import close from '../../public/icons/close.svg'
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

export function LevelUpModal(){
    const { level, closeLevelUpModal} = useContext(ChallengesContext)

    return (
        <div className={styles.overlay}>
          <div className={styles.container}>
            <header>{level}</header>
    
            <strong>Parabéns</strong>
            <p>Você alcançou um novo level.</p>
    
            <button type="button" onClick={closeLevelUpModal}>
              <Image src={close} alt="Fechar modal" />
            </button>
          </div>
        </div>
      );
}