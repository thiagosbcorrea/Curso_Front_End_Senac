// ================================
// CONTADOR ANIMADO
// ================================

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.dataset.target;
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {

            counter.innerText =
                Math.ceil(count + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    }

    updateCounter();

});

// ================================
// SCROLL ANIMATION
// ================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

        }

    });

});

document.querySelectorAll('section').forEach(section => {

    section.classList.add('fade-in');

    observer.observe(section);

});

// ================================
// NAVBAR SCROLL
// ================================

window.addEventListener('scroll', () => {

    const nav = document.querySelector('.custom-navbar');

    if (window.scrollY > 50) {

        nav.classList.add('navbar-scrolled');

    } else {

        nav.classList.remove('navbar-scrolled');

    }

});