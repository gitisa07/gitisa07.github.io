#include <iostream>
using namespace std;

float fconverterc ( float f)
{
    float c;
     c=(0.5*(f-0.32)/0.9);
     return c;
}

float cconverterk (float c)
{ 
   float k;
   k=c+273.15;
   return k;
   
}

void fconverterk (float f, float &p)
{
    float aux;
  aux=fconverterc(f);
    p=cconverterk(p);
    
}

main()
{
    float f;
    float r;
    cout<<"digite um valor para fahrenheit:";
    cin>> f;
    cout<<"a temperatura  corresponde em graus celsius:"<< fconverterc (f)<<"\n";
    fconverterk(f,r);
    cout<<"a temperatura em Celsius corresponde em graus Kelvin:"<<r; 
    system ("pause");
 getchar();   
}

