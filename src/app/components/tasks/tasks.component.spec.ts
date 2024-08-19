import { Observable, of } from "rxjs";
import { TasksComponent } from "./tasks.component";
import { Todo } from "../../models/Todos";

fdescribe('Task Component',()=>{
    let component : TasksComponent;
    let mockTaskService:any;
    let mockLoggerService:any;
    let TODOSLIST:Todo[];
    let TODOS$:Observable<Todo[]>
    beforeEach(()=>{
        TODOSLIST = [{id:1,title:'title 1',userId:1,completed:false}]
        TODOS$ = of(TODOSLIST)
        mockTaskService = jasmine.createSpyObj('TaskService',['fetchData'])
        mockLoggerService = jasmine.createSpyObj('LoggerService',['log'])
        component = new TasksComponent(mockTaskService,mockLoggerService)
    })

    it('taskservice return observable.of(Todo)',()=>{
        mockTaskService.fetchData.and.returnValue(TODOS$)
        component.tasksList$ = TODOS$
        component.loadData()
        component.tasksList$.subscribe(todo=>{
            expect(todo.length).toEqual(1)
        })
        
    })

    it('taskcomponent calling loggerservice 1 time',()=>{
        mockTaskService.fetchData.and.returnValue(TODOS$)
        component.tasksList$ = TODOS$
        component.loadData()
        expect(mockLoggerService.log).toHaveBeenCalledTimes(1)

        
    })



})