---
draft: false
featuredImg: ""
title: "Gunakan Cara Ini untuk Mengoptimalkan Inkscape"
discussionId: "gunakan-cara-ini-untuk-mengoptimalkan-inkscape"
date: 2019-07-27T10:25:48+07:00
author:
  - name : "Hervy Qurrotul Ainur"
description : ""
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
  - gimp
  - tema
  - ui/ux
  # ---
  - pemula
  - menengah
---

*Assalamu'alaikum Warahmatullahi Wabarakatuh.*

Sebenarnya tips ini saya gunakan untuk menghindari "Force close" di inkscape. Saya merasa kesal aja harus membuka inkscape kembali, ya meskipun force-close inkscape sendiri sudah tercadangkan otomatis. Oke, berikut tips untuk menghindari "Force close" dan mengoptimalkan inkscape.

## 1. Gunakan filter kualitas rendah.
Saya menggunakan settingan ini untuk pengaturan rendering filter. Gunanya untuk mempercepat proses filter dan blur. Tipsnya juga jangan meng-__zoom__ area blur secara dalam.

* Pilih **Edit** > **Preferences**.
* Pilih tab Randering
* Pada bagian **Grassian blur quality for display**, pilih **lowest quality**.
* Pada bagian **Filter effect quality for display**, pilih **lowest quality**.

## 2. Gunakan ikon yang paling kecil.
Gunanya ini untuk mengatur memaksimalkan layar kanvas dengan mengurangi ukuran ikon-ikon.

* Pilih **Edit** > **Preferences**.
* Pilih tab **Interface**.
* Pilih **Toolbox icon size** : **Smaller**.
* Pilih **Control Bar icon size** : **Smaller**.
* Pilih **Secondary Toolbar icon size** : **Smaller**.

## 3. Pilih "Link" secara bawaan untuk impor gambar Bitmap.
Ketika import gambar bitmap akan ada pilihan untuk mode embed atau linked. Saya sendiri lebih ke link untuk mengimpor gambar bitmap. Anda juga bisa mengaturnya di bagian preferences.

* Pilih **Edit** > **Preferences**.
* Pilih tab **Bitmaps**.
* Dibagian **Import** hilangkan **Ask about linking and scaling when importing**.
* Pada **Bitmap link**, pilih: **Link**.
* Pada **Bitmap scale** : **Blocky**.

## 4. Aktifkan Autosave.
Karena di Windows tidak ada duplikasi ketika forceclose maka aktifkan autosave di preferences.

* Pilih **Edit** > **Preferences**.
* Pilih tab **Input/Output**
* Ceklis **Enable autosave**

## 5. Aktifkan snap seperlunya.
Tombol pintasan snap adalah **%**, letak snap dibagian sebelah kanan toolbox. Ketika Anda bekerja dengan banyak node saran saya cukup mengaktifkan snap seperlunya saja. Misalnya,

* snap to path, node, and handles.
* snap to cusp nodes, incl. rectagle corners.
* snap other points.
* snap to page border.

## 6. Hindari undo redo ketika mode teks.
Ketika anda masih dalam mode teks atau masih mengetikkan kata dan akan melakukan proses undo, maka sebaiknya keluarlah dulu dengan menekan **Esc** kemudian boleh undo dan redo. Biasanya akan not-responding dan akan ditutup paksa. Tetapi ketika desain Anda ringan (logo misalnya) dan tidak banyak node yang ribet dan njelimet maka aman-aman saja pakai undo redo sebanyak apapun.

## 7. Sebaiknya tidak menggunakan gradien dengan banyak node.
Saya sering menggunakan gradien tapi tidak pernah sampai _force close_. Kalau sudah terasa berat saya save dan buka kembali berkas inkscape tadi.

## 8. Hindari desktop environtment yang berat.
Khusus pengguna linux, kalau RAM Anda dibawah 2Gib sebaiknya gunakan DE yang ramah misalnya xfce, lxqt, openbox, atau migrasi ke window manager. Cara optimalisasi yang lumayan ekstrim sih ini.

Itu saja menurut saya beberapa hal yang harus dihindari, kalau menurut  Anda ada tips tambahan silahkan komentar dibawah :wink:. Sekian, terima kasih sudah membaca. Semoga bermanfaat.

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
