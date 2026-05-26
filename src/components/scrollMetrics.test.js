import { computeScrollbarMetrics } from './scrollMetrics';

describe('computeScrollbarMetrics', () => {
    test('returns canScroll false when content fits viewport', () => {
        expect(
            computeScrollbarMetrics({
                scrollY: 0,
                scrollHeight: 800,
                clientHeight: 800,
            })
        ).toEqual({ canScroll: false, thumbHeight: 0, thumbTop: 0, scrollable: 0 });
    });

    test('computes thumb size and position for scrollable page', () => {
        const metrics = computeScrollbarMetrics({
            scrollY: 600,
            scrollHeight: 3000,
            clientHeight: 800,
        });

        expect(metrics.canScroll).toBe(true);
        expect(metrics.scrollable).toBe(2200);
        expect(metrics.thumbHeight).toBeGreaterThanOrEqual(48);
        expect(metrics.thumbTop).toBeGreaterThan(0);
        expect(metrics.thumbTop).toBeLessThan(800 - metrics.thumbHeight);
    });
});
