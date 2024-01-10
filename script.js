document.addEventListener('DOMContentLoaded', function () {
    let selectedCheckboxes = [];

    function toggleCheckbox(id) {
        const checkbox = document.getElementById(id);

        if (selectedCheckboxes.length >= 2 && !selectedCheckboxes.includes(id)) {
            const firstSelectedCheckbox = document.getElementById(selectedCheckboxes.shift());
            firstSelectedCheckbox.checked = false;
        }

        if (selectedCheckboxes.includes(id)) {
            selectedCheckboxes = selectedCheckboxes.filter(checkboxId => checkboxId !== id);
        } else {
            selectedCheckboxes.push(id);
        }
    }

    document.getElementById('good').addEventListener('change', () => toggleCheckbox('good'));
    document.getElementById('cheap').addEventListener('change', () => toggleCheckbox('cheap'));
    document.getElementById('fast').addEventListener('change', () => toggleCheckbox('fast'));
});
