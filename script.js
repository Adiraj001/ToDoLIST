const input = document.getElementById('input');
    const listcontainer = document.getElementById('listcontainer');

    function AddTASK() {
        if (input.value.trim() === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement('li');
        li.textContent = input.value;

        li.addEventListener('click', function(e) {
            if (e.target.classList.contains('close')) return;
            li.classList.toggle('checked');
        });

        
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close';
        closeBtn.innerHTML = '&times;';
        closeBtn.title = "Delete task";
        closeBtn.onclick = function(e) {
            e.stopPropagation();
            li.remove();
        };

        li.appendChild(closeBtn);
        listcontainer.appendChild(li);
        input.value = "";
    }