import { render, screen, act, waitFor } from '@testing-library/react';
import ScrollIndicator from './ScrollIndicator';

function setScrollMetrics({ scrollY = 0, scrollHeight = 2000, innerHeight = 800 } = {}) {
    Object.defineProperty(window, 'scrollY', { value: scrollY, writable: true, configurable: true });
    Object.defineProperty(document.documentElement, 'scrollHeight', {
        value: scrollHeight,
        writable: true,
        configurable: true,
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
        value: innerHeight,
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

    test('does not show scroll hint when page cannot scroll', () => {
        setScrollMetrics({ scrollHeight: 600, innerHeight: 800 });
        render(<ScrollIndicator />);
        expect(screen.queryByText(/scroll below/i)).not.toBeInTheDocument();
    });

    test('hides custom scrollbar at top of page', () => {
        render(<ScrollIndicator />);
        expect(screen.queryByRole('scrollbar')).not.toBeInTheDocument();
    });

    test('shows custom scrollbar after scrolling down', async () => {
        render(<ScrollIndicator />);

        act(() => {
            setScrollMetrics({ scrollY: 120 });
            window.dispatchEvent(new Event('scroll'));
        });

        await waitFor(() => {
            expect(screen.getByRole('scrollbar')).toBeInTheDocument();
        });
    });

    test('custom scrollbar stays visible when scroll stops away from top', async () => {
        render(<ScrollIndicator />);

        act(() => {
            setScrollMetrics({ scrollY: 400 });
            window.dispatchEvent(new Event('scroll'));
        });

        await waitFor(() => {
            expect(screen.getByRole('scrollbar')).toBeInTheDocument();
        });
    });
});
