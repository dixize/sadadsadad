// Слайдер отзывов
let currentSlide = 0;
function moveSlide(direction) {
    const slides = document.getElementById('slides');
    const totalSlides = document.querySelectorAll('.slide-card').length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = translateX(-${currentSlide * 100}%);
}

// Управление модалкой
function openModal() {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-form').style.display = 'block';
    document.getElementById('modal-success').style.display = 'none';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Имитация отправки формы
function submitForm() {
    const phone = document.getElementById('userPhone').value;
    if(phone.length < 5) {
        alert("Пожалуйста, введите корректный номер");
        return;
    }
    
    // Скрываем форму, показываем "Мы вам перезвоним"
    document.getElementById('modal-form').style.display = 'none';
    document.getElementById('modal-success').style.display = 'block';
}

// Плавный скролл
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
