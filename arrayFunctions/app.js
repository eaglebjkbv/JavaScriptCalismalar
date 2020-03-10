let obj=[{
    id:1,
    ad:"Tashimasu",
    soyad:"Doneru",
    telefon:{
        cep:121231231,
        ev :242342344,
    },
},
{
    id:2,
    ad:"Yaramazu",
    soyad:"Doveru",
    telefon:{
        cep:121231231,
        ev :242342344,
    },
},
{
    id:3,
    ad:"Yamamama",
    soyad:"Kalamara",
    telefon:{
        cep:121231231,
        ev :242342344,
    },
},
];
console.log(obj);

let bul=obj.find(item=>item.id==1) // Sadece bir obje döndürür .ilk bulduğu
console.log(bul);
let bul2=obj.findIndex(item=>item.id==2);// Karşılaştırmaya uyan ilk objenin sıra numarasını döndürür...
console.log(bul2);

let bulunan=obj.filter(function(item){
    return item.id==1;
});
console.log(bulunan);

let bulunan2=obj.filter(item=> item.ad=="Tashimasu");  //Adı tashimasu olanları döndürür.

console.log("Bulunan 2 = ");
console.log(bulunan2);

let mapli=obj.map(item=>item.ad) //sadece isimleri döndürür

console.log(mapli);

let mapli2=obj.map(item=>{
    return{
         num:item.id, 
         isim:item.ad
        }

});
console.log(mapli2)
let mapli3=obj.map(item=>{
    return `Numara=> ${item.id} Ad =>[ ${item.ad} ] Soyad =>${item.soyad}`;
});

console.log(mapli3);