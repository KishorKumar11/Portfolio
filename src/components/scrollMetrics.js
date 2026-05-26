const MIN_THUMB_PX = 48;

export function computeScrollbarMetrics({
    scrollY = 0,
    scrollHeight = 0,
    clientHeight = 0,
    minThumb = MIN_THUMB_PX,
} = {}) {
    const scrollable = Math.max(0, scrollHeight - clientHeight);

    if (scrollable <= 0) {
        return { canScroll: false, thumbHeight: 0, thumbTop: 0, scrollable: 0 };
    }

    const thumbHeight = Math.max(minThumb, (clientHeight / scrollHeight) * clientHeight);
    const trackTravel = Math.max(0, clientHeight - thumbHeight);
    const thumbTop = trackTravel > 0 ? (scrollY / scrollable) * trackTravel : 0;

    return { canScroll: true, thumbHeight, thumbTop, scrollable };
}
