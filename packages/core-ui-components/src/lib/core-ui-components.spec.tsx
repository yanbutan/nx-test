import { render } from '@testing-library/react';

import CoreUiComponents from './core-ui-components';

describe('CoreUiComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoreUiComponents />);
    expect(baseElement).toBeTruthy();
  });
});
