//S  H  O  P  P  I  N  G       J  S      C  O  D  E     H  E  R  E




//the func here is  to calculate the cost for each item
document.querySelectorAll('input[type=radio], select').forEach(input => {
    input.addEventListener('change', () => {
        updateItemCost();
    });
});

// the funct here is to update the item cost based on the property and units
function updateItemCost() {
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const checkbox = row.querySelector('input[type=checkbox]');
        const property = row.querySelector('input[type=radio]:checked');
        const units = row.querySelector('select').value;
        const costCell = row.querySelector('.cost');

        if (checkbox.checked && property && units > 0) {
            const propertyValue = parseFloat(property.value);
            const unitValue = parseInt(units);
            const totalCost = propertyValue * unitValue;

            costCell.textContent = `$${totalCost}`;
        } else {
            costCell.textContent = '$0';
        }
    });
}

// here is  to calculate the total cost of all selected items
function calculateTotal() {
    let totalCost = 0;

    document.querySelectorAll('tbody tr').forEach(row => {
        const costCell = row.querySelector('.cost');
        const costValue = parseFloat(costCell.textContent.replace('$', '')) || 0;
        totalCost += costValue;
    });

    (document.getElementById('totalCost')).textContent = `Total Cost: $${totalCost}`;
    // the tax or discount here
    let finalCost;
    if (totalCost <= 200) {
        finalCost = totalCost + (totalCost * 0.15); 
    } else if (totalCost>200) {
        finalCost = totalCost - (totalCost * 0.15); 
        
    }


    const totalCostElement = document.getElementById('totalCost');
    (document.getElementById('totalCost')).textContent = `Total Cost: $${finalCost.toFixed(2)}`;

    // the confirmation message here
    if (confirm(`The calculated total cost is $${finalCost.toFixed(2)}. Do you accept this total cost for payment?`)) {
        alert('Thank you for your payment!');
    } else {
        alert('Application withdrawn.');
    }

    
}
