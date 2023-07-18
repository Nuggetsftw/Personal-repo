# CRUDForm - PHP Database Documentation

<li>Create (membuat) adalah ketika kita menambahkan data baru ke dalam sistem. Misalnya, saat kita menambahkan catatan baru di aplikasi pengingat atau menambahkan produk baru di toko online.</li>

<li>Read (membaca) adalah ketika kita membaca atau melihat data yang sudah ada di dalam sistem. Contohnya, ketika kita membaca email yang masuk atau melihat daftar pesanan yang sudah dilakukan di toko online.</li>

<li>Update (memperbarui) adalah ketika kita mengubah data yang sudah ada di dalam sistem. Misalnya, ketika kita mengubah alamat pengiriman pada pesanan atau mengubah status pekerjaan pada profil pengguna. </li>

<li>Delete (menghapus) adalah ketika kita menghapus data yang sudah ada di dalam sistem. Misalnya, ketika kita menghapus pesan yang tidak diperlukan atau produk yang sudah tidak dijual lagi di toko online. </li>

## Joseph CrudALForm
![CRUD Images by Course-Net](https://storage.cloudconvert.com/tasks/b854a561-1123-485d-9cf9-1dcd8db6ef9b/1_2eBdh0vLZjUyCDF6x1EqvQ-1.png?AWSAccessKeyId=cloudconvert-production&Expires=1678776579&Signature=dga4H0uyQjyVSKNYaUElUqgXmh0%3D&response-content-disposition=inline%3B%20filename%3D%221_2eBdh0vLZjUyCDF6x1EqvQ-1.png%22&response-content-type=image%2Fpng)

Operasi CRUD adalah konsep dasar dalam pengembangan aplikasi dan digunakan untuk memanipulasi data pada berbagai jenis aplikasi seperti aplikasi web, aplikasi mobile, dan sistem manajemen basis data. Dengan menggunakan konsep CRUD, pengelolaan data menjadi lebih mudah dan terstruktur.

### Technologies Used
<li>PHP</li>
<li>Database PhpMyAdmin</li>

### Getting Started
To get started with this project, simply clone this repository to your local machine and open the index.html file in your web browser.

git clone https://github.com/JosephCETH30/CRUDForm.git  cd CRUDForm 

Contributing If you would like to contribute to this project, please fork the repository and submit a pull request with your changes. We welcome all contributions!

License This project is licensed under the MIT License - see the LICENSE.md file for details. 

## Download Xampp #1
![Xamppimage](https://user-images.githubusercontent.com/127705735/224633988-4dc97898-76b8-405a-88aa-a61ab3601231.png)
<li> Install XAMPP di komputer Anda. Anda bisa mendownloadnya di https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.0.25/xampp-windows-x64-8.0.25-0-VS16-installer.exe </li>
<li> Buka browser dan ketikkan "http://localhost/phpmyadmin/" pada address bar untuk membuka phpMyAdmin. Di sini Anda akan membuat database baru. </li>

#### For Linux 
![Screenshot 2023-03-13 143124](https://user-images.githubusercontent.com/127705735/224635349-568f7f21-b98a-4de6-a8b7-820beeafc075.png)
<li> Install XAMPP di komputer Anda. Anda bisa mendownloadnya di https://sourceforge.net/projects/xampp/files/XAMPP%20Linux/8.0.25/xampp-linux-x64-8.0.25-0-installer.run </li>
<li> Buka browser dan ketikkan "http://localhost/phpmyadmin/" pada address bar untuk membuka phpMyAdmin. Di sini Anda akan membuat database baru. </li>

#### For MacOs
![Screenshot 2023-03-13 143525](https://user-images.githubusercontent.com/127705735/224636287-e7cb44aa-b1ce-40ca-9387-2dc404cf3360.png)
acOs 
<li> Install XAMPP di komputer Anda. Anda bisa mendownloadnya di https://sourceforge.net/projects/xampp/files/XAMPP%20Mac%20OS%20X/8.0.25/xampp-osx-8.0.25-0-installer.dmg </li>
<li> Buka browser dan ketikkan "http://localhost/phpmyadmin/" pada address bar untuk membuka phpMyAdmin. Di sini Anda akan membuat database baru. </li>

## Download VsCode #2
![Screenshot 2023-03-13 144502](https://user-images.githubusercontent.com/127705735/224637978-12f159d0-3b4d-4318-8294-8b5655f4ec60.png) <br><br>
&ndash;&rarr; Jangan lupa Juga sebelum itu Install VScode untuk Kita Coding Nanti dan yang terpenting pastinya Kalian Bisa langsung Download dari Link dibawah ini ya : 
<li>Link Download VSC untuk Windows : https://code.visualstudio.com/docs/?dv=win64user</li>
<li>Link Download VSC untuk Linux : https://code.visualstudio.com/docs/?dv=osx</li>
<li>Link Download VSC untuk MacOs : https://code.visualstudio.com/docs/?dv=linux64_deb</li>

<br><br>
Langsung saja kita ke Step by Step membuat CRUD PHP Form.

## Jalankan Xampp #3
![Screenshot 2023-03-13 145802](https://user-images.githubusercontent.com/127705735/224640535-c65ad28c-f83a-4395-96a3-63b5afd62924.png)
<li> Buka Xampp Lalu Klik Start pada Module-Apache dan Module-MySQL Seperti yang ada di Gambar diatas, Mengapa kita harus Mengaktifkan Keduanya karena Menurut Doc Xampp. <br>
&ndash; Module Apache pada XAMPP adalah sebuah komponen yang membantu server Apache dalam menjalankan tugas-tugasnya dengan lebih efisien dan efektif. Module-module ini terdiri dari berbagai macam fungsi, seperti mod_rewrite, mod_ssl, mod_security, dan lain-lain, yang masing-masing memungkinkan server Apache untuk melakukan hal-hal tertentu seperti mengubah alamat URL, enkripsi SSL, dan keamanan web. <br>
&ndash; Module MySQL pada XAMPP adalah sebuah komponen yang digunakan untuk mengelola database MySQL pada server lokal. Module ini memungkinkan pengguna untuk membuat, mengedit, dan menghapus database MySQL dengan mudah dan cepat.
Module MySQL pada XAMPP juga menyediakan antarmuka grafis yang memudahkan pengguna dalam mengelola database, seperti phpMyAdmin. Dengan menggunakan phpMyAdmin, pengguna dapat melakukan tugas-tugas seperti membuat tabel, mengubah struktur tabel, menambahkan data, dan lain-lain.

## Buat Database di PHPMyAdmin #4
Dibawah ini adalah Instruksi untuk Membuat Database secara Mudah dan Terstruktur , Jika masih Bingung bisa dibaca dulu Doc untuk PHPMyAdmin nya : https://www.phpmyadmin.net/docs/
<br><br>
![Screenshot_2023-03-13_151656-removebg-preview](https://user-images.githubusercontent.com/127705735/224644715-03ce9cb8-7b88-43f0-b7b3-63b2c33b61c7.png)
<br><br>
Cuss, Langsung Saja kita Jalankan Misi CrudForm kita!

### Buat Database Baru dengan Nama 'CrudForm' atau Sesuaikan dengan Keinginan Kalian
<a href="http://localhost/phpmyadmin/index.php?route=/server/databases">![Screenshot 2023-03-13 151953](https://user-images.githubusercontent.com/127705735/224645087-81fe7c91-4c1c-4b6b-bae0-102830977202.png)</a>
<li> isi Database Name dengan Nama Database Sesuai Keinginan, Saya Mengisinya dengan CrudForm </li>

### Jika sudah Tekan Database Tadi dan Add Coloumn ubah namanya Menjadi 'Crud' ataupun Bebas , dan Ubah Coloumn menjadi '5'.
![Screenshot 2023-03-13 152849](https://user-images.githubusercontent.com/127705735/224647117-6089fc15-f9b7-4c4b-a5a2-fd19f2c3af58.png)
<li> Jumlah Kolom disesuaikan dengan Kebutuhan dari Si User dan si Developer dalam Memperoleh hasil Input Users atau Respon dari Website. </li>

### Lalu Setelah Table sudah Dibuat Sesuaikan Input yang ingin Dibuat dalam Table, Jika saya Seperti ini : 
![image](https://user-images.githubusercontent.com/127705735/224648992-3b0d66a1-3dfb-492a-905d-b62e4e7a9787.png)
<li> Implementasi CRUD Kita Kali ini Mengenai Add Users , Update Users , Delete Users (PHP) </li>
<li> Untuk Input diatas diisi dengan : </li> <br>
[Col 1 : id] [Index : Primary - Default] [A_I : Checklist] <br>
[Col 2 : nim] [Type : VARCHAR] [Length/Value : 25] <br>
[Col 3 : nama] [Type : VARCHAR] [Length/Value : 25] <br>
[Col 4 : alamat] [Type : VARCHAR] [Length/Value : 25] <br>
[Col 5 : fakultas] [Type : VARCHAR] [Length/Value : 25] <br>

## Visual Studio Code & Konfigurasi Xampp #5
![vscodelogo](https://user-images.githubusercontent.com/127705735/224692535-3034aca0-3e27-4c90-8c0a-4e27a60a0c39.png)
<li>Jangan Lupa Sekali lagi untuk Menyalakkan Xampp, Lalu kita langsung saja masuk VSCode nya</li>

### Konfigurasi File Htdocs
![image](https://user-images.githubusercontent.com/127705735/224692202-7f885d3a-576b-4ebe-b77b-9989e4520b3f.png)

<li>Setelah VSCode dibuka lalu Klik File > New File</li>
<li>Save File tersebut dalam Folder dengan nama (Jika saya) "php-mysqli" atau bebas sesuai Kebutuhan.</li>
<li>Folder Tersebut harus didalam Dari Folder Xampp > htdocs > "Foldermu" . Biasanya Folder Xampp terletak di Localdisc (C:)</li>

### Buat File dengan Format php
File disediakan Di repository saya atau kalau malas scroll bisa kalian Download disini <a href="https://github.com/JosephCETH30/CRUDForm/blob/main/index.php">Index.php</a> 
#### &ndash; Mengecek Kondisi Koneksi dari FIle dengan Database PHPMyAdmin
<li> Agar mendapatkan Konfirmasi bahwa File htdocs kita sudah terkoneksi dengan PHPMyAdmin caranya adalah dengan Input Kode ini ke Dalam Index.php
<br><br>
<div class="bg-black mb-4 rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"><span class=""></span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg></button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash"><span class="hljs-variable">$connection</span> = mysqli_connect(<span class="hljs-variable">$host</span>, <span class="hljs-variable">$user</span>, <span class="hljs-variable">$pass</span>, <span class="hljs-variable">$db</span>);
</code></div></div>

Kalian Bisa ubah / Sesuaikan Kode tersebut Tergantung dengan Syntax PHP yang anda tulis di File <a href="https://github.com/JosephCETH30/CRUDForm/blob/main/index.php">Index.php</a> 

-----------------
## Bootstrap #6
<li> Didalam File <a href="https://github.com/JosephCETH30/CRUDForm/blob/main/index.php">Index.php</a> ada Scratch yang diambil dari documentation Getbootstrap </li>

Code Source GetBootstrap.com : <a href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">CDN CSS</a> & <a href="https://getbootstrap.com/docs/4.0/components/card/"> Card With Max-auto Center Template </a>

Untuk Kode Bootstrapnya itu sudah Rafif buat Editable Jadi kalian Bisa langsung saja Utak atik kodenya si rafif diatas.

Atau jika ingin Mengkreasikannya Atau Implementasi baru silahkan baca baca Docs dari Bootstrapnya langsung : <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" style="color: white;">BOOTSTRAP DOCS</a>

-----------------
## Penjelasan PHP Syntax #7
![image](https://user-images.githubusercontent.com/127705735/224715577-41f07e51-969c-4b13-8350-1a7a5b683230.png)
<br><br>
### Import Connection Code #1 :
<br>
<pre>
$host = "localhost";
$user = "root";
$pass = "";
$db = "mahasiswa";
</pre>
<br>
<li>$host: variabel ini digunakan untuk menentukan nama atau alamat server database yang digunakan oleh aplikasi. Pada contoh di atas, nama server database yang digunakan adalah localhost, yang artinya database berada pada mesin yang sama dengan aplikasi. </li>
<li>$user: variabel ini digunakan untuk menentukan nama pengguna (username) yang digunakan untuk mengakses database. </li>
<li> $pass: variabel ini digunakan untuk menentukan kata sandi (password) yang digunakan untuk mengakses database. Pada contoh di atas, nilai variabel ini diisi dengan string kosong (""), yang berarti tidak ada kata sandi yang digunakan. </li>
<li> $db: variabel ini digunakan untuk menentukan nama database yang digunakan oleh aplikasi. Pada contoh di atas, nama database yang digunakan adalah mahasiswa. </li>

<br><br>

### Process Function into Database #2 : 
<pre>
if (!$koneksi) { //cek koneksi
    die("Tidak bisa terkoneksi ke database");
}
$nim        = "";
$nama       = "";
$alamat     = "";
$fakultas   = "";
$sukses     = "";
$error      = "";
</pre>
<br>
<li> Kode tersebut memiliki beberapa fungsi untuk memproses koneksi ke database. Pertama-tama, jika koneksi tidak terbentuk, maka script akan memberikan pesan error "Tidak bisa terkoneksi ke database" dan mematikan proses.</li>

<li>Selanjutnya, kode tersebut mendeklarasikan beberapa variabel seperti $nim, $nama, $alamat, $fakultas, $sukses, dan $error. Variabel-variabel tersebut akan digunakan dalam pengolahan data dari database atau untuk menampilkan pesan kesalahan atau sukses.</li>

<li>Dalam keseluruhan, kode tersebut digunakan untuk memastikan koneksi ke database terjalin dan mendeklarasikan beberapa variabel yang dibutuhkan dalam pengolahan data. Jika koneksi tidak terbentuk, maka script akan dihentikan dan tidak ada pengolahan data yang dilakukan.</li>

### Checking Var with GET Method on PHP #3 : 
<pre>
if (isset($_GET['op'])) {
    $op = $_GET['op'];
} else {
    $op = "";
}
if($op == 'delete'){
    $id         = $_GET['id'];
    $sql1       = "delete from crudform where id = '$id'";
    $q1         = mysqli_query($koneksi,$sql1);
    if($q1){
        $sukses = "Berhasil hapus data";
    }else{
        $error  = "Gagal melakukan delete data";
    }
}
</pre>
<br>

<li>Kode tersebut memiliki beberapa fungsi untuk mengolah data yang diterima melalui URL. Pertama-tama, kode tersebut akan mengecek apakah variabel 'op' telah diterima melalui metode GET.</li>

&ndash; &ndash; &rarr; Jika 'op' telah diterima, maka variabel 'op' akan diisi dengan nilai dari $_GET['op']. Jika tidak, maka variabel 'op' akan diisi dengan string kosong.

<li> Selanjutnya, kode tersebut akan memeriksa apakah variabel 'op' memiliki nilai 'delete'. Jika ya, maka kode akan mengambil nilai dari $_GET['id'] sebagai ID data yang akan dihapus dari database. Kemudian, kode akan mengeksekusi query untuk menghapus data dari tabel crudform dengan ID yang sesuai. </li>

<li> Jika query berhasil dijalankan, maka variabel 'sukses' akan diisi dengan pesan "Berhasil hapus data". Namun, jika query gagal dijalankan, maka variabel 'error' akan diisi dengan pesan "Gagal melakukan delete data". </li>

<li> Dalam keseluruhan, kode tersebut digunakan untuk menghapus data dari tabel crudform dengan ID yang diterima melalui URL. Kode tersebut juga memberikan pesan sukses atau pesan kesalahan tergantung pada hasil dari eksekusi query. </li>

### Processing, Searching, Importing Data #4 : 

<pre>
if ($op == 'edit') {
    $id         = $_GET['id'];
    $sql1       = "select * from crudform where id = '$id'";
    $q1         = mysqli_query($koneksi, $sql1);
    $r1         = mysqli_fetch_array($q1);
    $nim        = $r1['nim'];
    $nama       = $r1['nama'];
    $alamat     = $r1['alamat'];
    $fakultas   = $r1['fakultas'];

    if ($nim == '') {
        $error = "Data tidak ditemukan";
    }
}
</pre>
<br>

<li> Kode tersebut memiliki beberapa fungsi untuk mengolah data yang diterima melalui URL. Pertama-tama, kode tersebut akan memeriksa apakah variabel 'op' memiliki nilai 'edit'. Jika ya, maka kode akan mengambil nilai dari $_GET['id'] sebagai ID data yang akan diedit dari database. </li>

<li> Kemudian, kode akan mengeksekusi query untuk mencari data dengan ID yang sesuai dari tabel crudform. Data tersebut akan disimpan ke dalam variabel $r1 sebagai array asosiatif yang berisi seluruh kolom dari tabel. </li>

<li> Selanjutnya, kode tersebut akan mengambil nilai dari kolom 'nim', 'nama', 'alamat', dan 'fakultas' dari $r1 dan menyimpannya ke dalam variabel yang sesuai yaitu $nim, $nama, $alamat, dan $fakultas. </li>

<li><strong><em> Jika nilai dari $nim kosong, maka variabel $error akan diisi dengan pesan "Data tidak ditemukan". </em></strong></li>

<li>Dalam keseluruhan, kode tersebut digunakan untuk mengambil data dari tabel crudform dengan ID yang diterima melalui URL untuk melakukan proses editing data. Kode tersebut juga memberikan pesan kesalahan jika data tidak ditemukan.</li>

<br>

### Import Data From Submit (POST) #5 : 

<pre>
if (isset($_POST['simpan'])) { //untuk create
    $nim        = $_POST['nim'];
    $nama       = $_POST['nama'];
    $alamat     = $_POST['alamat'];
    $fakultas   = $_POST['fakultas'];
</pre>

<li> Kode tersebut digunakan untuk memeriksa apakah tombol "simpan" pada form telah ditekan dan data sudah dikirim melalui metode POST dari form HTML. Jika ya, maka kode akan mengambil nilai yang dikirim dari form untuk kemudian disimpan ke dalam variabel $nim, $nama, $alamat, dan $fakultas.</li>

<li> Variabel-variabel tersebut kemudian dapat digunakan untuk melakukan proses penyimpanan data ke dalam database dengan query INSERT atau proses validasi data. </li>

<li> Dalam keseluruhan, kode tersebut digunakan untuk melakukan pengecekan dan pengambilan nilai dari form yang telah dikirim melalui metode POST untuk kemudian disimpan dalam variabel-variabel yang akan digunakan untuk melakukan proses selanjutnya seperti penyimpanan data ke dalam database. </li>

<br>

### Operation Insert & Process Validating Database #6 and Last for PHP : 

<pre>
if ($nim && $nama && $alamat && $fakultas) {
        if ($op == 'edit') { //untuk update
            $sql1       = "update crudform set nim = '$nim',nama='$nama',alamat = '$alamat',fakultas='$fakultas' where id = '$id'";
            $q1         = mysqli_query($koneksi, $sql1);
            if ($q1) {
                $sukses = "Data berhasil diupdate";
            } else {
                $error  = "Data gagal diupdate";
            }
        } else { //untuk insert
            $sql1   = "insert into crudform(nim,nama,alamat,fakultas) values ('$nim','$nama','$alamat','$fakultas')";
            $q1     = mysqli_query($koneksi, $sql1);
            if ($q1) {
                $sukses     = "Berhasil memasukkan data baru";
            } else {
                $error      = "Gagal memasukkan data";
            }
        }
    } else {
        $error = "Silakan masukkan semua data";
    }
}
</pre>
<br>
<li> Kode tersebut digunakan untuk melakukan pengecekan terhadap variabel-variabel $nim, $nama, $alamat, dan $fakultas yang telah diisi oleh pengguna pada form HTML. Jika semua variabel tersebut telah terisi, maka kode akan melakukan pengecekan apakah operasi yang akan dilakukan adalah operasi update atau insert. </li>

<li> Jika operasi adalah update, maka kode akan melakukan update data pada tabel "crudform" dengan nilai-nilai variabel $nim, $nama, $alamat, dan $fakultas yang telah diambil dari form. Selanjutnya kode akan menampilkan pesan sukses atau gagal sesuai dengan hasil dari proses update.</li>

<li> Jika operasi adalah insert, maka kode akan melakukan insert data baru ke dalam tabel "crudform" dengan nilai-nilai variabel $nim, $nama, $alamat, dan $fakultas yang telah diambil dari form. Selanjutnya kode akan menampilkan pesan sukses atau gagal sesuai dengan hasil dari proses insert.</li>

<li><strong><em> Namun, jika ada satu atau lebih variabel yang belum terisi, maka kode akan menampilkan pesan error yang menyatakan untuk mengisi semua data terlebih dahulu.</em></strong></li>

<li> Keseluruhan, kode tersebut digunakan untuk memproses data yang telah diisi oleh pengguna pada form HTML dan menyimpannya ke dalam database. Terdapat dua operasi yang dapat dilakukan, yaitu insert dan update, dan kode akan menampilkan pesan sukses atau gagal sesuai dengan hasil dari proses tersebut.</li>


## Penjelasan MySQL Syntax #8
![mysql](https://user-images.githubusercontent.com/127705735/224731294-aca4c873-e29b-481d-9949-62a951189dad.jpg)
<br><br>

### Creating New Table - MySQL #1 :

<pre>
CREATE TABLE `crudform` (
  `id` int(11) NOT NULL,
  `nim` varchar(25) NOT NULL,
  `nama` varchar(25) NOT NULL,
  `alamat` varchar(25) NOT NULL,
  `fakultas` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
</pre>
<br>

<li> Kode di atas adalah perintah SQL untuk membuat tabel baru bernama crudform di dalam database. Tabel ini akan memiliki lima kolom yaitu id, nim, nama, alamat, dan fakultas, masing-masing dengan tipe data dan panjang karakter yang telah ditentukan. id adalah kolom kunci utama yang digunakan untuk mengidentifikasi setiap baris dalam tabel. Perintah ini juga menetapkan pengkodean karakter untuk tabel menjadi utf8mb4. </li>
<br>
<strong><em> More Documentation About Creating Table with MySQL &rarr; <a href="https://dev.mysql.com/doc/refman/8.0/en/create-table.html">Click Here</a> </em></strong>

### Dumping Data for Table - MySQL #2 : 

<pre>
INSERT INTO `crudform` (`id`, `nim` `nama`, `alamat`, `fakultas`) VALUES
(4, '20200003', 'Tri Untoro', 'Semarang Tengah', 'soshum'),
(5, '20200004', 'Ahmad', 'Yogyakarta', 'saintek'),
(6, '20200005', 'Doni', 'Jakarta', 'soshum'),
(7, '20200006', 'Budi', 'Klaten', 'soshum');
</pre>
<br>

<li> Kode di atas adalah perintah SQL untuk memasukkan beberapa baris data ke dalam tabel crudform. Perintah ini menetapkan nilai untuk setiap kolom dalam tabel untuk masing-masing baris data. Dalam kode tersebut, terdapat empat baris data yang dimasukkan, dengan masing-masing baris memiliki nilai untuk id, nim, nama, alamat, dan fakultas yang berbeda-beda. Perintah INSERT INTO digunakan untuk menambahkan baris data baru ke dalam tabel dan VALUES menetapkan nilai untuk setiap kolom pada baris data tersebut. </li>
<br>
<strong><em> More Documentation About Dumping Data for Table with MySQL &rarr; <a href="https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html">Click Here</a> </em></strong>

### Indexing Table CRUD - MySQL #3 : 

<pre>
ALTER TABLE `crudform`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nim` (`nim`);
</pre>
<br>

<li> Jadi kode yang diberikan ini adalah sebuah perintah untuk mengubah struktur tabel pada database. Lebih tepatnya, perintah ini menambahkan dua jenis kunci untuk tabel "crudform".</li>

<li> Kunci pertama adalah PRIMARY KEY yang ditentukan dengan perintah ADD PRIMARY KEY (id). Kunci ini memiliki peran penting karena akan memastikan bahwa setiap baris dalam tabel memiliki nilai unik pada kolom "id". Hal ini akan mempermudah proses identifikasi, pembaruan, atau penghapusan data pada tabel tersebut.<.li

<li> Kunci kedua adalah UNIQUE KEY yang ditentukan dengan perintah ADD UNIQUE KEY nim (nim). Kunci ini berfungsi untuk memastikan bahwa setiap nilai pada kolom "nim" juga memiliki nilai yang unik. Dengan adanya kunci ini, tidak akan mungkin untuk menambahkan atau memperbarui data dengan nilai "nim" yang sudah ada sebelumnya.</li>

<li> Secara keseluruhan, kode ini berguna untuk memperkuat integritas data pada tabel "crudform" dan mencegah terjadinya duplikasi atau kesalahan dalam proses manipulasi data pada tabel tersebut.</li>
<br>
<strong><em> More Documentation About Indexing Table with MySQL &rarr; <a href="https://dev.mysql.com/doc/refman/8.0/en/mysql-indexes.html">Click Here</a> </em></strong>

### Auto Increment for Table - MySQL #4 : 

<pre>
ALTER TABLE `crudform`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;
</pre>
<br>

<li> Kode yang diberikan ini adalah sebuah perintah untuk mengubah struktur tabel pada database. Lebih tepatnya, perintah ini akan memodifikasi kolom "id" pada tabel "crudform". </li>

<li> Pertama, perintah MODIFY id int(11) NOT NULL akan mengubah tipe data pada kolom "id" menjadi integer dengan panjang maksimum 11 digit. Selain itu, NOT NULL akan menjamin bahwa kolom "id" tidak akan memiliki nilai kosong. </li>

<li> Kemudian, AUTO_INCREMENT=8 akan menentukan nilai awal pada kolom "id" adalah 8, dan setiap kali baris baru ditambahkan ke tabel, nilai pada kolom "id" akan otomatis bertambah secara berurutan sesuai dengan urutan penambahan data. </li>

<strong> <em> Terakhir, perintah COMMIT digunakan untuk mengakhiri transaksi database dan menyimpan perubahan yang telah dilakukan. </em></strong>

<li> Secara keseluruhan, kode ini berguna untuk memperkuat integritas data pada tabel "crudform" dan memastikan bahwa setiap baris data yang ditambahkan pada tabel memiliki nilai unik pada kolom "id". Dengan menggunakan AUTO_INCREMENT, proses penambahan data pada tabel juga akan lebih mudah dan efisien. </li>

<br>
<strong><em> More Documentation About Auto Increment for Table with MySQL &rarr; <a href="https://dev.mysql.com/doc/refman/8.0/en/example-auto-increment.html">Click Here</a> </em></strong>
<br>
____________________________________
<br>


# Penutup
Demikianlah penjelasan mengenai CRUD (Create, Read, Update, Delete) dalam pengembangan aplikasi berbasis web. Dengan memahami konsep CRUD, diharapkan Anda dapat membuat aplikasi yang lebih efektif dan efisien dalam melakukan operasi data.

Jangan lupa untuk mengutamakan keamanan data dan mengikuti prinsip-prinsip dasar pengembangan aplikasi web yang baik. Terakhir, semua kode dalam repo ini dapat digunakan dan dimodifikasi dengan bebas, dengan tetap menjaga integritas dan kredibilitas pengembang asli.

Copyright <a href="https://github.com/JosephCETH30">@Joseph</a> and <a href="https://github.com/dirumahrafif/">@dirumahrafif</a>
