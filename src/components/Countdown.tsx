import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';



export function Countdown() {
    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown 
    } = useContext(CountdownContext)
    

    const [minuteLefh, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLefh, secondsRight] = String(seconds).padStart(2, '0').split('');


    return (
    <div>
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLefh}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondsLefh}</span>
                <span>{secondsRight}</span>
            </div>
        </div>

        {hasFinished ? (
            <button 
            disabled
            className={styles.countdownButton}
            >
                Ciclo encerrado
            </button>
        ) : (
        <>
        { isActive ? (
            <button 
                type="button" 
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}
            >
                Abadonar ciclo
            </button>
        ) : (
            <button
                type="button" 
                className={styles.countdownButton}
                onClick={startCountdown}
            >
                Iniciar um ciclo
            </button>
        )}      
        </>
        )}      
    </div>
    );
}