#include<stdio.h>
int main()
{
    int test,amp,fre,k,i,j,c;
    scanf("%d",&test);
    while(test--)
    {
        scanf("%d",&amp);
        scanf("%d",&fre);
        for(c=1;c<=fre;c++)
        {
            for(i=1;i<=amp;i++)
            {
                k=1;
                for(j=i;k<=i;j++)
                {
                    printf("%d",i);
                    k++;
                }
                printf("\n");
            }
            for(i=amp-1;i>=1;i--)
            {
                k=1;
                for(j=i;k<=i;j++)
                {
                    printf("%d",i);
                    k++;
                }
                printf("\n");
            }
            if(c!=fre)
            printf("\n");
        }
        if(test!=0)
        printf("\n");
    }
    return 0;
}
