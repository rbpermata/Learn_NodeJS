//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

var array = [10,5,20,20,4,5,2,25,1];

function minmax(array)
{
    var min = array[0];
    var max = array[0];
    var countmin = 0;
    var countmax = 0;

    for (var i=0; i<array.length; i++)
    {
        if(array[i]>max)
        {
            countmax ++; //Menambah counter min value
            max = array[i];
        }
        else if(array[i]<min)
        {
            countmin ++;
            min = array[i];
        }
    }
    console.log(countmax + ' ' + countmin);
}
minmax(array);