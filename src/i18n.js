import i18n from 'i18next';
import { initReactI18next } from "react-i18next";


const resources = {

    tr: {
        translation: {
            welcome: 'Hosgeldin',
            Home: 'Anasayfa',
            ActiveLanguage: 'Aktif Dil',
            Kurumsal: "Kurumsal",
            ebook: "E-Kitap",
            education: "Eğitimler",
            news: "Güncel",
            blog: "Blog",
            contact: "İletişim",
            login: "Oturum Aç",
            signup: "Kayıt ol",
            btn: "Öğrenci Paneli",
            slogan: "HER ZAMAN, HER YERDE EĞİTİM ",
            slogan2: "Çevrimdışı eğitimlerle bilgilerinize yenilerini ekleyin",
            btn2: "Çevrimiçi Eğitimler",
            btn3: " Video Eğitimler",
            input: "Bir Kurs Ara",
            slogan5: "En Populer",
            slogan6: "Kurslarımız",
            slogan7: "Online eğitim serilerimizle yeteneklerinizi istediğiniz yerden geliştirin.",
            slogan8: "Kursları Keşfedin",

            infoText: 'İleri Seviye Excel Eğitimi',
            job: 'Bilgisayar Öğretmeni',
            btnText: 'B. Teknolojileri',

            infoText2: 'Kağıt Telkari',
            job2: 'Sanat Öğretmeni',
            btnText2: 'El Sanatları',

            infoText3: 'Kardiyo Eğitimi',
            job3: 'Spor Eğitmeni',
            btnText3: 'Spor',

            infoText4: 'Sureler - Mealler Eğitimi',
            job4: 'Din Kültürü Öğretmeni',
            btnText4: 'Din ve Değerler',

            infoText5: 'Kodlama Eğitimi',
            job5: 'Yazılım Uzmanı',
            btnText5: 'B. Teknolojileri',

            infoText6: 'Dil Bilgisi / Paragraf Yöntemi ve Teknikleri',
            job6: 'Kişisel Gelişim Uzmanı',
            btnText6: 'Kişisel Gelişim',

            slogan9: "Kategorileri ",
            slogan10: "Keşfedin",
            slogan11: "Kategorilere tıklayın ve tüm kursları keşfedin",
            text: "Uzaktan",
            text2: "Eğitim",
            text3: "Lorem ipsum dolor sit amet consectetur. Turpis pharetra malesuada semper sed. Sed quam eu euismod eget risus et imperdiet nulla senectus. Egestas rhoncus imperdiet pellentesque quam vitae ultrices. Feugiat scelerisque duis varius quam sapien pretium egestas. Cras et morbi cursus in elit ut donec nibh eget. Leo tristique netus ante quis vitae. Aliquam ullamcorper a sed fermentum. Sagittis donec urna.",
            text4: "Devamını Oku",
            text5: "Önerilen",
            text6: "Kurslarımız",
            text7: "Öğrenci ",
            text8: "Görüşleri",
            text9: "Öğrencilerimiz bizim hakkımızda ne diyor?",
            refresh: "YENİLE",
            send: "GÖNDER",
            text10: "Kişisel veriler kanunu gereğince, sisteme kayıt yapmanız durumunda",
            text11: "Aydınlatma metnini (tıklayarak okuyabilirsiniz) ve Açık Rıza beyanını (tıklayarak okuyabilirsiniz)",
            text12: "kabul etmiş olursunuz",

            text13: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            text14: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            text15: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            titleHome: "Anasayfa",

            f1: 'Eğitmen',
            f2: 'Öğrenci',
            f3: 'Video',
            f4: 'Kullanıcı',

            f5: 'Hızlı Linkler',
            f6: 'Hakkımızda',
            f7: 'Blog',
            f8: 'Kurumsal',
            f9: 'Eğitimler',
            f10: 'İletişim',
            f11: 'Adres',

            a1: "Bilişim Teknolojileri",
            a2: "Resim",
            a3: "El Sanatları",
            a4: "Din ve Değerler Eğitimi",
            a5: "Yabancı Dil",
            a6: " Spor",

            kurumsal: "Kurumsal",
            kurumsal1: "KUZEM - KOMEK Uzaktan Eğitim Merkezi",
            kurumsal2: "Geçmişten günümüze bir ülkenin sahip olduğu en vazgeçilmez kaynak insandır. Bu kaynağın ülkelerin ihtiyaçları doğrultusunda yetiştirilmesi uygarlaşma yolundaki hedeflerin gerçekleşmesine katkı sağlar. ‘Konya Modeli Belediyecilik’ idolü ile değişen dünya algısıyla beraber önce evimize hatta cebimize kadar giren internetin yararlarını kullanarak KOMEK Uzaktan Eğitim Merkezi (KUZEM)’ni 2020 yılında hayata geçirdik.",
            kurumsal3: "Online eğitim almak isteyenler giderek çoğalıyor. Dijital platformlarda yer alan eğitim programları günümüzde oldukça popüler hale geldi. Her an her yerden erişim imkânı sunan KUZEM içerik bakımından oldukça zengin ve öğretici olanaklar sağlıyor.",
            kurumsal4: "  Teknolojik yeniliklerin ve keşiflerin sayısı arttıkça, öğrencilerin akademik hayallerini gerçekleştirme ve başarıya ulaşma şansları da artmaktadır. Uzun zamandır hayatımızda olan fakat son zamanlarda daha da yaygınlaşmış olan KOMEK Uzaktan Eğitim Merkezi, zaman ve mekan ilişkisine bağlı kalınmadan, öğretim ve tasarım tekniklerini detaylı olarak anlatan, farklı teknolojilerle iletişim sağlayan, özgün, kurumsal ve yönetsel yapılanmayı gerektiren planlanmış bir eğitim modeli olarak tanımlanmaktadır. ",
            kurumsal5: " Çevrimiçi öğrenim için küresel bir varış noktası olarak, insanları bilgi aracılığıyla birbirine bağlıyoruz.",
            kurumsal6: "Türkiye’nin dört bir yanından eğitmenler KUZEM’de binlerce öğrenciye eğitim veriyor.",
            kurumsal7: "1.500 eğitim videosu kuzem.org adresinden çevrim dışı eğitimlere tek seferlik üye olan bütün kursiyerlerin erişimine açılarak sınırsız hizmet sunuldu. Türkçe, Arapça, İngilizce dillerinde çok dilli bir anlayışla ücretsiz sürdürülen eğitimler uluslararası platformda yer alarak küresel öğrenmede Konya Modeliyle yer alıyor.",
            kurumsal8: " kuzem.org için başvuru süreci bulunmuyor, sadece kaydolabilir ve öğrenmek istediğiniz herhangi bir konuda video dersleri takip edebilirsiniz. KUZEM olarak Bilişim Teknolojileri, El Sanatları, Resim, Din ve Değerler Eğitimi, Spor, Yabancı Diller, Kişisel Gelişim alanlarında eğitim videoları kuzem.org adresinde kursiyerlerini bekliyor. Web sitesine üye olduktan sonra çevrimdışı olarak öğrenciler diledikleri zaman diledikleri yerden eğitimlerine devam edebiliyor.Ayrıca yılda üç defa kayıt dönemi bulunan KUZEM ile belirli gün ve saatlerde online olarak eğitimler alınabiliyor. Eğitimlerin tamamlanması neticesinde kursiyerler bitirme belgelerine e-Devlet üzerinden erişim sağlayabiliyor",
            kurumsal9: "Başkanın Mesajı",
            kurumsal10: "Konya; tarihi, kültürü, doğal güzellikleri ve insanıyla eşine az rastlanır birikime sahip kadim bir şehirdir.",
            kurumsal11: " Konya Büyükşehir Belediyesi olarak sahip olduğumuz bu birikimi en iyi şekilde değerlendirerek şehrimizi sosyal, ekonomik ve kültürel anlamda çağın ilerisine taşımak en büyük önceliğimiz.",
            kurumsal12: " Bu doğrultuda; değişen şartlara en hızlı şekilde adapte olmak, şehrimizin gelişen ekonomisine, sosyal değerlerine ve hemşehrilerimizin istihdamına katkı sunmak adına Meslek Edindirme Kurslarımız (KOMEK) oldukça önemli bir yere sahip.",
            kurumsal13: "   Meslek Edindirme Kurslarımızda bugüne dek 73 KOMEK/ASEM hizmet binasında, 35 spor merkezinde ve 33 oyun salonunda 1 milyonu aşkın hemşehrimize; teknik eğitimlerden sanat eğitimlerine, yabancı dilden müzik eğitimlerine, bilişim teknolojilerinden kişisel gelişim eğitimlerine kadar 544 branşta hizmet verdik. Yılda üç dönem kayıt alan KOMEK’lerimizin yıllık kursiyer kapasitesini 150 bine çıkardık.",
            kurumsal14: " Kurslarımızda eğitim alan kursiyerlerimiz KOMEK atölyelerinde üretim yapıyor, KOMEK Kooperatifi vasıtasıyla ürettiklerini dünyaya pazarlıyor ve bunlarla birlikte sanatsal faaliyetlerde de bulunuyorlar.",
            kurumsal15: "  KOMEK’te aynı zamanda ANATOYA adıyla bir oyuncak markası, ZEYBE adıyla bir çanta markası ve ZENOBYA adıyla bir polar ceket-yelek markası oluşturduk.",
            kurumsal16: "KOMEK’lerimizde aynı zamanda işitme engellilere yönelik Kur’an-ı Kerim, Yemek ve Pasta Yapımı, Giyim ve Mefruşat, Türk İşaret Dili gibi kurslarımız devam ediyor.",
            kurumsal17: "Meslek Edindirme Kurslarımızda yalnızca yetişkinlere değil, Genç KOMEK adıyla öğrencilerimize ve özel çocuklarımıza da eğitimler veriyoruz.",
            kurumsal18: "Bugüne kadar 150 bin öğrencimizin katıldığı Genç KOMEK’te, yalnızca 2021 yılı içerisinde uzaktan eğitimle Türkiye’nin her yerinden 60 bin öğrencimizi buluşturduk.",
            kurumsal19: "Özellikle pandemi döneminde büyük bir ihtiyacı gideren KOMEK UZEM ile vatandaşlarımızın evlerinden çıkamadığı dönemlerde, çeşitli konularda kendilerini geliştirmeleri ve kişisel gelişim alanlarında yeni yetkinlikler kazanabilmeleri için kurslarımızı çevrim içi olarak sürdürdük.",
            kurumsal20: "Tüm Türkiye’de takdir toplayan uzaktan eğitimlerimiz, karşılıklı etkileşimin olduğu interaktif program ile adeta gerçek bir sınıf ortamı oluşturularak gerçekleştirildi.  ",
            kurumsal21: " Hâlihazırda ülkemizin pek çok farklı şehrinden ve Fransa, Almanya, Irak ve Çin gibi dünyanın çeşitli ülkelerinden kursiyerlerimizin kayıtlı olduğu KOMEK UZEM, zaman ve mekân sınırlaması olmadan onlarca farklı branşta hizmet vermeye devam ediyor. ",
            kurumsal22: "Meslek Edindirme Kurslarımızda eğitimlerini sürdüren tüm kursiyerlerimize çalışmalarında başarılar diliyorum. Konya Modeli Belediyecilik anlayışımızla; Konya için, ülkemiz için çalışmaya, üretmeye devam ediyoruz.",
            kurumsal23: "Konya Büyükşehir Belediye Başkanı",



            ekitap0: "E-Kitap",
            ekitap: "Din ve Değerler",
            ekitap2: "Temel Dini Bilgiler",
            ekitap3: "El Sanatları ",
            ekitap4: "Origami Sanatı",
            ekitap5: "Yabancı Dil",
            ekitap6: "Arapça’ya Giriş ",
            ekitap7: "Karakalem Çalışmaları ",
            ekitap8: "Karakalem Çalışması",
            ekitap9: "Bilişim Teknolojileri",
            ekitap10: "Algoritma Temelleri",
            ekitap11: "Evde Fitness",
            ekitap12: "Evde Fitness",




            egitimler0: "Eğitimler",
            egitimler: "Tümü",
            egitimler2: "Bilişim Teknolojileri",
            egitimler3: "El Sanatları ",
            egitimler4: "Resim",
            egitimler5: "Din ve Değerler Eğitimi",
            egitimler6: "Spor",
            egitimler7: "Yabancı Diller",
            egitimler8: "Kişisel Gelişim ",





            guncel:"Güncel",
            guncel2:"İŞ’TE KOMEK",
            guncel3:"‘’Her şey Seninle Başlar Eğitim Programı’’ Tüm Eğitim Şube Müdürlüğü çalışanlarının kendini yenilemesi, değişen ve gelişen iletişim yöntemleri konusunda bilgilenmeleri ve iş yaşamında daha verimli olmaları adına “Her şey seninle başlar.” Mottosuyla yola çıkılarak bir eğitim planlaması yapıldı. Eğitim programları sayesinde kurum içindeki ve kurum ile vatandaş arasındaki iletişim daha verimli hale gelmesi amaçlanmıştır... ",

            btnxx:"Devamını Oku",


            blog0:"Blog",
            blog2:"Uzaktan Eğitim Nedir?",
            blog3:'Uzaktan Eğitim: Yarının Eğitim Modeli Geleneksel eğitim, fiziksel sınıflar, tahtalar ve kampüslerle özdeşleşirken, teknolojinin hızlı...',
            blog4:'Sıkça Sorulan Sorular',
            blog5:'Uzaktan eğitim nedir? - Uzaktan eğitim, öğrencilere derslere internet aracılığıyla erişim sağlayan bir eğitim...',
            blog6:'Seo Nedir?',
            blog7:'SEO yani Arama Motoru Optimizasyonu, web sitenizi arama motorlarında daha yüksek sıralara taşımanın bir yoludur....',



            iletisim:"İletişim",
            iletisim2:"Bize Yazın ",
            iletisim3:"Adınız ",
            iletisim4:"E posta adresiniz  ",
            iletisim5:"Konu ",
            iletisim6:"Mesajınız ",
            iletisim7:"Güvenlik Doğrulaması ",
            iletisim8:"KUZEM - Eğitim Şube Müdürlüğü ",
            iletisim9:"Çimenlik Mahallesi, 8, Mevlana Kültür Mrk.Karatay/KONYA/42030",
            iletisim10:"Telefon ",
            iletisim11:"E posta Adresi ",
            iletisim12:"Bize Yazın ",




            excel:"Excell Eğitimi",
            excel2:"-Arayüz İnceleme",
            excel3:"İlerleme Durumunuz",
            excel4:"Anasayfa | Eğitimler |",
            excel5:" Excell Eğitimi ",
            excel6:'Giriş - Excell Nedir?',
            excel7:'Arayüz İnceleme',
            excel8:'Satırlar ve Sütunlar' ,
            excel9:'Veri Girişi',
            excel10:'Formüller',
            excel11:'Düşeyara',
            excel12:'Ekle-Çıkar',
            excel13:'Format Biçimlendir',
            excel14:" Excell Eğitimi - Arayüz İnceleme",
            excel15:" Eğitim Açıklaması ",
            excel16:" Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisisconsectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit." ,
            excel17:" Sertifika ",
            excel18:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Quisipsum suspendisse ultrices gravida. Risus commodo viverra maecenasaccumsan lacus vel facilisis consectetur adipiscing elit. ",
            excel19:" Bu eğitim kimler içindir?  ",
            excel20:" Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Quis ipsum suspendisse ultrices gravida. Risus commodoviverra maecenas accumsan lacus vel facilisis consecteturadipiscing elit.",
            excel21:" Bu eğitimde neler öğreneceksiniz? ",
            excel22:" Lorem ipsum dolor sit amet. ",
            excel23:" Lorem ipsum dolor sit amet.",
            excel24:" SLorem ipsum dolor sit amet. ",
            excel25:" Lorem ipsum dolor sit amet. ",
            excel26:" Lorem ipsum dolor sit amet.",
            excel27:" Kategori",
            excel28:" B.Teknolojileri ",
            excel29:" Eğitmen ",
            excel30:" Adem Yılmaz",
            excel31:" Puan", 
            excel32:" Süre", 
            excel33:" 30 Saat ", 
            excel34:" Ders Sayısı ", 
            excel35:" Testler ", 
            excel36:" Sertifika", 
            excel37:" Var ", 
            excel38:" Dil ", 
            excel39:" Türkçe ", 
            excel40:" Eğitime Puan Ver ", 



            gdetay0:"Güncel / Detay",
            gdetay:"Detay",
            gdetay2:"‘’Her şey Seninle Başlar Eğitim Programı’’Tüm Eğitim Şube Müdürlüğü çalışanlarınınkendini yenilemesi, değişen ve gelişeniletişim yöntemleri konusunda bilgilenmeleri ve iş yaşamında daha verimli olmaları adına“Her şey seninle başlar.” Mottosuyla yola çıkılarakbir eğitim planlaması yapıldı. Eğitim programlarsayesinde kurum içindeki ve kurum ile vatandaşarasındaki iletişim daha verimli hale gelmesiamaçlanmıştır. Yapılan eğitimler, mesai saatleriiçerisinde ve dışında planlanmış ve tüm çalışanların katılımı sağlanmıştır.Alanında uzman, saha deneyimi olaneğitmenler tarafından aşağıda bahsedilenbranşlarda eğitim verilmiştir. - İş YaşamındaKurum İçi İletişim - İş Yaşamında Etik ve Görgü Kuralları - Telefonda Etkili İletişimYöntemleri - Sözlü İletişim ve Beden Dili -Kişilik Analizi Eğitimi KOMEK kurslarındagörev yapan eğitmenlerimize ise İğneleme Keçe Tekniklerive Kırkyama Eğitimleri verilmiştir. Eğitimlerin sonundatüm personelimize e-Devlet onaylı katılım belgesiverilmiştir. Uzaktan eğitim yöntemi ile yapılaneğitimlerin tamamlanmasının ardından, tüm personelleriçin Selçuklu Kongre Merkezi’nde yüz yüze iki gün sürece olan eğitim programı yapıldı. Toplamda 335 personelimize eğitim verildi.",




            bdetay:'Blog / Uzaktan Eğitim Nedir?',
            bdetay1:'Uzaktan Eğitim: Yarının Eğitim Modeli ',
            bdetay2:'UZAKTAN EĞİTİM NEDİR? ',
            bdetay3:'Geleneksel eğitim, fiziksel sınıflar, tahtalar ve kampüslerle özdeşleşirken, teknolojinin hızlı gelişimiyle birlikte uzaktan eğitim kavramı önemli bir yükseliş yaşamaktadır. Uzaktan eğitim, öğrencilere coğrafi konumlarına bakılmaksızın eğitim alma fırsatı sunan bir eğitim modelini temsil eder. İşte bu yeni eğitim modelinin ne olduğu, faydaları, zorlukları ve neden geleceğin eğitim modeli olabileceği hakkında bir derleme.',
            bdetay4:'Uzaktan Eğitim Nedir? ',
            bdetay5:'Uzaktan eğitim, öğrencilere derslere internet aracılığıyla erişim sağlayan bir eğitim modelidir. Bu model, öğrencilere dersleri istedikleri yerde ve istedikleri zaman takip etme özgürlüğü sunar. Bu, öğrencilere çalışma, aile ve diğer kişisel taahhütlerini eğitimle uyumlu hale getirme fırsatı verir.',
            bdetay6:'Faydaları Nelerdir?',
            bdetay7:'Uzaktan eğitimin önemli avantajlarından biri, esneklik sunmasıdır. Öğrenciler, geleneksel sınıf saatlerine bağlı kalmak zorunda değildirler; bu da çalışan yetişkinler ve uzak bölgelerde yaşayan öğrenciler için son derece önemlidir. Ayrıca, uzaktan eğitim, öğrencilere dünyanın dört bir yanından uzman öğretmenlerin bilgisine erişim olanağı tanır. Bu, öğrencilere geleneksel eğitimde nadiren bulunan bir çeşitlilik ve deneyim sunar. Ek olarak, çevrimiçi eğitim genellikle maliyet açısından daha avantajlıdır, çünkü öğrenciler taşıma ve konaklama masraflarından tasarruf edebilirler.',
            bdetay8:'Zorlukları Nelerdir? ',
            bdetay9:'Ancak, uzaktan eğitim modelinin de bazı zorlukları vardır. Öğrencilerin, disiplinli ve kendi başlarına çalışma yeteneklerine sahip olmaları gerekebilir. Eğitim materyali ve etkileşim eksikliği, bazı öğrencilerin dikkatlerini dağıtabilir ve anlama konusunda zorluk yaşatabilir. Ayrıca, teknolojik sorunlar bazı öğrenciler için çevrimiçi derslerde sıkıntı yaratabilir.',
            bdetay10:'Neden Geleceğin Eğitim Modeli Olabilir? ',
            bdetay11:'Uzaktan eğitim, özellikle teknolojiye olan erişim arttıkça ve toplumlar daha bağlantılı hale geldikçe geleceğin eğitim modeli olabilir. Öğrencilere dünya çapında bir öğrenme deneyimi sunması, farklı kültürlerden ve bölgelerden gelen öğrencilerin bir araya gelmesini sağlar. Ayrıca, uzaktan eğitim, sürdürülebilir bir eğitim modeli olarak önemli bir rol oynayabilir, çünkü fiziksel mekanlara olan ihtiyacı azaltır ve böylece daha fazla öğrenciye ulaşılabilirlik sağlar. ',
            bdetay12:'Sonuç Olarak ',
            bdetay13:'Uzaktan eğitim, geleceğin eğitim modeli olma yolunda hızla ilerliyor. Esneklik, erişim ve maliyet avantajları, bu modelin cazibesini artırıyor. Ancak her öğrenci için uygun olmayabilir ve öğrencilerin disiplinli ve motive olma yeteneklerini korumaları gerekebilir. Uzaktan eğitim ve geleneksel eğitim, her iki dünyanın da en iyi özelliklerini bir araya getirerek öğrencilere daha fazla seçenek sunuyor ve böylece kendi öğrenme tarzlarına ve hedeflerine uygun olanı seçme fırsatı veriyor. ',

        }
    },

    en: {
        translation: {
            welcome: 'welcome',
            Home: 'Home',
            ActiveLanguage: 'Active Language',
            Kurumsal: "Corporate",
            ebook: "E-Book",
            education: "Education",
            news: "News",
            blog: "Blog",
            contact: "Contact",
            login: "Log In",
            signup: "Sing Up",
            btn: "Student Panel",
            slogan: "EDUCATION ANYTIME, ANYWHERE",
            slogan2: "Add to your knowledge with offline trainings",
            btn2: "Online Courses",
            btn3: "Video Tutorials ",
            input: "Search",
            slogan5: "Most Popular",
            slogan6: "Courses",
            slogan7: "Improve your skills from anywhere with our online training series.",
            slogan8: "Explore Courses ",



            infoText: 'Advanced Excel Course',
            job: 'Computer Teacher',
            btnText: 'İ. Technolojies',

            infoText2: 'Paper Filigree',
            job2: 'Computer Teacher',
            btnText2: 'Art Teacher',

            infoText3: 'Cardio Training',
            job3: 'Sports Trainer',
            btnText3: 'Sport',

            infoText4: 'Surahs - Meals Education',
            job4: 'Religious Culture Teacher',
            btnText4: 'Religion',

            infoText5: 'Coding Education',
            job5: 'Yazılım Uzmanı',
            btnText5: 'İ. Technolojies',

            infoText6: 'Grammar / Paragraph Methods and Techniques',
            job6: 'Personal Development ',
            btnText6: 'P. Development',

            slogan9: "Explore ",
            slogan10: "Categories",
            slogan11: "Click on the categories and discover all courses",
            text: "Distance",
            text2: " Education",
            text3: "Lorem ipsum dolor sit amet consectetur. Turpis pharetra malesuada semper sed. Sed quam eu euismod eget risus et imperdiet nulla senectus. Egestas rhoncus imperdiet pellentesque quam vitae ultrices. Feugiat scelerisque duis varius quam sapien pretium egestas. Cras et morbi cursus in elit ut donec nibh eget. Leo tristique netus ante quis vitae. Aliquam ullamcorper a sed fermentum. Sagittis donec urna.",
            text4: "Read More",
            text5: "Recommended",
            text6: " Courses",
            text7: "Student ",
            text8: "Opinions",
            text9: "What do our students say about us?",
            refresh: "REFRESH",
            send: "SEND",
            text10: "In accordance with the personal data law, if you register in the system",
            text11: "Clarification text (you can read it by clicking here) and Explicit Consent declaration (you can read it by clicking here)",
            text12: "you agree that",

            text13: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            text14: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            text15: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            titleHome: "Home",

            f1: 'Teacher',
            f2: 'Student',
            f3: 'Video',
            f4: 'User',
            f5: 'Quick Links',
            f6: 'About Us',
            f7: 'Blog',
            f8: 'Corporate',
            f9: 'Education',
            f10: 'Contact',
            f11: 'Address',

            a1: "İnformation Technologies",
            a2: "Painting",
            a3: "Handicrafts",
            a4: "Religion and Values Education",
            a5: "Foreign Language",
            a6: " Sport",


            kurumsal: "Corporate",
            kurumsal1: "KUZEM - KOMEK Distance Education Center",
            kurumsal2: "From past to present, the most indispensable resource that a country has is human. Raising this resource in line with the needs of countries contributes to the realization of the goals on the road to civilization. With the idol of 'Konya Model Municipalism', we launched KOMEK Distance Education Center (KUZEM) in 2020 by using the benefits of the internet, which first entered our homes and even our pockets with the changing world perception.",
            kurumsal3: "Those who want to get online education are increasing. Education programs on digital platforms have become very popular today. KUZEM, which offers access from anywhere at any time, provides very rich and instructive opportunities in terms of content.",
            kurumsal4: "As the number of technological innovations and discoveries increases, students' chances of realizing their academic dreams and achieving success also increase. KOMEK Distance Education Center, which has been in our lives for a long time but has recently become more widespread, is defined as a planned education model that requires a unique, institutional and managerial structuring that explains teaching and design techniques in detail, communicates with different technologies, without being tied to time and space.",
            kurumsal5: "As a global destination for online learning, we connect people through knowledge.",
            kurumsal6: "Instructors from all over Turkey teach thousands of students at KUZEM.",
            kurumsal7: "1,500 training videos were made available to all trainees who are a one-time member of offline trainings at kuzem.org and unlimited service was provided. The trainings, which are carried out free of charge with a multilingual understanding in Turkish, Arabic and English, take place on the international platform and take part in global learning with the Konya Model.",
            kurumsal8: "There is no application process for kuzem.org, you can just register and follow video lessons on any subject you want to learn. As KUZEM, training videos in the fields of Information Technologies, Handicrafts, Painting, Religion and Values Education, Sports, Foreign Languages, Personal Development are waiting for their trainees at kuzem.org. After becoming a member of the website, students can continue their education offline from anywhere at any time. In addition, with KUZEM, which has a registration period three times a year, online trainings can be taken on certain days and hours. As a result of the completion of the trainings, trainees can access their certificates of completion via e-Devlet.",
            kurumsal9: "Message from the Mayor",
            kurumsal10: "Konya is an ancient city with a unique accumulation of history, culture, natural beauties and people.",
            kurumsal11: "As Konya Metropolitan Municipality, our top priority is to make the best use of this accumulation we have and to move our city ahead of the age in social, economic and cultural terms.",
            kurumsal12: "In this direction, our Vocational Training Courses (KOMEK) have a very important place in order to adapt to changing conditions in the fastest way, to contribute to the developing economy, social values and employment of our citizens.",
            kurumsal13: "In our Vocational Training Courses, we have served more than 1 million of our citizens in 73 KOMEK/ASEM service buildings, 35 sports centers and 33 game halls in 544 branches ranging from technical trainings to art trainings, from foreign languages to music trainings, from information technologies to personal development trainings. We increased the annual trainee capacity of our KOMEKs, which enroll for three terms a year, to 150 thousand.",
            kurumsal14: "Our trainees who receive training in our courses produce in KOMEK workshops, market their products to the world through KOMEK Cooperative and also engage in artistic activities.",
            kurumsal15: "At KOMEK, we also created a toy brand called ANATOYA, a bag brand called ZEYBE and a fleece jacket-vest brand called ZENOBYA.",
            kurumsal16: "In our KOMEKs, we also continue to offer courses such as Quran, Cooking and Cake Making, Clothing and Furnishing, Turkish Sign Language for the hearing impaired.",
            kurumsal17: "In our Vocational Courses, we provide trainings not only for adults but also for our students and special children under the name of Young KOMEK.",
            kurumsal18: "In Young KOMEK, where 150 thousand students have participated so far, we brought together 60 thousand students from all over Turkey with distance education only in 2021.",
            kurumsal19: "With KOMEK UZEM, which fulfills a great need especially during the pandemic period, we continued our courses online so that our citizens can improve themselves in various subjects and gain new competencies in personal development areas when they cannot leave their homes.",
            kurumsal20: "Our distance education programs, which were appreciated all over Turkey, were carried out by creating a real classroom environment with an interactive program with mutual interaction.",
            kurumsal21: "KOMEK UZEM, where our trainees from many different cities of our country and from various countries of the world such as France, Germany, Iraq and China are currently registered, continues to serve in dozens of different branches without time and space limitations.",
            kurumsal22: "I wish success to all our trainees who continue their education in our Vocational Courses. With our Konya Model Municipalism approach; we continue to work and produce for Konya and our country.",
            kurumsal23: "Konya Metropolitan Mayor",



            ekitap0: "E-Book",
            ekitap: "Religion and Values",
            ekitap2: "Basic Religious Information",
            ekitap3: "Handicrafts ",
            ekitap4: "Origami Art",
            ekitap5: "Foreign Language",
            ekitap6: "Introduction to Arabic",
            ekitap7: "Charcoal Drawings ",
            ekitap8: "Charcoal Drawing",
            ekitap9: "Information Technologies",
            ekitap10: "Algorithm Basics",
            ekitap11: "Fitness at Home",
            ekitap12: "Fitness at Home",





            egitimler0: "Education",
            egitimler: "All",
            egitimler2: "Information Technologies",
            egitimler3: " Handicrafts ",
            egitimler4: "Painting",
            egitimler5: "Religion and Values Courses",
            egitimler6: "Sport",
            egitimler7: "Foreign Language",
            egitimler8: "Personal Development ",




            
            guncel:"News",
            guncel2:"KOMEK AT WORK",
            guncel3:"''Everything Starts with You Education Program'' In order for all Education Branch Directorate employees to renew themselves, to be informed about changing and developing communication methods and to be more efficient in business life, Everything starts with you. A training plan was made based on the motto Everything starts with you. Thanks to the training programs, it is aimed to make communication within the institution and between the institution and citizens more efficient...",

            btnxx:"Read More",


            blog0:"Blog",
            blog2:"What is Distance Education?",
            blog3:"Distance Education: Tomorrow's Education Model While traditional education is characterized by physical classrooms, blackboards and campuses, the...",
            blog4:'Frequently Asked Questions',
            blog5:'What is distance education? - Distance education is an educational method that gives students access to courses via the internet.',
            blog6:'What is Seo?',
            blog7:'SEO, or Search Engine Optimization, is a way to rank your website higher in search engines...',



            
            iletisim:"Contact",
            iletisim2:"Write Us",
            iletisim3:"Your Name ",
            iletisim4:"Your e-mail address",
            iletisim5:"Subject",
            iletisim6:"Your message",
            iletisim7:"Security Verification",
            iletisim8:"KUZEM - Directorate of Education",
            iletisim9:"Çimenlik Mahallesi, 8, Mevlana Kültür Mrk.Karatay/KONYA/42030",
            iletisim10:"Telephone ",
            iletisim11:"E-mail address",
            iletisim12:"Write Us",




            excel:"Excell Tutorial",
            excel2:"-Interface Review",
            excel3:"Your Progress",
            excel4:"Home | Education |",
            excel5:" Excell Education ",
            excel6:'Introduction - What is Excell?',
            excel7:'Interface Review',
            excel8:'Rows and Columns' ,
            excel9:'Data Input',
            excel10:'Formulas',
            excel11:'Düşeyara',
            excel12:'Add-Subtract',
            excel13:'Format',
            excel14:"Excell Tutorial - Interface Review",
            excel15:"Education Explained ",
            excel16:" Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisisconsectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit." ,
            excel17:" Certificate",
            excel18:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Quisipsum suspendisse ultrices gravida. Risus commodo viverra maecenasaccumsan lacus vel facilisis consectetur adipiscing elit. ",
            excel19:" Who is this training for? ",
            excel20:" Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Quis ipsum suspendisse ultrices gravida. Risus commodoviverra maecenas accumsan lacus vel facilisis consecteturadipiscing elit.",
            excel21:" Bu eğitimde neler öğreneceksiniz? ",
            excel22:" Lorem ipsum dolor sit amet. ",
            excel23:" Lorem ipsum dolor sit amet.",
            excel24:" SLorem ipsum dolor sit amet. ",
            excel25:" Lorem ipsum dolor sit amet. ",
            excel26:" Lorem ipsum dolor sit amet.",
            excel27:" Category.",
            excel28:" İ. Technologies",
            excel29:" Teacher ",
            excel30:" Adem Yılmaz",
            excel31:" Point", 
            excel32:" Duration", 
            excel33:" 30 Hours ", 
            excel34:" Number of Courses ", 
            excel35:" Tests", 
            excel36:" Certificate", 
            excel37:" Yes", 
            excel38:" Language ", 
            excel39:" Türkçe", 
            excel40:" Rate Education ", 



            gdetay0:"News / Detail",
            gdetay:"Detail",
            gdetay2:"Everything Starts with You Education Program 'Everything starts with you' for all Training Branch Directorate employees to renew themselves, to be informed about changing and developing communication methods and to be more productive in business life. An education plan was made based on the motto. Thanks to the training programs, it is aimed to make communication within the institution and between the institution and the citizen more efficient. The trainings were planned both during and outside working hours and all employees were ensured to participate. Training has been provided in the branches mentioned below by instructors who are experts in their fields and have field experience. - Internal Communication in Business Life - Ethics and Etiquette in Business Life - Effective Communication Methods on the Phone - Verbal Communication and Body Language - Personality Analysis Training Our instructors working in KOMEK courses were given Needle Felting Techniques and Patchwork Training. At the end of the training, all our personnel were given an e-Government approved participation certificate. Following the completion of the distance education training, a two-day face-to-face training program was held for all staff at the Selçuklu Congress Center. A total of 335 personnel were trained.",




            



            bdetay:'Blog / What is Distance Education?',
            bdetay1:" Distance Education: Tomorrow's Education Model",
            bdetay2:'WHAT IS DISTANCE EDUCATION? ',
            bdetay3:'While traditional education is associated with physical classrooms, blackboards and campuses, with the rapid development of technology, the concept of distance education is experiencing a significant rise. Distance education represents an educational model that offers students the opportunity to receive education regardless of their geographical location. Here is a review of what this new education model is, its benefits, challenges and why it could be the education model of the future.',
            bdetay4:'What is Distance Education? ',
            bdetay5:'Distance education is an educational model that gives students access to courses via the internet. This model offers students the freedom to follow courses wherever and whenever they want. This gives students the opportunity to align work, family and other personal commitments with studying.',
            bdetay6:'What are the Benefits?',
            bdetay7:'One of the key advantages of distance learning is that it offers flexibility. Students do not have to stick to traditional classroom hours, which is extremely important for working adults and students living in remote areas. Furthermore, distance learning gives students access to the knowledge of expert teachers from around the world. This offers students a diversity and experience rarely found in traditional education. In addition, online education is often more cost-effective because students can save on transportation and accommodation costs.',
            bdetay8:'What are the Challenges? ',
            bdetay9:'However, the distance learning model also has its challenges. Students may need to be disciplined and capable of working on their own. The lack of educational material and interaction can distract some students and make comprehension difficult. In addition, technological issues may cause difficulties for some students in online courses.',
            bdetay10:'Why it could be the Education Model of the Future? ',
            bdetay11:'Distance learning could be the educational model of the future, especially as access to technology increases and societies become more connected. Offering students a worldwide learning experience allows students from different cultures and regions to come together. Furthermore, distance learning can play an important role as a sustainable model of education because it reduces the need for physical venues, thus making it accessible to more students. ',
            bdetay12:'As a Result',
            bdetay13:'Distance education is rapidly becoming the education model of the future. Flexibility, access and cost advantages add to its appeal. However, it may not be suitable for every student and students may need to maintain their ability to stay disciplined and motivated. Distance learning and traditional education combine the best of both worlds, giving students more choice and the opportunity to choose what suits their learning style and goals. ',

        }
    },

    ar: {
        translation: {
            welcome: 'منزل',
            Home: 'منزل',
            ActiveLanguage: 'لغة نشطة',
            Kurumsal: "شركة كبرى",
            ebook: "كتاب إليكتروني",
            education: "التدريبات",
            news: "أخبار",
            blog: "مدونة",
            contact: "تواصل",
            login: "مدخل",
            signup: "سجل",
            btn: "لوحة الطلاب",
            slogan: "التعليم في أي وقت وفي أي مكان",
            slogan2: "أضف إلى معرفتك من خلال التدريبات غير المتصلة بالإنترنت",
            btn2: "التدريبات عبر الإنترنت",
            btn3: "دروس الفيديو ",
            input: "اتصلي",
            slogan5: "الاكثر شهرة",
            slogan6: "دوراتنا",
            slogan7: "قم بتحسين مهاراتك من أي مكان من خلال سلسلتنا التدريبية عبر الإنترنت.",
            slogan8: "استكشاف الدورات",



            infoText: 'تدريب متقدم على الإكسل',
            job: 'مدرس كمبيوتر',
            btnText: 'ب. التقنيات',

            infoText2: 'تخريمية الورق',
            job2: 'مدرس الفن',
            btnText2: 'مدرس الفن',

            infoText3: 'التدريب القلب',
            job3: 'مدرب رياضي',
            btnText3: 'رياضة',

            infoText4: 'سور - تدريب على المعاني',
            job4: 'مدرس الثقافة الدينية',
            btnText4: 'الدين والقيم',

            infoText5: 'التدريب على الترميز',
            job5: 'متخصص في البرمجيات',
            btnText5: 'ب. التقنيات',

            infoText6: 'قواعد النحو / طريقة الفقرة والتقنيات',
            job6: 'خبير تنمية الشخصية',
            btnText6: 'تطوير الذات',


            slogan9: " الفئات",
            slogan10: "استكشاف",
            slogan11: "انقر على الفئات واكتشف جميع الدورات",
            text: "بعيد",
            text2: "التعليم",
            text3: "لوريم إيبسوم دولور الجلوس أميت،  لكن الجعبة الوقحة متوقعة دائمًا. لكن ما يحتاجه  هو الضحك وليس الشيخوخة. أنت بحاجة إلى الكثير من المال للأطفال أكثر من الحياة. دع شوكولاتة المنزل تكون أكثر تنوعًا مما يتطلبه السعر الحكيم. غدا ومسار المرض في الهواء حتى مستوى الحاجة. ليو ينعي قبل أي شخص آخر في الحياة. بعض ولكن تخمر. السهام حتى الوعاء.",
            text4: "اقرأ أكثر",
            text5: "مقترح",
            text6: "دوراتنا",
            text7: "طالب",
            text8: "أفكار",
            text9: "ماذا يقول طلابنا عنا؟",
            refresh: "تحديث",
            send: "الإرسال",
            text10: "وفقًا لقانون البيانات الشخصية، إذا قمت بالتسجيل في النظام",
            text11: "نص توضيحي (يمكنك قراءته بالنقر هنا) وإعلان الموافقة الصريحة (يمكنك قراءته بالنقر هنا)",
            text12: "أنت توافق",

            text13: "ماعدا أن هناك من لا يكترثون لأمرنا ولا يكترثون لأمرنا ولا يكترثون لأمرنا ولا يكترثون لأمرنا ولا يكترثون لأمرنا.",
            text14: "ماعدا أن هناك من لا يكترثون لأمرنا ولا يكترثون لأمرنا ولا يكترثون لأمرنا ولا يكترثون لأمرنا ولا يكترثون لأمرنا.",
            text15: "ماعدا أن هناك من لا يكترثون لأمرنا ولا يكترثون لأمرنا ولا يكترثون لأمرنا ولا يكترثون لأمرنا ولا يكترثون لأمرنا.",
            titleHome: "  الصفحة الرئيسية",

            f1: 'المدربون',
            f2: 'طالب',
            f3: 'فيديو',
            f4: 'المستخدم',

            f5: 'روابط سريعة',
            f6: 'نبذة عنا',
            f7: 'المدونة',
            f8: 'الشركات',
            f9: 'الدورات التدريبية',
            f10: 'اتصل بنا',
            f11: 'العنوان',


            a1: "تكنولوجيا المعلومات",
            a2: "الطلاء",
            a3: "معظم الفنون",
            a4: "تعليم الدين والقيم",
            a5: "اللغات الأجنبية",
            a6: " الرياضة",



            kurumsal: "الشركات",
            kurumsal1: "جامعة الملك عبدالعزيز - مركز كومك للتعليم عن بعد",
            kurumsal2: "من الماضي إلى الحاضر، فإن أكثر الموارد التي لا غنى عنها في أي بلد هي الموارد البشرية. إن رفع مستوى هذا المورد بما يتماشى مع احتياجات الدول يساهم في تحقيق الأهداف على طريق الحضارة. ومن خلال استخدام مزايا الإنترنت التي دخلت بيوتنا وحتى جيوبنا لأول مرة مع تغير النظرة العالمية المتغيرة إلى العالم، أطلقنا مركز كوميك للتعليم عن بعد في عام 2020 باستخدام مزايا الإنترنت.",
            kurumsal3: "يتزايد عدد الراغبين في الحصول على التعليم عبر الإنترنت. أصبحت البرامج التعليمية على المنصات الرقمية تحظى بشعبية كبيرة اليوم. توفر  التي توفر إمكانية الوصول إليها من أي مكان وفي أي وقت، فرصًا غنية جدًا ومفيدة من حيث المحتوى.",
            kurumsal4: "مع ازدياد عدد الابتكارات والاكتشافات التكنولوجية، تزداد أيضاً فرص الطلاب في تحقيق أحلامهم الأكاديمية وتحقيق النجاح. يُعرف مركز كوميك للتعليم عن بُعد، الذي كان موجوداً في حياتنا منذ فترة طويلة ولكنه أصبح أكثر انتشاراً في الآونة الأخيرة، بأنه نموذج تعليمي مخطط له يتطلب هيكلة مؤسسية وإدارية فريدة من نوعها تشرح تقنيات التعليم والتصميم بالتفصيل، وتوفر التواصل مع التقنيات المختلفة، دون التقيد بالزمان والمكان.",
            kurumsal5: "وباعتبارنا وجهة عالمية للتعلُّم عبر الإنترنت، فإننا نربط الناس من خلال المعرفة.",
            kurumsal6: "يقدم المعلمون من جميع أنحاء تركيا التعليم لآلاف الطلاب في جامعة كوزم.",
            kurumsal7: "تم توفير 1,500 مقطع فيديو تدريبي لجميع المتدربين الذين يشتركون لمرة واحدة في التدريبات غير المتصلة بالإنترنت على موقع kuzem.org، كما تم توفير خدمة غير محدودة. يتم تنفيذ التدريبات مجاناً بلغات متعددة باللغات التركية والعربية والإنجليزية، ويتم التدريب على المنصة الدولية ويتم تنفيذها على المنصة الدولية في إطار التعلم العالمي بنموذج كونيا.",
            kurumsal8: "لا توجد عملية تقديم في kuzem.org، يمكنك فقط التسجيل ومتابعة دروس الفيديو في أي موضوع تريد تعلمه. مثل KUZEM، تنتظر مقاطع الفيديو التدريبية في مجالات تكنولوجيا المعلومات والحرف اليدوية والرسم والتربية الدينية والقيم والرياضة واللغات الأجنبية والتنمية الشخصية المتدربين على kuzem.org. بعد أن يصبح الطالب عضوًا في الموقع، يمكن للطلاب مواصلة تعليمهم دون اتصال بالإنترنت من أي مكان وفي أي وقت، بالإضافة إلى ذلك، يمكن الحصول على دورات تدريبية عبر الإنترنت في أيام وساعات معينة مع KUZEM، والتي لها فترة تسجيل ثلاث مرات في السنة. وبعد الانتهاء من التدريبات، يمكن للمتدربين الحصول على شهادات إتمام التدريب عبر الحكومة الإلكترونية.",
            kurumsal9: "رسالة من الرئيس",
            kurumsal10: "قونية هي مدينة قديمة ذات تراكم فريد من التاريخ والثقافة والجمال الطبيعي والناس.",
            kurumsal11: "وبصفتنا بلدية قونية، فإن أولويتنا الكبرى هي الاستفادة القصوى من هذا التراكم الذي نمتلكه كبلدية قونية الكبرى وأن نرتقي بمدينتنا إلى مصاف المدن المتقدمة في المجالات الاجتماعية والاقتصادية والثقافية.",
            kurumsal12: "في هذا الاتجاه، تحتل دورات التدريب المهني (KOMEK) مكانة مهمة للغاية من أجل التكيف مع الظروف المتغيرة بأسرع الطرق، للمساهمة في تطوير الاقتصاد والقيم الاجتماعية وتوظيف مواطنينا.",
            kurumsal13: "في دورات التدريب المهني لدينا، قمنا بخدمة أكثر من مليون مواطن في 73 مبنى خدمات كوميك/ASEM، و35 مركزاً رياضياً و33 صالة ألعاب في 544 فرعاً تتراوح بين التدريب التقني والتدريب الفني، ومن اللغات الأجنبية إلى التدريب الموسيقي، ومن تقنيات المعلومات إلى التدريب على التنمية الشخصية. لقد قمنا بزيادة الطاقة الاستيعابية السنوية للمتدربين في كوميك التي يتم الالتحاق بها على ثلاث فترات في السنة إلى 150 ألف متدرب.",
            kurumsal14: "يقوم متدربونا الذين يتلقون التدريب في دوراتنا بالإنتاج في ورش عمل كومك، ويقومون بتسويق منتجاتهم للعالم من خلال تعاونية كومك ويشاركون أيضاً في الأنشطة الفنية.",
            kurumsal15: "في OMEK، أنشأنا أيضًا علامة تجارية للألعاب تسمى ANATOYA، وعلامة تجارية للحقائب تسمى ZEYBE، وعلامة تجارية للسترات الصوفية والسترات الصوفية تسمى ZENOBYA.",
            kurumsal16: "كما نواصل في كوميكس دورات القرآن الكريم، والطبخ وصناعة الكعك، والملابس والتأثيث، ولغة الإشارة التركية لضعاف السمع.",
            kurumsal17: "في دوراتنا المهنية، نقدم دورات تدريبية ليس فقط للبالغين ولكن أيضًا لطلابنا وأطفالنا المميزين تحت اسم كومك الصغير.",
            kurumsal18: "في كوميك الصغير، الذي شارك فيه 150 ألف طالب حتى الآن، جمعنا 60 ألف طالب من جميع أنحاء تركيا بالتعليم عن بُعد فقط في عام 2021.",
            kurumsal19: "من خلال KOMEK UZEM، الذي يلبي حاجة كبيرة خاصة خلال فترة الجائحة، واصلنا دوراتنا عبر الإنترنت حتى يتمكن مواطنونا من تحسين أنفسهم في مختلف المواد واكتساب كفاءات جديدة في مجالات التنمية الشخصية عندما لا يستطيعون مغادرة منازلهم.",
            kurumsal20: "تم تنفيذ برامجنا للتعليم عن بُعد، والتي حظيت بالتقدير في جميع أنحاء تركيا، من خلال خلق بيئة صفية حقيقية مع برنامج تفاعلي مع التفاعل المتبادل.",
            kurumsal21: "يواصل كومك أوزم، الذي يضم متدربينا من مختلف مدن بلادنا ومن مختلف دول العالم مثل فرنسا وألمانيا والعراق والصين، العمل في عشرات الفروع المختلفة دون قيود زمنية ومكانية.",
            kurumsal22: "أتمنى التوفيق والنجاح لجميع متدربينا الذين يواصلون تعليمهم في دوراتنا المهنية. من خلال نهجنا في بلدية قونية النموذجية؛ نواصل العمل والإنتاج من أجل قونية وبلدنا.",
            kurumsal23: "عمدة بلدية قونية الكبرى",

            ekitap0: "كتاب إليكتروني",
            ekitap: "الدين والقيم",
            ekitap2: "المعلومات الدينية الأساسية",
            ekitap3: "الحرف اليدوية",
            ekitap4: "فن الأوريغامي",
            ekitap5: "اللغات الأجنبية",
            ekitap6: " مقدمة في اللغة العربية",
            ekitap7: " رسومات بالفحم",
            ekitap8: "الرسم بالفحم",
            ekitap9: "تكنولوجيا المعلومات",
            ekitap10: "أساسيات الخوارزمية",
            ekitap11: "اللياقة البدنية المنزلية",
            ekitap12: " اللياقة البدنية المنزلية",





            egitimler0: "الدورات التدريبية",
            egitimler: "الكل",
            egitimler2: "تكنولوجيا المعلومات",
            egitimler3: " الحرف اليدوية",
            egitimler4: "الصورة.",
            egitimler5: "تعليم الدين والقيم",
            egitimler6: "الرياضة",
            egitimler7: "اللغات الأجنبية",
            egitimler8: "التنمية الشخصية ",



      
            guncel:"الأخبار",
            guncel2:"كومك في العمل",
            guncel3:"كل شيء يبدأ بك برنامج كل شيء يبدأ بك كل شيء يبدأ بك. من أجل أن يجدد جميع موظفي مديرية فرع التعليم أنفسهم، وأن يكونوا على دراية بأساليب التواصل المتغيرة والمتطورة وأن يكونوا أكثر كفاءة في الحياة العملية. تم التخطيط لبرنامج تدريبي قائم على شعارل شيء يبدأ بك. ويهدف البرنامج التدريبي إلى جعل التواصل داخل المؤسسة وبين المؤسسة والمواطنين أكثر كفاءة من خلال البرامج التدريبية...",

            btnxx:"قراءة المزيد",



            blog0:"المدونة",
            blog2:"ما هو التعليم عن بُعد؟",
            blog3:'التعليم عن بُعد: نموذج تعليم الغد بينما يتسم التعليم التقليدي بالفصول الدراسية المادية والسبورات السوداء والحرم الجامعي، فإن التطور السريع للتكنولوجيا...',
            blog4:'الأسئلة المتداولة',
            blog5:'ما هو التعليم عن بُعد؟ - التعليم عن بُعد هو برنامج تعليمي يوفر للطلاب إمكانية الوصول إلى الدورات عبر الإنترنت.',
            blog6:'ما هو سيو؟',
            blog7:'تحسين محركات البحث , تحسين محركات البحث، هي طريقة لترتيب موقعك الإلكتروني في محركات البحث...',




            
            iletisim:"اتصل بنا",
            iletisim2:"اكتب لنا ",
            iletisim3:"اسمك ",
            iletisim4:"عنوان بريدك الإلكتروني ",
            iletisim5:"الموضوع ",
            iletisim6:"رسالتكız ",
            iletisim7:"التحقق من الأمان ",
            iletisim8:"كوزم - إدارة فرع التعليم - مديرية فرع التعليم ",
            iletisim9:"Çimenlik Mahallesi, 8, Mevlana Kültür Mrk.Karatay/KONYA/42030",
            iletisim10:"الهاتف",
            iletisim11:"عنوان البريد الإلكتروني ",
            iletisim12:"اكتب لنا ",




            excel:"إكسيل للتدريب",
            excel2:"-مراجعة الواجهة",
            excel3:"تقدمك",
            excel4:"الرئيسية | التدريبات |",
            excel5:"إكسيل للتدريب",
            excel6:'مقدمة - ما هو إكسل؟',
            excel7:'مراجعة الواجهة',
            excel8:'الصفوف والأعمدة' ,
            excel9:'إدخال البيانات',
            excel10:'الصيغ',
            excel11:'دوشيارا',
            excel12:'إضافة-استبعاد',
            excel13:'تنسيق التنسيق',
            excel14:"برنامج إكسيل التعليمي - مراجعة الواجهة ",
            excel15:" شرح التعليم ",
            excel16:" Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisisconsectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit." ,
            excel17:" الشهادة ",
            excel18:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Quisipsum suspendisse ultrices gravida. Risus commodo viverra maecenasaccumsan lacus vel facilisis consectetur adipiscing elit. ",
            excel19:" لمن هذا التدريب؟ ",
            excel20:" Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Quis ipsum suspendisse ultrices gravida. Risus commodoviverra maecenas accumsan lacus vel facilisis consecteturadipiscing elit.",
            excel21:"ما الذي ستتعلمه في هذا التدريب؟",
            excel22:" Lorem ipsum dolor sit amet. ",
            excel23:" Lorem ipsum dolor sit amet.",
            excel24:" SLorem ipsum dolor sit amet. ",
            excel25:" Lorem ipsum dolor sit amet. ",
            excel26:" Lorem ipsum dolor sit amet.",   
            excel27:" الفئة.",
            excel28:" ب- التقنيات ",
            excel29:" المدرب ",
            excel30:" Adem Yılmaz",
            excel31:" النتيجة", 
            excel32:" المدة", 
            excel33:" 30  الساع", 
            excel34:"عدد الدورات", 
            excel35:"الاختبارات ", 
            excel36:" الشهادة", 
            excel37:"يوجد ", 
            excel38:" اللغة ", 
            excel39:" تركي", 
            excel40:" معدل التدريب ", 


            gdetay0: "الأخبار / التفاصيل",
            gdetay: "التفاصيل",
            gdetay2: "كل شيء يبدأ بك برنامج كل شيء يبدأ بك كل شيء يبدأ بك.'  من أجل أن يجدد جميع موظفي مديرية فرع التعليم أنفسهم، وأن يكونوا على دراية بأساليب التواصل المتغيرة والمتطورة وأن يكونوا أكثر كفاءة في الحياة العملية. تم التخطيط لبرنامج تدريبي قائم على شعارل شيء يبدأ بك. وبفضل البرامج التدريبية، يهدف البرنامج إلى جعل التواصل داخل المؤسسة وبين المؤسسة والمواطنين أكثر كفاءة. تم التخطيط للدورات التدريبية داخل وخارج ساعات العمل وتم ضمان مشاركة جميع الموظفين. وقد تم تقديم التدريبات في الفروع التالية من قبل مدربين خبراء في مجالاتهم ولديهم خبرة ميدانية. - التواصل الداخلي في الحياة العملية - قواعد الأخلاقيات والآداب في الحياة العملية - أساليب التواصل الفعال على الهاتف - التواصل اللفظي ولغة الجسد - التدريب على تحليل الشخصية تم إعطاء المدربين العاملين في دورات كومك تقنيات التلبيد بالإبر والتدريب على صناعة الكينكل. وفي نهاية التدريبات، حصل جميع موظفينا على شهادات مشاركة معتمدة من الحكومة الإلكترونية. بعد الانتهاء من التدريب على التعليم عن بُعد، عُقد برنامج تدريبي مباشر لمدة يومين لجميع الموظفين في مركز سلجوقلو للمؤتمرات. وتم تدريب ما مجموعه 335 موظفاً. " ,
      
      
      
      
      
            bdetay:'المدونة / ما هو التعليم عن بُعد؟',
            bdetay1:'التعليم عن بُعد: نموذج تعليم الغد ',
            bdetay2:'ما هو التعليم عن بُعد؟ ',
            bdetay3:'بينما يرتبط التعليم التقليدي بالفصول الدراسية الفعلية والسبورات والألواح السوداء والحرم الجامعي، يشهد مفهوم التعليم عن بُعد ارتفاعًا كبيرًا مع التطور السريع للتكنولوجيا. يمثل التعليم عن بُعد نموذجاً تعليمياً يتيح للطلاب فرصة تلقي التعليم بغض النظر عن موقعهم الجغرافي. فيما يلي استعراض لماهية هذا النموذج التعليمي الجديد وفوائده وتحدياته ولماذا يمكن أن يكون نموذج التعليم في المستقبل.',
            bdetay4:'ما هو التعليم عن بُعد؟ ',
            bdetay5:'التعليم عن بُعد هو نموذج تعليمي يوفر للطلاب إمكانية الوصول إلى الدورات التدريبية عبر الإنترنت. يوفر هذا النموذج للطلاب حرية متابعة الدورات التدريبية أينما كانوا ومتى أرادوا. وهذا يمنح الطلاب الفرصة للتوفيق بين العمل والأسرة والالتزامات الشخصية الأخرى والدراسة.',
            bdetay6:'ما هي الفوائد؟',
            bdetay7:'تتمثل إحدى المزايا الرئيسية للتعلم عن بُعد في أنه يوفر المرونة. حيث لا يتعين على الطلاب الالتزام بساعات الدراسة التقليدية، وهو أمر في غاية الأهمية بالنسبة للبالغين العاملين والطلاب الذين يعيشون في مناطق نائية. علاوة على ذلك، يتيح التعلم عن بُعد للطلاب إمكانية الوصول إلى معرفة المعلمين الخبراء من جميع أنحاء العالم. وهذا يوفر للطلاب تنوعاً وخبرة نادراً ما توجد في التعليم التقليدي. وبالإضافة إلى ذلك، غالباً ما يكون التعليم عن بُعد أكثر فائدة من حيث التكلفة، حيث يمكن للطلاب توفير تكاليف النقل والإقامة.',
            bdetay8:'ما هي التحديات؟ ',
            bdetay9:'ومع ذلك، فإن نموذج التعلم عن بعد ينطوي أيضاً على بعض التحديات. فقد يحتاج الطلاب إلى أن يكونوا منضبطين وقادرين على العمل بمفردهم. قد يؤدي نقص المواد التعليمية والتفاعلية إلى تشتيت انتباه بعض الطلاب والتسبب في صعوبات في الفهم. كما أن المشاكل التكنولوجية قد تسبب صعوبات لبعض الطلاب في المقررات الدراسية عبر الإنترنت.',
            bdetay10:' لماذا يمكن أن يكون نموذج التعليم في المستقبل؟',
            bdetay11:' يمكن أن يكون التعلم عن بُعد هو النموذج التعليمي للمستقبل، خاصة مع زيادة فرص الوصول إلى التكنولوجيا وزيادة ترابط المجتمعات. إن توفير تجربة تعليمية عالمية للطلاب يتيح للطلاب من ثقافات ومناطق مختلفة الالتقاء معاً. علاوة على ذلك، يمكن للتعلم عن بُعد أن يلعب دوراً مهماً كنموذج تعليمي مستدام لأنه يقلل من الحاجة إلى الأماكن المادية وبالتالي يوفر إمكانية الوصول إلى عدد أكبر من الطلاب.',
            bdetay12:'الخاتمة ',
            bdetay13:'يتحول التعليم عن بُعد بسرعة إلى نموذج التعليم في المستقبل. وتزيد المرونة وإمكانية الوصول ومزايا التكلفة من جاذبية هذا النموذج. ومع ذلك، قد لا يكون مناسباً لكل طالب، وقد يحتاج الطلاب إلى الحفاظ على قدرتهم على الانضباط والتحفيز. يجمع التعليم عن بُعد والتعليم التقليدي بين أفضل ما في العالمين، مما يمنح الطلاب المزيد من الخيارات وفرصة اختيار ما يناسب أسلوبهم وأهدافهم التعليمية. ',

      
      
      
        }
    }




}

i18n
    .use(initReactI18next)
    .init({
        lng: 'tr',
        resources
    })

export default i18n; 