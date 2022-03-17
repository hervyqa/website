---
draft: false
date: 2019-09-18T16:41:21+07:00
title: "24 Jam Pertama dengan PureOS"
description : "PureOS merupakan distribusi GNU/Linux spesial yang dibangun oleh Purism dan secara resmi di endorse langsung oleh FSF (Free Software Foundation)."
image: "images/blog/24-jam-pertama-dengan-pureos.png"
slug: "24-jam-pertama-dengan-pureos"
type: "regular" # [featured/regular]
categories:
- desktop
---

PureOS adalah Distribusi turunan Debian yang memiliki tampilan sederhana, moderen, eklusif dan bebas. PureOS hanya membawa aplikasi yang merdeka dan merupakan salah satu distribusi selain [Trisquel] dan [gNewSense] yang didukung oleh [Free Software Foundation].

Di situs resminya mengatakan PureOS adalah distribusi yang mengutamakan privasi pengguna dengan membawa sejumlah aplikasi desktop. Karena lingkungan desktop menggunakan GNOME saya rasa cocok untuk pemula, dalam artian seperti anak-anak, mahasiswa, jurnalis, orang tua, dan bahkan untuk tetangga Anda.

Beberapa orang migrasi dari distribusi satu ke lainnya masih dikatakan wajar, sebab GNU/linux memiliki ratusan varian distribusi, dengan berbagai lingkungan desktop, berbagai aplikasi standar dan faktor selera pengguna yang berbeda pula.

Namun ada beberapa alasan masuk akal migrasi atau pindah distribusi ke PureOS, Berikut daftar ulasan dan fiturnya.

#### Live CD

PureOS memiliki kelebihan yaitu Live CD. Gunanya untuk mengecek hardware apa saja yang didukung. PureOS juga memiliki tampilan yang indah karena memakai tema gelap saat dijadikan Live CD, dan memiliki Hardware Detection Tool (HDT) serta Memory Diagnostic Tool di bagian Pilihan Lanjutan (Advanced Options).

