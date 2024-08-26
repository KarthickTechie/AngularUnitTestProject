// import { Observable, of } from "rxjs";
// import { TasksComponent } from "./tasks.component";
// import { Todo } from "../../models/Todos";

import { Observable, of } from "rxjs";
import { Todo } from "../../models/Todos";
import { TasksComponent } from "./tasks.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TaskService } from "../../services/tasks/task.service";
import { LoggerService } from "../../services/logger/logger.service";

// fdescribe('Task Component',()=>{
//     let component : TasksComponent;
//     let mockTaskService:any;
//     let mockLoggerService:any;
//     let TODOSLIST:Todo[];
//     let TODOS$:Observable<Todo[]>
//     beforeEach(()=>{
//         TODOSLIST = [
//             {id:1,title:'title 1',userId:1,completed:false},
//             {id:2,title:'title 2',userId:2,completed:false}]
//         TODOS$ = of(TODOSLIST)
//         mockTaskService = jasmine.createSpyObj('TaskService',['fetchData'])
//         mockLoggerService = jasmine.createSpyObj('LoggerService',['log'])
//         component = new TasksComponent(mockTaskService,mockLoggerService)
//     })

//     it('taskservice return observable.of(Todo)',()=>{
//         mockTaskService.fetchData.and.returnValue(TODOS$)
//         component.tasksList$ = TODOS$
//         component.loadData()
//         component.tasksList$.subscribe(todo=>{
//             expect(todo.length).toEqual(2)
//         })
        
//     })

//     it('taskcomponent calling loggerservice 1 time',()=>{
//         mockTaskService.fetchData.and.returnValue(TODOS$)
//         component.tasksList$ = TODOS$
//         component.loadData()
//         expect(mockLoggerService.log).toHaveBeenCalledTimes(1)

//     })

//     it('task delete method deletes post[i] from posts array',()=>{
//         component.tasksList$ = TODOS$
//         component.deleteTask(TODOSLIST[0])
//         component.tasksList$.subscribe(todo=>{
//             todo.forEach(element => {
//                 expect(element).not.toEqual(TODOSLIST[0])
//             });
//         })

//     })



// })

/*

1. fetch tasks from service 
2. delete tasks 
3. log() - called 1 time
4. tasks shows grid of three colums 
5. column 1 contains index , column 2 contains title of task , column 3 contains delete button
6. when delete() , deleted task shoudl be removed from array , grid doesnot contain that entry

*/

fdescribe(`tasks component test suite`,()=>{
    let mockTaskService:any;
    let mockLoggerService:any;
    let tasksComponent:TasksComponent;
    let TODOSLIST:Todo[];
    let TODOSLIST$:Observable<Todo[]>;
    let fixture:ComponentFixture<TasksComponent>;

    beforeEach(()=>{
        /* 
        setup tasks component 

        */
        mockTaskService = jasmine.createSpyObj('TaskService',['fetchData'])
        mockLoggerService = jasmine.createSpyObj('LoggerService',['log'])
        TestBed.configureTestingModule({
            providers:[TasksComponent,{
                provide:TaskService,
                useValue:mockTaskService
            },{
                provide:LoggerService,
                useValue:mockLoggerService
            }]
        })
        tasksComponent = TestBed.inject(TasksComponent)

        TODOSLIST = [
            {id:1,title:'title 1',userId:1,completed:false},
            {id:2,title:'title 2',userId:2,completed:false}]

        TODOSLIST$ = of(TODOSLIST)

        fixture = TestBed.createComponent(TasksComponent)
        fixture.componentInstance
    })


    it(`fetch tasks called 1 time `,()=>{
        
     mockTaskService.fetchData.and.returnValue(of([]))
     tasksComponent.tasksList$ = TODOSLIST$
     tasksComponent.loadData()
    expect(mockTaskService.fetchData).toHaveBeenCalledTimes(1)
    })

    it(`Log method from Logger service called 1 time`,()=>{
        
        mockTaskService.fetchData.and.returnValue(of([]))
        tasksComponent.tasksList$ = TODOSLIST$
        tasksComponent.loadData()
       expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
       })

       it(`loaddata() return TodosList length of 2 `,()=>{
        
        mockTaskService.fetchData.and.returnValue(TODOSLIST$)
        tasksComponent.tasksList$ = TODOSLIST$
        tasksComponent.loadData()
        tasksComponent.tasksList$.subscribe(data=>{
            expect(data.length).toBe(2)
        })
       
       })

       it(`deleteTask() deletes 1 entry and return TodosList length of 1 `,()=>{
        
        tasksComponent.tasksList$ = TODOSLIST$
        tasksComponent.deleteTask(TODOSLIST[0])
        tasksComponent.tasksList$.subscribe(data=>{
            expect(data.length).toBe(1)
        })
       
       })

       it('show 2 row of tasks in grid',()=>{
        mockTaskService.fetchData.and.returnValue(TODOSLIST$)
        tasksComponent.tasksList$ = TODOSLIST$
        tasksComponent.loadData()
        fixture.detectChanges()
        const tasksElement:HTMLElement = fixture.nativeElement
        const ul = tasksElement.querySelectorAll('app-task')
        expect(ul?.length).toBe(2)
        
       })



})

