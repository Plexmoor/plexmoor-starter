import { describe, it, expect } from 'vitest';
import { splitBill } from '../src/money.js';

describe('splitBill', () => {
  it('splits $100 + 20% between 4 people', () => expect(splitBill(100, 20, 4)).toBe(3000));
  it('returns 0 for invalid input', () => {
    expect(splitBill('abc', 20, 2)).toBe(0);
    expect(splitBill(50, 15, 0)).toBe(0);
  });
});