{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-1.png" alt="live-cd-1" >}}
{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-2.png" alt="live-cd-2" >}}

#### Perbedaan

Apa saja perbedaan PureOS dengan distribusi lain? Tidak terlalu banyak, diantaranya:

- PureOS adalah salah satu GNU/Linux Sistem Operasi yang benar-benar 100% Free, artinya tidak ada aplikasi non-free baik propietary, dan/atau driver/firmware.
- PureOS sudah dikonfigurasi dengan privasi dan keamanan lapisan ganda. Seperti isolasi aplikasi dengan Wayland dan AppArmor aktif secara bawaan
- Terdapat PureBrowser penjelajah web yang dibuat dari teknologi Mozilla.
- Rolling-release model, Artinya jika ada pembaruan maka aplikasi dan driver segera diperbarui dengan fitur, keamanan, performa, atau perbaikan kutu.

Jadi dengan Rolling-release ini orang tidak perlu mengupgrade ke versi selanjutnya dengan menghabiskan kuota internet sekian giga, sebab PureOS akan memperbarui sistemnya setiap hari jika ada pembaruan.

Juga perlu diketahui secara bawaan pengaturan lokasi tidak aktif.

{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-3.png" alt="live-cd-1" >}}
{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-4.png" alt="live-cd-2" >}}

#### Endorse

PureOS salah satu sistem operasi yang diendorse langsung oleh [Free Software Foundation]. Selain PureOS [Free Distro] dari [FSF] diantaranya:

- [Dragora]
- [Dyne]
- [gNewSense]
- [Guix]
- [Hyperbola]
- [Trisquel]
- [Ututo]

#### Tampilan dan pengalaman pengguna (UI/UX)

Beberapa orang yang pernah memakai debian, ubuntu, atau fedora akan lebih mengerti tentang tampilan pengguna GNOME. Lingkungan desktop GNOME mempunyai tampilan yang bersih, solid, dan minimalis. Orang awam akan mudah paham jika diberikan lingkungan desktop seperti GNOME ini.

{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-5.png" alt="live-cd-1" >}}
{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-6.png" alt="live-cd-2" >}}

Secara bawaan GNOME menggunakan Wayland sebagai sesi bawaan, jika mesin Anda tidak didukung bisa menggunakan Xorg seperti pada mesin laptop saya Dell Vostro 3350 yang masih menggunakan mesin lama dan belum mampu untuk memakai Wayland secara optimal. Oleh karena itu diharuskan mengganti pengaturan Wayland Gnome Display Manager (GDM) ke X agar touchpad tidak muncul ganda.

```
sudo -H gedit /etc/gdm3/daemon.conf
```

dan hilangkan tanda pagar # menjadi
```
WaylandEnable=false
```

Tentu cara ini tergantung mesin anda apakah didukung Wayland apa tidak, karena mesin penulis lumayan jadul saya pakai cara ini agar GNOME memakai X saja.

#### Mendukung pen tablet

Alhamdulillah, Pen tablet wacom bisa terdeteksi dengan mudah tanpa driver. Pen Tablet juga sebagai pengganti tetikus sekaligus alat yang dibutuhkan ilustrator. Bagi penulis, Pen tablet mengurangi kemalasan dan meningkatkan produktifitas.

{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-7.png" alt="live-cd-1" >}}
{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-8.png" alt="live-cd-2" >}}

#### Bermain dan memutarkan apapun
Hal yang mengejutkan bagi penulis yang dikutip dari FAQ PureOS.

> Will I be able to open photos, videos and music from my Windows/MacOS computers?
> Yes. PureOS supports many multimedia file formats.

Meskipun hanya dengan Free Software, orang bisa memainkan berbagai berkas musik dan video seperti mp3, mp4, mkv dan ekstensi media lainnya.

{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-9.png" alt="live-cd-1" >}}
{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-10.png" alt="live-cd-2" >}}

#### Kostumisasi

PureOS memberikan aplikasi GNOME Tweak Tool secara bawaan, tentunya orang akan diberikan kebebasan untuk memodifikasi tampilan GNOME Shell. Seperti merubah ikon, fonta, shell tema, kursor dan gambar latar belakang.

{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-11.png" alt="live-cd-1" >}}
{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-12.png" alt="live-cd-2" >}}

#### Aplikasi bawaan

PureOs sudah berisi aplikasi yang siap untuk digunakan sehari-hari seperti dibawah ini.

- Aplikasi Perkantoran : [LibreOffice]
- Penjelajah Web : PureBrowser (Hasil dari teknologi Mozilla)
- Email klien : ThunderBird
- Pembuka Musik : Rhythmbox
- Pembuka Video : Totem
- Virtualisasi : Gnome Boxes 

{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-13.png" alt="live-cd-1" >}}
{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-14.png" alt="live-cd-2" >}}

{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-15.png" alt="live-cd-1" >}}
{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-16.png" alt="live-cd-2" >}}

#### Kemudahan

Dalam segi kemudahan PureOS merupakan Sistem Operasi yang sangat mudah di atur setelah baru pasang OS. Orang cukup memperbarui di Software Center dan mengeklik ikon Update. Tidak perlu menginstall codec untuk memainkan musik dan video sebab sudah tersedia codec. Tidak perlu memasang aplikasi perkantoran penjelajah web dan email klien. Tidak perlu dipasang karena sudah ada. Di bagian ini Saya hanya memasang Inkscape dan Gimp untuk kebutuhan mendesain dan ilustrasi.

{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-18.png" alt="live-cd-1" >}}
{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-19.png" alt="live-cd-2" >}}

#### Pusat aplikasi

PureOS adalah turunan dari Debian yang menggunakan GNOME. Artinya orang dapat menggunakan Software Center untuk menginstall, menghapus, dan memperbarui aplikasi dengan mudah.

{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-20.png" alt="live-cd-1" >}}
{{< image title="" w="" h="" o="webp q100" p="center" c="rounded" src="images/blog/pure-os-21.png" alt="live-cd-2" >}}

#### Pengguna yang beruntung

Jika orang sudah mencoba live CD dan memasang di media penyimpanan hardisk. Saya katakan orang tersebut adalah orang yang beruntung, sebab jelas sudah mesin-mesin yang dipakainya tersebut didukung oleh GNU/Linux. Karena jarang mesin-mesin di Indonesia yang free meskipun tidak semuanya non-free/propietary. Terkadang orang harus memasang aplikasi/driver/firmware propietary agar mesin berjalan dengan optimal. Saya katakan lagi "Hebat, orang memakai GNU/Linux yang benar-benar 100% *Free* dan menghargai privasi dengan PureOS".

#### Pranala penting

Berikut ini beberapa pranala penting tentang PureOS.

- [Laman Unduh PureOS](https://www.pureos.net/download/)
- [Kode sumber](http://repo.pureos.net/pureos/pool/main/)
- [Mengecek kompatibilitas mesin anda](https://tracker.pureos.net/w/pureos/hardware_requirements/)
- [Kumpulan aplikasi PureOS](http://software.pureos.net/)
- [Seputar Pertanyaan dan jawaban](https://tracker.pureos.net/w/faq/)

Sekian, semoga bermanfaat.

***

[Free Software Foundation]:https://www.fsf.org/
[FSF]:https://www.fsf.org/
[Free Distro]:https://www.gnu.org/distros/free-distros.en.html
[LibreOffice]:https://www.libreoffice.org/
[Dragora]:https://dragora.org/en/index.html
[Dyne]:https://www.dyne.org/software/dynebolic
[gNewSense]:https://gnewsense.org/
[Guix]:https://www.gnu.org/software/guix/
[Hyperbola]:https://www.hyperbola.info/?gnu-free-stros-page
[Trisquel]:https://trisquel.info
[Ututo]:https://www.ututo.net
