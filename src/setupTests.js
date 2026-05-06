import '@testing-library/jest-dom';

// jsdom doesn't ship IntersectionObserver — needed by framer-motion whileInView.
class MockIO {
    constructor(cb) {
        this.cb = cb;
    }
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
        return [];
    }
}
global.IntersectionObserver = global.IntersectionObserver || MockIO;
window.IntersectionObserver = window.IntersectionObserver || MockIO;

// matchMedia polyfill (used by reduced-motion checks)
if (!window.matchMedia) {
    window.matchMedia = (q) => ({
        matches: false,
        media: q,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false
    });
}
