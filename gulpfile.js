var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.sass('app.scss')
        .copy('bower_components/bootstrap/dist/css/bootstrap.min.css', 'public/css/vendor/')
        .copy('bower_components/jquery/dist/jquery.min.js', 'public/js/vendor/')
        .copy('bower_components/bootstrap/dist/js/bootstrap.min.js', 'public/js/vendor/')
        .browserify('write/index.js', 'public/js/write.js');
});
