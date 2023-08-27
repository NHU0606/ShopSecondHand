document.addEventListener("DOMContentLoaded", function () {
  const selectAllCheckbox = document.getElementById("chonhet");
  const itemCheckboxes = document.querySelectorAll(".item-checkbox");
  const quantityInputs = document.querySelectorAll(".quantity-input");
  const totalPrices = document.querySelectorAll(".total-price");
  const selectPrice = document.getElementById("select-price");

  selectAllCheckbox.addEventListener("change", function () {
    const isChecked = selectAllCheckbox.checked;

    for (let i = 0; i < itemCheckboxes.length; i++) {
      itemCheckboxes[i].checked = isChecked;
    }

    updateTotalPrice();
  });

  selectPrice.addEventListener("change", function () {
    let value = selectPrice.value;

    const listRow = document.getElementsByClassName("row-product");

    for (let i = 0; i < itemCheckboxes.length; i++) {
      const price = parseFloat(
        document.getElementsByClassName("price")[i].innerHTML
      );

      if (price < value * 100 || price > value * 100 + 100) {
        listRow[i].className = "row-product hidden";
      } else {
        listRow[i].className = "row-product";
      }
    }
  });

  for (let i = 0; i < itemCheckboxes.length; i++) {
    itemCheckboxes[i].addEventListener("change", function () {
      updateTotalPrice();
    });

    quantityInputs[i].addEventListener("input", function () {
      updateTotalPrice();
    });
  }

  function updateTotalPrice() {
    let totalPrice = 0;

    for (let i = 0; i < itemCheckboxes.length; i++) {
      if (itemCheckboxes[i].checked) {
        const price = parseFloat(
          document.getElementsByClassName("price")[i].innerHTML
        );
        const quantity = parseFloat(quantityInputs[i].value) || 0;

        const itemTotal = price * quantity;
        totalPrice += itemTotal;

        totalPrices[i].textContent = itemTotal.toFixed(2);
      } else {
        totalPrices[i].textContent = "0";
      }
    }

    const totalRow = document.querySelector(".total");
    totalRow.innerHTML = totalPrice;

    console.log(totalPrice);
  }
});
