import { fadeUp, fadeIn, scaleIn, slideLeft, slideRight, stagger, cardPop, reducedFade, viewport } from '../variants';

describe('motion/variants', () => {
    test('all variants have hidden + visible states', () => {
        [fadeUp, fadeIn, scaleIn, slideLeft, slideRight, cardPop, reducedFade].forEach((v) => {
            expect(v).toHaveProperty('hidden');
            expect(v).toHaveProperty('visible');
        });
    });

    test('fadeUp moves from y:40 to y:0', () => {
        expect(fadeUp.hidden).toMatchObject({ opacity: 0, y: 40 });
        expect(fadeUp.visible).toMatchObject({ opacity: 1, y: 0 });
    });

    test('slideLeft and slideRight mirror x direction', () => {
        expect(slideLeft.hidden.x).toBeLessThan(0);
        expect(slideRight.hidden.x).toBeGreaterThan(0);
        expect(slideLeft.visible.x).toBe(0);
        expect(slideRight.visible.x).toBe(0);
    });

    test('stagger() returns variants with configurable gap and delay', () => {
        const v = stagger(0.2, 0.5);
        expect(v.visible.transition.staggerChildren).toBe(0.2);
        expect(v.visible.transition.delayChildren).toBe(0.5);
    });

    test('reducedFade has no movement (a11y safe)', () => {
        expect(reducedFade.hidden).not.toHaveProperty('y');
        expect(reducedFade.hidden).not.toHaveProperty('x');
        expect(reducedFade.hidden.opacity).toBe(0);
    });

    test('viewport config triggers once at 20% visibility', () => {
        expect(viewport).toEqual({ once: true, amount: 0.2 });
    });
});
