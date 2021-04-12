#include <iostream>
#include <conio.h>
#include <math.h>

// nao consegui fazer a parte dos numeros espelhados
using namespace std;

int quantidadeDeDigitosDeUmInteiro (int n)
    {

  	 int i, r = 0;
  	 
	 if (n == 0) return 1;
	 else while (n != 0)
	    {
	
	    	n =n /10;
		    r =r +1;
        }
        return r;
    }
    
int digitoDeUmInteiro(int n,int pos)
    {
    	int i, digito, tam;
    	tam = quantidadeDeDigitosDeUmInteiro (n);
    	if (pos >= tam) return -1;
    	else
    	{
    		for (i=0; i<=pos; i++)
    		{
    			digito = n % 10;
    			n = n /10;
			}
	
				return digito;
		}
	}
bool numEspelhado (int n)
	{
		int e= quantidadeDeDigitosDeUmInteiro (n);
		int a=0;
	
		while (a<e/2)
		{ 
		
			if (digitoDeUmInteiro (n,a)!= digitoDeUmInteiro (n,e-1-a))
			{
				return false;
			}
			a=a+a;
			break;
		}
		return true;
		
}
		
		
main()
{   


    int inicial, final;
    
	    
    cout<<"Indique o limite inicial dos números que serao testados:";
    cin>> inicial;
    cout<<"Indique o limite final dos números que serao testados:";
    cin>> final;
    while (inicial<= final)
    {
    	if (numEspelhado (inicial))
    	{cout<<"Impressao dos numeros espelhados:"<<"\e"<<inicial<<"\n";
    	
		}
    inicial=inicial+1;
	}
    
    getch();
}		
		
	


    
