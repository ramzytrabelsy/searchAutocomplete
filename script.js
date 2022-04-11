const searchContainer = document.querySelector(".search-box");
const searchInput = searchContainer.querySelector("input");
const resultContent = searchContainer.querySelector(".list-box");
const icon = searchContainer.querySelector(".icon");
let link = searchContainer.querySelector("a");
let searchLink;

searchInput.onkeyup = (e)=>{
    let inputValue = e.target.value;
    let searchArray = [];
    if(inputValue){
        icon.onclick = ()=>{
            searchLink = "https://www.google.com/search?q=" + inputValue;
            link.setAttribute("href", searchLink);
            link.click();
        }
        searchArray = items.filter((data)=>{
            return data?.title.toLocaleLowerCase().startsWith(inputValue.toLocaleLowerCase()); 
        });
        searchArray = searchArray.map((item)=>{
            return data = '<li>'+ item?.title +'</li>';
        });
        searchContainer.classList.add("active");
        renderList(searchArray);
        let allList = resultContent.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) 
            allList[i].setAttribute("onclick", "select(this)");
    }else searchContainer.classList.remove("active");
}

function select(element){
    let itemSlected = element.textContent;
    searchInput.value = itemSlected;
    icon.onclick = ()=>{
        searchLink = "https://www.google.com/search?q=" + itemSlected;
        link.setAttribute("href", searchLink);
        link.click();
    }
    searchContainer.classList.remove("active");
}

function renderList(list){
    let listItems;
    if(!list.length){
        itemValue = searchInput.value;
        listItems = '<li>'+ itemValue +'</li>';
    }else{
        listItems = list.join('');
    }
    resultContent.innerHTML = listItems;
}