var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.sass('app.scss')
        .browserify('write/index.js', 'public/js/write.js');
});
