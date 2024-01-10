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
                case 'g1': return '#f2f2f2';
                case 'g2': return '#d9d9d9';
                case 'g3': return '#bfbfbf';
                default: return '';
            }
        }
        document.getElementById('g1').addEventListener('click', () => toggleCheckbox('g1'));
        document.getElementById('g2').addEventListener('click', () => toggleCheckbox('g2'));
        document.getElementById('g3').addEventListener('click', () => toggleCheckbox('g3'));







