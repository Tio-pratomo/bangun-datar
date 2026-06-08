import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export function setup(ui) {
  return {
    user: userEvent.setup(),
    ...render(ui),
  };
}

export * from '@testing-library/react';
