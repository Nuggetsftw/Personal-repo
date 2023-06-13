const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));









// // hapus data setelah halaman direfresh
// window.addEventListener('beforeunload', function() {
//   sessionStorage.clear();
// });

// const fileInput = document.querySelector('#file-input');
// const thumbnail = document.querySelector('#thumbnail');

// fileInput.addEventListener('change', function() {
//   const file = fileInput.files[0];
//   const url = URL.createObjectURL(file);
// });

// thumbnail.src = url;