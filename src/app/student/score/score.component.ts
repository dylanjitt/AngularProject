import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
@Component({
  selector: 'app-score',
  // standalone: true,
  // imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss'
})
export class ScoreComponent implements OnInit {
  public students: any[] = [];
  constructor(private _authService: AuthService, private _router: Router, private _studentService: StudentService, private cdr: ChangeDetectorRef) {
   }
  ngOnInit(): void {
    this._studentService.getStudents().subscribe((res) => {
      console.log('STUDENTS JSON: ', res)
      this.students = res
      console.log('STUDENTS: ', this.students)
      this.cdr.detectChanges();
    });
  }
  public onLogout(){
    this._authService.logout();
    this._router.navigate(['']);
  }
}
