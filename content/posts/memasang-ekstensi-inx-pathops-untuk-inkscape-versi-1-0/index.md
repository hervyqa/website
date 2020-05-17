---
draft: false
date: 2020-05-17T08:36:21Z
title: "Memasang Ekstensi Inx-Pathops Untuk Inkscape Versi 1.0"
subtitle: "Ekstensi Boolean Multi Objek, Memotong Objek sekaligus."
seotitle: "Memasang Ekstensi Inx-Pathops Untuk Inkscape Versi 1.0"
description : "Ekstensi Inx-Pathops merupakan ekstensi untuk boolean multi objek. Dengan Ink-Pathops Anda dapat melakukan proses boolean secara bersamaan dalam objek grup. Misalnya Union, Difference, Intersection, Cut path, dan lain sebagainya."
slug: ""
categories:
- inkscape
- tips
- desain
resources:
- src: "cover.png"
  name: "cover"
- src: "*.png"
---

Bismillahirrohmanirrohim.

Ekstensi Ink-Pathops berfungsi untuk melakukan proses boolean secara bersamaan, baik objek secara individu maupun grup. Biasanya orang kalau melakukan proses boolean seperti union, difference, intersection, exclusion, division, cut path, atau combine pasti melakukannya secara satu-satu. Jika objek tergabung didalam grup maka harus dipisah dulu agar bisa melakukan proses boolean. Namun dengan Ink-pathops orang bisa melakukannya proses boolean  dengan sekali klik.

> Sebelumnya Saya mengucapkan Terima Kasih kepada Pak Sofyan Sugianto [@artemtech](https://t.me/artemtech) yang telah membantu merilis ekstensi Inx-Pathops ke Versi 1.0. Syukran wa jazaakallahu khair ^^.

***

Manfaat lain untuk ekstensi ink-pathops yaitu untuk memotong bagian luar (intersection) objek pattern. Ekstensi ini harus dipasang untuk desainer yang memilih niche Pattern.

Beberapa objek yang dapat di boolean diantaranya seperti:

- Path (segala objek yang dibuat dengan bezier)
- Shape (lingkaran, persegi, dan bintang)
- Teks

Jika terdapat objek hasil clone dan gambar bitmap, maka pathops akan melewatinya. Lebih jelasnya seperti gambar dibawah ini. Pattern yang belum dipotong dari bagian luar artboard.
{{< photo src="ink-pathops-sebelum.jpeg" alt="ink-pathops-sebelum" >}}

Pattern sudah dipotong dari bagian luar artboard.  {{< photo src="ink-pathops-sesudah.jpeg" alt="ink-pathops-sesudah" >}}

Pada tahap ini pattern sudah siap untuk dijadikan desain repeat & seamless pattern.

***

# Tahap Pemasangan

Cara pemasangannya harapkan untuk dibaca pean-pelan, seperti berikut ini.

1. Unduh Zip Ink-Pathops pada link [pathops1].
2. Ekstrak zip ekstensi.
3. Selanjutnya masuk ke direktori `ink-pathops-inkscape-1.0-src` > `src`, Pilih semua berkas inx dan py. Lalu salinlah (copy).
4. Pengguna Windows :
    - Tempel (paste) ekstensi:
    ```
    C:\Program Files\Inkscape\share\inkscape\extensions\
    ```
    - buka notepad berkas **base.py** di direktori:
    ```
    C:\Program Files\Inkscape\share\inkscape\extensions\inkex\
    ```
    - Ctrl+F, temukan kata 'tostring'. biasanya berada di baris 282. Lalu ganti dengan baris ini
    ```
    document = etree.tostring(self.document.getroot())
    ```
    - Simpan, lalu tutup.

5. Khusus pengguna GNU/Linux (abaikan langkah ini untuk pengguna windows):
    - Tempel (paste) ekstensi ke:
    (tekan ctl+H atau alt+titik untuk menampilkan direktori .config)
    ```
    ~/.config/inkscape/extensions/
    ```
    - untuk pengguna GNOME, bisa menggunakan gedit untuk editornya :
    ```
    sudo -H gedit /usr/share/inkscape/extensions/inkex/base.py
    ```
    - jika menggunakan KDE, bisa menggunakan kwrite atau kate :
    ```
    sudo -H kwrite /usr/share/inkscape/extensions/inkex/base.py
    ```
    - Ctrl+F, temukan kata 'tostring'. biasanya berada di baris 282. Lalu ganti dengan baris ini
    ```
    document = etree.tostring(self.document.getroot())
    ```
    - Simpan, lalu tutup.

6. selesai

# Cara Penggunaan

Buka Inkscape, klik menu **Extensions > Generate from Path > PathOps**. Kemudian pilih boolean akan digunakan.

- Union
- Difference
- Intersection
- Exclusion
- Division
- Cut Path
- Combine

Prosesnya sama dengan boolean inkscape pada umumnya, tinggal memilih objek yang akan digunakan kemudian pilih menu boolean di PathOps.

# Kode Sumber

Arsip ZIP Inkscape 1.0 bisa di unduh disini:
[PathOps Sofyan](https://gitlab.com/artemtech/inx-pathops/-/archive/inkscape-1.0/inx-pathops-inkscape-1.0.zip?path=src)

Arsip ZIP Inkscape 0.9.2 bisa di unduh disini:
[PathOps su-v 0.9.x](https://gitlab.com/su-v/inx-pathops/-/tags)

Ekstensi ini dikembangkan oleh:
[PathOps su-v](https://gitlab.com/su-v/inx-pathops)

# Lisensi

Ink-PathOps menggunakan lisensi GPL-2+.

***

Barakallahu fiikum. Memang perlu bersabar untuk memasang ekstensi ini, tetapi InsyaAllah pasti bermanfaat. Jika kawan-kawan mempunyai pertanyaan, saran, dan kritikan silahkan komentar dibawah ini. Atau silakan sapa penulis via [telegram](https://t.me/hervyqa) atau [instagram @hervyqa](https://instagram.com/hervyqa). Sekian, semoga tulisan ini bermanfaat untuk pembaca semuanya. Aamiin.

***

[pathops]:https://gitlab.com/su-v/inx-pathops/tags
[pathops1]:https://gitlab.com/artemtech/inx-pathops/-/archive/inkscape-1.0/inx-pathops-inkscape-1.0.zip?path=src

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

[Hervyqa]:https://hervyqa.com
[Manjaro-X]:https://manjaro-x.id
[Inkporter]:https://github.com/raniaamina/inkporter
