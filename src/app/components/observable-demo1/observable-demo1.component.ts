import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { filter, from, interval, map, mergeMap, Observable, of, range, take } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable-demo1.component.html',
  styleUrl: './observable-demo1.component.css'
})
export class ObservableDemo1Component {
  numPub: any;
  numPub_10: any;
  constructor(private httpClient: HttpClient) {

  }
  ngOnInit(){
    //publisher
    let pub1= new Observable((observer)=>{
      observer.next('ABC1');
      observer.next('ABC2');
      observer.next('ABC3');
      observer.next('ABC4');
      observer.next('ABC5');
      observer.complete();
    });

    //subscriber
    // let sub1=pub1.subscribe({
    //   next:(data)=>{
    //     console.log('Next method called');
    //     console.log(data);
    //   },
    //   error: (data)=>{
    //     console.log("Some Error occured: "+ data);
    //   },
    //   complete: ()=>{
    //     console.log("Complete method called");
    //   }
    // });
  //  let cars=['Tata', 'Honda', 'Maruti'];
  //  let carPub=from(cars);
  //  let carSub=carPub.subscribe((car)=>console.log(car));

   this.numPub=interval(1000);
  //  let numSub=numPub.subscribe((val)=>console.log(val));
  this.numPub_10= this.numPub.pipe(take(10));
  let nums= range(2,10);
  // nums.subscribe((val)=>console.log(val));
  let even_num=nums.pipe(filter((ele)=>ele%2==0));
  // even_num.subscribe((val)=>console.log(val));
  let square_num=nums.pipe(map((ele)=> ele*ele));
  square_num.subscribe((val)=>console.log(val));
  this.mergeMapDemo();
  }

  mergeMapDemo() {
    let usersPublisher = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
    let usersSubscriber2 = usersPublisher.pipe(
      mergeMap((user) => {
        const url = `https://jsonplaceholder.typicode.com/users/${user}`;
        return this.httpClient.get(url); //inner observable
      })
    ).subscribe((userData) => {
      console.log(userData);
    });
  }
  
}
