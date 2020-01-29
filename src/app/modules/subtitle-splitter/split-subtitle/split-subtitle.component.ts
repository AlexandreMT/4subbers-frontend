import { Component, OnInit } from '@angular/core';
import {SubtitleSplitterService} from '../../../core/http/services/subtitle-splitter.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-split-subtitle',
  templateUrl: './split-subtitle.component.html',
  styleUrls: ['./split-subtitle.component.scss']
})
export class SplitSubtitleComponent implements OnInit {
  public subtitleForm: FormGroup;
  public subtitle: any[] = [];

  public splitSubtitleSubscription: Subscription;

  constructor(private fb: FormBuilder,
              private subtitleSplitterService: SubtitleSplitterService,
              private router: Router) {
    this.subtitleForm = this.fb.group({
      name: new FormControl('', Validators.required),
      subtitle: new FormControl('', Validators.required),
      parts: new FormControl('2', [Validators.required, Validators.min(2)])
    });
  }

  ngOnInit() { }

  async splitSubtitle() {
    if (this.splitSubtitleSubscription) { this.splitSubtitleSubscription.unsubscribe(); }
    this.splitSubtitleSubscription = await this.subtitleSplitterService.splitSubtitleByCue(this.subtitleForm.value, this.subtitle)
      .subscribe((res) => {
        this.router.navigate(['/subtitle-splitter', res[0].url]);
        this.splitSubtitleSubscription.unsubscribe();
      }, (error) => {
        console.log(error);
        this.splitSubtitleSubscription.unsubscribe();
      });
  }

  onChangeSubtitle(file: FileList) {
    const fileItem = file.item(0);
    this.subtitle.push(fileItem);
  }
}
