@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-body" id="journal-new-entry">
                    <!-- TODO Convert to a React Component -->
                    <form method="post" action="{{ url('/entry') }}">
                        {{ csrf_field() }}

                        <div class="form-group">
                            <input type="text" class="form-control input-lg" placeholder="Title" name="title">
                        </div>

                        <div class="form-group">
                            <textarea name="content" id="" cols="30" rows="5" class="form-control input-lg"
                                placeholder="Content"></textarea>
                        </div>

                        <div class="form-group">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox">
                                    Is Private?
                                </label>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="btn-group pull-right">
                                <button class="btn btn-primary">Publish</button>
                                <button class="btn btn-default">Save as Draft</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            @forelse ($entries as $entry)
                <div class="panel panel-default entry">
                    <div class="panel-body">
                        <!-- TODO Convert to a React Component -->
                        <h3>{{ $entry->title }}</h3>
                        <hr>
                        <p>{{ $entry->content }}</p>
                        <small><em>Written by: {{ $entry->user->name }} on {{ $entry->created_at }}</em></small>
                    </div>
                </div>
            @empty
                <div class="panel panel-default">
                    <div class="panel-body" id="journal-all-entries">
                        <!-- TODO Convert to a React Component -->
                        <em>No entries yet</em>
                    </div>
                </div>
            @endforelse


        </div>
    </div>
</div>
@endsection
