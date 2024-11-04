import { UpperPipe } from './upper.pipe';

describe('UpperPipe', () => {
  it('create an instance', () => {
    const pipe = new UpperPipe();
    expect(pipe).toBeTruthy();
  });
});
