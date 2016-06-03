@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="entry">
                @if ($entry->title)
                    <h1>{{ $entry->title }}</h1>
                @endif
                
                @if ($entry->author)
                    <p><em>{{ $entry->author }}</em></p>
                @endif
                
                <div>{{ $entry->content }}</div>
            </div>
        </div>
    </div>
</div>
@endsection
