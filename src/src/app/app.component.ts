import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  message: string = "Bem-vindo ao Angular"

  num1: number = 15;
  num2: number = 5;
  soma: number = this.num1 + this.num2;

  imagemUrl: string = "https://picsum.photos/seed/picsum/200/300"

  isButtonDisabled: boolean = false;

  username : string = '';

  clica(): void{

  }


  nomeTarefa: string = '';
  tarefas: string[] = [];
  addTarefas(){
    if(this.nomeTarefa.trim()){
      this.tarefas.push(this.nomeTarefa);
      //this.nomeTarefa='';
    }
  }

  NumeroInicial: number = 0;
  contador: number = 0;
  increment(){
    console.log("Teste");
    
    this.contador++;
  }
  decrement(){
    this.contador--;
  }
  setNumeroInicial(){
    this.contador = this.NumeroInicial
  }

  isVisible: Boolean = true;
  Visibilidade(): void{
    this.isVisible = !this.isVisible;
  }

  bgColor: string = 'gray';
  color: string = 'white';
  letra: string = 'black';

  clicar() {
    alert('botão cliclado')
  }

  texto: string =''
  capturarTexto(event : Event): void{
    const inputElement = event.target as HTMLInputElement;
    this.texto = inputElement.value;

  
  }
}
