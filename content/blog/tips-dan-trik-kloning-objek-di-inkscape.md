---
draft: false
date: 2020-03-09T10:41:38+07:00
title: "Tips dan Trik Kloning di Inkscape"
description : "Membahas teknik kloning yang mudah dipahami. Mulai dari teknik kloning dasar, kloning simetris, dan kloning memutar untuk mandala."
image: "images/blog/tips-dan-trik-kloning-objek-di-inkscape.png"
type: "featured" # featured/regular
categories:
- inkscape
- kloning
---

Sebenarnya teknik kloning ini sudah klasik pembahasannya, namun jarang digunakan oleh pengguna Inkscape kebanyakan. Padahal jika dicermati lebih lanjut tekning kloning ini dapat dijadikan halftone, mandala, background, seamless pattern, dan mockup atau template. Mockup ini bisa berupa maskot, kartu nama, kartu identitas, flyer, mug, kover buku, pigora, dan segala macam produk untuk branding.

Semoga dengan panduan ini, pembaca memahami kembali teknik kloning dari dasar hingga lanjutan.

#### Perbedaan Kloning dan Duplikasi

Kloning (clone) merupakan penyalinan/penggandaan objek atau tapak (path) yang masih terhubung. Artinya, jika ada objek yang disalin maka sub-objek akan mengikuti bentuk, warna, dan gaya oleh induk objek. Berbeda dengan duplikasi. Duplikasi merupakan menggandakan objek yang tidak terhubung oleh induk objek asal. Sehingga duplikasi tidak mempengaruhi perubahan pada induk objek.

Contoh duplikasi pada tapak yang sederhana. Objek A diduplikasi menjadi objek B. Ketika objek A dirubah warnanya, maka Objek B tetap seperti semula.

{{< image src="images/blog/sifat-duplikasi.png" alt="Sifat Duplikasi" >}}

Sedangkan jika menggunakan kloning, objek A dikloning menjadi objek B. Kemudian objek A diganti warnanya, maka objek B akan mengikuti warna objek A.

{{< image src="images/blog/sifat-kloning.png" alt="Sifat Kloning" >}}

Jadi, objek A yang merupakan induk objek menjadi pusat kloning dari objek B. Visualisasinya seperti gambar dibawah ini.

{{< image src="images/blog/visual-kloning.png" alt="Visual Kloning" >}}

Ciri khas utama dari Sub-Objek adalah tidak bisa dirubah nodalnya. Ini terlihat ketika memilih edit nodal  <kbd><kbd>n</kbd></kbd>, maka nodal yang kelihatan adalah nodal induk objek saja.

{{< image src="images/blog/sifat-sub-objek.png" alt="Sifat Sub Objek" >}}

Jadi, ketika menggunakan kloning ini akan merubah dari warna isi (fill), warna sapuan (stroke), ketebalan sapuan, bentuk tapak, dan ukuran.

#### Pintasan Kloning

Pintasan duplikasi yaitu menggunakan <kbd><kbd>Ctrl</kbd>+<kbd>d</kbd></kbd>. Sedangkan pintasan Kloning menggunakan <kbd><kbd>Alt</kbd>+<kbd>d</kbd></kbd>. Perbedaanya di <kbd><kbd>Alt</kbd></kbd> saja. Yaa.. mudah dihafal bukan. Ingat kloning, Ingat <kbd><kbd>Alt</kbd>+<kbd>d</kbd></kbd> :)

{{< image src="images/blog/pintasan-kloning.png" alt="Pintasan Kloning Inkscape" >}}

Nah, kalau misalnya setelah kloning, yaitu sub-objek akan dijadikan objek terpisah tanpa mengikuti gaya induk objek sebelumnnya. Bagaimana? Mudah, cukup tekan <kbd><kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>d</kbd></kbd>. Otomatis sub-objek akan terputus dari induk objeknya dan menjadi objek biasa yang dapat menjadi induk objek lagi.

#### Kapan menggunakan Kloning?

Jawabannya sederhana: Jika membutuhkan objek yang **banyak** dalam **bentuk yang sama** gunakanlah kloning. Jangan diduplikasi.

Beberapa kegiatan berikut yang bisa dilakukan dengan kloning, misalnya:

