var ul_items = document.getElementById('ul_items');
var add_btn = document.getElementById('add_btn');
var form = document.getElementById('addForm');
form.addEventListener("submit", add_item_list );
ul_items.addEventListener("click", remove_item_list );

function add_item_list(e){
    var item_info = document.getElementById('search').value;
    e.preventDefault();
    console.log(1);
    var new_li = document.createElement('li');
    new_li.className = "list-group-item";
    new_li.appendChild(document.createTextNode( item_info ));
    ul_items.appendChild(new_li);
    del_btn = document.createElement('button');
    del_btn.className = "btn btn-dark float-end delete"
    del_btn.appendChild(document.createTextNode('x'));
    new_li.appendChild(del_btn);
}

function remove_item_list(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        ul_items.removeChild(li);
    }
}