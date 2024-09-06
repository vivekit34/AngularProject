import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  show:boolean=true;
  showFlag: boolean=false;
  msg='';
  state='';
  num1=0;
  num2=0;
  op='';
  counterResult:number=0;
  result: number=0;
  isDark:boolean=true;
  showorhide(){
    this.show=!this.show;
  }
  calculateValue(){
    switch(this.op){
      case '+':
        this.result=this.num1+this.num2;
        break;
      case '-':
        this.result=this.num1-this.num2;
        break;
      case '/':
        this.result=this.num1/this.num2;
        break;
      case '*':
        this.result=this.num1*this.num2;
        break;
      default:
        alert('Wrong Selection');
    }
  }

  update(str:string){
    switch(str){
      case 'increase':
        this.counterResult=this.counterResult +1;
        break;
      case 'decrease':
          this.counterResult=this.counterResult -1;
          break;
      case 'reset':
            this.counterResult=0;
            break;
      default:
        alert('Wrong selection');
    }
  }

  add(n3:any, n4:any){
    console.log(n3.value);
  }

  changeBackground(){
    this.isDark=!this.isDark;
    
  }
}
