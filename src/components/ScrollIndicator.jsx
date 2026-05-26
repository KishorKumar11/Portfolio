import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { computeScrollbarMetrics } from './scrollMetrics';
import './ScrollIndicator.css';

const TOP_THRESHOLD_PX = 1;

function pageCanScroll() {
    return document.documentElement.scrollHeight > window.innerHeight + TOP_THRESHOLD_PX;
}

function isAtPageTop() {
    return window.scrollY <= TOP_THRESHOLD_PX;
}

function readDocumentScrollMetrics() {
    const { scrollHeight, clientHeight } = document.documentElement;
    return computeScrollbarMetrics({
        scrollY: window.scrollY,
        scrollHeight,
        clientHeight,
    });
}

const ScrollIndicator = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [atTop, setAtTop] = useState(true);
    const [canScroll, setCanScroll] = useState(false);
    const [scrollbar, setScrollbar] = useState(() => readDocumentScrollMetrics());

    const trackRef = useRef(null);
    const dragRef = useRef(null);

    const syncScrollState = useCallback(() => {
        const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentScrollY = window.scrollY;
        const progress = totalScrollHeight > 0 ? (currentScrollY / totalScrollHeight) * 100 : 0;

        setScrollProgress(progress);
        setAtTop(isAtPageTop());
        setCanScroll(pageCanScroll());
        setScrollbar(readDocumentScrollMetrics());
    }, []);

    useEffect(() => {
        syncScrollState();
        window.addEventListener('scroll', syncScrollState, { passive: true });
        window.addEventListener('resize', syncScrollState, { passive: true });

        return () => {
            window.removeEventListener('scroll', syncScrollState);
            window.removeEventListener('resize', syncScrollState);
        };
    }, [syncScrollState]);

    const scrollToThumbPosition = useCallback(
        (clientY) => {
            const track = trackRef.current;
            if (!track || !scrollbar.canScroll) return;

            const rect = track.getBoundingClientRect();
            const trackTravel = Math.max(0, rect.height - scrollbar.thumbHeight);
            const offset = Math.min(Math.max(0, clientY - rect.top - scrollbar.thumbHeight / 2), trackTravel);
            const ratio = trackTravel > 0 ? offset / trackTravel : 0;

            window.scrollTo({ top: ratio * scrollbar.scrollable, behavior: 'auto' });
        },
        [scrollbar]
    );

    const onTrackPointerDown = (event) => {
        if (event.target !== trackRef.current) return;
        scrollToThumbPosition(event.clientY);
    };

    const onThumbPointerDown = (event) => {
        event.preventDefault();
        event.stopPropagation();

        dragRef.current = {
            pointerId: event.pointerId,
            startY: event.clientY,
            startScrollY: window.scrollY,
            thumbTop: scrollbar.thumbTop,
            trackTravel: Math.max(0, window.innerHeight - scrollbar.thumbHeight),
        };

        event.currentTarget.setPointerCapture(event.pointerId);
    };

    const onThumbPointerMove = (event) => {
        const drag = dragRef.current;
        if (!drag || drag.pointerId !== event.pointerId || drag.trackTravel <= 0) return;

        const deltaY = event.clientY - drag.startY;
        const scrollDelta = (deltaY / drag.trackTravel) * scrollbar.scrollable;
        window.scrollTo({ top: drag.startScrollY + scrollDelta, behavior: 'auto' });
    };

    const onThumbPointerEnd = (event) => {
        const drag = dragRef.current;
        if (!drag || drag.pointerId !== event.pointerId) return;
        dragRef.current = null;
    };

    const showScrollHint = atTop && canScroll;
    const showScrollbar = scrollbar.canScroll && !atTop;

    return (
        <>
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #4ab8c8, #7dd4e0)',
                    transformOrigin: '0%',
                    zIndex: 9999,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: scrollProgress / 100 }}
                transition={{ duration: 0.1 }}
            />

            <AnimatePresence>
                {showScrollbar && (
                    <motion.div
                        key="persistent-scrollbar"
                        className="persistent-scrollbar"
                        role="scrollbar"
                        aria-orientation="vertical"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={Math.round(scrollProgress)}
                        aria-controls="main-content"
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div
                            ref={trackRef}
                            className="persistent-scrollbar__track"
                            onPointerDown={onTrackPointerDown}
                        >
                            <div
                                className="persistent-scrollbar__thumb"
                                style={{
                                    height: `${scrollbar.thumbHeight}px`,
                                    transform: `translateY(${scrollbar.thumbTop}px)`,
                                }}
                                onPointerDown={onThumbPointerDown}
                                onPointerMove={onThumbPointerMove}
                                onPointerUp={onThumbPointerEnd}
                                onPointerCancel={onThumbPointerEnd}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showScrollHint && (
                    <motion.div
                        key="scroll-hint"
                        className="scroll-hint"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.35 }}
                        aria-hidden="true"
                    >
                        <span className="scroll-hint__arrow" aria-hidden="true">
                            <svg
                                className="scroll-hint__arrow-svg"
                                viewBox="0 0 32 40"
                                width="28"
                                height="36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="scroll-arrow-gradient" x1="16" y1="0" x2="16" y2="40" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                                        <stop offset="45%" stopColor="var(--neon-cyan, #5dd4ff)" />
                                        <stop offset="100%" stopColor="var(--accent-color-alt, #7dd4e0)" stopOpacity="0.7" />
                                    </linearGradient>
                                </defs>
                                <path
                                    className="scroll-hint__chevron scroll-hint__chevron--top"
                                    d="M6 12 L16 22 L26 12"
                                    stroke="url(#scroll-arrow-gradient)"
                                    strokeWidth="2.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    className="scroll-hint__chevron scroll-hint__chevron--bottom"
                                    d="M6 22 L16 32 L26 22"
                                    stroke="url(#scroll-arrow-gradient)"
                                    strokeWidth="2.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <span className="scroll-hint__label neon-text">scroll below</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ScrollIndicator;
