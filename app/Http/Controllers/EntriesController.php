<?php

namespace App\Http\Controllers;

use Auth;
use App\Entry;
use Illuminate\Http\Request;

class EntriesController extends Controller
{

    public function create(Request $request)
    {
        $entry = new Entry($request->all());
        $entry->user_id = Auth::user()->id;
        return $entry;
    }

    public function get()
    {
        return Entry::all();
    }
}
