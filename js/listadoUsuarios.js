(function(){
    document.getElementById("userForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const numUsers = document.getElementById("numUsers").value;
       getUsers(numUsers)
    
    })
    
     const getUsers = async (numUsers)=>{
       
        const res= await  fetch(`https://randomuser.me/api/?results=${numUsers}`)
        const data = await res.json()
   
        drawCard(data.results);

     }

     const drawCard = (users)=>{

        const userList = document.getElementById("userList");
        userList.innerHTML = ''; // Limpiar la lista de usuarios existente

        users.forEach(u=>{
            const userCard = document.createElement("div");
            userCard.className = "col-sm-6 col-md-4 col-lg-3 user-card mt-3";

            userCard.innerHTML = 
            `<div class="card h-100">
                <img src="${u.picture.large}" class="card-img-top" alt="Usuario">
                <div class="card-body">
                    <h5 class="card-title">${u.name.first} ${u.name.last}</h5>
                    <p class="card-text">Email: ${u.email}</p>
                    <p class="card-text">Teléfono: ${u.phone}</p>
                    <p class="card-text">Celular: ${u.cell}</p>
                </div>
            </div>`;
            userList.appendChild(userCard);




        })



     }







    
})();