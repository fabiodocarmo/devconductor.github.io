var app = angular.module("sorteio", []);

app.controller("sorteioCtrl", function ($scope, $interval, $window) {
    ctrl = this;
    $scope.num = 0;
    $scope.equipeSelecionada = null;
    $scope.sorteando = false;
    $scope.inicial = true;

    //$window.localStorage.removeItem("equipesApresentacao");
    //$window.localStorage.removeItem("xunda");

    if($window.localStorage.getItem("equipes")) {
        $scope.equipes = JSON.parse($window.localStorage.getItem("equipes"));
    } else {
        $scope.equipes = [
            {sequencia: 0, nome: "#CHashTag"},
            {sequencia: 0, nome: ".py15 minutos"},
            {sequencia: 0, nome: "AcademyFactory"},
            {sequencia: 0, nome: "Agillitz"},
            {sequencia: 0, nome: "Alessandro"},
            {sequencia: 0, nome: "AloeCooling"},
            {sequencia: 0, nome: "Altaqias"},
            {sequencia: 0, nome: "Amorphous"},
            {sequencia: 0, nome: "Aquela lá"},
            {sequencia: 0, nome: "Arg"},
            {sequencia: 0, nome: "Banzo"},
            {sequencia: 0, nome: "Bit brushes"},
            {sequencia: 0, nome: "Bloco de Notas"},
            {sequencia: 0, nome: "BRAUNER FERNANDES"},
            {sequencia: 0, nome: "CGhub"},
            {sequencia: 0, nome: "Chakravartin"},
            {sequencia: 0, nome: "Chicken Attack"},
            {sequencia: 0, nome: "Code System"},
            {sequencia: 0, nome: "Code Wizards"},
            {sequencia: 0, nome: "Code5"},
            {sequencia: 0, nome: "Conductor"},
            {sequencia: 0, nome: "Creative"},
            {sequencia: 0, nome: "D3V"},
            {sequencia: 0, nome: "DeadHeat"},
            {sequencia: 0, nome: "Desbloc"},
            {sequencia: 0, nome: "DevLogs"},
            {sequencia: 0, nome: "DevsTeam"},
            {sequencia: 0, nome: "Digger Bytes"},
            {sequencia: 0, nome: "Double Jota"},
            {sequencia: 0, nome: "Echo"},
            {sequencia: 0, nome: "Equipe Midas"},
            {sequencia: 0, nome: "Equipe Solomid"},
            {sequencia: 0, nome: "EUREKA!"},
            {sequencia: 0, nome: "Extreme"},
            {sequencia: 0, nome: "Goof"},
            {sequencia: 0, nome: "H.Y SPI"},
            {sequencia: 0, nome: "HackTeam"},
            {sequencia: 0, nome: "Hoje dou exception"},
            {sequencia: 0, nome: "HYG SPI"},
            {sequencia: 0, nome: "Ice Head Team"},
            {sequencia: 0, nome: "INventa"},
            {sequencia: 0, nome: "KiStranho"},
            {sequencia: 0, nome: "Los Fodelas"},
            {sequencia: 0, nome: "luis eduardo lima"},
            {sequencia: 0, nome: "Mateus Santos"},
            {sequencia: 0, nome: "Midas"},
            {sequencia: 0, nome: "Mochileiro das Galaxias"},
            {sequencia: 0, nome: "Muchileiro das Galáxias"},
            {sequencia: 0, nome: "NoNameTech"},
            {sequencia: 0, nome: "Otima"},
            {sequencia: 0, nome: "Paçoca"},
            {sequencia: 0, nome: "Perdedores"},
            {sequencia: 0, nome: "PermGen"},
            {sequencia: 0, nome: "Pitomba"},
            {sequencia: 0, nome: "Programadores de Pudim"},
            {sequencia: 0, nome: "Questão de Brio"},
            {sequencia: 0, nome: "Raniere de Lima Felipe Junior"},
            {sequencia: 0, nome: "Rodrigo de Queiroz Gonçalves Velez"},
            {sequencia: 0, nome: "Sol"},
            {sequencia: 0, nome: "Super Dev Bros"},
            {sequencia: 0, nome: "Team Recife"},
            {sequencia: 0, nome: "TeamWof"},
            {sequencia: 0, nome: "Tech Warriors"},
            {sequencia: 0, nome: "The Sharks"},
            {sequencia: 0, nome: "Third"},
            {sequencia: 0, nome: "TiagoRocha"},
            {sequencia: 0, nome: "Time Fábrica"},
            {sequencia: 0, nome: "Trinity"},
            {sequencia: 0, nome: "Tropa de Elite"},
            {sequencia: 0, nome: "Tryhard"},
            {sequencia: 0, nome: "Uno"},
            {sequencia: 0, nome: "Vai Que Roda"},
            {sequencia: 0, nome: "Victory"},
            {sequencia: 0, nome: "Virtua"},
            {sequencia: 0, nome: "VisioLab"}];
    }

    //console.log($window.localStorage.getItem("equipesApresentacao"));
    if($window.localStorage.getItem("equipesApresentacao")) {
        $scope.equipesApresentacao = JSON.parse($window.localStorage.getItem("equipesApresentacao"));
        $scope.equipeSelecionada = $scope.equipesApresentacao[0].nome;
    } else {
        $scope.equipesApresentacao = [];
    }

    $scope.sortear = function () {
        var promise = $interval(function () {
            $scope.num = Math.floor((Math.random() * $scope.equipes.length + 1));
            $scope.equipeSelecionada = $scope.equipes[$scope.num - 1].nome;
            $scope.sorteando = true;
        }, 500, 10);

        promise.then(function () {
            $scope.equipeSelecionada = $scope.equipes[$scope.num - 1].nome;
            $scope.sorteando = false;
            $scope.equipes[$scope.num - 1].sequencia = $scope.equipesApresentacao.length + 1;
            $scope.equipesApresentacao.unshift($scope.equipes[$scope.num - 1]);
            $scope.equipes.splice($scope.num - 1, 1);
            //console.log($scope.equipesApresentacao);
            $window.localStorage.setItem("equipesApresentacao", JSON.stringify($scope.equipesApresentacao));
            $window.localStorage.setItem("equipes", JSON.stringify($scope.equipes));
        });

    }

    $scope.limpar = function() {
        $window.localStorage.removeItem("equipesApresentacao");
        $window.localStorage.removeItem("equipes");
        $window.location.reload();
    }

    $scope.escolherEquipe = function(index) {
        //console.log(index);
        if($window.confirm('Deseja selecionar a equipe '+$scope.equipes[index].nome+' para apresentar?')) {
            $scope.equipeSelecionada = $scope.equipes[index].nome;
            $scope.sorteando = false;
            $scope.equipes[index].sequencia = $scope.equipesApresentacao.length + 1;
            $scope.equipesApresentacao.unshift($scope.equipes[index]);
            $scope.equipes.splice(index, 1);
            $window.localStorage.setItem("equipesApresentacao", JSON.stringify($scope.equipesApresentacao));
            $window.localStorage.setItem("equipes", JSON.stringify($scope.equipes));    
        }
        
    }

});