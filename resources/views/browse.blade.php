@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row" id="entry-list">
        <!-- Everything here will be overwritten by React -->
    </div>
</div>

@endsection

@section('scripts')

    <script src="{{ asset('js/browse.js') }}"></script>

@endsection