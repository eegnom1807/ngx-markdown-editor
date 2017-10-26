import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MarkdownEditorComponent } from './md-editor/md-editor.component';
import { EmojiPickerModule } from 'angular2-emoji-picker';

export * from './md-editor/md-editor.component';

@NgModule({
  declarations: [
    MarkdownEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmojiPickerModule.forRoot()
  ],
  exports: [
    MarkdownEditorComponent
  ]
})
export class LMarkdownEditorModule { }
