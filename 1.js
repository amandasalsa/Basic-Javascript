//1.	Pak Arman akan membeli tanah berukuran 20,5m x 30m dengan 
// harga Rp 1.500.000 per meter persegi. Dalam pembelian tanah 
// tersebut ditambahkan PPN sebesar 15%. Buatlah sebuah program 
// menggunakan Javascript untuk membantu Pak Arman mengetahui 
// nominal yang harus dibayarkan!

let harga = [1500000];
let ukuran = [20.5*30];
let total = 0;

    for (let i = 0; i < harga.length; i++){
        total += harga[i] * ukuran[i];
        let ppn = total * 15/100;
        total += ppn;
    console.log(`Nominal Bayar = ${total}`);
    }
