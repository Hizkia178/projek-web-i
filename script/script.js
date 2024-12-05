document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
});

let currentIndex = 0;
const slides = document.querySelectorAll('.review-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);


function updateClock() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const adjustedHour = hours % 12 || 12;
    const formattedTime = `${String(adjustedHour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
    timeElement.textContent = formattedTime;
}


setInterval(updateClock, 1000);
updateClock();



document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            item.classList.toggle('active');
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
});




function initializeCountdown(endDate, daysId, hoursId, minutesId, secondsId) {
    const countDownDate = new Date(endDate).getTime();


    const countdownFunction = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;


        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);


        document.getElementById(daysId).innerHTML = days;
        document.getElementById(hoursId).innerHTML = hours;
        document.getElementById(minutesId).innerHTML = minutes;
        document.getElementById(secondsId).innerHTML = seconds;


        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById(daysId).innerHTML = "0";
            document.getElementById(hoursId).innerHTML = "0";
            document.getElementById(minutesId).innerHTML = "0";
            document.getElementById(secondsId).innerHTML = "0";

        }
    }, 1000);
}


document.addEventListener("DOMContentLoaded", function () {

    initializeCountdown("January 15, 2025 09:00:00", "days1", "hours1", "minutes1", "seconds1");


    initializeCountdown("January 15, 2025 09:00:00", "days2", "hours2", "minutes2", "seconds2");


});


window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}


function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.getElementById('print-pdf').addEventListener('click', function () {
    const element = document.body;
    html2pdf().from(element).save('website.pdf');
});


const modal = document.getElementById("productModal");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".btn-shop").forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        const productCard = this.closest(".product-card");
        const title = productCard.querySelector("h3").textContent;
        const desc = productCard.querySelector("p").textContent;
        const imageSrc = productCard.querySelector("img").getAttribute("src");
        const price = parseFloat(productCard.dataset.price);


        document.getElementById("modalTitle").textContent = title;
        document.getElementById("modalDesc").textContent = desc;
        document.getElementById("modalImage").setAttribute("src", imageSrc);
        document.getElementById("modalPrice").textContent = `$${price.toFixed(2)}`;
        document.getElementById("modalPriceField").value = price;
        document.getElementById("modalProduct").value = productCard.dataset.id;


        updateTotalPrice(price, 1);

        modal.style.display = "block";
    });
});


closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});


window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};


const quantityInput = document.getElementById("quantity");
quantityInput.addEventListener("input", function () {
    const price = parseFloat(document.getElementById("modalPriceField").value);
    const quantity = parseInt(quantityInput.value);
    updateTotalPrice(price, quantity);
});


function updateTotalPrice(price, quantity) {
    const totalPrice = price * quantity;
    document.getElementById("totalPriceDisplay").textContent = `$${totalPrice.toFixed(2)}`;
}



document.querySelectorAll(".btn-shop").forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        const productCard = this.closest(".product-card");
        const title = productCard.querySelector("h3").textContent;
        const desc = productCard.querySelector("p").textContent;
        const imageSrc = productCard.querySelector("img").getAttribute("src");
        const price = productCard.getAttribute("data-price");
        const productId = productCard.getAttribute("data-id");

        document.getElementById("modalTitle").textContent = title;
        document.getElementById("modalDesc").textContent = desc;
        document.getElementById("modalImage").setAttribute("src", imageSrc);
        document.getElementById("modalPrice").textContent = price;
        document.getElementById("modalPriceField").value = price;
        document.getElementById("modalProduct").value = title;
        document.getElementById("modalProductId").value = productId;
        document.getElementById("modalTotalPrice").value = price;


        modal.style.display = "block";
    });
});



//kode membuat chat bot ai
const chatButton = document.getElementById('chat-button');
const chatBox = document.getElementById('chat-box');
const closeButton = document.getElementById('close-button');
const sendButton = document.getElementById('send-button');
const userInput = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');

chatButton.addEventListener('click', () => {
    chatBox.style.display = 'flex';
    chatButton.style.display = 'none';
});

closeButton.addEventListener('click', () => {
    chatBox.style.display = 'none';
});




function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    const timeStamp = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    messageElement.innerHTML = `<span class="time-stamp">${timeStamp}</span>${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


function generateResponse(userText) {
    let responseText = '';

    const userQuestion = userText.toLowerCase();
    if (userQuestion.includes('hai') || userQuestion.includes('halo')) {
        responseText = 'Hai! Ada yang bisa saya bantu?';
    } else if (userQuestion.includes('apa kabar') || userQuestion.includes('gimana')) {
        responseText = 'Saya baik-baik saja, terima kasih! Bagaimana dengan Anda?';
    } else if (userQuestion.includes('gila')) {
        responseText = 'Gila? Haha, kadang hidup memang terasa seperti itu!';
    } else if (userQuestion.includes('stress') || userQuestion.includes('stres')) {
        responseText = 'Stres itu normal. Cobalah untuk bersantai dan ambil napas dalam-dalam.';
    } else if (userQuestion.includes('goblok') || userQuestion.includes('bodoh')) {
        responseText = 'Setiap orang bisa melakukan kesalahan, mari kita belajar dari itu!';
    } else if (userQuestion.includes('produk')) {
        responseText = 'Kami memiliki berbagai produk pisang berkualitas tinggi. Apa yang Anda cari?';
    } else if (userQuestion.includes('harga')) {
        responseText = 'Harga produk kami bervariasi, silakan kunjungi halaman produk kami untuk informasi lebih lanjut.';
    } else if (userQuestion.includes('buka jam berapa') || userQuestion.includes('jam buka')) {
        responseText = 'Kami buka setiap hari dari pukul 09:00 hingga 21:00.';
    } else if (userQuestion.includes('hubungi') || userQuestion.includes('kontak')) {
        responseText = 'Anda bisa menghubungi kami di info@bananastore.com.';
    } else if (userQuestion.includes('alamat')) {
        responseText = 'Alamat kami: Jl. Pisang No.123, Medan, Indonesia.';
    } else if (userQuestion.includes('pengiriman') || userQuestion.includes('shipping')) {
        responseText = 'Kami menawarkan pengiriman cepat dalam waktu 1-3 hari kerja.';
    } else if (userQuestion.includes('kembali') || userQuestion.includes('retur')) {
        responseText = 'Kebijakan pengembalian kami memungkinkan Anda mengembalikan produk dalam waktu 30 hari.';
    } else if (userQuestion.includes('diskon')) {
        responseText = 'Kami sering memiliki promo dan diskon. Silakan cek situs kami untuk informasi terbaru.';
    } else if (userQuestion.includes('metode pembayaran')) {
        responseText = 'Kami menerima pembayaran melalui kartu kredit, debit, dan transfer bank.';
    } else if (userQuestion.includes('keanggotaan') || userQuestion.includes('member')) {
        responseText = 'Bergabunglah dengan program keanggotaan kami untuk mendapatkan penawaran eksklusif!';
    } else if (userQuestion.includes('jam tutup')) {
        responseText = 'Kami tutup setiap hari pukul 21:00.';
    } else if (userQuestion.includes('stok')) {
        responseText = 'Silakan periksa halaman produk kami untuk melihat ketersediaan stok.';
    } else if (userQuestion.includes('feedback')) {
        responseText = 'Kami menghargai feedback Anda. Silakan kirimkan melalui email kami!';
    } else if (userQuestion.includes('testimoni')) {
        responseText = 'Silakan cek testimoni pelanggan di halaman kami.';
    } else if (userQuestion.includes('pembayaran aman')) {
        responseText = 'Kami menggunakan sistem pembayaran yang aman dan terpercaya.';
    } else if (userQuestion.includes('size chart')) {
        responseText = 'Silakan lihat halaman ukuran untuk informasi lebih lanjut.';
    } else if (userQuestion.includes('voucher')) {
        responseText = 'Gunakan kode voucher untuk mendapatkan diskon pada pembelian Anda.';
    } else if (userQuestion.includes('reseller')) {
        responseText = 'Kami menyediakan program reseller. Silakan hubungi kami untuk informasi lebih lanjut.';
    } else if (userQuestion.includes('sustainability')) {
        responseText = 'Kami berkomitmen untuk praktik berkelanjutan dalam semua aspek bisnis kami.';
    } else if (userQuestion.includes('pengiriman internasional')) {
        responseText = 'Kami juga menawarkan pengiriman internasional dengan biaya tambahan.';
    } else if (userQuestion.includes('cari produk')) {
        responseText = 'Silakan gunakan fitur pencarian di situs kami untuk menemukan produk yang Anda inginkan.';
    } else if (userQuestion.includes('konten')) {
        responseText = 'Kami selalu memperbarui konten dan produk kami. Pastikan untuk memeriksa secara berkala.';
    } else if (userQuestion.includes('oke') || userQuestion.includes('baik')) {
        responseText = 'Senang mendengarnya! Ada yang ingin Anda tanyakan?';
    } else if (userQuestion.includes('terima kasih') || userQuestion.includes('makasih')) {
        responseText = 'Sama-sama! Jangan ragu untuk bertanya lebih lanjut.';
    } else if (userQuestion.includes('sedang apa')) {
        responseText = 'Saya sedang menunggu pertanyaan dari Anda!';
    } else if (userQuestion.includes('siapa kamu')) {
        responseText = 'Saya adalah chatbot di Banana Store, siap membantu Anda!';
    } else if (userQuestion.includes('kapan')) {
        responseText = 'Kapan saja Anda butuh bantuan, saya ada di sini!';
    } else if (userQuestion.includes('suka')) {
        responseText = 'Saya suka membantu Anda!';
    } else if (userQuestion.includes('tidak')) {
        responseText = 'Apa yang tidak Anda sukai? Mari kita perbaiki!';
    } else if (userQuestion.includes('senang')) {
        responseText = 'Senang mendengar Anda senang!';
    } else if (userQuestion.includes('bisa') || userQuestion.includes('dapat')) {
        responseText = 'Tentu saja, saya bisa membantu!';
    } else if (userQuestion.includes('mau')) {
        responseText = 'Apa yang ingin Anda lakukan?';
    } else if (userQuestion.includes('hobi')) {
        responseText = 'Saya suka membantu orang dengan pertanyaan mereka!';
    } else if (userQuestion.includes('berita')) {
        responseText = 'Berita terbaru tentang produk kami akan segera hadir!';
    } else if (userQuestion.includes('harapan')) {
        responseText = 'Harapan saya adalah memberikan pelayanan terbaik untuk Anda!';
    } else if (userQuestion.includes('rekomendasi')) {
        responseText = 'Saya rekomendasikan produk-produk unggulan kami!';
    } else if (userQuestion.includes('belanja')) {
        responseText = 'Silakan lihat produk kami untuk berbelanja!';
    } else if (userQuestion.includes('tutorial')) {
        responseText = 'Silakan cek halaman tutorial kami untuk panduan!';
    } else if (userQuestion.includes('diskusi')) {
        responseText = 'Mari kita diskusikan pertanyaan Anda!';
    } else if (userQuestion.includes('informasi')) {
        responseText = 'Silakan tanya jika Anda butuh informasi lebih lanjut!';
    } else if (userQuestion.includes('ingin')) {
        responseText = 'Apa yang ingin Anda ketahui?';
    } else if (userQuestion.includes('bisa bantu')) {
        responseText = 'Tentu saja, saya di sini untuk membantu!';
    } else if (userQuestion.includes('problem')) {
        responseText = 'Silakan ceritakan masalah Anda!';
    } else if (userQuestion.includes('saran')) {
        responseText = 'Saya akan senang memberikan saran!';
    } else if (userQuestion.includes('butuh bantuan')) {
        responseText = 'Silakan ceritakan apa yang Anda butuhkan!';
    } else if (userQuestion.includes('kesulitan')) {
        responseText = 'Saya di sini untuk membantu Anda mengatasi kesulitan!';
    } else if (userQuestion.includes('bisa kah')) {
        responseText = 'Tentu saja, silakan tanya!';
    } else if (userQuestion.includes('selamat')) {
        responseText = 'Selamat! Ada yang ingin Anda ceritakan?';
    } else if (userQuestion.includes('kreatif')) {
        responseText = 'Kreativitas adalah kunci untuk menyelesaikan banyak masalah!';
    } else if (userQuestion.includes('terbaik')) {
        responseText = 'Kami berusaha menjadi yang terbaik!';
    } else if (userQuestion.includes('berita terbaru')) {
        responseText = 'Kami akan segera merilis berita terbaru!';
    } else if (userQuestion.includes('mari')) {
        responseText = 'Mari kita lakukan sesuatu yang menyenangkan!';
    } else if (userQuestion.includes('pertanyaan')) {
        responseText = 'Silakan ajukan pertanyaan Anda!';
    } else if (userQuestion.includes('apa yang bisa kamu lakukan')) {
        responseText = 'Saya bisa membantu Anda dengan pertanyaan seputar produk kami!';
    } else if (userQuestion.includes('siapa yang bertanggung jawab')) {
        responseText = 'Kami memiliki tim yang siap membantu Anda!';
    } else if (userQuestion.includes('siapa pemiliknya')) {
        responseText = 'Kami adalah tim di Banana Store yang siap membantu!';
    } else if (userQuestion.includes('kenapa')) {
        responseText = 'Kenapa tidak? Mari kita bicarakan lebih lanjut!';
    } else if (userQuestion.includes('pikir')) {
        responseText = 'Saya berpikir Anda akan menyukai produk kami!';
    } else if (userQuestion.includes('percaya')) {
        responseText = 'Percayalah, kami siap membantu Anda!';
    } else if (userQuestion.includes('tanya')) {
        responseText = 'Silakan bertanya tentang produk kami!';
    } else if (userQuestion.includes('dapatkah')) {
        responseText = 'Tentu saja, saya bisa!';
    } else if (userQuestion.includes('saya')) {
        responseText = 'Bagus! Ada yang ingin Anda diskusikan?';
    } else if (userQuestion.includes('semangat')) {
        responseText = 'Semangat! Apa yang bisa saya bantu?';
    } else if (userQuestion.includes('berita baik')) {
        responseText = 'Berita baik selalu menyenangkan! Mari kita bicarakan!';
    } else if (userQuestion.includes('hal baru')) {
        responseText = 'Kami selalu memiliki hal baru untuk Anda!';
    } else if (userQuestion.includes('inspirasi')) {
        responseText = 'Inspirasi ada di mana-mana, ayo kita cari bersama!';
    } else if (userQuestion.includes('berbagi')) {
        responseText = 'Saya senang berbagi informasi dengan Anda!';
    } else if (userQuestion.includes('keren')) {
        responseText = 'Terima kasih! Kami berusaha memberikan yang terbaik!';
    } else if (userQuestion.includes('pasti')) {
        responseText = 'Pasti! Silakan tanya apa saja!';
    } else if (userQuestion.includes('senyuman')) {
        responseText = 'Senyum adalah cara terbaik untuk memulai hari!';
    } else if (userQuestion.includes('berita buruk')) {
        responseText = 'Saya berharap berita buruk segera berakhir!';
    } else if (userQuestion.includes('hilang')) {
        responseText = 'Jangan khawatir, kita bisa mencarinya bersama!';
    } else if (userQuestion.includes('senang bertemu')) {
        responseText = 'Senang bertemu Anda juga!';
    } else if (userQuestion.includes('takut')) {
        responseText = 'Jangan takut, saya di sini untuk membantu!';
    } else if (userQuestion.includes('bisa perbaiki')) {
        responseText = 'Tentu saja, mari kita perbaiki bersama!';
    } else if (userQuestion.includes('tunggu')) {
        responseText = 'Saya akan menunggu pertanyaan Anda!';
    } else if (userQuestion.includes('mendengar')) {
        responseText = 'Saya senang mendengar dari Anda!';
    } else if (userQuestion.includes('bisa mulai')) {
        responseText = 'Mari kita mulai! Apa yang ingin Anda tanyakan?';
    } else if (userQuestion.includes('sehat')) {
        responseText = 'Sehat adalah hal yang paling penting!';
    } else if (userQuestion.includes('berita hari ini')) {
        responseText = 'Kami memiliki banyak berita menarik hari ini!';
    } else if (userQuestion.includes('update')) {
        responseText = 'Silakan periksa situs kami untuk update terbaru!';
    } else if (userQuestion.includes('mau tahu')) {
        responseText = 'Apa yang ingin Anda ketahui?';
    } else if (userQuestion.includes('jelas')) {
        responseText = 'Saya senang informasi yang saya berikan jelas!';
    } else if (userQuestion.includes('pada saat')) {
        responseText = 'Pada saat yang tepat, semua akan baik-baik saja!';
    } else if (userQuestion.includes('akan')) {
        responseText = 'Akan ada banyak hal baik ke depan!';
    } else if (userQuestion.includes('bisa lihat')) {
        responseText = 'Silakan lihat produk kami!';
    } else if (userQuestion.includes('berhasil')) {
        responseText = 'Selamat! Anda berhasil!';
    } else if (userQuestion.includes('coba')) {
        responseText = 'Coba tanyakan lagi, saya di sini untuk membantu!';
    } else if (userQuestion.includes('terbaik di dunia')) {
        responseText = 'Kami berusaha memberikan yang terbaik untuk Anda!';
    } else if (userQuestion.includes('sukses')) {
        responseText = 'Sukses untuk Anda!';
    } else if (userQuestion.includes('anda siapa')) {
        responseText = 'Saya chatbot yang siap membantu Anda!';
    } else if (userQuestion.includes('kapan saja')) {
        responseText = 'Kapan saja Anda butuh bantuan, saya ada di sini!';
    } else if (userQuestion.includes('berita terhangat')) {
        responseText = 'Kami akan segera merilis berita terbaru!';
    } else if (userQuestion.includes('takut kehilangan')) {
        responseText = 'Jangan khawatir, kita bisa mencari solusi bersama!';
    } else if (userQuestion.includes('suka berbagi')) {
        responseText = 'Saya suka berbagi informasi yang berguna!';
    } else if (userQuestion.includes('puas')) {
        responseText = 'Kami ingin memastikan Anda puas dengan layanan kami!';
    } else if (userQuestion.includes('bisa bantu saya')) {
        responseText = 'Tentu saja, silakan sampaikan pertanyaan Anda!';
    } else if (userQuestion.includes('selamat datang')) {
        responseText = 'Terima kasih! Selamat datang di Banana Store!';
    } else if (userQuestion.includes('terima kasih banyak')) {
        responseText = 'Sama-sama! Senang bisa membantu Anda!';
    } else if (userQuestion.includes('mau belajar')) {
        responseText = 'Saya siap membantu Anda belajar!';
    } else if (userQuestion.includes('pengalaman')) {
        responseText = 'Kami selalu berusaha memberikan pengalaman terbaik!';
    } else if (userQuestion.includes('bisa beritahu')) {
        responseText = 'Tentu saja, apa yang ingin Anda ketahui?';
    } else if (userQuestion.includes('satu')) {
        responseText = 'Satu pertanyaan? Silakan ajukan!';
    } else if (userQuestion.includes('dua')) {
        responseText = 'Dua pertanyaan? Saya di sini untuk menjawabnya!';
    } else if (userQuestion.includes('tiga')) {
        responseText = 'Tiga pertanyaan? Mari kita mulai!';
    } else if (userQuestion.includes('banyak')) {
        responseText = 'Kami memiliki banyak informasi untuk Anda!';
    } else if (userQuestion.includes('mau tahu lebih banyak')) {
        responseText = 'Tentu! Apa yang ingin Anda ketahui lebih lanjut?';
    } else if (userQuestion.includes('spesial')) {
        responseText = 'Setiap orang adalah spesial di mata kami!';
    } else if (userQuestion.includes('senang bisa membantu')) {
        responseText = 'Saya senang bisa membantu Anda!';
    } else if (userQuestion.includes('berita terbaru di dunia')) {
        responseText = 'Berita terbaru selalu menarik untuk dibahas!';
    } else if (userQuestion.includes('cinta')) {
        responseText = 'Cinta adalah hal terindah di dunia!';
    } else if (userQuestion.includes('berita tentang produk')) {
        responseText = 'Kami akan segera merilis berita terbaru tentang produk kami!';
    } else if (userQuestion.includes('saya di sini')) {
        responseText = 'Senang Anda di sini! Apa yang bisa saya bantu?';
    } else if (userQuestion.includes('tidak ada masalah')) {
        responseText = 'Bagus! Mari kita teruskan!';
    } else if (userQuestion.includes('berita yang sedang tren')) {
        responseText = 'Kami memiliki banyak berita yang sedang tren!';
    } else if (userQuestion.includes('pertanyaan lain')) {
        responseText = 'Silakan ajukan pertanyaan lain!';
    } else if (userQuestion.includes('mau berbagi')) {
        responseText = 'Saya senang mendengar jika Anda mau berbagi!';
    } else if (userQuestion.includes('mendengar kabar')) {
        responseText = 'Saya ingin mendengar kabar baik dari Anda!';
    } else if (userQuestion.includes('saat ini')) {
        responseText = 'Saat ini saya siap membantu Anda!';
    } else if (userQuestion.includes('apa kabar')) {
        responseText = 'Saya baik-baik saja! Bagaimana dengan Anda?';
    } else if (userQuestion.includes('halo')) {
        responseText = 'Halo! Apa yang bisa saya bantu?';
    } else if (userQuestion.includes('gila')) {
        responseText = 'Gila itu relatif! Ada yang ingin Anda ceritakan?';
    } else if (userQuestion.includes('stres')) {
        responseText = 'Stres bisa berat, saya di sini untuk mendengarkan.';
    } else if (userQuestion.includes('goblok')) {
        responseText = 'Setiap orang bisa berbuat kesalahan. Mari kita bicarakan!';
    } else if (userQuestion.includes('apa')) {
        responseText = 'Saya bisa membantu menjawab pertanyaan Anda!';
    } else if (userQuestion.includes('siapa')) {
        responseText = 'Saya adalah chatbot siap membantu Anda!';
    } else if (userQuestion.includes('dimana')) {
        responseText = 'Dimana Anda berada? Saya di sini untuk membantu!';
    } else if (userQuestion.includes('kenapa')) {
        responseText = 'Kenapa tidak? Mari kita bicarakan lebih lanjut!';
    } else if (userQuestion.includes('kapan')) {
        responseText = 'Kapan saja, saya siap membantu!';
    } else if (userQuestion.includes('bagaimana')) {
        responseText = 'Bagaimana saya bisa membantu Anda?';
    } else if (userQuestion.includes('yang lain')) {
        responseText = 'Ada hal lain yang ingin Anda diskusikan?';
    } else if (userQuestion.includes('sampai jumpa')) {
        responseText = 'Sampai jumpa! Semoga hari Anda menyenangkan!';
    } else if (userQuestion.includes('selamat tinggal')) {
        responseText = 'Selamat tinggal! Semoga kita bertemu lagi!';
    } else {
        responseText = 'Maaf, saya tidak mengerti. Silakan coba lagi atau tanyakan tentang produk kami!';
    }

    return responseText;
}

sendButton.addEventListener('click', () => {
    const userText = userInput.value.trim();
    if (userText) {
        appendMessage(userText, 'user');
        userInput.value = '';


        setTimeout(() => {
            const botResponse = generateResponse(userText);
            appendMessage(botResponse, 'bot');
        }, 1000);
    }
});


userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});


