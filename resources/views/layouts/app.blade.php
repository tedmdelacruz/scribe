<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ $app_name }} - {{ $app_desc }}</title>

    <link href="{{ asset('css/vendor/font-awesome.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/vendor/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body id="app-layout">
    <nav class="navbar navbar-default navbar-custom navbar-static-top">
        <div class="container">
            <div class="navbar-header">

                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ $app_name }}
                </a>
            </div>

            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                <ul class="nav navbar-nav">
                    <li {{ Route::is('write') ? "class=active" : null }}><a href="{{ url('/write') }}">Write</a></li>
                    <li {{ Route::is('browse') ? "class=active" : null }}><a href="{{ url('/browse') }}">Browse</a></li>
                    <li {{ Route::is('about') ? "class=active" : null }}><a href="{{ url('/about') }}">About</a></li>
                </ul>

                <!-- <ul class="nav navbar-nav navbar-right">
                </ul> -->
            </div>
        </div>
    </nav>

    @yield('content')

    <script src={{ asset('js/vendor/jquery.min.js') }}></script>
    <script src={{ asset('js/vendor/bootstrap.min.js') }}></script>
    <script>
        window.baseUrl = "{{ url('/') }}";
    </script>

    @yield('scripts')

</body>
</html>
