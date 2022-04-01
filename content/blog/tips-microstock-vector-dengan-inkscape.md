---
draft: false
date: 2019-07-27T10:25:48+07:00
title: "Tips microstock vektor dengan inkscape"
description : "Hal-hal yang harus dilakukan oleh mikrostoker untuk membuat desain vector EPS dengan inkscape hingga lolos ke agensi."
image: "images/blog/tips-microstock-vector-dengan-inkscape.png"
type: "regular" # featured/regular
categories:
- inkscape
---

Ada beberapa hal yang harus dipatuhi dan dihindari oleh mikrostoker. Alasannya karena vektor merupakan sebuah produk digital yang sebisa mungkin dibuka oleh perangkat lunak pengolah vektor lain. Jadi yang menggunakan vektor Anda nantinya bukan hanya untuk pengguna inkscape saja, melainkan untuk pengguna perangkat non-free juga. Intinya adalah bagaimana caranya vektor Anda mudah dibaca oleh perangkat lain, baik itu Inkscape, CorelDraw, Adobe Ilustrator, Gravit designer, dsb.

Sebenarnya tips ini tidak diperuntukkan untuk Mikrostoker/[Shutterstock] saja , namun untuk siapa saja yang ingin mempelajari EPS lebih lanjut. Berbicara EPS, memang ekstensi berkas ini sedikit memerlukan trik agar mudah dibaca di berbagai perangkat lunak yang sudah disebutkan tadi. Ibaratnya EPS ini seperti berkas AI yang disederhanakan. Tetapi tanpa menggunakan transparansi, blur, pola (pattern), mesh, path efek, dan filter efek.

Perlu diingat tips ini disarankan untuk pengguna inkscape versi **0.92.x**. Penulis sendiri menggunakan inkscape versi 0.92.4, jadi ada beberapa perbedaan jika menggunakan versi inkscape dibawah 0.92.x.

Jadi, ada beberapa hal yang harus dilakukan dan dihindari. Berikut penjelasannya.

***

#### Hal-hal yang perlu dilakukan

##### Berilah Solid Background dengan Ukuran 4000px:4000px sesuai kanvas

Tujuannya untuk menyamakan antara ukuran artwork dengan ukuran kanvas (artboard) di inkscape. Sekaligus untuk memenuhi syarat [Shutterstock] yaitu gambar vektor minimal 4MP.

{{< image src="images/blog/kanvas.png" alt="Kanvas Inksape 4000px:4000px" >}}

Anda bisa memberikan backround warna putih. Buatlah 2 layer, misalnya: **Background** yang anda kunci dan layer **Artwork** yang tetap terbuka supaya lebih mudah untuk membuat desain.

{{< image src="images/blog/layer.png" alt="Layer Inksape 4000px:4000px" >}}

##### Konversi Objek menjadi bentuk Path

Jika Anda membuat objek **persegi**, **lingkaran**, **bintang**, dan **teks**, maka konversikan ke bentuk path. Caranya dengan menekan <kbd><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>c</kbd></kbd></kbd>.

Jika terdapat objek **stroke** maka rubahlah menjadi bentuk path juga. Caranya dengan menekan <kbd><kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>c</kbd></kbd></kbd>.

{{< image src="images/blog/konversi.png" alt="Konversi dengan Inksape" >}}

Tatkala desain sudah final, Anda perlu memeriksa kembali barangkali ada objek yang belum dikonversi ke path, agar nantinya di situs marketplace tidak ditolak karena ada peringatan gambar mengandung bitmap.

***

#### Hal-hal yang perlu Anda hindari

##### Jangan sampai ada Path yang putus
Jika ada path yang memiliki warna pada stroke dan fill, tapi putus nodenya. Maka segera hubungkan dahulu titik nodenya. Karena EPS sendiri tidak mendukung objek dengan path putus selagi ada warna fill. Begitu pula CorelDraw tidak bisa membuat objek dengan path terputus.

{{< image src="images/blog/path-putus.png" alt="Konversi dengan Inksape" >}}

##### Jangan menggunakan Transparansi
Transparansi akan memberikan warna solid pada EPS. Gunakan pick color untuk mengelabuhi tranparansi. Isilah warna gradien tersebut dengan warna yang ada dibelakangnya. Sehingga warna seolah-olah transparansi.

{{< image src="images/blog/gradien.png" alt="Gradien dengan Inksape" >}}

##### Jangan Mengunci Layer
Jangan lupa untuk membuka semua layer, dan hapus layer yang tidak diperlukan. Periksa juga layernya agar tetap memakai normal mode.

{{< image src="images/blog/layer.png" alt="Layer Inksape 4000px:4000px" >}}

##### Jangan memberikan Pattern, Mesh, Path Efek, dan Filter.

Fitur ini hanya diperuntukkan untuk inkscape, sedangkan untuk piranti lain belum tentu fitur tersebut bisa digunakan. Untuk amannya, Anda tidak perlu menggunakan pattern, mesh, path efek dan filter. Jadi, biarkan apa adanya.

***

#### Pilihan yang dianjurkan

