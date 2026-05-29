/**
 * Observes element size changes without triggering ResizeObserver loop errors.
 * Batches callbacks in requestAnimationFrame and skips duplicate reads.
 */
export function observeResize(element, onResize) {
    if (!element || typeof onResize !== 'function') {
        return () => {};
    }

    let rafId = 0;

    const run = () => {
        rafId = 0;
        onResize(element);
    };

    const schedule = () => {
        if (rafId) return;
        rafId = requestAnimationFrame(run);
    };

    schedule();

    const observer = new ResizeObserver(schedule);
    observer.observe(element);

    return () => {
        observer.disconnect();
        if (rafId) cancelAnimationFrame(rafId);
    };
}
