#include <iostream>
#include <conio.h>
#include <stdlib.h>
using namespace std;

main()
{
    int n;
    int num;
    int v[num];
	int i,j;
	cout<<"digite os numeros a serem armazenados na matriz:";
    cin>>num;
    
    for(n=1; n<=num; n= n+1)
    {
        
        cout<<"\nDigite o "<<n<<" numero natural:";
        cin>>v[n];
        if(v[n]<0)
        {
            n= n-1;
        }
}

    int m[num][num];
    
   for(i=0; i<3; i=i+1)
    {
        for(j=0; j<3; j=j+1)
        {
            m[i][j]=v[j];
            cout<<"M["<<i<<"]["<<j<<"]="<<m[i][j]<<".\n";
        }
    }
    
   
    cout<<"\n";
    system("pause");
}
