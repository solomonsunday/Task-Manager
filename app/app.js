

(function() {
    'use strict'
    var app = angular.module('taskApp', ['ui.router', 'ui.bootstrap'])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('index', { url: '/index', abstract: true, templateUrl: 'app/layout/masterpage.html' })
                .state('index.home', { url: '/home', views: { 'mainContent': { templateUrl: 'app/views/home/home.html', controller: 'homeCtrl as vm' } } })
                .state('index.about', { url: '/about', views: { 'mainContent': { templateUrl: 'app/views/about/about.html', conroller: 'aboutCtrl as vm' } } })
                .state('index.task', { url: '/task', views: { 'mainContent': { templateUrl: 'app/views/task/task.html', controller: 'taskCtrl as vm' } } })
              


            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/index/home');

        })


}())