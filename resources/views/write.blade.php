@extends('layouts.app')

@section('content')

<div id="app">
    <!-- Everything here will be overwritten by React -->
    <div class="row">
        <div class="col-md-6">
            <form method="post" action="/">
                <div class="form-group">
                    <input type="text" class="form-control input-lg" placeholder="Title" name="title">
                </div>
    
                <div class="form-group">
                    <textarea name="content" id="" cols="30" rows="20" class="form-control input-lg"
                        placeholder="Content"></textarea>
                </div>
    
                <div class="form-group">
                    <div class="btn-group pull-right">
                        <button class="btn btn-primary btn-lg">Publish</button>
                        <!-- <button class="btn btn-default">Save as Draft</button> -->
                    </div>
                </div>
            </form>
        </div>
        <!-- /.col-md-6 -->

        <div class="col-md-6">
            <div class="rendered-page"></div>
        </div>
        <!-- /.col-md-6 -->
    </div>
    <!-- /.row -->
</div>
<!-- /#app -->

@endsection
