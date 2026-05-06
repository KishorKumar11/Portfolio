import { render } from '@testing-library/react';
import ParticleField from '../ParticleField';

describe('ParticleField', () => {
    test('renders requested count of particles on desktop viewport', () => {
        Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1280 });
        const { container } = render(<ParticleField count={10} />);
        const particles = container.querySelectorAll('.particle-field span');
        expect(particles.length).toBe(10);
    });

    test('halves count on mobile viewport (perf budget)', () => {
        Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 480 });
        const { container } = render(<ParticleField count={20} />);
        const particles = container.querySelectorAll('.particle-field span');
        expect(particles.length).toBe(10);
    });

    test('produces no DOM nodes when count is 0', () => {
        Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1280 });
        const { container } = render(<ParticleField count={0} />);
        expect(container.querySelector('.particle-field')).toBeNull();
    });
});
