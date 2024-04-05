const getCoupons = async () => {
  const response = await fetch('https://coupons-hwhz.onrender.com/api/coupons');
  const coupons = await response.json();

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
  const response = await fetch(
    `https://coupons-hwhz.onrender.com/api/coupons/${id}`,
    {
      method: 'delete',
    }
  );
  const coupon = await response.json();
  alert(coupon.message);
  location.reload();
};
getCoupons();

const isAuth = () => {
  const token = sessionStorage.getItem('userToke');
  if (!token) {
    location.href = 'pages/login.html';
  }
}

isAuth();