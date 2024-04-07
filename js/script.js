const getCoupons = async () => {
  const coupons = await request.get('/coupons');

  let couponsText = '';

  for (const coupon of coupons) {
    couponsText += `<div id="main" class="coupon">
  <div id="couponLeft" class="couponL">
    <h6>valido hasta; ${coupon.expirationDate}</h6>
  </div>
  <div id="couponRight" class="couponR">
    <h2>${coupon.description}</h2>
  </div>
  <button class="button" onclick='useCoupon(${coupon.id})'>Usar cupon</button>
</div>`;
  }

  const mainDiv = document.getElementById('app');
  mainDiv.innerHTML = couponsText;
};
const useCoupon = async (id) => {
  const coupon = await request.delete(`/coupons/${id}`)
  alert(coupon.message);
  location.reload();
};
getCoupons();

