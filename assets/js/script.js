const option = {
    particles:{
        links:{
            enable:true,
        },
        number:{
            value:100,
        },
        move:{
            enable:true,
        },
        size:{
            value:{min:1,max:3}
        }
    },
};
tsParticles.load("particles",option);

// Hamburger Menu Toggle
function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');

    var hamburger = document.getElementById('hamburger');
    hamburger.classList.toggle('active');
}

// Carousel Interval False
var myCarousel = document.querySelector('#carouselExampleControls');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: false
});

// Smooth Redirect with Sweet Alert
// Seleksi semua tautan dengan kelas delayedLink
const links = document.querySelectorAll('.delayedLink');

// Tambahkan event listener untuk masing-masing tautan
links.forEach(link => {
    link.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tindakan default tautan

    // Menampilkan SweetAlert loading
    Swal.fire({
        title: 'Loading...',
        text: 'Please wait while we prepare the page.',
        allowOutsideClick: false,
        didOpen: () => {
        Swal.showLoading();
        }
    });

    // Mensimulasikan penundaan untuk menyiapkan halaman tujuan
    setTimeout(function() {
        Swal.close(); // Menutup SweetAlert loading
        window.open(link.href, '_blank'); // Membuka tautan di tab baru
    }, 2000); // Penundaan 2 detik untuk simulasi
    });
});

// Tahun
// Tanggal
let date = new Date();
let yearNow = date.getFullYear();
let yearFor = date.getFullYear() + 4;
console.log(yearFor)