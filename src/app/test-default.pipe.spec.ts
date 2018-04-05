import { TestDefaultPipe } from './test-default.pipe';

describe('Pipe: Default', () => {
  let pipe: TestDefaultPipe;

  beforeEach(() => {
    pipe = new TestDefaultPipe();
  });

  it('providing no value returns fallback', () => {
    expect(pipe.transform('', 'http://place-hold.it/300')).toBe('http://place-hold.it/300');
  });
});
