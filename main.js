function showFibo(fibo)
{
    let number1=0,number2=1;
    let temp;
    while(number1<fibo)
    {
        temp=number2;
        number2+=number1;
        number1=temp;
        fibo--;
        document.write(number1);
        document.write('<br>');
    }
}
showFibo(Number(prompt("Import limit fibonacci")));
