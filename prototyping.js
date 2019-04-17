function Musteri(ilk,son,sehir,ulke,yas){
    this.ilk=ilk;
    this.son=son;
    this.sehir=sehir;
    this.ulke=ulke;
    this.yas=yas;
}
var birMusteri=new Musteri("Ahmet","Yaman","Yenipazar","Türkiye",42);
// Belirli bir object e yeni bir özellik ya da method ekleme için kullanılır.
Musteri.prototype.eMail="ayaman@gmail.com";
Musteri.prototype.tamAdi=function(){
    return this.ilk+" "+this.son;
}

alert(birMusteri.eMail);
alert(birMusteri.tamAdi());