import styles from '../styles/components/Profile.module.css'
import Image from 'next/image'
import eu from '../../public/eu.jpg'
import levelup from '../../public/icons/level.svg'
import { useContext } from 'react'
import { ChallengesContext } from '@/contexts/ChallengesContext'

export function Profile(){
    const { level } = useContext(ChallengesContext)

    return (
       <div className={styles.profileContainer}>
         <Image src={eu} 
         alt="Marcos Porto" />
         <div>
            <strong>
                Marcos Porto
            </strong>
            <p>
            <Image src={levelup} 
            alt="Level" 
            />
                Level {level}
            </p>
         </div>
       </div>
    )
}