##### Pastikan memilih Gradien yang solid

Gunakanlah gradien yang **tidak** mengandung transpansi. Disarankan juga untuk mengggunakan gradien linear saja. Jika Anda menggunakan gradien radial, maka gunakan gradien radial yang simetris lingkaran sempurna dan bukan gradien yang lonjong. Gunakan tombol <kbd><kbd>Ctrl</kbd>+<kbd>Shift</kbd></kbd> kemudian drag, untuk membuat gradien radial yang simetris.

{{< image src="images/blog/solid.png" alt="Gradien solid dengan Inksape" >}}

##### Meyelaraskan Ciri khas

Selaraskan ciri khas vektor Anda, membuat niche tertentu yang konsisten. Misalnya desain fokus pada logo, maka seterusnya membuat logo. Jika membuat mandala maka seterusnya membuat mandala. Jika membuat maskot maka seterusnya membuat maskot. Jika membuat pattern maka seterusnya membuat pattern, dan sebagainya.

Cara ini akan jadi lebih memudahkan untuk mengisi metadata-metadata setiap file SVG dan fokus pada kualitas. Sekaligus mempermudah pembeli untuk melihat daftar stok anda.

Contohnya seperti ini.

- Ciri khas : Pattern
- Kata kunci : abstract, art, background, beautiful, beauty, blossom, color, colorful, cute, decoration, design, ditsy, elegance, elegant, fabric, fashion, floral, flower, fresh, garden, illustration, leaf, little, nature, pattern, print, repeat, retro, rose, seamless, small, spring, style, summer, textile, texture, vector, wallpaper. (Untuk kata kunci desain selanjutnya, tidak berbeda jauh)

{{< image src="images/blog/pattern.jpeg" alt="Pattern dengan Inksape" >}}

##### Gunakan nama berkas sesuai SEO
Untuk memudahkan penerapan SEO, gunakan nama berkas EPS dengan huruf kecil (lowercase). Misalnya:

* happy-farmer.eps
* flat-android-mockup.eps
* kids-in-the-train.eps

##### Pilih Kuantitas apa Kualitas?
Kalau Anda yang baru mulai, lebih baik mengejar kuantitas dengan kualitas yang cukup. Jika sudah banyak stocknya, boleh ditingkatkan lagi kualitasnya supaya seimbang.

##### Target Harian/Mingguan/Bulanan
Lebih baik tentukan sendiri target vektornya, karena kemampuan setiap orang berbeda-beda. Berapapun targetnya Anda harus berkomitmen terhadap apa yang Anda putuskan tadi.

##### Macam-macam agensi mikrostok
Ada berbagai macam agensi mikrostok dan memiliki peraturan yang berbeda pula, seperti berikut ini.

* [123rf]
* [AdobeStock], sebelumnya Fotolia
* [Dreamstime]
* [Freepik]
* [Shutterstock]

Tetapi kembali kepada si Kreator juga. Misalnya, penggunakan gradien dengan EPS bawaan versi 0.92.x kalau di [Freepik] masih diterima, sedangkan di [Shutterstock] gradien dianggap sebagai berkas yang tidak kompatibel. Dan objek gradien tersebut kemungkinan besar berubah menjadi bitmap.

Hal ini tentu akan mempengaruhi gaya yang anda buat, apakah tetap menggunakan gradien atau tidak. Kalau Penulis secara pribadi lebih memilih desain flat tanpa gradien, tujuannya untuk meminimalisir penolakan dari berbagai agensi.

##### Perhatikan Metadata

Tatkala mengirim EPS ke agensi Microstock gunakan metadata yang berhubungan dengan desain yang Anda buat tadi. Perhatikan juga penulisan metadata Anda. Aturannya sangat mudah:

* Gunakanlah bahasa inggris.
* Kata kunci maksimal 50 kata yang dipisahkan dengan koma dan menggunakan huruf kecil.
* Kata kunci bisa didapatkan dengan menggunakan alat daring, seperti [mykeyworder](mykeyworder.com) dan [microstockgroup](microstockgroup.com/tools/keywords.php).
* Simpan juga metadata tadi untuk dicadangkan, Anda bisa menyimpannya dengan nama _metadata.txt_ semisalnya. Tujuannya untuk digunakan tatkala ada desain yang mempunyai kata kunci sejenis, jadi tinggal salin tempel saja antar Metadata SVG dan di situs mikrostok.

##### Buatlah laporan

Tujuannya untuk mamantau aset-aset vektor. Anda bisa membuatnya di Libre Office Calc.

Contohnya seperti ini.

{{< image src="images/blog/laporan.png" alt="Laporan mikrostok dengan Inksape" >}}

Disetiap kolom ada:

* No
* Tanggal Upload
* Nama Berkas
* 123rf
* AdobeStock
* Dreamstime
* Freepik
* Shutterstock

Disetiap baris dibawah agensi bisa diisi dengan status:

* Pending
* Approve
* Reject

Nah itu tadi beberapa tips dari Penulis. Sekian, semoga bermanfaat untuk pembaca semuanya. Aamiin.

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
