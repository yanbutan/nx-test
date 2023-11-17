import { render } from '@testing-library/react';

import CoreWebComponents from './core-web-components';

describe('CoreWebComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreWebComponents />);
    expect(baseElement).toBeTruthy();
  });
});
