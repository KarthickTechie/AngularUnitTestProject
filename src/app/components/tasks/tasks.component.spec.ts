import { Observable, of } from "rxjs";
import { LoggerService } from "../../services/logger/logger.service";
import { TaskComponent } from "../task/task.component"
import { TasksComponent } from "./tasks.component";
import { Todo } from "../../models/Todos";

fdescribe('taskscomponent test suite',()=>{
  // Fixture - test HTML Template of the component 
    // 1. logger service log method must be called 
    // 2. when calling loadData - TaskSevice.fetchService return Observable<Todo[]>
    let comp : TasksComponent
    let mockLoggerService:any;
    let mockTaskService:any;
    let TODOLIST:Todo[];
    let TODOLIST$:Observable<Todo[]>

    beforeEach(()=>{
        // setup 
        mockLoggerService = jasmine.createSpyObj('LoggerService',['log'])
        mockTaskService = jasmine.createSpyObj('TaskService',['fetchData'])
        comp = new TasksComponent(mockTaskService,mockLoggerService)
        TODOLIST = [{id:1,userId:1,title:'title 1 ',completed:false},{id:2,userId:2,title:'title 2 ',completed:false}]
        TODOLIST$ = of(TODOLIST)
    })


    it('logger service log method must be called 1 time' ,()=>{
        mockTaskService.fetchData.and.returnValue(of([]))
        comp.loadData()
        expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
    } )

    it(`loadData() set tasksList$ from TaskSevice.fetchService`,()=>{
        mockTaskService.fetchData.and.returnValue(of(TODOLIST))
        //comp.tasksList$ = TODOLIST$
        comp.loadData()
        comp.tasksList$.subscribe(data=>{
            expect(data.length).toBe(2)
        })

    })

    it('deleteTask remove task from tasksList$' , ()=>{
        // excercise 26.08.2024

    })
})