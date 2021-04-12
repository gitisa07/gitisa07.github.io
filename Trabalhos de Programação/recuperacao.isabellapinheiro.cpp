#include <iostream>
#include <conio.h>
#include <stdio.h>
using namespace std;
//PAPEL xTESOURA ?TESOURA
//PAPEL xPEDRA ?PAPEL
//PEDRA xTESOURA ?PEDRA
const int pedra=0;
const int papel=5;
const int tesoura=2;

int pedraPapelTesoura(int mao1, int mao2)
{
	if(mao1==mao2)
	{
	return 0;	
	}
	else{		
         if(mao1==0 && mao2==2)
          {
         return 1;
	      }    
	
	    else{
		     if(mao1==0 && mao2==5)
		     {
		      return 2;
			 }
             if(mao1==5 && mao2==0)
             {
             	return 1;
			 }
			 else{
			 	if(mao1==5 && mao2==2)
			 	{
			 		return 2;
				 }
				 else{
				 	if(mao1==2 && mao2==0)
				 	{
				 		return 2;
					 }
					 else{
					 	if(mao1==2&& mao2==5)
					 	{
					 		return 1;
						 }
					 	
					 	
					 }
				 	
				 	
				 }
			 	
			 	
			 	
			 	
			 }
	        }
       }
}

main()
{
	
	int mao1,mao2,resultado;
	cout<<"*******************************\n";
	cout<<"* JOGO PEDRA, PAPEL E TESOURA *\n";
	cout<<"*******************************\n\n";
	
	cout<<"SIMBOLOS DO JOGO:\n";
	cout<<"0 --> PEDRA\n";
	cout<<"2 --> TESOURA\n";
	cout<<"5 --> PAPEL\n\n";
	
	cout<<"INSIRA A MAO DO JOGAROR 1: ";
	cin>>mao1;
	cout<<"INSIRA A MAO DO JOGAROR 2: ";
	cin>>mao2;
	cout<<"O VENCEDOR DO JOGO EH:";
	pedraPapelTesoura(mao1,mao2);
		
		
		
		getch();
}
