export function formatCurrency(num, dou?:boolean) {
    num = num.toString().replace(/\$|\,/g,'')
    if(isNaN(num)) {
      num = '0'
    }
    let sign = (num == (num = Math.abs(num)))
    num = Math.floor(num*100+0.50000000001)
  
    let cents = num%100
    num = Math.floor(num/100).toString()
    if(cents<10) {
      cents = '0' + cents
    }
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++) {
      // num = num.substring(0,num.length-(4*i+3))+','+
      const douString = dou ? ',' : ''
      num = num.substring(0,num.length-(4*i+3))+ douString +
      num.substring(num.length-(4*i+3));
    }
  
    return (((sign)?'':'-') + num + '.' + cents);
}