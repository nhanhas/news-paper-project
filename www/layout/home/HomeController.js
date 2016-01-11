app
    .controller('HomeController', ['$scope', '$location','$rootScope', function($scope, $location,$rootScope) {

        // Feed Noticias
        $scope.newsArray = [
            {id: 0 , titulo: 'Feira Medieval', descricao:'No passado dia 8 de dezem-bro, feriado nacional, cumpriu-se mais uma edição do Mercado Medieval de Mesão Frio...', image: 'assets/news-tile-pics/news_tile_0.png'},
            {id: 1 , titulo: 'Convenção do Concelho da Europa', descricao:'A violência sexual é um problema complexo, sensível e assustado-ramente generalizado...', image: ''},
            {id: 2 , titulo: 'Uma aula diferente', descricao:'Há espetáculos que se dirigem especificamente ao público jovem...', image: 'assets/news-tile-pics/news_tile_2.png'},
            {id: 3 , titulo: 'Prevenção do Cancro da mama', descricao:'Outubro é o mês internacional de Prevenção de Cancro da Mama...', image: 'assets/news-tile-pics/news_tile_3.png'},
            {id: 4 , titulo: 'Marcha solidária', descricao:'Marcha Solidária a favor das Doenças Neurodegenerativas', image: 'assets/news-tile-pics/news_tile_4.png'},
            {id: 5 , titulo: 'São Martinho', descricao:'“...cortou a capa que trazia ao meio dando uma parte ao pobre, …”', image: 'assets/news-tile-pics/news_tile_5.png'}
        ];


        //navigate to specific news
        $scope.navigateToNews = function (newsItem) {
            var newsUrl = 'layout/news/news_page_' + newsItem.id + '.html';
            //save in storage
            localStorage.setItem("newsSelected", newsUrl);
            //rootscope to be faster
            $rootScope.newsSelected = newsUrl;
            //navigate
            $location.path('/view2');
        };

    }]);


