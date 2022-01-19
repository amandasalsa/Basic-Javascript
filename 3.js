let Data = [
    {nama: "Rhodey", bb:90, tb:1.7}
];
let hasil = 0;

for (let i = 0; i < Data.length; i++) {
    let bmi = Data[i].bb / (Data[i].tb * Data[i].tb);
    if (bmi < 18.5) {
        hasil.push("Kurang Berat")
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        hasil.push("Normal")
    } 
    if (bmi >= 25 && bmi <= 29.9) {
        hasil.push("Kelebihan Berat")
    } 
    if (bmi >=30 ) {
        hasil.push("Obesitas")
    } 
}
console.log(`BMI Rhodey = ${hasil}`);
