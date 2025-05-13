alert(`Merhaba Yol Hikayeme Hoş Geldin`);
alert(`Üzgünüm Ama Hikayeyi Bitirmeden Seni Bırakmayacağım.`);
alert(`Ha bi de sadece 1 ya da 2 değerlerini gir.`);
alert(`Yol Hikayesi 
Yol yürürken bir kuyu çıkıyor karşına.`);

// İlk Soru

let inputKullaniciSecimKuyu = prompt(`1) Görmezden Gel
2) Eğilip Bak`);


if (inputKullaniciSecimKuyu == 1) {
    alert(`Görmezden geldin, yürümeye 
devam ettin. Kuş sesi duydun.`);

    // İKinci Soru

    let inputKullaniciSecimKus = prompt(`1) Kuşun peşinden git
2) Gözlerini kapat ve dinle`);


    if (inputKullaniciSecimKus == 1) {
        alert(` Kuşun peşinden gittin
Kuş insana dönüştü, sana şöyle dedi:
“Gerçekle yüzleşmeye hazır mısın?”`);

        //üçüncü Soru

        let inputKullaniciSecimGercek = prompt(`1) Evet
2) Hayır`);

        if (inputKullaniciSecimGercek == 1) {
            alert(`Evet dedin
Gerçeği öğrendin. Her şeyi biliyorsun artık.
Bir sonraki adımda zihnine bir cümle düşüyor:

“Her şeyin cevabı varsa, soru ne olur?”
`);

            //Dördüncü Soru

            let inputKullaniciSecimSoruCevap = prompt(`1) Soru kalmasın cevaplar yeterli.
2) Sorular daha önemli`);

            // 1.Son

            if (inputKullaniciSecimSoruCevap == 1) {
                alert(`Son
Bilgeliğin seni yalnızlaştırır. 
İnsanlarla bağın kopar.
Son: “Bilmek her zaman anlam katmaz.
Bazen sadece uzaklaştırır.”`);
            }

            // 2.Son

            else if (inputKullaniciSecimSoruCevap == 2) {
                alert(`Son
Cevapları bırakıp yola dönersin. 
Anlam aramaya devam edersin.
Son: “Bazı sorular cevaplardan değerlidir.”`);
            }

            else {
                alert(`Yanlış hatırlamıyorsam 1 ya da 2 dışında bi şeye basarak
ilerlemeye çalışma demiştim. 
Tamam hayat her zaman iki seçenekten ibaret değildir
ama burası benim oyunum benim kurallarım geçerli.`);
            }
        }
        else if (inputKullaniciSecimGercek == 2) {
            alert(`Hayır, bilmek istemiyorum
Kuş uçar, hava kararır. Yolda yalnızsın. 
Bir kaya üzerinde yazı:

“Cahillik huzur mu, ceza mı?”
`);

            // Beşinci Soru
            let inputKullaniciSecimHuzurCeza = prompt(`1) Huzur
2) Ceza`)

            // 3.Son

            if (inputKullaniciSecimHuzurCeza == 1) {
                alert(`Huzur
Huzur içinde yürürsün ama bir tat eksik.
Son: “Huzur, bilinçsizliğin yumuşak hapishanesidir.”
`);
            }
            // 4. Son
            else if (inputKullaniciSecimHuzurCeza == 2) {
                alert(`Ceza
Cevabı bile bile yoksun bırakılmak ağır gelir.
Son: “Kaçınmak, bazen en derin pişmanlıktır.”`);
            }

            else {
                alert(`Yanlış hatırlamıyorsam 1 ya da 2 dışında bi şeye basarak
ilerlemeye çalışma demiştim. 
Tamam hayat her zaman iki seçenekten ibaret değildir
ama burası benim oyunum benim kurallarım geçerli.`);
            }
        }

        else {
            alert(`Yanlış hatırlamıyorsam 1 ya da 2 dışında bi şeye basarak
ilerlemeye çalışma demiştim. 
Tamam hayat her zaman iki seçenekten ibaret değildir
ama burası benim oyunum benim kurallarım geçerli.`);
        }
    }

    else if (inputKullaniciSecimKus == 2) {
        alert(` Sadece kuş sesini dinledin
Bir çocukluk anısı canlandı. 
Orada kalmak ister misin?`);

        // Altıncı Soru

        let inputKullaniciSecimAni = prompt(`1) Evet
2) Hayır`);

        if (inputKullaniciSecimAni == 1) {
            alert(`Evet
Zihnin geçmişte sıkışır. Ama bir hayal fısıldar:
“Bu an gerçek değil, ama sen inandıkça yaşıyor.”`);

            // Yedinci Soru

            let inputKullaniciSecimKalUyan = prompt(`1) Kalmaya devam et
2) Uyan`);

            // 5.Son

            if (inputKullaniciSecimKalUyan == 1) {
                alert(`Kal
Gittikçe flu bir hayal dünyasında erirsin.
Son: “Gerçek bazen çok acı olduğu için unutulur.”
`);
                // 6.Son
            }
            else if (inputKullaniciSecimKalUyan == 2) {
                alert(`Uyan
Gözlerini açarsın, yoldasın. Hiçbir şey değişmemiş gibi.
Son: “Uyanmak kolaydır, uyanık kalmak zordur.”
`);
            }
        }

        else if (inputKullaniciSecimAni == 2) {
            alert(` Hayır
Yoluna devam edersin, ama geçmişin gölgesi seninle gelir.
Yolda bir tabela:

“Geriye dönersen, hiçbir şey bulamayabilirsin.”
`);

            // Sekizinci Soru

            let inputKullaniciSecimDevamEtDon = prompt(`1) Geri Dön
2) Devam Et`);

            // 7.Son

            if (inputKullaniciSecimDevamEtDon == 1) {
                alert(`Geri dön
Geçmişin artık yerinde olmadığını görürsün.
Son: “Zaman geriye yürünmez. 
İleriye bile yürümüyodur belki ”
`);
            }

            // 8.Son

            else if (inputKullaniciSecimDevamEtDon == 2) {
                alert(` Devam et
Sessiz bir kabullenişle yürümeye devam edersin.
Son: “İlerlemek, unutmaktan değil,
taşımaktan doğar.”`);
            }

            else {
                alert(`Yanlış hatırlamıyorsam 1 ya da 2 dışında bi şeye basarak
ilerlemeye çalışma demiştim. 
Tamam hayat her zaman iki seçenekten ibaret değildir
ama burası benim oyunum benim kurallarım geçerli.`);
            }
        }

        else {
            alert(`Yanlış hatırlamıyorsam 1 ya da 2 dışında bi şeye basarak
ilerlemeye çalışma demiştim. 
Tamam hayat her zaman iki seçenekten ibaret değildir
ama burası benim oyunum benim kurallarım geçerli.`);
        }
    }

    else {
        alert(`Yanlış hatırlamıyorsam 1 ya da 2 dışında bi şeye basarak
ilerlemeye çalışma demiştim. 
Tamam hayat her zaman iki seçenekten ibaret değildir
ama burası benim oyunum benim kurallarım geçerli.`);
    }

}





