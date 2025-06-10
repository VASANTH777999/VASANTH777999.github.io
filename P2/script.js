const users = [];

let user = {};


const showLogin = () => {
  let str = `
    <div>
      <center><h1>Login Form</h1></center>
      <p><div id="dvMsg"></div></p>
      <p><input type="text" id="txtEmail" placeholder="Enter EmailID" ></p>
      <p><input type="password" id="txtPass" placeholder="Enter Pass" ></p>
      <p><button class="a" onclick='validateUser()' >Log In</button></p>
      <p><button class="b" onclick='showRegister()'>Create Account</button></p>
    </div>
  `;
  root.innerHTML = str;
};

const showRegister = () => {
  let str = `
    <h1>Register Form</h1>
    <p><input type="text" id="txtName" placeholder="Enter Name"></p>
    <p><input type="text" id="txtEmail"placeholder="Enter Email ex-abc@gmail.com"></p>
    <p><input type="password" id="txtPass" placeholder="Enter Pass" ></p>
    <button class="c" onclick='addUser()'>Register</button>
    <hr>
    <button class="d" onclick='showLogin()'>Already a Member? Login here...</button>
  `;
  root.innerHTML = str;
};

const showHome = () => {
  let str = `
    <h1>Welcome ${user.name}</h1>
    <hr>
    <p>
      <select id="actionType">
        <option value="0">--select--</option>
        <option value="1">Deposit</option>
        <option value="2">Withdraw</option>
      </select>
      <select id="FundAct">
      <option value="0">Fund Transfer</option>
      <option value="1">b</option>
      <option value="2">c</option>
      </select>
      
    </p>
    <p>
      <input type='number' id='txtAmount' placeholder="Enter Amount" >
    </p>
    <p>
      <button class="e" onclick='transf()'> Transfer amount</button>
      <button class="f" onclick='Upbal()'>Submit</button>
      <button class="g" onclick='showLogin()'>Logout</button>
    </p>
    <hr>
    <p>Current balance: ₹${user.balance}</p>
  `;
  root.innerHTML = str;
};

const addUser = () => {
  const obj = {
    name: document.getElementById("txtName").value,
    email: document.getElementById("txtEmail").value,
    pass: document.getElementById("txtPass").value,
    balance: 0
  };
  users.push(obj);
  showLogin();
};

const validateUser = () => {
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
  user = users.find((e) => e.email === email && e.pass === pass);
  if (user) {
    showHome();
  } else {
    document.getElementById("dvMsg").innerHTML = "Access Denied";
  }
};

const Upbal = () => {
  const action = document.getElementById("actionType").value;
  const amount = parseFloat(document.getElementById("txtAmount").value);

  if (amount <= 0) {
    alert("Enter a valid amount.");
    return;
  }

  if (action === "1") {
    user.balance += amount; 
  } else if (action === "2") {
    if (user.balance >= amount) {
      user.balance -= amount; 
    } else {
      alert("No balance.");
      return;
    }
  } else {
    alert("select opt");
    return;
  }

  showHome(); 
};
const transf = () => {
  const action = document.getElementById("actionType").value;
  const amount = parseFloat(document.getElementById("txtAmount").value);
  
  if (amount <= 0) {
    alert("Enter a valid amount.");
    return;
  }
  if (action === "1") {
      user.balance -= amount; 
  } else if (action === "2") {
       alert("select only dep");
    }
    
      showHome();
  };