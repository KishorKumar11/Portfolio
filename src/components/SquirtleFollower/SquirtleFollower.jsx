import React, { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

function WaterDrop({ startX, startY, angle, onDone }) {
  const dist = 32 + Math.random() * 22;
  return (
    <motion.div
      initial={{ x: startX, y: startY, opacity: 1, scale: 0.5 }}
      animate={{
        x: startX + Math.cos(angle) * dist,
        y: startY + Math.sin(angle) * dist - 18,
        opacity: 0,
        scale: 1.6,
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onAnimationComplete={onDone}
      style={{
        position: 'absolute',
        width: 6, height: 6,
        borderRadius: '50% 50% 50% 0',
        background: 'radial-gradient(circle at 30% 30%, #a8e8ff, #1a90cc)',
        pointerEvents: 'none',
        zIndex: 10001,
        top: 0, left: 0,
      }}
    />
  );
}

const SIZE = 68;

function PokemonSprite({ config }) {
  const [showBubble, setShowBubble] = useState(false);
  const [drops, setDrops] = useState([]);

  // Auto-cycle: show 3s, hide 5s, repeat
  useEffect(() => {
    let hideTimer, nextTimer;

    const cycle = () => {
      setShowBubble(true);
      hideTimer = setTimeout(() => {
        setShowBubble(false);
        nextTimer = setTimeout(cycle, 5000);
      }, 3000);
    };

    // Start immediately
    cycle();

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [config.name]);

  const handleClick = useCallback(() => {
    setShowBubble(true);
    const newDrops = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      startX: SIZE * 0.5 - 3,
      startY: SIZE * 0.55 - 3,
      angle: (i / 8) * Math.PI * 2,
    }));
    setDrops(d => [...d, ...newDrops]);
  }, []);

  const removeDrops = useCallback((id) => {
    setDrops(d => d.filter(drop => drop.id !== id));
  }, []);

  return (
    <motion.div
      initial={{ x: 140, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 140, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 24 }}
      onClick={handleClick}
      title={`It's ${config.name}! Click me!`}
      style={{ cursor: 'pointer', userSelect: 'none', position: 'relative' }}
    >
      <AnimatePresence>
        {showBubble && (
          <motion.div
            key="bubble"
            initial={{ opacity: 0, scale: 0.5, x: 8 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.5, x: 8 }}
            transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            style={{
              position: 'absolute',
              right: `${SIZE + 14}px`,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(8, 18, 36, 0.95)',
              border: '1.5px solid #5AC8FA',
              borderRadius: '8px',
              padding: '5px 12px',
              fontSize: '11px',
              color: '#fff',
              whiteSpace: 'nowrap',
              fontFamily: 'monospace',
              letterSpacing: '0.5px',
              boxShadow: '0 0 18px rgba(90,200,250,0.55)',
              zIndex: 9999,
            }}
          >
            {config.message}
            <span style={{
              position: 'absolute',
              right: '-8px', top: '50%',
              transform: 'translateY(-50%)',
              width: 0, height: 0,
              borderTop: '6px solid transparent',
              borderBottom: '6px solid transparent',
              borderLeft: '8px solid #5AC8FA',
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      {drops.map(drop => (
        <WaterDrop
          key={drop.id}
          startX={drop.startX}
          startY={drop.startY}
          angle={drop.angle}
          onDone={() => removeDrops(drop.id)}
        />
      ))}

      <motion.div
        animate={{ y: [0, -7, 0], rotate: [-2.5, 2.5, -2.5] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.22, transition: { duration: 0.18 } }}
        style={{
          filter: [
            'drop-shadow(0 5px 12px rgba(0,0,0,0.65))',
            'drop-shadow(0 0 16px rgba(90,200,250,0.5))',
          ].join(' '),
        }}
      >
        <img
          src={config.sprite}
          alt={config.name}
          style={{ width: SIZE, height: SIZE, display: 'block', objectFit: 'contain' }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function PokemonFollower({ zones = [] }) {
  const [activeIdx, setActiveIdx] = useState(-1);

  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, { stiffness: 40, damping: 16, mass: 0.6 });
  const top = useTransform(spring, [0, 1], ['10vh', '82vh']);

  useEffect(() => {
    const check = () => {
      if (!zones || !zones.length) return;
      let found = -1;
      zones.forEach((zone, i) => {
        const startEl = document.getElementById(zone.startSection);
        const endEl = document.getElementById(zone.endSection);
        if (!startEl || !endEl) return;
        const startTop = startEl.getBoundingClientRect().top;
        const endBottom = endEl.getBoundingClientRect().bottom;
        if (startTop < window.innerHeight * 0.9 && endBottom > 0) found = i;
      });
      setActiveIdx(found);
    };

    window.addEventListener('scroll', check, { passive: true });
    check();
    return () => window.removeEventListener('scroll', check);
  }, [zones]);

  return (
    <motion.div
      className="pokemon-follower"
      style={{
        position: 'fixed',
        right: '16px',
        top,
        zIndex: 9998,
        pointerEvents: activeIdx >= 0 ? 'auto' : 'none',
      }}
    >
      <AnimatePresence mode="wait">
        {activeIdx >= 0 && (
          <PokemonSprite key={activeIdx} config={zones[activeIdx]} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
