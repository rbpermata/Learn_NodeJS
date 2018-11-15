
function checkword(text)
{
   var array = text.split('');
   var panjang = text.toString().length;
   console.log(array);
   console.log(panjang);
   console.log(array[0]);
   console.log(array[4]);

   for (var i=0;i<=panjang; i++)
   {
       console.log(i);
       for (var j=i; j=>(i+1); j--)
       {
        console.log(j)
        if (array[i] == array[j])
        {
            console.log('True');
        }
        else
        {
            console.log('False');
        }
       }
   }





//    if ((array[0] == array[4]) && (array[1] == array[3]) && (array[2] == array[2]) && (array[3] == array[1]) && (array[4] == array[0]))
// TEST 
// if ((array[0] == array[4]) && (array[1] == array[3]) && (array[2] == array[2]) && (array[3] == array[1]) && (array[4] == array[0]))
//    if (array[0] == array[4])
//    {
//        console.log('True');
//    }
//    else
//    {
//        console.log('False');
//    }
   
//    for (var i=0; i<=panjang; i++)
//    {

//    }
}
checkword('radar'); //sample: radar