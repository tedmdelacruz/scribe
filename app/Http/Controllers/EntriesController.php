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
        $entry->is_private = false;
        $entry->status = Entry::STATUS_PUBLISHED;
        return $entry; // REMOVEME
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
