import { useState } from 'react';
import { describe, it, expect } from 'vitest';
import ShapeInput from './ShapeInput';
import { setup, screen } from '../../test/test-utils';

function ControlledInput() {
  const [value, setValue] = useState('');
  return <ShapeInput value={value} onChange={setValue} placeholder="Angka" />;
}

describe('ShapeInput', () => {
  it('accepts valid input', async () => {
    const { user } = setup(<ControlledInput />);
    const input = screen.getByPlaceholderText('Angka');
    await user.type(input, '12.5');
    expect(input.value).toBe('12.5');
  });

  it('rejects invalid input', async () => {
    const { user } = setup(<ControlledInput />);
    const input = screen.getByPlaceholderText('Angka');
    await user.type(input, 'abc');
    expect(input.value).toBe('');
    
    await user.type(input, '1a2');
    expect(input.value).toBe('12');
  });
});