* Ketika mendesain banyak kartu nama dengan gambar latar (background) yang sama, maka background tadi menggunakan kloning. Selain kartu nama bisa juga untuk gambar latar flash card dan kartu permainan.

* Mendesain karakter sprite yang sama dengan jumlah yang banyak. karakter ini memiliki bentuk yang sama, boleh menggunakan kloning. Kemudian bentuk lainnya seperti tangan, kaki, dan aksesoris lainnya menggunakan tapak bezier biasa.

* Mendesain karakter maskot. caranya hampir sama dengan karakter sprite tadi. Gambar badan boleh di kloning, sisanya objek dan tapak biasa.

* Menggambar tanaman, dedaunan, rumput, dan bunga dalam jumlah yang banyak. Objek yang duplikat bisa menggunakan kloning. Biasanya sering digunakan untuk floral seamless pattern.

* Menggambar bintang juga menggunakan kloning dengan teknik menyemprot (spray).

* Template dan mockup juga bisa menggunakan kloning.

#### Galat Umum

Sebenarnya tidak ada kegalatan (error). Hanya saja pengguna awam masih belum tahu. Misalnya:

* Sub-objek tidak bisa dilakukan proses boolean. Seperti disatukan, dibedakan, eksklusi, interseksi, divisi, potong tapak dan sebagainya. Tidak bisa dilakukannya proses tersebut, kecuali sudah diputus hubungan antara kloning dengan induknya. Cara memutuskannya yaitu dengan menekan <kbd><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>d</kbd></kbd> tadi.

#### Apa saja yang bisa di kloning?

Semua objek dan tapak bisa di kloning. Seperti:

1. Lingkaran
2. Persegi
3. Poligon dan Bintang
4. Teks
5. Tapak Bezier (path)
6. Sapuan (stroke)
7. Objek dan tapak yang digabungkan (group)
8. Sub-objek (hasil kloning), yang bisa dikloningkan lagi.

Bahkan semua objek yang sudah diset klip, set mask, blur, dan objek yang tak bewarna (0 fill 0 stroke) pun bisa di kloning.

#### Pilih dialog lapis (layer) atau Objek?

Bagian ini hanyalah sebagai pilihan saja. Sebagai manajemen objek disarankan menggunakan dialog objek dari pada menggunakan manajemen lapis. Menunya di **Object > Objects**. Alasan memilih dialog objek adalah:

* Dialog objek lebih detail menampilkan label setiap objek. Baik objek, path, clip, teks, persegi, lingkaran, bintang & poligon, dan sebagainya.

* Dialog objek dapat menyeleksi objek yang transparan. Artinya bisa megklik objek dengan isi 0% (fill) dan sapuan 0% (stroke).

* Menjadikan grup lebih rapi. Misalnya, Jika ada objek di grup selama 3x tanpa sengaja maka di dialog objek akan tahu seberapa banyak objek tersebut yang di grup.

Jadi dengan manajemen objek akan mempermudah menyeleksi objek-objek termasuk objek kloning. Jika pakai lapisan (layer) saya rasa fungsinya bukan seperti diatas.

#### Kloning Semprot (Spray)

{{< image src="images/blog/bintang-awal.png" alt="Kloning Bintang Inkscape" >}}

Contoh sederhana spray ini ketika membuat bintang-bintang. Konsepnya sama, yaitu buat dahulu objek induknya lalu di kloning. Membuat bjek bintang bisa dengan menekan <kbd><kbd>*</kbd></kbd>.

Buatlah objek bintang, pilih objeknya kemudian tekan tekan <kbd><kbd>a</kbd></kbd> untuk kloning semprot/spray. Agar lebih variatif gunakan parameter bintang seperti ini: lebar=50, jumlah=20, rotasi=100, skala=60.

{{< image src="images/blog/bintang-kloning.png" alt="Kloning Bintang Inkscape" >}}

Setiap objek yang di spray merupakan sub-objek kloning. Untuk melepaskan sub-kloning menggunakan <kbd><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>d</kbd></kbd>.

#### Kloning Cermin

