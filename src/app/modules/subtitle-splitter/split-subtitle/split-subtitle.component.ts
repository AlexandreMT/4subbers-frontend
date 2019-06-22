import { Component, OnInit } from '@angular/core';
import {SubtitleSplitterService} from '../../../core/http/services/subtitle-splitter.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-split-subtitle',
  templateUrl: './split-subtitle.component.html',
  styleUrls: ['./split-subtitle.component.scss']
})
export class SplitSubtitleComponent implements OnInit {
  public subtitleForm: FormGroup;
  public subtitle: any[] = [];

  constructor(private fb: FormBuilder,
              private subtitleSplitterService: SubtitleSplitterService) {
    this.subtitleForm = this.fb.group({
      name: new FormControl('', Validators.required),
      parts: new FormControl('', Validators.required)
    });
  }

  ngOnInit() { }

  onChangeSubtitle(file: FileList) {
    const fileItem = file.item(0);
    this.subtitle.push(fileItem);
  }
}
