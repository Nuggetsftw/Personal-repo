var array = [
        {
          id: '1',
          name: 'NamaOrang',
          alamat: 'Jl. Antusias',
          status: '<a href="#" onclick="window.open(this.href, \'popup\', \'width=1000,height=300\'); return false;">dikirim ke komite fatwa</a>',
        },
        {
          id: '2',
          name: 'NamaOrang',
          alamat: 'Jl. Antusias ',
          status: '<a href="#" onclick="window.open(this.href, \'popup\', \'width=1000,height=300\'); return false;">dikirim ke komite fatwa</a>',
        },
        {
          id: '3',
          name: 'NamaOrang',
          alamat: 'Jl. Antusias ',
          status: '<a href="#" onclick="window.open(this.href, \'popup\', \'width=1000,height=300\'); return false;">dikirim ke komite fatwa</a>',
        },
        {
          id: '4',
          name: 'NamaOrang',
          alamat: 'Jl. Antusias ',
          status: '<a href="#" onclick="window.open(this.href, \'popup\', \'width=1000,height=300\'); return false;">dikirim ke komite fatwa</a>',
        },
        {
          id: '5',
          name: 'NamaOrang',
          alamat: 'Jl. Antusias',
          status: '<a href="#" onclick="window.open(this.href, \'popup\', \'width=1000,height=300\'); return false;">dikirim ke komite fatwa</a>',
        }
        ];

// Simpan referensi ke tabel dan kotak pencarian
      var table = document.getElementById('mytable');
      var input = document.getElementById('search');

      // Sembunyikan tabel saat halaman dimuat
      table.style.display = 'none';

      // Tampilkan tabel setelah pengguna memasukkan input ke kotak pencarian atau menekan tombol "Enter"
      input.addEventListener('keyup', function (event) {
        // Jika pengguna menekan tombol "Enter"
        if (event.key === 'Enter') {
          // Filter baris tabel yang sesuai dengan input
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
          // Tampilkan tabel setelah filter dilakukan
          if (filter === '' || filter.length < 3) {
            table.style.display = 'none';
          } else {
            table.style.display = '';
          }
        } else {
          // Jika pengguna menghapus input dari kotak pencarian
          if (input.value === '' || input.value.length < 3) {
            table.style.display = 'none';
          }
        }
      });

      // Fungsi untuk menampilkan isi tabel
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

      // Panggil fungsi untuk menampilkan isi tabel
      showtable(array);

      // Variabel untuk menyimpan hasil pencarian
      var newarray = [];

      // Ketika pengguna mengetik di kotak pencarian
      document.getElementById('search').addEventListener('keyup', function () {
        var search = this.value.toLowerCase();

        // Lakukan filter pada array berdasarkan kata kunci pencarian
        newarray = array.filter(function (val) {
          if (val.id.includes(search) || val.name.toLowerCase().includes(search) || val.alamat.toLowerCase().includes(search) || val.status.toLowerCase().includes(search)) {
            var newobj = { id: val.id, name: val.name, alamat: val.alamat, status: val.status };
            return newobj;
          }
        });

        // Panggil fungsi untuk menampilkan isi tabel berdasarkan hasil pencarian
        showtable(newarray);
      });