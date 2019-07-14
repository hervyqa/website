---
draft: false
title: "Tips dan Trik untuk Mikrostoker Vektor dengan Inkscape"
date: 2019-07-10T10:01:07+07:00
author:
  - name : "Hervy Qurrotul Ainur"
description : ""
comments : ""
toc: false
type:
  - post
tags:
  - inkscape
  - 123rf
  - adobe-stock
  - dreamtimes
  - mikrostock
  - shutterstock
---

*Assalamu'alaikum Warahmatullahi Wabarakatuh.*

Ada beberapa hal yang harus dipatuhi dan dihindari oleh mikrostoker. Alasannya karena vektor merupakan sebuah produk digital yang sebisa mungkin dibuka oleh perangkat lunak pengolah vektor lain. Jadi yang menggunakan vektor Anda nantinya bukan hanya untuk pengguna inkscape saja, melainkan untuk pengguna perangkat propietary juga. Intinya bagaimana caranya vektor Anda mudah dibaca oleh perangkat lain.

Sebenarnya tips ini tidak diperuntukkan untuk mikrostoker saja, namun untuk siapa saja yang ingin mempelajari EPS lebih lanjut. Berbicara EPS, memang ekstensi berkas ini agak tricky agar mudah dibaca. Ibaratnya EPS ini seperti berkas AI yang disederhanakan. Tanpa menggunakan transparansi, blur, pattern, mesh, dan efek filter.

Perlu diingat tips ini disarankan untuk pengguna inkscape versi **0.92.x**. Saya sendiri menggunakan inkscape versi 0.92.4, jadi ada beberapa perbedaan jika menggunakan versi inkscape dibawah 0.92.x.

Oke, langsung saja. Ada beberapa hal yang harus dilakukan dan dihindari, Apa saja ya? yuk disimak...

## A. Hal-hal yang perlu dilakukan.

### 1. Berilah Solid Background dengan Ukuran 2800 X 2800 px sesuai kanvas.
Tujuannya untuk menyamakan antara ukuran artwork dengan ukuran kanvas (artboard) di inkscape. Sekaligus untuk memenuhi syarat shutterstock yaitu gambar vektor minimal 4MP.

{{< figure src="/img/posts/solid-background.webp" alt="solid background" caption="Contoh solid background dengan warna putih" class="big" >}}

Anda bisa memberikan backround warna putih. Sebaiknya juga **Background** dan **Artwork** Anda pisahkan saja dengan **LAYER**, supaya lebih mudah untuk membuat desain.

### 2. Rubahlah Objek apapun jadi bentuk Path.
Jika Anda membuat objek **persegi**, **lingkaran**, **bintang**, dan **teks**. Maka rubahlah ke bentuk path dengan menekan **<kbd><kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>c</kbd></kbd>**.

Jika ada objek **stroke** maka rubahlah ke path juga dengan **<kbd><kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>c</kbd></kbd>**.

{{< figure src="/img/posts/objek-sebelum.webp" alt="objek-inkscape-yang-belum-dirubah-ke bentuk-path" caption="Sebelum dirubah ke bentuk path" class="big" >}}

{{< figure src="/img/posts/objek-sesudah.webp" alt="objek-inkscape-yang-sudah-dirubah-ke bentuk-path" caption="Sesudah dirubah ke bentuk path" class="big" >}}

Ketika desain sudah final Anda perlu memeriksanya kembali.

## B. Hal-hal yang perlu dihindari.

### 1. Jangan sampai ada Path yang putus.
Jika ada path yang memiliki warna pada stroke dan fill, tetapi putus nodenya. Maka sambungkanlah dulu node tersebut. Karena EPS sendiri tidak mendukung objek dengan path putus selagi ada warna fill.

{{< figure src="/img/posts/path-putus.webp" alt="path-putus" caption="Kiri= path yang putus, kanan= path yang tersambung" class="big" >}}

### 2. Jangan menggunakan Transparansi.
 Transparansi akan memberikan warna solid pada EPS. Gunakan pick color untuk mengelabui tranparansi. Isilah warna gradien tersebut dengan warna yang ada dibelakangya.

{{< figure src="/img/posts/transparansi.webp" alt="transparansi" caption="Objek yang terlihat transparan" class="big" >}}

### 3. Jangan Memberikan Gambar Bitmap/Raster ke EPS yang sudah final.
Hapus gambar bitmap atau raster bekas sketsa, foto, catatan atau apapun ketika desain sudah final. Periksa kembali jika objek bitmap tersebut di layer yang tersembunyi

{{< figure src="/img/posts/sketsa.webp" alt="sketsa-bitmap" caption="Contoh Bitmap gambar Sketsa" class="big" >}}

### 4. Jangan Melebihi ukuran EPS sampai 100 MB.
Pastikan berkasnya nanti tidak melebihi 100Mb, tapi saya rasa ini tidak mungkin, karena ukuran berkas vektor biasanya cukup ringan. Ukuran 10MB saja kadang menakutkan dibuka di inkscape.

### 5. Jangan Mengunci Layer
Jangan lupa untuk membuka semua layer, dan hapus layer yang tidak diperlukan.

{{< figure src="/img/posts/layer-terbuka.webp" alt="layer-terbuka" caption="Contoh Layer terbuka" class="big" >}}

### 6. Jangan memberikan Pattern, Mesh, dan Efek filter.

{{< figure src="/img/posts/mesh-pattern.webp" alt="mesh-pattern" caption="Contoh Mesh dan Pattern" class="big" >}}

