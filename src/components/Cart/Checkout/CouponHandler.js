export function couponHandler(setInvalidCoupon, setCouponError, setOff, code, setCoupon, subtotal, couponErrorHandler, delivery, items) {
  var date = new Date();
  setInvalidCoupon(false); setCouponError(""); setOff(0);
  if (code === "DATEWEEKEND") {
    if (date.getDay() == 0 || date.getDay() == 6) {
      setCoupon(true); setOff(subtotal * 0.10);
    } else couponErrorHandler();
  }
  else if (code === "FIRSTORDER") {
    async function getData() {
      const fetchUrl = 'https://reacteats-884d9-default-rtdb.firebaseio.com/';
      const response = await fetch(fetchUrl + localStorage.getItem("id") + '/history.json');
      const data = await response.json();
      if (data === null) { setCoupon(true); setOff(subtotal * 0.10); }
      else couponErrorHandler();
    }
    getData();
  }
  else if (code === "FREESHIP") {
    if (subtotal > 80) { setCoupon(true); setOff(delivery); }
    else couponErrorHandler();
  }
  else if (code === "HUNGRYHOUR") {
    if (date.getHours() >= 14 && date.getHours() <= 16) {
      setCoupon(true); setOff(subtotal * 0.15);
    } else couponErrorHandler();
  }
  else if (code === "MEATLESS") {
    var flag = items.every(item => item.type === "veg")
    if (flag === true) { setCoupon(true); setOff(subtotal * 0.15); }
    else couponErrorHandler();
  }
  else if (code === "ORDER50") {
    if (subtotal > 100) { setCoupon(true); setOff(50); }
    else couponErrorHandler();
  }
  else if (code === "PARTYTIME") {
    if (subtotal > 1000) { setCoupon(true); setOff(subtotal * 0.25); }
    else couponErrorHandler();
  }
  else if (code === "SUPERSALE") {
    if (subtotal > 500) { setCoupon(true); setOff(subtotal * 0.20); }
    else couponErrorHandler();
  }
  else if (code === "SWEETDEAL") {
    var flag = items.every(item => item.imageSrc.includes("dessert"));
    if (flag === true) { setCoupon(true); setOff(subtotal * 0.20); }
    else couponErrorHandler();
  }
  else if (code === "THANKYOU5") { setCoupon(true); setOff(subtotal * 0.05); }
  else if (code === "THIRSTYTHURSDAY") {
    var flag = items.every(item => item.imageSrc.includes("drink"));
    if (flag === true && date.getDay() === 4) { setCoupon(true); setOff(subtotal * 0.25); }
    else couponErrorHandler();
  }
}