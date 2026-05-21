import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import './LofiRainScene.css';

const LofiRainScene = () => {
    const canvasRef = useRef(null);
    const reduce = useReducedMotion();

    useEffect(() => {
        if (reduce) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(canvas);

        const makeDrops = () =>
            Array.from({ length: 160 }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                len: Math.random() * 16 + 6,
                speed: Math.random() * 3.5 + 2.5,
                opacity: Math.random() * 0.35 + 0.08,
                width: Math.random() < 0.3 ? 1.5 : 1,
            }));

        let drops = makeDrops();
        let animId;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            drops.forEach((d) => {
                ctx.beginPath();
                ctx.moveTo(d.x, d.y);
                ctx.lineTo(d.x - 0.8, d.y + d.len);
                const grad = ctx.createLinearGradient(d.x, d.y, d.x - 0.8, d.y + d.len);
                grad.addColorStop(0, `rgba(160, 200, 230, 0)`);
                grad.addColorStop(0.4, `rgba(160, 200, 230, ${d.opacity})`);
                grad.addColorStop(1, `rgba(160, 200, 230, ${d.opacity * 0.4})`);
                ctx.strokeStyle = grad;
                ctx.lineWidth = d.width;
                ctx.stroke();

                d.y += d.speed;
                if (d.y > canvas.height + d.len) {
                    d.y = -d.len;
                    d.x = Math.random() * canvas.width;
                }
            });

            animId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animId);
            ro.disconnect();
        };
    }, [reduce]);

    return (
        <div className="lofi-scene">
            {/* Deep night-sky room bg */}
            <div className="lofi-room-bg" />

            {/* Window silhouette with glowing rain canvas inside */}
            <div className="lofi-window-wrap">
                <div className="lofi-window">
                    {/* Rainy sky behind glass */}
                    <div className="lofi-sky" />
                    {reduce ? (
                        <div className="lofi-rain-static" />
                    ) : (
                        <canvas ref={canvasRef} className="lofi-rain-canvas" />
                    )}
                    {/* Tree silhouettes */}
                    <div className="lofi-trees" />
                    {/* Window glass glare */}
                    <div className="lofi-glass-glare" />
                    {/* Window pane dividers */}
                    <div className="lofi-pane-h" />
                    <div className="lofi-pane-v" />
                </div>
                {/* Window frame shadow */}
                <div className="lofi-window-sill" />
            </div>

            {/* Desk + lamp silhouette */}
            <div className="lofi-desk" />

            {/* Warm amber lamp glow (the key lo-fi feel) */}
            <div className="lofi-lamp-glow" />
            <div className="lofi-lamp-cone" />

            {/* Puddle reflections at bottom */}
            <div className="lofi-puddles" />

            {/* Overall warm vignette */}
            <div className="lofi-vignette" />
        </div>
    );
};

export default LofiRainScene;