else if (inputKullaniciSecimKuyu == 2) {
    alert(`Kuyuya eğildin, ayağın kaydı
Düşmek üzeresin.`);

    // Dokuzuncu Soru

    let inputKullaniciSecimPanikSakin = prompt(`1) Panikle tutun
2) Sakin kal, çıkış ara`);

    if (inputKullaniciSecimPanikSakin == 1) {
        alert(`Panikledin, bir el seni çekti
Ses: “Bana güveniyor musun?”
`);

        // Onuncu Soru

        let inputKullaniciSecimTakipEtEtme = prompt(`1) Takip Et
2) Takip Etme`);

        if (inputKullaniciSecimTakipEtEtme == 1) {
            alert(`Takip ettin
Bir ormana girersiniz, ama aynı yere dönüp
duruyorsunuz.
Ses yine sorar:

“Yol önemli mi, yoksa kiminle yürüdüğün mü?”
`);

            //Onbirinci Soru

            let inputKullaniciSecimYolKisi = prompt(`1) Yol
2) Kişi`);

            // 9.Son
            if (inputKullaniciSecimYolKisi == 1) {
                alert(`Yol
Yanındakini bırakırsın. Yalnız ama 
özgürsündür.
Son: “Yol yalnızlığa götürür, ama seçim
 senindir.”
`);
            }

            // 10.Son
            else if (inputKullaniciSecimYolKisi == 2) {
                alert(`Kişi
Onunla kalırsın, ama yol sonsuza kadar 
tekrar eder.
Son: “Bağ bazen ilerlemeyi engeller. Özellikle de ayak bağı olan bağlar”
`);
            }

            else {
                alert(`Yanlış hatırlamıyorsam 1 ya da 2 dışında bi şeye basarak
ilerlemeye çalışma demiştim. 
Tamam hayat her zaman iki seçenekten ibaret değildir
ama burası benim oyunum benim kurallarım geçerli.`);
            }
        }


        else if (inputKullaniciSecimTakipEtEtme == 2) {
            alert(`Etme
Yalnız yürürsün. Bir süre sonra bir taşın üstüne yazılmış:

“Seçilmiş yalnızlık, dayatılan yalnızlıktan daha sessizdir.”
`);

            // Onikinci Soru


            let inputKullaniciSecimYolaDevamDon = prompt(`1) Pişmanlık da duymadan geri dön
2) Boşver ve yola devam et`);

            // 11.Son
            if (inputKullaniciSecimYolaDevamDon == 1) {
                alert(`Geri dön
Kimseyi bulamazsın. Geri dönüş yoktur.
Son: “Zamanı geriye saramazsın.”`);
            }

            // 12.Son
            else if (inputKullaniciSecimYolaDevamDon == 2) {
                alert(`Devam et
Kendi yolunu bulursun, ama başka birini hiç görmezsin.
Son: “Yalnızlık bir bedel değil, bir durumdur.”
`);
            }

            else {
                alert(`Yanlış hatırlamıyorsam 1 ya da 2 dışında bi şeye basarak
ilerlemeye çalışma demiştim. 
Tamam hayat her zaman iki seçenekten ibaret değildir
ama burası benim oyunum benim kurallarım geçerli.`);
            }
        }

        else {
            alert(`Yanlış hatırlamıyorsam 1 ya da 2 dışında bi şeye basarak
ilerlemeye çalışma demiştim. 
Tamam hayat her zaman iki seçenekten ibaret değildir
ama burası benim oyunum benim kurallarım geçerli.`);
        }
    }
    else if (inputKullaniciSecimPanikSakin == 2) {
        alert(`Sakin kaldın, kurtuldun
Bir masa: Üzerinde bir pusula ve ayna.`);

        // Onüçüncü Soru

        let inputKullaniciSecimAynaPusula = prompt(`1) Pusula
2) Ayna`);
        if (inputKullaniciSecimAynaPusula == 1) {
            alert(`Pusula
Her şeyi ölçüp biçebilirsin. Artık yol kaybolmaz.
Ama heyecan da kalmaz.
Zihninde bir cümle belirir:
“Yol belliyse, yolcu neye karar verir?”`);

            // Ondördüncü Soru

            let inputKullaniciSecimYonYol = prompt(`1) Yön değil, yürüyüş önemlidir
2) Yolu bilmek yetmez, neden yürüdüğünü bilmelisin`);

            // 13.Son
            if (inputKullaniciSecimYonYol == 1) {
                alert(`Son:
“Adımların sabit, yönün net.
Ama rüzgârı hissetmezsin artık.
Bilineni yürümek, çoğu zaman cesaret değil, sadece alışkanlıktır.
Ve alışkanlıklar bazen görünmeyen zincirlerdir.”`);
            }

            // 14.Son
            else if (inputKullaniciSecimYonYol == 2) {
                alert(`Son:
“Yol haritada durduğu gibi değildir.
Amaçsız yürüyen, her patikayı aynı zanneder.
Ve çoğu zaman, yönü bilen değil, nedeni bilen kaybolmaz.
Yine de bazı nedenler, insanı en çok yolundan eder.”`);
            }

            else {
                alert(`Yanlış hatırlamıyorsam 1 ya da 2 dışında bi şeye basarak
ilerlemeye çalışma demiştim. 
Tamam hayat her zaman iki seçenekten ibaret değildir
ama burası benim oyunum benim kurallarım geçerli.`);
            }
        }

        else if (inputKullaniciSecimAynaPusula == 2) {
            alert(`Kendine bakarsın. Yüzünde neşe, acı, korku hepsi aynı anda var.
Aynadan bir ses gelir:
“Gördüğün şey sen misin, yoksa görmek istediklerin mi?”`);

            // Onbeşinci Soru

            let inputKullaniciSecimBenimDeğilim = prompt(`1) Benim
2) Bilmiyorum`);

            // 15.Son
            if (inputKullaniciSecimBenimDeğilim == 1) {
                alert(`Son:
“Kendini tanıdığını sandığında değişmeyi bırakırsın.
Ama durmak, çürümenin başka adıdır.
Aynadaki yüz, sadece dünün yansımasıdır.
Ve kim geçmişte donarsa, gelecekte kaybolur.”`);
            }

            // 16.Son
            else if (inputKullaniciSecimBenimDeğilim == 2) {
                alert(`Son:
“Bilinmezlik seni ürkütse de, en büyük dürüstlük oradadır.
Gerçek benlik, tanımlara değil, sorulara saklanır.
Ve bazen, kim olduğunu bilmemek, kim olmadığını bilmenden daha değerlidir.
Çünkü arayış, en saf halindir.”`);
            }
            else {
                alert(`Yanlış hatırlamıyorsam 1 ya da 2 dışında bi şeye basarak
ilerlemeye çalışma demiştim. 
Tamam hayat her zaman iki seçenekten ibaret değildir
ama burası benim oyunum benim kurallarım geçerli.`);
            }
        }

        else {
            alert(`Yanlış hatırlamıyorsam 1 ya da 2 dışında bi şeye basarak
ilerlemeye çalışma demiştim. 
Tamam hayat her zaman iki seçenekten ibaret değildir
ama burası benim oyunum benim kurallarım geçerli.`);
        }
    }

    else {
        alert(`Yanlış hatırlamıyorsam 1 ya da 2 dışında bi şeye basarak
ilerlemeye çalışma demiştim. 
Tamam hayat her zaman iki seçenekten ibaret değildir
ama burası benim oyunum benim kurallarım geçerli.`);
    }
}
else {
    alert(`Yanlış hatırlamıyorsam 1 ya da 2 dışında bi şeye basarak
ilerlemeye çalışma demiştim. 
Tamam hayat her zaman iki seçenekten ibaret değildir
ama burası benim oyunum benim kurallarım geçerli.`);
}