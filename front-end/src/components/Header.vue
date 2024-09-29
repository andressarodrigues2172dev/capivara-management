<template>
    <header>
        <nav class="container">
            <a href="./"><img src="../assets/logo (2).png" alt="capivara" id="logo"></a>
             
            <img v-on:click="toggleMenu" alt="Abrir menu" id="menu-button" 
                 src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg">
                 

            <!-- Overlay que fecha o menu quando clicado -->
            <div id="menu-overlay" v-if="menuActive" @click="toggleMenu"></div>

            <!-- Menu lateral -->
            <div id="menu-items" :class="{active: menuActive}">
                <ul>
                    <a href="./"><img src="../assets/logo (2).png" alt="capivara" id="menu-logo"></a>
                    <li><a href="/">Home</a></li>
                    <li><router-link to="/Catalogo">catálogo</router-link></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            menuActive: false  // Menu começa fechado
        }
    },
    methods: {
        toggleMenu() {
            this.menuActive = !this.menuActive;  // Alterna entre abrir e fechar
        }
    }
}
</script>

<style scoped>

header{
    background-color: var(--color-background-nav);
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav{
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
}

#logo{
    width: 80px;
}

#menu-button{
    width:30px;
}

#menu-overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: #2e2a28;
    opacity: 0.8;
}


#menu-logo{
    width: 110px;
    margin-top: 20px;
    margin-bottom: 10px;
}

#menu-items{
    position: fixed;
    top:0;
    right: 0;
    background-color: var(--color-background-nav);
    width: 60%;
    height: 100vh;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

/* Itens da lista no menu */
ul{
    list-style: none;
    text-align: center;
}

ul li{
    margin: 20px 0px;
}

ul li a{
    color: white;
}

/* Quando o menu está ativo, exibimos ele */
#menu-items.active {
    display: flex;
}

@media (min-width: 700px) {
    #menu-button,
    #menu-logo,
    #menu-overlay {
        display: none;
    }

    #menu-items {
        display: flex; 
        position: static;
        height: 60px;
        width: auto;
    }
    
    ul{
        display: flex;
        height: 60px;
        align-items: center;
    }

    ul li{
        margin: 0;
        margin-left: 20px;
    }
}
</style>
