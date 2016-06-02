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
        $newEntry = $entry->publish();

        // Rendered content is not saved, simply returned in response
        $newEntry->renderedContent = $request->renderedContent;

        return $newEntry;
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

    public function view($slug)
    {
        $entry = Entry::where(['slug' => $slug])->get();
        if ($entry->isEmpty()) {
            return abort(404);
        }
        return $entry;
    }
}
