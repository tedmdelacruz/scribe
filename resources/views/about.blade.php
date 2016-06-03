@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-body">
                    <h1>{{ $app_name }}</h1>
                    <h3>{{ $app_desc }}</h3>
                    <hr>
                    <p><em>A case study by Ted Mathew dela Cruz for using ReactJS + Redux + Immutable, ECMAScript 6, with a Laravel 5.2 backend</em></p>
                    <p>
                        <small><a href="https://github.com/tedmdelacruz/scribe">Source</a></small>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
