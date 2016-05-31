<?php

namespace App\Http\Controllers;

use Auth;
use App\Entry;
use Illuminate\Http\Request;

class EntriesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function write()
    {
        return view('write');
    }

    public function create(Request $request)
    {
        $entry = new Entry($request->all());
        $entry->user_id = Auth::user()->id;
        $entry->is_private = false;
        $entry->status = Entry::STATUS_PUBLISHED;
        $entry->save();
       
        return $entry;
    }

    public function get()
    {
        return Entry::getActiveEntries();
    }

    public function delete(Entry $entry)
    {
        $entry->disable();
        return $entry;
    }
}
