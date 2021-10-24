const precioOriginal = 120;
const descuento = 18;

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const coupons = [
    {
      name: 'JuanDC_es_Batman',
      discount: 15,
    },
    {
      name: 'pero_no_le_digas_a_nadie',
      discount: 30,
    },
    {
      name: 'es_un_secreto',
      discount: 25,
    },
  ];
  const inputPrice = document.getElementById('InputPrecio');
  const priceValue = inputPrice.value;
  //   const InputDiscount = document.getElementById('InputDescuento');
  //   const discountValue = InputDiscount.value;

  const inputCoupon = document.getElementById('InputCoupon');
  const couponValue = inputCoupon.value;

  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };

  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert('El cupón ' + couponValue + 'no es válido');
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      descuento
    );

    const resultP = document.getElementById('resultPrice');
    resultP.innerText = 'El precio con descuento son: $' + precioConDescuento;
  }
}
