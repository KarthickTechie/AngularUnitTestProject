import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const logInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`req url => ${req.url} req data => ${JSON.stringify(req.body)}`)
  const reqStartTime = Date.now()
  console.log(`req started at => ${reqStartTime}`)
  return next(req).pipe(
    tap(v=>{
      if(v.type === HttpEventType.Response){
        console.log(`response received in => ${Date.now() - reqStartTime} ms`)
      }
    })
  )
};
