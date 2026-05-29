import { observeResize } from './observeResize';

describe('observeResize', () => {
    let resizeCallback;

    beforeEach(() => {
        resizeCallback = null;
        jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
            cb(0);
            return 1;
        });
        jest.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {});

        global.ResizeObserver = jest.fn().mockImplementation((cb) => {
            resizeCallback = cb;
            return {
                observe: jest.fn(),
                disconnect: jest.fn(),
            };
        });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('schedules callback via requestAnimationFrame when element resizes', () => {
        const el = document.createElement('div');
        const onResize = jest.fn();

        observeResize(el, onResize);
        resizeCallback();

        expect(window.requestAnimationFrame).toHaveBeenCalled();
        expect(onResize).toHaveBeenCalledWith(el);
    });

    test('disconnect cleans up observer and pending frame', () => {
        const el = document.createElement('div');
        const disconnect = observeResize(el, jest.fn());
        const instance = ResizeObserver.mock.results[0].value;

        disconnect();

        expect(instance.disconnect).toHaveBeenCalled();
        expect(window.cancelAnimationFrame).toHaveBeenCalledWith(1);
    });

    test('returns noop cleanup when element is missing', () => {
        expect(() => observeResize(null, jest.fn())()).not.toThrow();
    });
});
