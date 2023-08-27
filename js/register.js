document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea, select');

    form.addEventListener('submit', (event) => {
        let hasError = false;

        inputs.forEach((input) => {
            if (!input.value.trim()) {
                input.classList.add('error');
                hasError = true;
            } else {
                input.classList.remove('error');
            }
        });

        const genderRadios = form.querySelectorAll('input[type="radio"][name="gender"]');
        if (!Array.from(genderRadios).some((radio) => radio.checked)) {
            hasError = true;
            genderRadios[0].classList.add('error');
        } else {
            genderRadios.forEach((radio) => radio.classList.remove('error'));
        }

        const interestsCheckboxes = form.querySelectorAll('input[type="checkbox"][name="interests"]');
        if (!Array.from(interestsCheckboxes).some((checkbox) => checkbox.checked)) {
            hasError = true;
            interestsCheckboxes[0].classList.add('error');
        } else {
            interestsCheckboxes.forEach((checkbox) => checkbox.classList.remove('error'));
        }

        const nationalitySelect = form.querySelector('select[name="nationality"]');
        if (!nationalitySelect.value) {
            hasError = true;
            nationalitySelect.classList.add('error');
        } else {
            nationalitySelect.classList.remove('error');
        }

        const noteTextarea = form.querySelector('textarea[name="note"]');
        if (noteTextarea.value.length > 200) {
            hasError = true;
            noteTextarea.classList.add('error');
        } else {
            noteTextarea.classList.remove('error');
        }

        if (hasError) {
            event.preventDefault();
        }
    });
});
