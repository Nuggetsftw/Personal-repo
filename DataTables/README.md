# Simple DataTables Javascript
Repository GitHub DataTables with Working Searchbar ini sebenarnya berisi contoh-contoh penggunaan DataTables dengan fitur search bar yang udah diuji dan berfungsi dengan baik.

![Screenshot 2023-03-14 091823](https://user-images.githubusercontent.com/127705735/224876110-16d2ba47-06fb-42bc-bf31-e4566c227e51.png)
<br>

## Technologies Used
<li> JS </li>
<li> Scratch Tables </li>

## Getting Started
To get started with this project, simply clone this repository to your local machine and open the index.html file in your web browser.

<pre>git clone https://github.com/JosephCETH30/halalhero.git <br>cd datatables </pre>

Contributing If you would like to contribute to this project, please fork the repository and submit a pull request with your changes. We welcome all contributions!

License This project is licensed under the MIT License - see the LICENSE.md file for details.

## Penjelasan Kegunaan Script 
Dibawah ini Saya akan Menjelaskan Kegunaan Script dari DataTables.js diatas.

### Menyembunyikan Tables secara Dinamis #1

<pre>
 var table = document.getElementById('mytable');
      var input = document.getElementById('search');
      table.style.display = 'none';
</pre>
<br>
<li> Pertama-tama, kode "var table = document.getElementById('mytable');" digunakan untuk mengambil elemen HTML tabel yang memiliki atribut ID dengan nama 'mytable'. Dengan menyimpan referensi elemen HTML tersebut dalam variabel 'table', kamu bisa memanipulasi tabel ini dengan mudah melalui kode JavaScript nantinya. </li>

<li> Kedua, kode "var input = document.getElementById('search');" digunakan untuk mengambil elemen HTML input yang memiliki atribut ID dengan nama 'search'. Mirip seperti sebelumnya, menyimpan referensi elemen HTML dalam variabel 'input' memungkinkan kamu untuk memanipulasi elemen tersebut melalui kode JavaScript.</li>

<li> Terakhir, kode "table.style.display = 'none';" memiliki tujuan untuk menyembunyikan tabel yang telah diambil sebelumnya dengan memanipulasi properti CSS 'display' dari tabel tersebut. Kode ini mengubah nilai properti 'display' menjadi 'none', yang berarti tabel tidak akan ditampilkan di halaman web.</li>

<li> Secara keseluruhan, kode ini bisa berguna jika kamu ingin menyembunyikan tabel di halaman web atau melakukan manipulasi pada tabel dan elemen input secara dinamis menggunakan JavaScript.</li>
<br>
<strong><em> Lebih Lanjut Dokumen Tentang Menyebunyikan Tables Secara Dinamis JS : <a href="https://stackoverflow.com/questions/56742859/how-to-hide-table-with-javascript#:~:text=Try%20changing%20var%20x%20%3D%20document,table1%22)%3B%20">Click Disini</a> </em></strong>

### Menambahkan Listener untuk Fungsi Pencarian Interaktif #2

<pre>
input.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
          var filter = input.value.toUpperCase();
          var rows = table.getElementsByTagName('td');
          for (var i = 0; i < rows.length; i++) {
            var td = rows[i].getElementsByTagName('td')[0];
            if (td) {
              var txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                rows[i].style.display = '';
              } else {
                rows[i].style.display = 'none';
              }
            }
          }
          if (filter === '' || filter.length < 3) {
            table.style.display = 'none';
          } else {
            table.style.display = '';
          }
        } else {
          if (input.value === '' || input.value.length < 3) {
            table.style.display = 'none';
          }
        }
      });
</pre>
<br>

<li> Kode di atas digunakan untuk menambahkan event listener pada elemen input untuk mengaktifkan fungsi pencarian pada tabel (yang telah diambil sebelumnya dengan variabel 'table') ketika pengguna mengetik dan menekan tombol 'Enter'.</li>

<li> Jadi, saat pengguna memasukkan kata kunci pencarian pada elemen input, kode tersebut akan mengecek apakah tombol yang ditekan adalah tombol 'Enter'. Jika benar, kode akan mengambil nilai yang dimasukkan pengguna (dalam huruf besar) dan membandingkannya dengan nilai dari setiap sel dalam tabel. Jika nilai tersebut cocok, kode akan menampilkan baris tersebut di tabel. Jika tidak cocok, kode akan menyembunyikan baris tersebut dari tabel. </li>

