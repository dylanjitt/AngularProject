import { Component, afterRender, afterNextRender} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  sum:number=0

  appBackground: string='red'
  constructor(){

    // afterRender(()=> {
    //   console.log("AFTER RENDER ",this.sum)
    // })

    afterRender({// all phases in AfterRender
      earlyRead: () => {
        const currentColor = this.appBackground
        return "From earlyRead: "+currentColor
      },
      mixedReadWrite:(props) => {
        console.log("From MixedReadWrite: "+props)
        if(props.indexOf('red')>-1){
          this.appBackground='green'
        }else{
          this.appBackground='red'
        }
        return "From mixedReadWrite: "+this.appBackground
      },
      write:(props)=> {
        console.log("From write: "+props)
        document.body.style.backgroundColor=this.appBackground
        return "From write: "+this.appBackground
      },
      read:(props)=>{
        console.log("From read: "+props)
        const newBackground=this.appBackground
        return "From Read: "+this.appBackground
      }
    })
    
    afterNextRender(()=> {
      console.log("AFTER NEXT RENDER ",this.sum)
    })
  }

}
