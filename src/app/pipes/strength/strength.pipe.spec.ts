import { StrengthPipe } from './strength.pipe';
 let pipe: StrengthPipe;
beforeEach(()=>{
  pipe = new StrengthPipe()
})

fdescribe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it(`should return 5 is weak if 5 is passed`,()=>{
    expect(pipe.transform(5)).toBe(`5 is weak`)
  })
});