<li> Selain itu, kode juga memeriksa apakah elemen input kosong atau tidak memenuhi panjang minimum (dalam contoh kode tersebut, minimum panjangnya adalah 3). Jika benar, maka tabel akan disembunyikan. </li>

<li> Secara keseluruhan, kode ini bisa sangat berguna jika kamu ingin menambahkan fungsi pencarian interaktif pada tabel di halaman web. Dengan menggunakan kode ini, kamu bisa membuat tabel yang lebih mudah untuk diakses dan lebih dinamis untuk dioperasikan pengguna. </li>
<br>
<strong><em> Lebih Lanjut Dokumen Tentang Listener untuk Fungsi Interaktif JS : <a href="https://www.freecodecamp.org/news/javascript-addeventlistener-example-code/">Click Disini</a> </em></strong>

### Fungsi Menampilkan isi Tabel #3

<pre>
function showtable(curarray) {
        document.getElementById('mytable').innerHTML = `
  <tr class="bg-primary text-white fw-bold">
    <td>No</td>
    <td>Nama</td>
    <td>Alamat</td>
    <td>Status</td>
  </tr> `;

        if (curarray == '') {
          document.getElementById('error').innerHTML = `<span class='text-danger '>Not Found!</span>`;
        } else {
          document.getElementById('error').innerHTML = '';

          for (var i = 0; i < curarray.length; i++) {
            document.getElementById('mytable').innerHTML += ` 
        <tr>
          <td>${curarray[i].id}</td>
          <td>${curarray[i].name}</td> 
          <td>${curarray[i].alamat}</td> 
          <td>${curarray[i].status}</td>
        </tr>`;
          }
        }
      }
</pre>

<li> Kode di atas berfungsi untuk menampilkan tabel di halaman web berdasarkan array data yang diberikan sebagai argumen ke dalam fungsi. Fungsi ini menciptakan sebuah tabel HTML dengan format yang sudah ditentukan dan mengisinya dengan data dari array yang diberikan. </li>

<li> Pertama, kode membuat header tabel dengan menggunakan tag 'tr' dengan kelas CSS "bg-primary text-white fw-bold" dan menambahkan empat sel dengan isi "No", "Nama", "Alamat", dan "Status". Ini merupakan bagian statis dari tabel yang tidak berubah, dan hanya dibuat sekali saat fungsi dipanggil.</li> <br>

<strong><em> Kemudian, kode memeriksa apakah array data yang diberikan memiliki data yang valid. Jika tidak, kode menambahkan pesan error ke dalam elemen HTML dengan ID "error". </em></strong>

<li> Jika data valid, maka kode akan menghapus pesan error dan memasukkan setiap elemen array data ke dalam baris tabel menggunakan perulangan for. Setiap baris tabel baru ditambahkan ke tabel HTML melalui metode "innerHTML" dan sel-selnya diisi dengan data dari elemen array yang sesuai. </li>

<li> Dalam hal ini, kode ini sangat berguna jika kamu ingin menampilkan data dalam format tabel di halaman web dengan menggunakan data yang diambil dari array. Dengan menggunakan kode ini, kamu bisa dengan mudah menampilkan data dalam tabel dengan format yang sudah ditentukan tanpa perlu menulis kode HTML statis secara manual.</li>
<br>
<strong><em> Lebih Lanjut Dokumen Tentang Fungsi Menampilkan isi Tabel JS : <a href="https://stackoverflow.com/questions/30736470/write-a-javascript-function-that-displays-html">Click Disini</a> </em></strong>

### Fungsi Menampilkan Table #4 :

<pre>
showtable(array);
</pre>

<li>Kode 'showtable(array);' adalah sebuah perintah panggilan fungsi 'showtable' yang digunakan untuk menampilkan tabel HTML pada halaman web dengan menggunakan data dari array yang diberikan sebagai argumen pada fungsi 'showtable'. </li>

<li> Jadi, saat kamu memanggil kode ini, itu akan mengeksekusi fungsi 'showtable' yang sudah didefinisikan sebelumnya dengan menggunakan data yang diberikan pada argumen 'array'. Fungsi 'showtable' akan memproses data dan menampilkan tabel HTML pada halaman web dengan format yang sudah ditentukan. </li>

