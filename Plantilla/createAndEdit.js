const handleCreateCoupon = async () => {
  const token = sessionStorage.getItem('userToken');
  if (!token) {
    alert('token no existe');
    return;
  }
  const END_POINT = 'https://coupons-hwhz.onrender.com/api/coupons';
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('dueDate').value;
  const payload = {
    description,
    expirationDate: dueDate,
  }

  const response = await fetch(END_POINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  });
  console.log(response);
  if (response.status === 401) {
    alert('El token esta modificado o no es valido');
    sessionStorage.removeItem('userToken');
    location.href = 'login.html';
    return;
  }

  await response.json();
  location.href = 'index.html';

}
