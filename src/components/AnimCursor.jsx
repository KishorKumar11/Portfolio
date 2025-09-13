import AnimatedCursor from 'react-animated-cursor';
import React from 'react';

const AnimCursor = () => {
    return (
        <AnimatedCursor
            innerSize={8}
            outerSize={20}
            color="82, 136, 180"
            outerAlpha={0.3}
            innerScale={0.7}
            outerScale={4}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
            ]}
            outerStyle={{
                zIndex: 999999
            }}
            innerStyle={{
                zIndex: 999999
            }}
        />
    );
};

export default AnimCursor;
