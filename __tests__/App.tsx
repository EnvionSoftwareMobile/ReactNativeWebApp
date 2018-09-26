import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

it('renders correctly with defaults', () => {
    const view = renderer
        .create(<App/>)
        .toJSON();

    expect(view).toMatchSnapshot();
});