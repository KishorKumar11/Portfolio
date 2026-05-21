export const fadeUp = {
    hidden: { opacity: 0, y: 52 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] } }
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } }
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.72 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 28, damping: 12 } }
};

export const slideLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.65, ease: [0.22, 1, 0.36, 1] } }
};

export const slideRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.65, ease: [0.22, 1, 0.36, 1] } }
};

// Container-only orchestrator — no visual change on the wrapper itself
export const stagger = (gap = 0.22, delay = 0.25) => ({
    hidden: {},
    visible: {
        transition: { staggerChildren: gap, delayChildren: delay }
    }
});

export const cardPop = {
    hidden: { opacity: 0, y: 60, scale: 0.88 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 28, damping: 12 } }
};

export const popIn = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 32, damping: 12 } }
};

export const reducedFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
};

export const viewport = { once: true, amount: 0.18 };
