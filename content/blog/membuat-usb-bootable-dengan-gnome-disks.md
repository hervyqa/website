---
draft: false
date: 2019-09-19T02:14:03+07:00
title: "Membuat Usb Bootable Dengan GNOME Disks"
description : "Bootable adalah media pemasangan USB dari iso sistem operasi. Berikut tutorial mudah tentang membuat USB Bootable dengan GNOME Disks."
image: "images/blog/membuat-usb-bootable-dengan-gnome-disks.png"
type: "regular" # [featured/regular]
categories:
- perkakas
---

Salah satu cara membuat GNU/Linux USB bootable adalah dengan menggunakan GNOME Disks.
Caranya singkat dan mudah.

***

Dalam tutorial ini akan saya demokan membuat bootable PureOS. Baiklah langsung saja.

Langkah 1: Buka GNOME Disk di menu.
{{< image src="images/blog/gnome-disk_1.png" alt="buka-gnome-disk" >}}

Langkah 2: Pilihlah Stik USB.
{{< image src="images/blog/gnome-disk_2.png" alt="memilih-usb-dignome-disks" >}}

Langkah 3: Pada ikon tiga baris pilihlah "Restore Disk Image".
{{< image src="images/blog/gnome-disk_3.png" alt="pilih-restore-disk" >}}

Langkah 4: Akan muncul pesan dialog "Restore Disk Image". Pada bagian image to restore tekan tombol kotak yang bertuliskan "none".
{{< image src="images/blog/gnome-disk_4.png" alt="dialog-restore-disk-image" >}}

Langkah 5: Selanjutnya Select Disk Image to Restore, artinya pilihlah berkas ISO GNU/Linux yang akan dibuat bootable USB.
{{< image src="images/blog/gnome-disk_5.png" alt="memilih-berkas-iso" >}}

Langkah 6: Jika sudah benar memasukkan berkas ISO, pilihlah dan tekan "Start Restoring".
{{< image src="images/blog/gnome-disk_6.png" alt="start-restoring" >}}

Langkah 7: Pilih dan tekanlah "Restore".
{{< image src="images/blog/gnome-disk_7.png" alt="restore" >}}

Langkah 8: Masukkan Kata sandi root Anda dengan benar, sebab segala aktifitas yang berhubungan dengan pemartisian akan memerlukan hak akses penuh.
{{< image src="images/blog/gnome-disk_8.png" alt="masukkan-kata-sandi" >}}

Langkah 9: Tunggulah beberapa menit, GNOME Disks sedang membuat bootable ISO.
{{< image src="images/blog/gnome-disk_9.png" alt="proses-gnome-disks" >}}

Langkah 10: Ketika sudah 100% proses selesai. Bootable USB PureOS siap digunakan.
{{< image src="images/blog/gnome-disk_10.png" alt="bootable-gnome-disks" >}}

Selesai, Jadi begitu mudah membuat bootable USB dengan GNOME Disks. Sekian, Semoga bermanfaat.

***
