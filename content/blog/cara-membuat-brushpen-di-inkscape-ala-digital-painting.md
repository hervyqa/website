---
draft: false
date: 2020-01-31T10:40:54+07:00
title: "Cara Membuat Brushpen di Inkscape ala Digital Painting"
description : "Cara brushpen ini sudah penulis terapkan sejak tahun 2016. Setidaknya dengan brushpen di inkscape, membuat karya ilustrasi yang kompleks jadi lebih cepat."
image: "images/blog/cara-membuat-brushpen-di-inkscape-ala-digital-painting.png"
type: "featured" # [featured/regular]
categories:
- inkscape
---

Pernah anda membayangkan membuat BrushPen line art di inkscape?

BrushPen vektor di inkscape ini tidak seperti brush di perangkat lunak raster lainnya, seperti ada brush blend color, brush random rotation, atau efek brush lainnya. Setidaknya dengan brushpen di inkscape, pekerjaan ilustrasi jadi lebih cepat.

Cara brushpen ini sudah penulis terapkan sejak tahun 2016. Lumayan cepat, jika digunakan untuk ilustrasinya yang kompleks. Misalnya pada karya ilustrasi di bawah ini:

{{< image src="images/blog/ilustrasi-1-hervyqa.png" alt="Line Art 1 Hervyqa" >}}
{{< image src="images/blog/ilustrasi-2-hervyqa.png" alt="Line Art 2 Hervyqa" >}}
{{< image src="images/blog/ilustrasi-3-hervyqa.png" alt="Line Art 3 Hervyqa" >}}
{{< image src="images/blog/ilustrasi-4-hervyqa.png" alt="Line Art 4 Hervyqa" >}}

Brush ini bermanfaat jika path yang dibutuhkan untuk menggambar serat, tekstur, dan pola lainnya.
Atau path yang membutuhkan detail yang tinggi. Ah, lewati saja ilustrasi di atas. Langsung saja kita mulai tutorialnya.

***

#### Membuat path brush dari bezier (pentool).

Pertama buatlah satu path brush dulu dengan bezier. Tekan <kbd><kbd>b</kbd></kbd> kemudian gambar lengkungannya. Misalnya seperti path dibawah ini.

{{< image src="images/blog/path-1.png" alt="Contoh Path 1" >}}

Setelah itu buatlah gambar dengan ketinggian yang berbeda. Misalnya tadi dengan ukuran 10px, selanjutnya 8px, 6px, 4px, 2px. Seperti gambar dibawah ini.

{{< image src="images/blog/path-2.png" alt="Contoh Path 2" >}}

#### Membuat brush dari freehand (P).

Untuk membuat brush bisa Anda gunakan freehand <kbd><kbd>p</kbd></kbd> atau bezier <kbd><kbd>b</kbd></kbd>. Oke, kita coba dari freehand dulu.

Tekan <kbd><kbd>p</kbd></kbd> untuk pintasan freehand. Kemudian pilihlah salah satu path, misalnya yang nomer 5. Kemudian tekan <kbd><kbd>Ctrl</kbd>+<kbd>c</kbd></kbd> untuk menyalinnya.

{{< image src="images/blog/path-3.png" alt="Contoh Path 3" >}}

Kemudian aturlah parameter menjadi **60**. Nilai ini bervariasi, bisa kurang bisa lebih. Biasanya penulis memakai 60-70 untuk membuat brush di inkscape.

{{< image src="images/blog/path-4.png" alt="Mengatur parameter ukuran freehand inkscape" >}}

Kemudian ganti paramater **Bentuk:** dari None menjadi **Dari papan klip** (en: from clipboard).

{{< image src="images/blog/path-5.png" alt="Mengatur parameter bentuk freehand inkscape" >}}

Masih dalam freehand <kbd><kbd>p</kbd></kbd>, buatlah path bebas dari coretan Anda.

{{< image src="images/blog/path-6.png" alt="Membuat freehand di inkscape" >}}

Anda bisa mengatur ketebalannya dengan mode node <kbd><kbd>n</kbd></kbd>. Tekan <kbd><kbd>n</kbd></kbd> kemudian akan ada ujung pangkal untuk menarik tebal dan tipisnya.

{{< image src="images/blog/path-7.png" alt="Mengatur ketebalan freehand di inkscape" >}}

Jadi, caranya sangat sederhana. Pertama **salin** pathnya, kemudian freehand tekan <kbd><kbd>p</kbd></kbd>, atur parameter menjadi **60**, ganti bentuknya dari none menjadi **Dari papan klip**. Selesai :).

#### Membuat brush dari bezier (B).

Caranya hampir sama dengan freehand tadi. Pertama tekan <kbd><kbd>b</kbd></kbd> untuk bezier. Kemudian salin path yang akan dijadikan brush.

Lalu pada parameter bezier, pilih **Bentuk:** dari None menjadi **Dari papan klip**.

{{< image src="images/blog/path-8.png" alt="Mengatur parameter bezier di inkscape" >}}

#### Aturan sederhana path brush.

Aturan sederhana tatkala membuat path brush, yaitu:

* Harus berbentuk path. Hal ini sudah jelas, karena jika bukan path maka akan susah dibentuk.
* Bukan path yang digrup.
* Hasil brush bewarna hitam. Apapun warna pathnya tatkala dijadikan brush akan selalu hitam.
* Beda bentuk, beda hasil. Jadi, baik freehand maupun bezier menjadikan brush dari sisi **kiri ke kanan**. Lebih jelasnya seperti gambar dibawah ini.

{{< image src="images/blog/path-9.png" alt="Contoh Path 9" >}}

Dari gambar diatas. Brushpen yang **sebelah kiri dari tumpul ke lancip**. Dan yang **sebelah kanan dari lancip ke tumpul**. Maka hasil brushnya juga berbeda, meskipun dari arah yang sama.


#### Buatlah variasi brush pen.

Mungkin contoh diatas menggunakan path yang sederhana. Tetapi Anda juga bisa menggunakan path yang anda buat sendiri. Hasilnya akan lebih bervariasi.

{{< image src="images/blog/brushpen_kreatif.png" alt="Brushpen Kreatif Inkscape" >}}

#### Mockup path brush.

Penulis sudah membuat template inkscape (.svg) agar lebih mudah digunakan. Silakan klik kanan [tautan ini](mockup_brushpen.svg) lalu **Save link As** untuk mengunduh.

{{< image src="images/blog/mockup_brushpen.png" alt="Mockup Brushpen Inkscape" >}}

***

Nah, itu tadi tips membuat brushpen di inkscape. Jika kawan-kawan mempunyai pertanyaan, saran, dan kritikan silahkan komentar di akun [telegram](https://t.me/hervyqa) atau [instagram @hervyqa](https://instagram.com/hervyqa). Sekian, semoga tulisan ini bermanfaat untuk pembaca semuanya. Aamiin.

***
