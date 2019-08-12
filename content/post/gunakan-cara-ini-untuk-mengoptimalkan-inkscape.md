---
draft: false
title: "Gunakan Cara Ini untuk Mengoptimalkan Inkscape"
cover: "/post/gunakan-cara-ini-untuk-mengoptimalkan-inkscape/cover.webp"
date: 2019-07-27T10:25:48+07:00
description : "Beberapa ulasan singkat untuk mengoptimalkan kinerja inkscape."
comments : ""
toc: true
type:
  - post
tags:
  - desain
  - flat-desain
  - floss
  - ilustrasi
  - inkscape
  - tema
  - ui/ux
  # ---
  - pemula
  - menengah
---

*Assalamu'alaikum Warahmatullahi Wabarakatuh.*

Sebenarnya tips ini saya gunakan untuk menghindari _Force close_ di inkscape. Saya merasa kesal aja harus membuka inkscape kembali, ya meskipun inkscape sendiri sudah tercadangkan otomatis ketika ditutup paksa. Jadi langsung saja, berikut tipsnya.

<!--more-->

## 1. Gunakan filter kualitas rendah.
Saya menggunakan settingan ini untuk pengaturan rendering filter. Gunanya untuk mempercepat proses filter dan blur.

* Pilih **Edit** > **Preferences**.
* Pilih tab **Rendering**.
* Pada bagian **Grassian blur quality for display**, pilih **lowest quality**.
* Pada bagian **Filter effect quality for display**, pilih **lowest quality**.

Jika Anda menggunakan blur, sebaiknya jangan meng-_zoom_ area blur terlalu dekat.

## 2. Gunakan ikon yang paling kecil.
Manfaatnya untuk memaksimalkan layar kanvas dengan mengurangi ukuran ikon.

* Pilih **Edit** > **Preferences**.
* Pilih tab **Interface**.
* Pilih **Toolbox icon size** : **Smaller**.
* Pilih **Control Bar icon size** : **Smaller**.
* Pilih **Secondary Toolbar icon size** : **Smaller**.

## 3. Impor gambar bitmap dengan link.
Ketika import gambar bitmap akan ada pilihan untuk mode embed atau linked. Saya sendiri lebih memilih _link_  untuk mengimpor gambar bitmap. Anda juga bisa mengaturnya di bagian preferences.

* Pilih **Edit** > **Preferences**.
* Pilih tab **Bitmaps**.
* Dibagian **Import** hilangkan ceklis **Ask about linking and scaling when importing**.
* Pada **Bitmap link**, pilih: **Link**.
* Pada **Bitmap scale** : **Blocky**.

## 4. Aktifkan autosave.
Karena di Windows tidak ada duplikasi ketika _force close_ maka aktifkan juga autosave di preferences.

* Pilih **Edit** > **Preferences**.
* Pilih tab **Input/Output**
* Ceklis **Enable autosave**

Untuk Windows, lokasi direktori autosave diganti dengan nama usernya :

* Autosave directory : **C:\Users\namauser**

Untuk GNU/Linux, tetap seperti ini :

* Autosave directory : **/tmp**

Terima kasih juga kepada [Abu Sahal Wisnu](https://t.me/waditos) yang telah mengkoreksi. :)

## 5. Aktifkan snap seperlunya.
Tombol pintasan snap adalah **%**, letak snap dibagian sebelah kanan toolbox. Ketika Anda bekerja dengan banyak node saran saya cukup mengaktifkan snap seperlunya saja. Misalnya,

* snap to path, node, and handles.
* snap to cusp nodes, incl. rectagle corners.
* snap other points.
* snap to page border.

## 6. Hindari undo redo ketika mode teks.
Ketika anda masih dalam mode teks atau masih mengetikkan kata dan akan melakukan proses undo, maka sebaiknya keluarlah dulu dengan menekan **Esc** kemudian boleh undo dan redo. Biasanya akan not-responding dan akan ditutup paksa. Tetapi ketika desain Anda ringan (logo misalnya) dan tidak banyak node yang ribet maka aman-aman saja pakai undo redo sebanyak apapun.

## 7. Sebaiknya tidak menggunakan gradasi dengan banyak node.
Saya sering menggunakan gradasi tapi tidak pernah sampai _force close_. Kalau sudah terasa berat saya save dan buka kembali berkas inkscape tadi.

## 8. Gunakan Desktop Environment yang ringan.
Khusus pengguna linux, kalau RAM Anda dibawah 2Gib sebaiknya gunakan DE yang ringan misalnya Xfce, Lxqt, Openbox, atau migrasi ke Window Manager. Kalau pindah ke WM, termasuk cara optimalisasi yang lumayan ekstrim sih ini.

Jadi, itu saja menurut saya beberapa hal yang harus dihindari, kalau menurut Anda ada tips tambahan silahkan komentar dibawah. Sekian, terima kasih sudah membaca. Semoga bermanfaat. :)

*Wassalamu'alaikum Warahmatullahi Wabarakatuh.*

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
[Shutterstock]:https//www.shutterstock.com
