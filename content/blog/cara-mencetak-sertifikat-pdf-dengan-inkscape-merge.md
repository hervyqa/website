---
draft: false
date: 2019-12-26T23:54:47+07:00
title: "Cara Mencetak Sertifikat Pdf dengan Inkscape Merge"
description : "PDF merupakan format portabel untuk dokumen, sehingga mempermudah untuk ditampilkan dan dicetak. Ternyata dengan Inkscape Merge mencetak sertifikat jadi lebih mudah, mari simak tutorialnya."
image: "images/blog/cara-mencetak-sertifikat-pdf-dengan-inkscape-merge.png"
type: "regular" # [featured/regular]
categories:
- inkscape
- sertifikat
---

Dengan Inkscape merge mencetak sertifikat lebih cepat dan effisien. Berbekal aplikasi inkscape untuk generate pdf, libreoffice calc untuk membuat data spreadsheet csv, dan terminal emulator tentunya.
***

#### Pasang inkscape merge

Buka terminal anda kemudian jalankan perintah ini

{{< cmd >}}
gem install inkscape_merge
{{< /cmd >}}

{{< image src="images/blog/install-inkscape-merge.png" alt="Install Inkscape Merge" >}}

Jika gem path muncul peringatan seperti diatas, maka tambahkan baris berikut untuk ditambahkan ke .bashrc, .zshrc atau shell anda lainnya.

{{< file "~/.bashrc" >}}
export PATH="${HOME}/.gem/ruby/2.6.0/bin:$PATH"
{{< /file >}}

{{< image src="images/blog/gem-path.png" alt="pengaturan gem path" >}}

***
#### Variabel

Pada tutorial ini Saya akan menggunakan variabel seperti berikut.

* `%VAR_nomer%`
* `%VAR_nama%`
* `%VAR_status%`

Variabel ini hanya sekedar contoh, Anda bisa menggunakan variabel lain misalnya id, inisial, alamat, hp, instansi dan lain-lain. Jadi, untuk membuat variabel diawali dengan `%VAR_` kemudian diakhiri dengan `%`.

#### Membuat template sertifikat dengan inkscape

Tahap ini membuat template dengan Inkscape. Buatlah sertifikat dengan ukuran A4 format datar (lebar=29.7, tinggi=21 cm). Sebagai contoh hasil template.svg seperti berikut ini.

{{< image src="images/blog/contoh-sertifikat.png" alt="Contoh Sertifikat" >}}
Perhatikan juga setiap variabelnya.

{{< image src="images/blog/variabel-sertifikat.png" alt="Variabel Sertifikat" >}}

Pastikan menggunakan rata tengah untuk variabel. Umumnya ketika di generate untuk variabel nama kadang tidak lurus.

{{< image src="images/blog/tengah-1.png" alt="tengah-1" >}}
{{< image src="images/blog/tengah-2.png" alt="tengah-2" >}}
{{< image src="images/blog/tengah-3.png" alt="tengah-3" >}}

#### Membuat data csv

Buka libreoffice calc, kemudian buatlah data seperti ini sebagai contohnya.

{{< image src="images/blog/data-sertifikat.png" alt="Data Sertifikat" >}}

Pastikan variabel di calc ini memiliki nama yang sesuai dengan variabel di template svg tadi. Kemudian simpan dengan format `.csv`

{{< image src="images/blog/simpan-sertifikat.png" alt="Simpan Sertifikat" >}}

***
#### Eksekusi

Perintah eksekusinya begitu mudah dipahami.


{{< cmd >}}
inkscape_merge -d [.csv] -f [.svg] -o [hasil.pdf]
{{< /cmd >}}

Sebagai contoh:


{{< cmd >}}
inkscape_merge -d data.csv -f template.svg -o sertifikat/%VAR_nama%-pelatihan-batch-1.pdf
{{< /cmd >}}

{{< image src="images/blog/contoh-perintah.png" alt="Contoh Perintah" >}}

Maka keluarannya seperti ini.

{{< image src="images/blog/contoh-keluaran.png" alt="Contoh Keluaran" >}}

keterangan:
* -d = data csv
* -f = file/berkas template svg
* -o = keluaran sertifikat, pada contoh diatas yaitu membuat direktori sertifikat dan setiap nama berkas sertifikat diawali dengan variabel nama.

***
#### Hasil eksekusi

Hasil PDF berada di direktori "sertifikat"

{{< image src="images/blog/contoh-hasil.png" alt="Contoh Hasil" >}}

Begitu mudah bukan. Sekian, semoga bermanfaat.

***
#### Pranala penting

* Github [inkscape_merge](https://github.com/borgand/inkscape_merge)
* Unduh artboard [sertifikat](https://gitlab.com/hervyqa/artboard/raw/master/sertifikat.svg?inline=false)
***
