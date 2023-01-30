---
draft: true
date: 2020-05-17T08:36:21+07:00
title: "Memasang Ekstensi Inx-Pathops untuk Inkscape Versi 1.0"
description : "Ekstensi Inx-Pathops merupakan ekstensi untuk boolean multi objek. Dengan Ink-Pathops Anda dapat melakukan proses boolean secara bersamaan dalam objek grup. Misalnya Union, Difference, Intersection, Cut path, dan lain sebagainya."
image: "images/blog/memasang-ekstensi-inx-pathops-untuk-inkscape-versi-1-0.png"
type: "regular" # [featured/regular]
categories:
- ekstensi
- inkscape
---

Ekstensi Ink-Pathops berfungsi untuk melakukan proses boolean secara bersamaan, baik objek secara individu maupun grup. Biasanya orang kalau melakukan proses boolean seperti union, difference, intersection, exclusion, division, cut path, atau combine pasti melakukannya secara satu-satu. Jika objek tergabung didalam grup maka harus dipisah dulu agar bisa melakukan proses boolean. Namun dengan Ink-pathops orang bisa melakukannya proses boolean dengan sekali klik.

> Sebelumnya Saya mengucapkan Terima Kasih kepada Pak Sofyan Sugianto [@artemtech](https://t.me/artemtech) yang telah membantu merilis ekstensi Inx-Pathops ke Versi 1.0. Syukran wa jazaakallahu khair ^^.

***

Manfaat lain untuk ekstensi ink-pathops yaitu untuk memotong bagian luar (intersection) objek pattern. Ekstensi ini harus dipasang untuk desainer yang memilih niche Pattern.

Beberapa objek yang dapat di boolean diantaranya seperti:

- Path (segala objek yang dibuat dengan bezier)
- Shape (lingkaran, persegi, dan bintang)
- Teks

Jika terdapat objek hasil clone dan gambar bitmap, maka pathops akan melewatinya. Lebih jelasnya seperti gambar dibawah ini. Pattern yang belum dipotong dari bagian luar artboard.

{{< image src="images/blog/ink-pathops-sebelum.png" alt="ink-pathops-sebelum" >}}

Pattern sudah dipotong dari bagian luar artboard.

{{< image src="images/blog/ink-pathops-sesudah.png" alt="ink-pathops-sesudah" >}}

Pada tahap ini pattern sudah siap untuk dijadikan desain repeat & seamless pattern.

***

#### Tahap Pemasangan

Cara pemasangannya diharapkan untuk dibaca pelan-pelan agar lebih berhati-hati :)

1. Unduh Zip Ink-Pathops pada tautan ini [pathops1].
2. Ekstrak zip ekstensi.
3. Selanjutnya masuk ke direktori `ink-pathops-inkscape-1.0-src` > `src`, Pilih semua berkas inx dan py. Lalu salinlah (copy).
4. Pengguna Windows :

    - Tempel (paste) ekstensi ke dalam direktori ini.
    ```
    C:\Program Files\Inkscape\share\inkscape\extensions\
    ```
    - buka dengan notepad berkas **base.py** yang ada di direktori ini.
    ```
    C:\Program Files\Inkscape\share\inkscape\extensions\inkex\
    ```
    - <kbd><kbd>Ctrl</kbd>+<kbd>f</kbd></kbd>, temukan baris dibawah ini. Biasanya berada di baris 282.
    ```
    document = self.document.getroot().tostring()
    ```
    - Lalu ganti dengan baris ini
    ```
    document = etree.tostring(self.document.getroot())
    ```
    - Simpan, lalu tutup.

5. Khusus pengguna GNU/Linux (abaikan langkah ini untuk pengguna windows):

    Ekstensi ini tidak berlaku untuk GNU/Linux yang pemasangan inkscapenya via Flatpak, Apppimage dan Snap. Flatpak menggunakan Sandbox untuk melindungi isi paketnya, Appimage bersifat portable, Snap memakai SquasFS yang dimana tidak bisa memodifikasi kode sistemnya. Solusinya jika memakai GNU/Linux Ubuntu dan turunannya, hapus inkscape lama lalu pasang melalui [PPA Inkscape](https://inkscape.org/release/inkscape-1.0/gnulinux/ubuntu/ppa/dl/).

    - Tempel (paste) ekstensi ke dalam direktori ini. (tekan <kbd><kbd>Ctrl</kbd>+<kbd>h</kbd></kbd> atau <kbd><kbd>Alt</kbd>+<kbd>.</kbd></kbd> untuk menampilkan direktori .config)

    ```
    ~/.config/inkscape/extensions/
    ```
    - Lalu ganti baris etree di ekstensi inkscape dengan perintah dibawah ini.
    ```
    sudo sed -i -e 's/document = self.document.getroot().tostring()/document = etree.tostring(self.document.getroot())/' /usr/share/inkscape/extensions/inkex/base.py
    ```

6. selesai

#### Cara Penggunaan

Buka Inkscape, klik menu **Extensions > Generate from Path > PathOps**. Kemudian pilih boolean yang akan digunakan.

- Union
- Difference
- Intersection
- Exclusion
- Division
- Cut Path
- Combine

Prosesnya sama dengan boolean inkscape pada umumnya, tinggal memilih objek yang akan digunakan kemudian pilih menu boolean di PathOps.

#### Kode Sumber

Arsip ZIP Inkscape 1.0 bisa di unduh disini:
[PathOps Sofyan](https://gitlab.com/artemtech/inx-pathops/-/archive/inkscape-1.0/inx-pathops-inkscape-1.0.zip?path=src)

Arsip ZIP Inkscape 0.9.2 bisa di unduh disini:
[PathOps su-v 0.9.x](https://gitlab.com/su-v/inx-pathops/-/tags)

Ekstensi ini dikembangkan oleh:
[PathOps su-v](https://gitlab.com/su-v/inx-pathops)

#### Lisensi

Ink-PathOps menggunakan lisensi GPL-2+.

***

Barakallahu fiikum. Memang perlu bersabar untuk memasang ekstensi ini, tetapi InsyaAllah pasti bermanfaat. Jika kawan-kawan mempunyai pertanyaan, saran, dan kritikan silahkan komentar di akun [telegram](https://t.me/hervyqa) atau [instagram @hervyqa](https://instagram.com/hervyqa). Sekian, semoga tulisan ini bermanfaat untuk pembaca semuanya. Aamiin.

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

[Hervyqa]:https://hervyqa.id
[Manjaro-X]:https://manjaro-x.id
[Inkporter]:https://github.com/raniaamina/inkporter
