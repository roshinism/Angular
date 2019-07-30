import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from "@angular/router";//custom system import
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { ReviewComponent } from './shop/review/review.component';
import { ReviewTitleComponent } from './shop/review-title/review-title.component';
import { ReviewImageComponent } from './shop/review-image/review-image.component';
import { ReviewDescriptionComponent } from './shop/review-description/review-description.component';

import { ReviewAuthorComponent } from './shop/review-author/review-author.component';
import { NgforComponentComponent } from './directive/ngfor-component/ngfor-component.component';
import { InbuiltComponent } from './pipe/inbuilt/inbuilt.component';
import { TodoComponent } from './todo/todo.component';
import { TemplateComponent } from './forms/template/template.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { FormComponent } from './forms/form/form.component';
import { Useservice1Component } from './useservice/useservice1/useservice1.component';
import { Useservice2Component } from './useservice/useservice2/useservice2.component';
import { RemoteComponent } from './consume/remote/remote.component';
import { RemoteEmployeeComponent } from './consume/remote-employee/remote-employee.component';
import { FriendsComponent } from './friends/friends.component';
import { ViewEmployeeComponent } from './consume/view-employee/view-employee.component';
import { AnimatetextComponent } from "./animatetext/animatetext.component";
import { CheckPipe } from './custompipe/check.pipe';
import { SortStringPipe } from './custompipe/sort-string.pipe';
import { SortNumberPipe } from './custompipe/sort-number.pipe';
import { SearchpipePipe } from './custompipe/searchpipe.pipe';
import { ParentComponent } from './eventbinding/parent/parent.component';
import { ChildComponent } from './eventbinding/child/child.component';



@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    ReviewComponent,
    ReviewTitleComponent,
    ReviewImageComponent,
    ReviewDescriptionComponent,
    
    ReviewAuthorComponent,
    NgforComponentComponent,
    InbuiltComponent,
    TodoComponent,
    TemplateComponent,
    ReactiveComponent,
    AssignmentComponent,
    FormComponent,
    Useservice1Component,
    Useservice2Component,
    RemoteComponent,
    RemoteEmployeeComponent,
    FriendsComponent,
    ViewEmployeeComponent,
    AnimatetextComponent,
    CheckPipe,
    SortStringPipe,
    SortNumberPipe,
    SearchpipePipe,
    ParentComponent,
    ChildComponent,
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([//inserted- forRoot takes array as parameter.. here we are giving JSON objects
      
      {
        path:"review",
        component:ReviewComponent
      },
      {
        path:"logo",
        component:LogoComponent
      },
      {
        path:"directive",
        component:NgforComponentComponent
      },
      {
        path:"",
        redirectTo:'logo',
        pathMatch:'full'
      },
      {
      path:"inbuiltpipe",
      component:InbuiltComponent
    },
    {
      path:"todo",
      component:TodoComponent
    },
    {
      path:"useservice1",
      component:Useservice1Component
    },
    {
      path:"useservice2",
      component:Useservice2Component
    },
    {
      path:"consume-remote",
      component:RemoteComponent
    },
    {
      path:"assignment",
      component:AssignmentComponent
    },
    {
      path:'form',
      component:FormComponent,
      children:[
        {
          path:"",
          redirectTo:'reactive',
          pathMatch:'full'
        },
        {
        path:"reactive",
        component:ReactiveComponent
      },
      {
        path:"template",
        component:TemplateComponent
      },
      ]
    },
    {
    path:'employee',
    component:RemoteEmployeeComponent
    },
    {
      path:'friends',
      component:FriendsComponent
    }, 
    {
      path:'viewEmployee/:empid',
      component:ViewEmployeeComponent
    },
    {
      path:'animateText',
      component:AnimatetextComponent
    },
    {
      path:'parent',
      component:ParentComponent
    },
    {
      path:'child',
      component:ChildComponent
    }
    

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
