@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">Write a new entry</div>

                <div class="panel-body" id="journal-new-entry">
                    <!-- TODO Convert to a React Component -->
                    <form method="post">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Title">
                        </div>

                        <div class="form-group">
                            <textarea name="content" id="" cols="30" rows="" class="form-control"
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

            <div class="panel panel-default">
                <div class="panel-body" id="journal-all-entries">
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