Sepertinya sudah jelas.

## C. Opsional yang dianjurkan.

### 1. Isilah Metadata di SVG.
Kegunaan metadata ini untuk memudahkan mikrostoker submit ke agensi, nantinya akan otomatis terdeteksi keywords-keywords di berkas EPS-nya.

Caranya bagaimana? Isilah Metadata **SVG** Anda sebelum di "Save As" ke **EPS**. Buka Document Properties (**<kbd><kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>d</kbd></kbd>**) di bagian Sub menu "Metadata" isilah datanya. Kemudian pilih "Use default".

{{< figure src="/img/posts/metadata.webp" alt="metadata" caption="Dialog Metadata pada Document Properties" class="big" >}}

Contoh:

* **Title**: The Isometric Astronauts and Spaceship.
* **Date**: 01-12-2019
* **Creator**: Hervy Qurrotul Ainur Rozi
* **Keywords**: astronout, isometric, ilustration, universe, earth, flat, spaceship, moon, satellite
* **Description**: The Isometric Illustrations about a Happy Astronauts are going to the Moon with Spaceship.

Catatan:

* Gunakanlah bahasa inggris.
* Keywords maksimal 50 kata yang dipisahkan dengan koma dan menggunakan huruf kecil.
* Keyword bisa dicari dengan menggunakan alat online, seperti [mykeyworder](mykeyworder.com) dan [microstockgroup](microstockgroup.com/tools/keywords.php).
* Simpan juga metadata tadi untuk backup, Anda bisa simpan dengan _metadata.txt_ misalnya. Tujuannya untuk menggunakan data yang sama jika ada desain yang sejenis, jadi tinggal salin tempel saja antar Metadata SVG.

### 2. Pastikan memilih Gradien yang solid.
Gunakanlah gradien yang **tidak** mengandung transpansi. Disarankan juga untuk mengggunakan gradien linear saja. Jika Anda menggunakan gradien radial, gunakan radial yang simetris lingkaran sempurna dan bukan yang lonjong. Gunakan **<kbd><kbd>Ctrl</kbd> <kbd>Shift</kbd></kbd>** kemudian drag untuk membuat gradien radial yang simetris.

{{< figure src="/img/posts/gradien.webp" alt="gradien" caption="Penggunaan Gradien" class="big" >}}

### 3. Meyelaraskan Style Anda.
Dengan menyelaraskan style vektor Anda ini, maka akan lebih mudah untuk mengisi Metadata-metadata setiap file SVG dan fokus pada kualitas. Tetapi jika Anda ingin lebih memburu kuantitas maka akan banyak jenis style yang ada di portofolio mikrostock Anda, dari pada repot (dalam tanda kutip) memikirkan banyak style lebih baik tetap fokus pada satu atau beberapa style saja.

### 4. Gunakan nama berkas sesuai SEO.
Untuk memudahkan SEO, gunakan nama berkas dengan huruf kecil (lowercase). Misalnya:

* happy-farmer.eps
* flat-android-mockup.eps
* kids-in-the-train.eps

### 5. Pilih Kuantitas apa Kualitas?.
Kalau Anda yang baru mulai, lebih baik mengejar kuantitas dengan kualitas yang cukup. Jika sudah banyak stocknya, boleh ditingkatkan lagi kualitasnya supaya seimbang.

### 6. Target Harian/Mingguan/Bulanan.
Lebih baik Anda tentukan sendiri target vektornya, karena kemampuan setiap orang berbeda-beda. Tapi Anda harus berkomitmen dengan target yang Anda buat tadi.

### 7. Macam-macam agensi mikrostok
Ada berbagai macam agensi mikrostok dan memiliki peraturan yang berbeda pula, seperti berikut ini.

* [123rf]
* [AdobeStock], sebelumnya Fotolia
* [Dreamstime]
* [Freepik]
* [Shutterstock]

Tetapi kembali kepada Anda juga, Misalnya begini, menggunakan gradien dengan EPS bawaan versi 0.92.x kalau di [Freepik] masih diterima, sedangkan di [Shutterstock] gradiennya dianggap sebagai berkas yang tidak kompatibel dan objek gradien berubah menjadi raster. Hal ini tentu akan mempengaruhi style yang anda buat, apakah tetap menggunakan gradien ataukah tidak. Kalau saya pribadi lebih memilih desain flat tanpa gradien, tujuannya untuk meminimalisir penolakan dari berbagai agensi. ^^

### 8. Buat laporan.
Tujuannya untuk memonitor aset vektor saja. Anda bisa membuatnya table di Libre Office Calc.

Contohnya seperti ini.

{{< figure src="/img/posts/mikrostock-list.webp" alt="mikrostock list" caption="Contoh Laporan Mikrostock" class="big" >}}

Disetiap kolom ada:

* No
* Tanggal Upload
* Nama Berkas
* 123rf
* AdobeStock
* Dreamstime
* Freepik
* Shutterstock

dan disetiap baris dibawah agensi bisa diisi dengan status:

* Pending
* Approve
* Reject

Nah itu tadi beberapa tips dari saya. Sepertinya sudah cukup artikelnya. :D Sekian dan terima kasih sudah membaca. Semoga bermanfaat.:blush:

*Wassalamu'alaikum Warahmatullahi Wabarakatuh.*

[AdobeStock]:https//www.stock.adobe.com
[123rf]:https//www.123rf.com
[Freepik]:https//www.freepik.com
[Dreamstime]:https//www.dreamstime.com
[Shutterstock]:https//www.shutterstock.com
