#include<stdio.h>
int main()
{
    int n,i,sum;
    while(scanf("%d",&n))
    {
        sum=0;
        if(n==0) break;
        for(i=1;i<=n;i++)
        {
            sum+=(i*i);
        }
        printf("%d\n",sum);

    }
    return 0;

}
