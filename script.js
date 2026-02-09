function login(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "adebahrain" && pass === "ade123"){
        alert("Login berhasil ✅");
        window.location.href = "dashboard.html";
    }else{
        alert("Username / Password salah ❌");
    }
}

function showPass(){
    let pass = document.getElementById("password");

    if(pass.type === "password"){
        pass.type = "text";
    }else{
        pass.type = "password";
    }
}


function logout(){
    localStorage.removeItem("login");
    window.location="login.html";
}

function showContent(type){
    const area = document.getElementById("contentArea");

    if(type === "sosmed"){
        area.innerHTML = `
            <h3>Sosial Media</h3>
            <p>TikTok, Instagram, Linktree tersedia di menu Akun Sosmed.</p>
        `;
    }

    else if(type === "p1"){
        area.innerHTML = `
            <h3>Project 1</h3>
            <p>Project editing video jedag jedug menggunakan Alight Motion.</p>
        `;
    }

    else if(type === "p2"){
        area.innerHTML = `
            <h3>Project 2</h3>
            <p>Project preset dan transisi cinematic.</p>
        `;
    }
}
