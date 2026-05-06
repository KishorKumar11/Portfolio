import { render, screen } from '@testing-library/react';
import MotionSection, { MotionItem } from '../MotionSection';

describe('MotionSection', () => {
    test('renders children with provided id and className', () => {
        render(
            <MotionSection id="test-section" className="test-class">
                <p>child content</p>
            </MotionSection>
        );
        const section = screen.getByText('child content').closest('section');
        expect(section).toHaveAttribute('id', 'test-section');
        expect(section).toHaveClass('test-class');
    });

    test('MotionItem renders children', () => {
        render(
            <MotionItem>
                <span>item content</span>
            </MotionItem>
        );
        expect(screen.getByText('item content')).toBeInTheDocument();
    });
});