Dari daftar ketujuh objek yang dapat dikloningkan yaitu "Objek dan tapak yang digrup". Objek kloning ini jarang diketahui oleh pengguna inkscape pemula. Jadi setiap grup yang didalamnya terdapat objek dan tapak, tentunya bisa dikloningkan. Jadi, konsepnya seperti itu.

Pada panduan ini menggunakan ukuran kanvas 4000px:4000px. Lalu cara untuk membuat kloning cermin adalah sebagai berikut:

* Pertama, buatlah persegi <kbd><kbd>r</kbd></kbd> setengah kanvas. Persegi ini digunakan untuk area satu sisi. Taruh persegi tersebut di sebelah kanan misalnya. Ukurannya 2000px:4000px, gunakan pengancingan (snapping) untuk melekatkan di pojok kanvas. Sebagai opsional, berilah warna putih 100% pada persegi tersebut.

{{< image src="images/blog/cermin-kanan.png" alt="Kloning Cermin Inkscape" >}}

* Kemudian pilih persegi lalu tekan <kbd><kbd>Ctrl</kbd>+<kbd>g</kbd></kbd> untuk menggabungkan, tekannya satu kali saja. Dalam hal ini persegi tersebut tidak ada objek lain yang digabungkan, sehingga untuk melihat suatu objek telah digrup atau tidaknya silakan lihat di dialog **objek**. Adapun objek yang digrup pasti berawalan **g**xx. Contohnya seperti ini.

{{< image src="images/blog/cermin-group.png" alt="Melihat objek grup pada dialog objek" >}}

* Objek induk berada di kanan, yaitu persegi tadi. Lalu untuk mengkloningnya tekan <kbd><kbd>Alt</kbd>+<kbd>d</kbd></kbd> satu kali. kemudian tekan **h** satu kali untuk mencerminkan secara horizontal. Setelah di cerminkan taruhlah sub-objek (persegi baru) dibagian kiri. Sub-objek ini hanya kloning dari objek induk yang kanan, otomatis setiap perubahan di objek induk akan di ikuti oleh sub-objek lainnya. Biasanya sub-objek klon ini di dialog objek berawalan nama **use**xx. Agar lebih mudah, berilah nama grup kanan dan kiri seperti gambar ini.

{{< image src="images/blog/cermin-kiri.png" alt="Melihat objek grup kloning pada dialog objek" >}}

* Kemudian masuk dalam grup objek induk (persegi kanan) dengan cara mengklik dua kali, sehingga masuk kedalam grup kanan. Anda juga bisa melihat di statusbar bawah atau di dialog objek. Ketika sudah masuk di grup induk objek, maka perubahan akan diikuti oleh sub-objek.

* Mulailah menggambar sesuatu dari bezier. Dan pastikan semua objek yang dibuat ada didalam grup induk objek.

{{< image src="images/blog/cermin-jadi.png" alt="Melihat objek grup kloning pada dialog objek" >}}

Mudah bukan. Jika Anda paham dengan dasar kloning ini maka bisa di kembangkan lagi menjadi kloning memutar, seperti dibawah ini.

#### Kloning Memutar (Mandala)

Agar lebih mudah menerapkan teknik kloning memutar yaitu digunakan untuk membuat mandala. Panduan tetap memakai ukuran kanvas 4000px:4000px yang digunakan untuk kloning cermin sebelumnnya. Untuk membuat mandala, maka dasar areanya bukan persegi, tetapi lingkaran. Kita awali membuat mandala yang paling mudah dahulu, yaitu mandala 1/4. Jadi, gambaran untuk membuat mandala 1/4 yaitu seperti berikut ini.

{{< image src="images/blog/mandala-kloning-konsep.png" alt="Rancangan mandala 1/4" >}}

* Area 1: Buatlah objek induk dengan lingkaran <kbd><kbd>e</kbd></kbd>. Atur dengan nilai awal 0, dan akhiran 90 derajat. Kemudian tekan  <kbd><kbd>Ctrl</kbd>+<kbd>g</kbd></kbd> untuk di grup. yang seperti gambar dibawah ini.

{{< image src="images/blog/mandala-1.png" alt="Area 1" >}}

* Area 2: Kloning induk objek (area 1) dengan <kbd><kbd>Alt</kbd>+<kbd>d</kbd></kbd>. Kemudian cerminkan secara horizontal dengan <kbd><kbd>h</kbd></kbd>. Taruh di samping kiri.

