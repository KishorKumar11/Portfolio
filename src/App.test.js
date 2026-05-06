import { render, screen } from '@testing-library/react';
import App from './App';

test('mounts loading screen on initial render', () => {
    render(<App />);
    expect(screen.getByText(/booting kishor/i)).toBeInTheDocument();
});
