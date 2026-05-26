import { render, screen, act, waitFor } from '@testing-library/react';
import ScrollIndicator from './ScrollIndicator';

function setScrollMetrics({ scrollY = 0, scrollHeight = 2000, innerHeight = 800 } = {}) {
    Object.defineProperty(window, 'scrollY', { value: scrollY, writable: true, configurable: true });
    Object.defineProperty(document.documentElement, 'scrollHeight', {
        value: scrollHeight,
        writable: true,
        configurable: true,
    });
    Object.defineProperty(window, 'innerHeight', {
        value: innerHeight,
        writable: true,
        configurable: true,
    });
}

describe('ScrollIndicator', () => {
    beforeEach(() => {
        document.documentElement.className = '';
        setScrollMetrics();
    });

    test('shows scroll hint at top when page can scroll', () => {
        render(<ScrollIndicator />);
        expect(screen.getByText(/scroll below/i)).toBeInTheDocument();
    });

    test('hides scroll hint after user scrolls down', async () => {
        render(<ScrollIndicator />);
        expect(screen.getByText(/scroll below/i)).toBeInTheDocument();

        act(() => {
            setScrollMetrics({ scrollY: 120 });
            window.dispatchEvent(new Event('scroll'));
        });

        await waitFor(() => {
            expect(screen.queryByText(/scroll below/i)).not.toBeInTheDocument();
        });
    });

    test('toggles scroll-at-top class on html at page top', () => {
        render(<ScrollIndicator />);
        expect(document.documentElement.classList.contains('scroll-at-top')).toBe(true);

        act(() => {
            setScrollMetrics({ scrollY: 50 });
            window.dispatchEvent(new Event('scroll'));
        });

        expect(document.documentElement.classList.contains('scroll-at-top')).toBe(false);
    });

    test('does not show scroll hint when page cannot scroll', () => {
        setScrollMetrics({ scrollHeight: 600, innerHeight: 800 });
        render(<ScrollIndicator />);
        expect(screen.queryByText(/scroll below/i)).not.toBeInTheDocument();
    });

    test('removes scroll-at-top class on unmount', () => {
        const { unmount } = render(<ScrollIndicator />);
        expect(document.documentElement.classList.contains('scroll-at-top')).toBe(true);
        unmount();
        expect(document.documentElement.classList.contains('scroll-at-top')).toBe(false);
    });
});
