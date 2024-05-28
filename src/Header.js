function Header(){
    return(
    <div class= "header">
        <img  class="logo"  src= {require("./img/img1.png")} />
        
        <div><span class="material-symbols-outlined">
        notifications
        </span>
        <style>{`
        .material-symbols-outlined {
         font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
            }`}
        </style>
        <span class="material-symbols-outlined">
monetization_on
</span>
        <span class="material-symbols-outlined">
person
</span></div>



    </div>
    );
}

export default Header;