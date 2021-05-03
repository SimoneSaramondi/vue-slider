
var app = new Vue({
    el: '#app',
    data: {        

        indice: 0,       

        immagini:[
            "https://static.sky.it/images_static/sport/motori/2019/03/02/ktm_factory_mxgp_cairoli_twitter.jpg.transform/hero-mobile-2x/ab015c242aaa1f94bb51cf6631e5d540925c7589/img.jpeg",
            "https://www.corriere.it/methode_image/2019/04/14/Sport/Foto%20Sport%20-%20Trattate/cairoli-klaC-U31101298247247wmG-656x492@Corriere-Web-Sezioni.PNG",
            "https://www.repstatic.it/content/nazionale/img/2020/12/06/184816776-2a24aca9-2ba5-4c41-99a2-5805dfaf223a.jpg"
        ],

        
        
        
    },

    methods:{
        //click sulle frecce
        //+1 per avanti
        //-1 per indietro
        changeImg(direction){
            this.indice += direction;
        }

        //Uso la stessa funzione per cambiare immagini con la tastiera
    },

    //specifico a vue cosa deve fare quanto arriva mounted
    mounted:function(){
        //Faccio focus su la classe container
        //quindi come se fosse gia in focus dal ricaricamento della pagina
        document.querySelector(".container").focus()
    }


  });