import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { TodoMain }   from './app.todo.main';
import { TodoInput }   from './app.todo.input';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ TodoMain, TodoInput ],
    bootstrap:    [ TodoMain ]
})
export class AppModule { }