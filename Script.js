fetch("https://script.google.com/macros/s/AKfycbzVJl_ET_Oc5B44f7EgecWxbhs01CKfrr85qWfdR3H11zg44A89K4rxUUR2Np3BNm/exec", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    action: "register", // or "login"
    username: "abc",
    password: "123",
    email: "abc@example.com",
    phone: "1234567890"
  })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error("Error:", err));