<li> Ini sangat berguna jika kamu ingin menampilkan tabel HTML pada halaman web secara dinamis dengan menggunakan data yang diambil dari sebuah aray. Dengan memanggil fungsi 'showtable' dengan argumen array yang tepat, kamu dapat membuat tabel HTML secara otomatis dan menampilkan data dalam format tabel dengan mudah dan cepat pada halaman web. </li>
<br>
<strong><em> Lebih Lanjut Dokumen Tentang Fungsi Menampilkan Table JS : <a href="https://stackoverflow.com/questions/30736470/write-a-javascript-function-that-displays-html">Click Disini</a> </em></strong>

### Variable untuk Menyimpan hasil Pencarian #5 : 

<pre>
var newarray = [];
</pre>
<br>
<li> Dalam pemrograman, array adalah struktur data yang memungkinkan kamu untuk menyimpan sekumpulan nilai dalam satu variabel. Saat kamu membuat sebuah array kosong seperti yang terdapat pada kode ini, maka kamu bisa menambahkan nilai ke dalamnya menggunakan metode 'push' atau menetapkan nilai ke dalam indeks tertentu pada array menggunakan tanda kurung siku.</li>

<li> Variabel 'newarray' ini bisa digunakan untuk menyimpan data yang akan digunakan dalam program JavaScript, seperti data dari database, data hasil pengolahan, atau data dari masukan pengguna. Setelah data disimpan pada array, kamu bisa melakukan operasi atau manipulasi data pada array tersebut seperti mengurutkan, memfilter, atau melakukan perhitungan matematika. </li>

<li> Dalam hal ini, kode 'var newarray = [];' berguna untuk menyimpan data dalam bentuk array kosong sehingga kamu bisa mengakses dan memanipulasi data tersebut di program JavaScript. </li>
<br>
<strong><em> Lebih Lanjut Dokumen Tentang Variable untuk Menyimpan hasil Pencarian JS : <a href="https://stackoverflow.com/questions/74835145/how-can-i-save-a-js-variable-in-a-php-table">Click Disini</a> </em></strong>

### Variable untuk Menyimpan hasil Pencarian #6 : 

<pre>
document.getElementById('search').addEventListener('keyup', function () {
        var search = this.value.toLowerCase();
        newarray = array.filter(function (val) {
          if (val.id.includes(search) || val.name.toLowerCase().includes(search) || val.alamat.toLowerCase().includes(search) || val.status.toLowerCase().includes(search)) {
            var newobj = { id: val.id, name: val.name, alamat: val.alamat, status: val.status };
            return newobj;
          }
        });
        showtable(newarray);
      });
</pre>
<br>
<li> Kode 'document.getElementById('search').addEventListener('keyup', function () {...}' digunakan untuk menambahkan event listener ke elemen HTML dengan ID 'search'. Ketika pengguna mengetikkan sesuatu pada kotak pencarian ('search') pada halaman web, event listener akan mendeteksi setiap kali pengguna mengetik dan menjalankan fungsi yang terdapat di dalamnya.</li>

<li> Fungsi yang terdapat di dalam event listener ini akan mengambil nilai dari input pencarian yang diisi oleh pengguna, lalu melakukan pencarian pada array data (array) yang ada dengan mengembalikan data yang sesuai dengan kata kunci pencarian. Hasil pencarian tersebut disimpan pada variabel 'newarray'.</li>

<li> Fungsi filter yang digunakan pada kode ini akan memfilter setiap item dari array data (array) yang sesuai dengan kondisi yang diberikan, yaitu apakah nilai dari id, name, alamat, atau status pada item tersebut mengandung kata kunci pencarian atau tidak. Jika iya, item tersebut akan disimpan pada variabel 'newobj'. </li>

<li> Kemudian, hasil filter yang disimpan pada variabel 'newarray' akan digunakan sebagai argumen pada fungsi 'showtable' untuk menampilkan hasil pencarian pada tabel yang ada di halaman web. Dengan begitu, ketika pengguna mengetikkan kata kunci pencarian pada kotak pencarian, program akan memfilter data dan menampilkan hasil pencarian secara real-time pada halaman web. </li>

<li> Dengan kode ini, pengguna dapat mencari data dengan mudah dan cepat menggunakan fitur pencarian yang ada di halaman web.</li>
<br>
<strong><em> Lebih Lanjut Dokumen Tentang Variable untuk Menyimpan hasil Pencarian JS : <a href="https://stackoverflow.com/questions/74835145/how-can-i-save-a-js-variable-in-a-php-table">Click Disini</a> </em></strong>
