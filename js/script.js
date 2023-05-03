const theme = document.querySelector('[data-bs-theme="light"]');
const btnTema = document.getElementById('mode');
let isDark = false;
btnTema.addEventListener('click', toggleTheme);
function toggleTheme() {
  isDark = !isDark;
  if (isDark) {
    theme.setAttribute('data-bs-theme', 'dark');
  } else {
    theme.setAttribute('data-bs-theme', 'light');
  }
}
const links = document.querySelectorAll('.nav-link');
links.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah tindakan default link
    // Menghapus kelas "active" dari semua elemen "a"
    links.forEach(function (link) {
      link.classList.remove('fw-bold');
    });
    // Menambahkan kelas "active" pada elemen yang diklik
    link.classList.add('fw-bold');
  });
});

function loadContent(file) {
    // membuat objek XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    // menetapkan callback function saat permintaan AJAX selesai
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // mengambil isi file HTML lain
        document.getElementById("content").innerHTML = this.responseText;
      }
    };

    // membuat permintaan AJAX untuk file HTML lain
    xhttp.open("GET", file, true);
    xhttp.send();
  }
