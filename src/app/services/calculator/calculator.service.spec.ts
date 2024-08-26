import { TestBed } from '@angular/core/testing';

import { CalculatorService, User } from './calculator.service';
import { LoggerService } from '../logger/logger.service';

// fdescribe('CalculatorService', () => { // test suite 
//   let service: CalculatorService;
//   let logservice :LoggerService
//   let mockLogService:any;
//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     logservice = TestBed.inject(LoggerService)
//     mockLogService = jasmine.createSpyObj('logservice',['log'])
//     service = new CalculatorService(mockLogService)
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it(`should add two number`,()=>{
//       const result = service.add(2,2)
//       expect(mockLogService.log).toHaveBeenCalledTimes(1)
//       expect(result).toBe(4) 
//   })

//   it(`should substract two numbers`,()=>{
//     const result = service.substract(2,2)
//     expect(mockLogService.log).toHaveBeenCalledTimes(1)
//     expect(result).toBe(0)

//   })
// });



describe('CalculatorServiceTest2',()=>{
  let calcService:CalculatorService;
  let user2:User;

  beforeEach(()=>{
     calcService = new CalculatorService()
     user2 = {name:'john', userId:2}
  })

  it('add 2 and 2 retrun 4',()=>{ // teat spec
      // AAAA 
      // Arrange  
      // Act 
      const result = calcService.add(2,2)

      // Assert 
      expect(result).toBe(4)
  })

  it('transform muppercase apple To APPLE',()=>{ // teat spec
    // AAAA 
    // Arrange  
    // Act 
    const result = calcService.upperCase('apple')

    // Assert 
    expect(result).toBe("APPLE")
})

it('check id of 2 available userobject',()=>{

  // Arrange 
  
  const result = calcService.addIdProp(user2,1)
  expect(result).toEqual({...user2,id:1}) // 
  
})
})