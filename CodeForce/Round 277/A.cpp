/*******************************
*   Bismillah hir Rohmanir Rahim *
*   Habibur Rahman Habib        *
*   Dept. of CSE, RUET          *
*   habib_cse_ruet@yahoo.com  *
********************************/

using namespace std;
//C headers
#include <cstdio>
#include <cstdlib>
#include <cmath>
#include <cstring>
#include <climits>
#include <cfloat>
#include <cctype>
#include <cassert>
#include <ctime>
//C++ headers
#include <iostream>
#include <iomanip>
#include <sstream>
#include <algorithm>
#include <utility>
#include <string>
#include <stack>
#include <queue>
#include <vector>
#include <set>
#include <map>
//type def
#define PI 2*acos (0.0)
typedef long long int64;
typedef unsigned long long int64u;
#define db double
#define pb push_back
#define pii pair<int ,int >
#define NL puts("")
#define MAX(p,q) p>q?p:q
#define MIN(p,q) p<q?p:q
#define MOD 100000007
#define INF 1<<29
//Intput_Output
#define input freopen ("input.txt", "r", stdin);
#define output freopen ("output.txt", "w", stdout);
#define pf printf
#define sf scanf
#define co cout
#define ci cin
#define II ({ int a; scanf("%d",&a); a;}) //Integer Input
#define IL ({ int64 a; scanf("%I64d",&a);  a;})  //Long Integer Input
#define ID ({ db a; scanf("%lf",&a);  a;}) //Double input
#define IC ({ char a; scanf("%c",&a);  a;}) //Character Input
#define IS ({ string a; cin >> a;  a;}) //String input
#define ICA(n) ({ char a[n]; scanf("%s",&a);  a;}) //Char-Array Input
#define OC(cs) printf("Case %d:",cs);  //Case Input
//Loops.....
#define FOR(p, n, m) for(long int i=p; i<=n; i+=m)  //For Loop increment
#define FOR_R(p, n, m) for(long int j=p; j>=n; j-=m)  //For loop decrement
//Problem wise define.....
int main()
{
    int n=II;
    int64 data[n+1];
    FOR(0,n-1,1)
    data[i]=IL;
    int arr[n+1][2];
    int count=0;
    FOR(0,n-1,1)
    {
        int64 min=data[i];
        int at=i;
        for(int j=i+1; j<n;j++)
        {
            if(min>data[j]){
                min=data[j];
                at=j;
            }
        }
        if(at>i)
        {
            arr[count][0]=i;
            arr[count][1]=at;
            int64 temp=data[i];
            data[i]=data[at];
            data[at]=temp;
            count++;
        }
    }
    pf("%d\n",count);
    FOR(0,count-1,1)
    pf("%d %d\n",arr[i][0],arr[i][1]);
    return 0;
}
