var elixir = require('laravel-elixir');

elixir.config.js.browserify.watchify = {
    enabled: true,
    options: {
        poll: true
    }
}

var dirs = {
    vendorCss: 'public/css/vendor',
    vendorJs: 'public/js/vendor'
};

elixir(function(mix) {
    mix.sass('app.scss')
        .copy('bower_components/font-awesome/css/font-awesome.min.css', dirs.vendorCss)
        .copy('bower_components/font-awesome/fonts', 'public/css/fonts')
        .copy('bower_components/bootstrap/dist/css/bootstrap.min.css', dirs.vendorCss)

        .copy('bower_components/jquery/dist/jquery.min.js', dirs.vendorJs)
        .copy('bower_components/bootstrap/dist/js/bootstrap.min.js', dirs.vendorJs)

        .browserify('write/index.js', 'public/js/write.js')
        .browserify('browse/index.js', 'public/js/browse.js');
});
