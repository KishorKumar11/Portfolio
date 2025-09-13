import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ words, speed = 150, deleteSpeed = 100, pauseTime = 2000, className = '' }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex];

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    // Typing
                    if (currentText.length < currentWord.length) {
                        setCurrentText(currentWord.slice(0, currentText.length + 1));
                    } else {
                        // Word is complete, start deleting after pause
                        setTimeout(() => setIsDeleting(true), pauseTime);
                    }
                } else {
                    // Deleting
                    if (currentText.length > 0) {
                        setCurrentText(currentText.slice(0, -1));
                    } else {
                        // Word is deleted, move to next word
                        setIsDeleting(false);
                        setCurrentWordIndex((prev) => (prev + 1) % words.length);
                    }
                }
            },
            isDeleting ? deleteSpeed : speed
        );

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, pauseTime]);

    return (
        <span className={className}>
            {currentText}
            <span className="cursor">|</span>
        </span>
    );
};

export default TypewriterEffect;