{{< image src="images/blog/mandala-2.png" alt="Area 2" >}}

* Area 3: Kloning induk ojek (area 1) dengan <kbd><kbd>Alt</kbd>+<kbd>d</kbd></kbd>. Kemudian cerminkan dengan horizontal dengan <kbd><kbd>h</kbd></kbd>, lalu cerminkan lagi secara vertikal dengan <kbd><kbd>v</kbd></kbd>. Taruh diatas area 2.

{{< image src="images/blog/mandala-3.png" alt="Area 3" >}}

* Area 4: Kloning induk ojek (area 1) dengan <kbd><kbd>Alt</kbd>+<kbd>d</kbd></kbd>. Kemudian cerminkan dengan horizontal dengan <kbd><kbd>v</kbd></kbd>. Lalu taruh diatas area 1.

{{< image src="images/blog/mandala-4.png" alt="Area 4" >}}

* Untuk memudahkan penamaan, berilah nama label di dialog objek. Contohnya seperti dibawah ini.

{{< image src="images/blog/mandala-nama.png" alt="Label kloning mandala 1/4 dengan inkscape" >}}

* Setelah selesai membuat mandala, simpan dengan nama "template-mandala-1-4.svg" sebagai opsional yang nantinya bisa digunakan kembali.

* klik area 1 lalu klik dua kali untuk masuk didalam grup. Kemudian Anda bisa menggambar dan memasukkan objek didalamnya.

{{< image src="images/blog/mandala-objek.png" alt="Contoh penerapan mandala 1/4" >}}

* Selain mandala 1/4 Anda juga bisa membuat mandala dengan ukuran 1/8 dan 1/12. Intinya harus memahami kloning dasar agar dapat membuat varian template mandala. Template mandala untuk inkscape ini juga bisa didapatkan secara gratis di menu [Template](/template).

{{< image src="images/blog/mandala-jenis.png" alt="Jenis penerapan mandala 1/4" >}}

* Tahap akhir. Jika digunakan untuk upload ke [Shutterstock] maka selain objek induk di lepaskan kloningnya. Dalam mandala 1/4 tadi untuk area 2,3, dan 4 yang perlu dilepaskan. Cara melepasan kloningnya yaitu dengan menyeleksi objek tersebut lalu tekan <kbd><kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>d</kbd></kbd>.

{{< image src="images/blog/mandala-objek-putus.png" alt="Lepas Kloning" >}}
{{< image src="images/blog/mandala-objek-lepas-grup.png" alt="Lepas grup" >}}
{{< image src="images/blog/mandala-objek-penyatuan.png" alt="Union" >}}

***

Jadi seperti itu penerapan teknik kloning, ada yang mudah dan ada yang tidak mudah. Tinggal disesuaikan saja dengan kebutuhannya.

Alhamdulillah :) Akhirnya sudah selesai hingga di ujung tulisan. Itulah tadi tips untuk memahami kloning dari nol hingga benar-benar paham untuk menggunakannya.

Barakallahu fiikum. Jika kawan-kawan mempunyai pertanyaan, saran, dan kritikan silahkan komentar di akun [telegram](https://t.me/hervyqa) atau [instagram @hervyqa](https://instagram.com/hervyqa). Sekian, semoga tulisan ini bermanfaat untuk pembaca semuanya. Aamiin.

***

[Inkscape]:https://www.inkscape.org
[Gimp]:https://www.gimp.org

[GNOME.ID]:https://www.gnome.id
[BUKU CC-ID]:https://bit.ly/madewithccID
[Wikimedia]:https://www.wikkimedia.org/

[Behance]:https://www.b.net
[Dribbble]:https://www.dribbble.com

[AdobeStock]:https//www.stock.adobe.com
[123rf]:https//www.123rf.com
[Freepik]:https//www.freepik.com
[Dreamstime]:https//www.dreamstime.com
[Shutterstock]:https://submit.shutterstock.com/?ref=238649869

[Hervyqa]:https://hervyqa.id
[Manjaro-X]:https://manjaro-x.id
[Inkporter]:https://github.com/raniaamina/inkporter
