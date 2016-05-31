@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-6" id="entry-form">
            <!-- Everything here will be overwritten by React -->
            <form method="post" action="/">
                <div class="form-group">
                    <input type="text" class="form-control input-lg" placeholder="Title" name="title">
                </div>
    
                <div class="form-group">
                    <textarea name="content" id="" cols="30" rows="20" class="form-control input-lg"
                        placeholder="Content"></textarea>
                </div>
    
                <div class="form-group">
                    <div class="btn-group">
                        <button class="btn btn-link btn-lg">Publish</button>
                    </div>
                </div>
            </form>
        </div>
        <!-- /.col-md-6 -->
    
        <div class="col-md-6" id="render-container">
            <!-- Everything here will be overwritten by React -->
        </div>
        <!-- /.col-md-6 -->
    </div>
    <!-- /.row -->
</div>

@endsection
