//your JS code here. If required.
let selectedCheckboxes = [];

        function toggleCheckbox(id) {
            const checkbox = document.getElementById(id);

            if (selectedCheckboxes.length >= 2 && !selectedCheckboxes.includes(id)) {
                const firstSelectedCheckbox = document.getElementById(selectedCheckboxes.shift());
                firstSelectedCheckbox.style.backgroundColor = getCheckboxColor(firstSelectedCheckbox.id);
            }

            if (selectedCheckboxes.includes(id)) {
                selectedCheckboxes = selectedCheckboxes.filter(checkboxId => checkboxId !== id);
                checkbox.style.backgroundColor = getCheckboxColor(id);
            } else {
                selectedCheckboxes.push(id);
                checkbox.style.backgroundColor = 'yellow'; // You can set any color for selected state
            }
        }

        function getCheckboxColor(id) {
            switch (id) {
                case 'good': return '#f2f2f2';
                case 'cheap': return '#d9d9d9';
                case 'fast': return '#bfbfbf';
                default: return '';
            }
        }

        document.getElementById('good').addEventListener('click', () => toggleCheckbox('good'));
        document.getElementById('cheap').addEventListener('click', () => toggleCheckbox('cheap'));
        document.getElementById('fast').addEventListener('click', () => toggleCheckbox('fast'));