import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { TodoInput }   from './app.todo.input';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ TodoInput ],
    bootstrap:    [ TodoInput ]
})
export class AppModule { }