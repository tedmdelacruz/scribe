@extends('layouts.app')

@section('content')
<div class="jumbotron">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Scribe</h1>
                <hr>
                <p>A simple Markdown writer with real-time preview</p>
                <p><a href="{{ url('/write') }}" class="btn btn-default">Write your first entry now</a></p>
            </div>
        </div>
    </div>
</div>
@endsection
