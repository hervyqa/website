---
layout: blog
draft: false
date: 2023-02-07T12:45:13+07:00
title: "Belajar Menggunakan Helix Editor alternatif Neovim dan Vim"
description: "This is meta description"
image: "images/blog/belajar-menggunakan-helix-editor-alternatif-neovim-dan-vim.png"
type: "featured" # featured/regular
categories: # max 2
- helix
- editor
---

[Helix](https://helix-editor.com) merupakan teks editor CLI dengan dukungan
modal alternatif Neovim dan VIM. Helix dibuat menggunakan bahasa pemrograman
rust sehingga lebih cepat performanya dengan single binary.

{{< image src="images/blog/matplotlib-sample.png" alt="matplotlib-sample" >}}

#### Fitur andalan

Hal yang paling saya sukai dari helix adalah minimalis konfigurasi.
Tidak seperti Neovim dan VIM yang diharuskan memanajemen konfigurasinya
dengan memasang plugin-plugin agar sesuai workflow yang diharapkan.
Berikut daftar fitur yang dimiliki oleh helix yang dikutip di halaman resminya:

* __Seleksi banyak plihan secara bersama.__
  Pengeditan kode multi-kursor secara bersamaan sudah built-in di helix.
* __Integrasi dengan Tree-sitter.__
  Mengaktifkan _syntax highlighting_, kalkulasi indent dan navigasi kode.
* __Manipulasi kode.__
  Mudahnya
[navigasi](https://docs.helix-editor.com/usage.html#tree-sitter-textobject-based-navigation)
dan penyeleksian fungsi, kelas, komentar, dan sebagainya.
* __Dukungan Language server.__
  Dengan spesifik bahasa autokomplit, menuju definisi, dokumentasi, diagnosa,
dan fitur IDE tanpa konfigurasi tambahan.
* __Dibangun dengan bahasa pemrograman rust.__
  Performa yang tinggi dan lebih hemat daya baterai.
* __Builtin fitur.__
  Fitur pencarian fuzzy untuk perncarian berkas, simbol, projek, tema,
fugitive, surround dan masih banyak lagi.

#### Shock therapy

Sebelumnya saya adalah pengguna neovim dan vim tentunya. Ketika menggunakan
helix mau tidak mau harus belajar lagi. Meskipun minim konfigurasi, helix
memiliki keymap yang 30% berbeda dengan neovim/vim dan harus dihafal agar
terbiasa. Selebihnya keymap lain hampir sama. Beruntungnya developer helix sudah
memberikan tutorial yang sudah built-in seperti `vimtutor` di vim.

```sh
hx --tutor
```

---

#### Bagian 1: Pemasangan

##### GNU/Linux

Pemasangan di distribusi linux tergantung dari paket manager yang digunakan,
umumnya menggunakan nama paket `helix`. Anda bisa mengecek paket tersebut apakah
tersedia di distribusi linux melalui situs
[Repology](https://repology.org/project/helix/versions).

* NixOS

```sh
environment.systemPackages = [pkgs.helix]; # configuration.nix
```

* Voidlinux

{{< cmd >}}
sudo xbps-install helix
{{< /cmd >}}

* LangitKetujuh

{{< cmd >}}
get helix
{{< /cmd >}}

* Fedora

{{< cmd >}}
sudo dnf copr enable varlad/helix
{{< /cmd >}}
{{< cmd >}}
sudo dnf install helix
{{< /cmd >}}

* Arch linux

{{< cmd >}}
sudo pacman helix-git
{{< /cmd >}}
 
##### MacOS

Helix tersedia di homebrew-core. Buka `iterm2` atau terminal lalu jalankan
perintah ini.

{{< cmd >}}
brew install helix
{{< /cmd >}}

##### Windows

Tersedia melalui [Scoop](https://scoop.sh),
[Chocolatry](https://chocolatey.org) atau [MSYS2](https://msys2.org).

{{< cmd >}}
scoop install helix # scoop
{{< /cmd >}}
{{< cmd >}}
choco install helix # choco
{{< /cmd >}}
{{< cmd >}}
pacman -S mingw-w64-x86_64-helix # MSYS2
{{< /cmd >}}

Panduan pemasangan selengkapnya bisa merujuk ke halaman
[dokumentasi](https://docs.helix-editor.com/install.html).

---

#### Bagian 2: Penggunaan dasar

##### Arah navigasi kursor

Seperti navigasi di vim, `helix` menggunakan `h`, `j`, `k`, dan `l` untuk
memindahkan kursor. Menggunakan keymap arah panah juga bisa, tetapi menggunakan
hjkl lebih cepat.

- <kbd><kbd>h</kbd></kbd> = Kiri
- <kbd><kbd>j</kbd></kbd> = Bawah
- <kbd><kbd>k</kbd></kbd> = Atas
- <kbd><kbd>l</kbd></kbd> = Kanan

##### Membuka berkas

Membuka helix dengan menjalankan `hx`.

{{< cmd >}}
hx
{{< /cmd >}}

Membuka dengan berkas tertentu.

{{< cmd >}}
hx filename.xyz
{{< /cmd >}}

##### Menutup helix

Helix juga memiliki mode `normal`, `insert`, dan `visual` seperti vim.
Beberapa pintasan mode `normal` berikut masih umum dan kompatibel dengan helix.

* `:q` = Menutup berkas dan aplikasi.
* `:q!` = Menutup aplikasi secara paksa.
* `:qa!` = Menutup semua buffer yang terbuka dan aplikasi secara paksa.

_Catatan: buffer adalah berkas atau direktori yang telah terbuka._

---

#### Bagian 2: Konfigurasi 

Beberapa konfigurasi dasar yang mungkin perlu ditambahkan. Misalnya jenis tema
dan nomer baris.

```
:theme tokyonight
```

Konfigurasi permanen bisa membuka `config.toml`.

* `:config-open` = Membuka konfigurasi helix.

{{< file "~/.config/helix/config.toml" >}}

```toml
theme = "tokyonight"

[editor]
line-number = "relative"
cursorline = true

[editor.lsp]
display-messages = true
```

* `:config-reload` = Memuat ulang konfigurasi helix.

Yap, benar. Konfigurasi tambahan saya hanya beberapa baris diatas.
Selengkapnya dapat merujuk ke halaman
[konfigurasi](https://docs.helix-editor.com/configuration.html).

---

#### Bagian 4: Penggunaan lanjutan

##### Menghapus karakter

Berbeda dengan vim, menghapus karakter di helix menggunakan
keymap <kbd><kbd>d</kbd></kbd>.

* <kbd><kbd>d</kbd></kbd> = Menghapus 1 karakter.

##### Memasukkan karakter

Sama halnya dengan vim, mode `insert` tetap menggunakan <kbd><kbd>i</kbd></kbd>.

* <kbd><kbd>i</kbd></kbd> = Mode `insert`.
* <kbd><kbd>Esc</kbd></kbd> = Mode `normal` (keluar dari mode insert).

##### Menyimpan berkas

* `:w` = Menyimpan berkas di buffer saat ini.
* `:w filename.xyz` = Menyimpan berkas di buffer dengan nama tertentu.

Bisa dikombinasikan dengan `q` untuk keluar dari helix.

* `:wq` = Menyimpan dan menutup aplikasi.
* `:wqa` = Menyimpan dan menutup semua buffer.

##### Mode insert

Seperti yang telah diketahui sebelumnya, keymap <kbd><kbd>i</kbd></kbd> untuk
mode insert tepat sebelum kursor. Sedangkan ada beberapa keymap lainnya seperti:

* <kbd><kbd>i</kbd></kbd> = Mode `insert` sebelum kursor.
* <kbd><kbd>a</kbd></kbd> = Mode `insert` setelah kursor.
* <kbd><kbd>I</kbd></kbd> = Mode `insert` di awal baris.
* <kbd><kbd>A</kbd></kbd> = Mode `insert` di akhir baris.

##### Membuka baris baru

* <kbd><kbd>o</kbd></kbd> = Mode `insert` setelah baris saat ini.
* <kbd><kbd>O</kbd></kbd> = Mode `insert` sebelum baris saat ini.

Perintah diatas mirip di neovim atau vim.

##### Perpindahan dan seleksi

Perpindahan dan penyeleksian di helix dilakukan secara otomatis dan bersamaan.
Sedikit berbeda dengan vim.

* <kbd><kbd>w</kbd></kbd> = Pindah dan menyeleksi 1 kata, termasuk spasinya.
* <kbd><kbd>e</kbd></kbd> = Pindah dan menyeleksi 1 kata dari kursor sampai di
akhir karakter kata.
* <kbd><kbd>b</kbd></kbd> = Pindah dan menyeleksi 1 kata dari kursor sampai di
awal karakter kata.

keymap <kbd><kbd>W</kbd></kbd>, <kbd><kbd>E</kbd></kbd> dan
<kbd><kbd>B</kbd></kbd> juga memiliki fungsi yang serupa, hanya saja
perpindahannya tergantung dari whitespace seperti spasi dan tab.

##### Perpindahan dengan hitungan

Pindah dengan hitungan juga dapat dilakukan, misalnya `2w`, `4e`, `5b`.
Penjelasannya seperti ini:

* <kbd><kbd>2w</kbd></kbd> = Pindah 2 kata ke depan.
* <kbd><kbd>4e</kbd></kbd> = Pindah 4 kata ke depan yang diakhiri di akhir kata.
* <kbd><kbd>5b</kbd></kbd> = Pindah 5 kata ke belakang.

##### Mengubah karakter

Pintasan yang digunakan yaitu keymap <kbd><kbd>c</kbd></kbd>.

* <kbd><kbd>c</kbd></kbd> = Mengubah karakter atau kata/kalimat yang terseleksi.

Misalnya menyeleksi kata dengan <kbd><kbd>w</kbd></kbd>, lalu ganti dengan
keymap <kbd><kbd>c</kbd></kbd>, langsung masuk ke mode insert.

##### Mode visual/seleksi

Mode visual di helix hampir sama seperti di vim.

* <kbd><kbd>v</kbd></kbd> = Mode `visual`.
* <kbd><kbd>v</kbd></kbd> lagi, atau <kbd><kbd>Esc</kbd></kbd> = Mode `normal`
(keluar dari mode visual).

##### Menyeleksi baris

Menyeleksi baris menggunakan keymap <kbd><kbd>x</kbd></kbd>, jika ingin
menyeleksi baris selanjutnya tekan <kbd><kbd>x</kbd></kbd> lagi. Kadang kala
niatnya ingin menghapus suatu karakter, tetapi menjadi seleksi di helix. (akibat
alam bawah sadar terbiasa menggunakan <kbd><kbd>x</kbd></kbd> untuk menghapus
karakter di vim.)

* <kbd><kbd>x</kbd></kbd> = Menyeleksi 1 baris.
* <kbd><kbd>5x</kbd></kbd> = Menyeleksi 5 baris.
* <kbd><kbd>;</kbd></kbd> = Melepaskan seleksi baris.
- <kbd><kbd>Alt</kbd>+<kbd>;</kbd></kbd> = Membalikkan/flip seleksi baris.

##### Pembatalan perubahan

Perintah untuk membatalkan perubahan:
* <kbd><kbd>u</kbd></kbd> = Undo
* <kbd><kbd>U</kbd></kbd> (Shift+u) = Redo.

Ulangi beberapa kali hingga perubahan sesuai dengan yang diharapkan.

##### Penyalinan dan penempelan

Menyalin di helix dapat dilakukan di internal helix maupun di sistem
_clipboard_.

* <kbd><kbd>y</kbd></kbd> = Yank/copy, menyalin karakter yang terseleksi.
* <kbd><kbd>p</kbd></kbd> = Paste, menempelkan hasil salinan.
* <kbd><kbd>P</kbd></kbd> = Paste, menempelkan hasil salinan ke posisi sebelum
kursor.

Dapat dilakukan juga dengan perhitungan untuk menentukan jumlah
salinan/tempelan.

* <kbd><kbd>2y</kbd></kbd> = 2x Yank/copy, menyalin karakter yang terseleksi.
* <kbd><kbd>4p</kbd></kbd> = 4x Paste, menempelkan hasil salinan.
* <kbd><kbd>10P</kbd></kbd> = 10x Paste, menempelkan hasil salinan ke posisi
sebelum kursor.

Pada dasarnya keymap <kbd><kbd>d</kbd></kbd> (menghapus karakter) dan
<kbd><kbd>c</kbd></kbd> (mengubah karakter) juga dapat dikatakan mode yank, yang
mana hasil karakter yang dihapus/diubah disimpan di buffer sehingga dapat
dilakukan perintah tempel (paste)
<kbd><kbd>p</kbd></kbd>/<kbd><kbd>P</kbd></kbd>.

Untuk menghindari penyimpanan di buffer, gunakan
<kbd><kbd>Alt</kbd>+<kbd>d</kbd></kbd> atau
<kbd><kbd>Alt</kbd>+<kbd>c</kbd></kbd>.

Sedangkan untuk menyalin atau menempelkan dari sistem _clipboard_, gunakan
keymap dibawah ini.

* <kbd><kbd>Spasi</kbd>+<kbd>y</kbd></kbd> = Copy/menyalin dari sistem
_clipboard_.
* <kbd><kbd>Spasi</kbd>+<kbd>p</kbd></kbd> = Paste/menempelkan dari sistem
_clipboard_.

##### Pencarian karakter

Mencari karakter seperti di vim atau neovim.
* <kbd><kbd>/</kbd></kbd> = Mencari karakter/kata.
* <kbd><kbd>n</kbd></kbd> = Menuju hasil pencarian selanjutnya.
* <kbd><kbd>N</kbd></kbd> = Menuju hasil pencarian ke sebelumnya.
* <kbd><kbd>?</kbd></kbd> = Mencari karakter/kata secara mundur.

Tidak seperti di vim, jika melakukan pencarian dengan <kbd><kbd>?</kbd></kbd>
arah <kbd><kbd>n</kbd></kbd> tetap kedepan dan <kbd><kbd>N</kbd></kbd> ke
belakang/sebelumnya.

##### Multiple cursor

Menambahkan kursor sangat berguna untuk mengubah karakter secara bersamaan.
Misalnya untuk menghapus, mengganti, dan fungsi regex.

* <kbd><kbd>C</kbd></kbd> = Menambahkan kursor dibaris selanjutnya.
* <kbd><kbd>Alt</kbd>+<kbd>C</kbd></kbd> = Menambahkan kursor dibaris
sebelumnya.
* <kbd><kbd>,</kbd></kbd> = Keluar dari mode multi kursor.

##### Memilih dari hasil seleksi

Hal ini bertujuan untuk mengganti suatu karakter atau teks yang sudah diseleksi.
Biasanya untuk menggantikan kata, semacam fungsi sed regex di vim.

* <kbd><kbd>s</kbd></kbd> = Memilih karakter yang cocok sesuai yang diseleksi.

Misalnya pola kerjanya seperti ini, seleksi dengan <kbd><kbd>x</kbd></kbd>
beberapa kali atau <kbd><kbd>%</kbd></kbd> untuk semua baris.
tekan <kbd><kbd>s</kbd></kbd> lalu masukkan karakter yang dituju, tekan
<kbd><kbd>Enter</kbd></kbd>. Secara otomatis menjadi multi kursor.
Selanjutnya dapat diubah sesuai keinginan.

##### Seleksi tambahan dengan regex

Penyeleksian ini dapat menggunakan tanda plus (`+`) saat menggunakan keymap
<kbd><kbd>s</kbd></kbd> di area seleksi.
Misalnya: spasi dan plus (` +`)

##### Meluruskan dari seleksi

* <kbd><kbd>&</kbd></kbd> = Meluruskan hasil seleksi.

Misalnya ada baris seperti ini.

```md
 * 98) lorem
 * 99) ipsum
 * 100) dolor
 * 101) sit
 * 102) amet
```

Menjadi:

```md
 *  97) lorem
 *  99) ipsum
 * 100) dolor
 * 101) sit
 * 102) amet
```

##### Membagi seleksi ke sebuah baris

* <kbd><kbd>Alt</kbd>+<kbd>s</kbd></kbd> = Untuk membagi menjadi pilihan di
setiap baris.
Umumnya digunakan untuk meluruskan tabel.

```sh
    | FRUIT   | AMOUNT |
    |---------|--------|
 | Apples  | 8      |
    | Bananas | 6      |
  | Oranges | 3      |
     | Donuts  | 4      |
```

Menjadi:

```sh
     | FRUIT   | AMOUNT |
     |---------|--------|
     | Apples  | 8      |
     | Bananas | 6      |
     | Oranges | 3      |
     | Donuts  | 4      |
```

##### Menyeleksi sampai ke karakter tertentu.

* <kbd><kbd>f</kbd></kbd> = Menyeleksi baris hingga tepat sampai ke karakter
yang dituju.
* <kbd><kbd>t</kbd></kbd> = Menyeleksi baris hingga sampai ke karakter yang
dituju, kursor tidak sampai ke karakter.

<kbd><kbd>F</kbd></kbd> dan <kbd><kbd>T</kbd></kbd> juga memiliki fungsi serupa,
hanya saja melewatidi titik whitespace spasi atau tab.

##### Mengganti karakter atau kata

* <kbd><kbd>r</kbd></kbd> = Menempelkan dengan karakter khusus.
* <kbd><kbd>R</kbd></kbd> = Menempelkan dengan hasil salinan dari buffer atau
dari system _clipboard_.

##### Pengulangan

Pengulangan dapat dilakukan untuk mengulang perintah yang sama,
atau mengulang hasil pencarian <kbd><kbd>f</kbd></kbd> dan
<kbd><kbd>t</kbd></kbd> sebelumnya.

* <kbd><kbd>.</kbd></kbd> = Mengulangi hasil mode insert sebelumnya.
* <kbd><kbd>Alt</kbd>+<kbd>.</kbd></kbd> = Mengulangi perintah dari hasil
<kbd><kbd>f</kbd></kbd> atau <kbd><kbd>t</kbd></kbd> sebelumnya.

##### Mengganti teks dari salinan yank/clipboard

Setelah ada salinan teks baik berupa yank atau dari sistem clipboard, dapat
digunakan untuk mengganti teks lain jika sudah diseleksi.

* <kbd><kbd>R</kbd></kbd> = Mengganti teks yang terseleksi dengan hasil salinan
yank/clipboard.

##### Menggabungkan baris

Beberapa baris perlu diseleksi dahulu dengan <kbd><kbd>x</kbd></kbd>, kemudian
tekan <kbd><kbd>J</kbd></kbd>.

* <kbd><kbd>J</kbd></kbd> = Menggabungkan beberapa baris yang sudah diseleksi.

##### Indentasi baris

Indentasi pada baris saat ini atau baris yang diseleksi.

* <kbd><kbd>\></kbd></kbd> = Indentasi menjorok ke luar/kanan.
* <kbd><kbd>\<</kbd></kbd> = Indentasi menjorok ke dalam/kiri.

##### Incrementing and decrementing

Penambahan dan pengurangan nilai dapat dilakukan di helix. Biasanya dilakukan
untuk mengubah nilai pada daftar.

* <kbd><kbd>Ctrl</kbd>+<kbd>a</kbd></kbd> = Menambahkan nilai.
* <kbd><kbd>Ctrl</kbd>+<kbd>x</kbd></kbd> = Mengurangi nilai.

Sebagai contoh:

```sh
1) list a
3) list b
4) list c
5) list d
6) list e
```

Menjadi,

```sh
1) list a
2) list b
3) list c
4) list d
5) list e
```

##### Fungsi Register

Berfungsi untuk menyimpan hasil salinan yang berbeda-beda, tetapi dapat
dipanggil suatu saat.
Berbeda dengan yank biasa yang hanya menyinpan 1 penyimpanan saja.
Sedangkan dengan register mampu menyimpan hasil salinan yang banyak dan berbeda.

Sebagai contoh register:

* kondisi a: menyalin `kalimat satu`
* kondisi b: menyalin `kalimat dua`
* kondisi c: menyalin `kalimat tiga`

Ada 3 kondisi yang terdiri dari `a`, `b`, dan `c`. Maka untuk menyimpan register
tersebut dengan perintah:

* <kbd><kbd>"a</kbd></kbd>, lalu <kbd><kbd>y</kbd></kbd> = Menyimpan (yank)
salinan ke register `a`.
* <kbd><kbd>"b</kbd></kbd>, lalu <kbd><kbd>y</kbd></kbd> = Menyimpan (yank)
salinan ke register `b`.
* <kbd><kbd>"c</kbd></kbd>, lalu <kbd><kbd>y</kbd></kbd> = Menyimpan (yank)
salinan ke register `c`.

Setelah disimpan, selanjutnya menempelkan teks dari suatu register.

* <kbd><kbd>"a</kbd></kbd>, lalu <kbd><kbd>p</kbd></kbd> = Menempelkan (paste)
teks dari register `a`.
* <kbd><kbd>"b</kbd></kbd>, lalu <kbd><kbd>p</kbd></kbd> = Menempelkan (paste)
teks dari register `b`.
* <kbd><kbd>"c</kbd></kbd>, lalu <kbd><kbd>p</kbd></kbd> = Menempelkan (paste)
teks dari register `c`.

Hasil salinan tersebut juga dapat digunakan untuk mengganti teks yang sudah diseleksi.

* <kbd><kbd>"a</kbd></kbd>, lalu <kbd><kbd>R</kbd></kbd> = Mengganti (replace)
teks dari register `a`.
* <kbd><kbd>"b</kbd></kbd>, lalu <kbd><kbd>R</kbd></kbd> = Mengganti (replace)
teks dari register `b`.
* <kbd><kbd>"c</kbd></kbd>, lalu <kbd><kbd>R</kbd></kbd> = Mengganti (replace)
teks dari register `c`.

##### Fungsi Makro

Berguna untuk menyimpan langkah-langkah perintah ke dalam suatu register
(default @).

* <kbd><kbd>Q</kbd></kbd> = Memulai perekaman makro.
* <kbd><kbd>Q</kbd></kbd> lagi = Menghentikan perekaman makro.
* <kbd><kbd>q</kbd></kbd> = Menjalankan fungsi makro.
* <kbd><kbd>5q</kbd></kbd> = Menjalankan fungsi makro selama 5 kali, bisa
diganti dengan <kbd><kbd>(n)q</kbd></kbd>.

##### Pencarian dengan penyeleksian

Mencari teks yaitu menggunakan <kbd><kbd>/</kbd></kbd> lalu mengetik kata yang
ingin dicari.
Selain dengan mengetikkan karakter, cara lain yaitu dengan menyeleksi karakter
sebagai karakter pencarian.

Setelah menyeleksi sebuah karakter kata misalnya dengan
<kbd><kbd>w/e/b</kbd></kbd>, tekan <kbd><kbd>*</kbd></kbd> untuk menyimpan
sebagai register pencarian.
Kemudian kata tersebut dapat dicari dengan <kbd><kbd>n</kbd></kbd> atau
<kbd><kbd>N</kbd></kbd>.

* <kbd><kbd>*</kbd></kbd> = Menyimpan hasil seleksi ke dalam register pencarian
<kbd><kbd>/</kbd></kbd>.

##### Menggunakan Jumplist

Dengan daftar lompat memungkinkan untuk menyimpan posisi kursor di posisi
tertentu.

* <kbd><kbd>Ctrl</kbd>+<kbd>s</kbd></kbd> = Menyimpan jumplist.
* <kbd><kbd>Ctrl</kbd>+<kbd>o</kbd></kbd> = Jumplist selanjutnya.
* <kbd><kbd>Ctrl</kbd>+<kbd>i</kbd></kbd> = Jumplist sebelumnya.

##### Memutar dan menghapus seleksi primer

Setelah menyeleksi, mungkin adakalanya beberapa seleksi tidak perlu diikutkan.
Dengan menggunakan <kbd><kbd>Alt</kbd>+<kbd>,</kbd></kbd>, hasil seleksi yang
terpilih bisa dihapus.

* <kbd><kbd>)</kbd></kbd> = Menuju primer seleksi selanjutnya.
* <kbd><kbd>(</kbd></kbd> = Menuju primer seleksi sebelumnya.
* <kbd><kbd>Alt</kbd>+<kbd>,</kbd></kbd> = Menghapus primer seleksi utama.

##### Mengganti huruf besar/kecil

Mengganti huruf kapital ke huruf kecil dapat menggunakan
<kbd><kbd>\`</kbd></kbd>, sedangkan huruf besar menggunakan
<kbd><kbd>Alt</kbd>+<kbd>\`</kbd></kbd>.

* <kbd><kbd>\`</kbd></kbd> = Mengganti ke huruf kecil.
* <kbd><kbd>Alt</kbd>+<kbd>\`</kbd></kbd> = Mengganti ke huruf besar.
* <kbd><kbd>~</kbd></kbd> = Membalikkan jenis huruf besar ke kecil dan
sebaliknya.

##### Memisahkan seleksi dengan pattern regex

Memisahkan seleksi mempunyai kondisi studi kasus khusus, misalnya ingin membuat
huruf kapital suatu kalimat, memisahkan penggabungan baris menjadi beberapa
baris, dan kondisi lain yang diharuskan untuk memisahkan kata/kalimat yang sudah
diseleksi.

Gambaran umum langkahnya seperti berikut ini.
* Seleksi baris, bisa menggunakan <kbd><kbd>x</kbd></kbd>,
<kbd><kbd>w</kbd></kbd>, <kbd><kbd>e</kbd></kbd>, atau <kbd><kbd>b</kbd></kbd>.
* Tekan <kbd><kbd>S</kbd></kbd> untuk seleksi split.
* Pilih pattern regex.
Misalnya dipisah melalui tanda titik spasi (. ), tanda seru spasi (! ), tanda
tanya spasi (? ).
Pakai spasi biasanya kalimat selalu dipisahkan dengan tanda pemisah dan spasi.
Jadi, pemulisan regexnya adalah "`\. |! |\? `".
Titik dan tanda tanya perlu diawali backslash (\).
* Pilih posisi kursor bisa didepan atau dibelakangnya kalimat terpisah. Cara
memindahkannya dengan <kbd><kbd>Alt</kbd>+<kbd>;</kbd></kbd>.
* Dalam mode multi kursor, ganti perubahan yang diinginkan dengan
<kbd><kbd>r</kbd></kbd>, <kbd><kbd>c</kbd></kbd>, atau <kbd><kbd>i</kbd></kbd>.

Sebagai contoh, ada 3 kalimat. pisahkan dan beri huruf kapital didepan.

```plain
belajar bahasa pemrograman! python adalah high-level programming? diciptakan oleh guido van rossum. 
```

Menjadi:

```plain
Belajar bahasa pemrograman!
Python adalah high-level programming?
Diciptakan oleh guido van rossum.
```

{{< video regex-helix.mp4 >}}

---

#### Bagian 5: Penutup

Saya menyarankan helix apabila ingin menggunakan minimal konfigurasi yang sudah
tersedia autokomplit, fuzzy, multi kursor yang sudah builtin. Meskipun
`language-server` setiap bahasa pemrograman dipasang secara terpisah dengan
helix (begitu pula dengan editor lainnya), helix tetap memiliki fitur seperti
autopairs, fugitive, dan lain-lain sebagai penunjang menulis program.
Pengaturan untuk LSP tersedia di [wiki github](https://github.com/helix-editor/helix/wiki/How-to-install-the-default-language-servers).
Konfigurasi keymap dan cara penggunaan lebih lengkap ada di
[dokumentasi resmi](docs.helix-editor.com).

Helix terbilang memiliki performa yang cukup cepat.
Bahkan tersedia dukungan modal seperti <kbd><kbd>Spasi</kbd></kbd>,
<kbd><kbd>f</kbd></kbd> dan <kbd><kbd>g</kbd></kbd> yang memudahkan untuk
menavigasi.
Tentu pengguna baru yang bermigrasi dari vim atau neovim akan menyukainya dan
sangat layak untuk dicoba.

---

Jika kawan-kawan mempunyai pertanyaan, saran, dan kritikan silahkan komentar di
akun [telegram](https://t.me/hervyqa). Sekian, semoga tulisan ini bermanfaat
untuk pembaca semuanya. Aamiin.
