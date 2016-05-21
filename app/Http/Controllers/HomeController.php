<?php

namespace App\Http\Controllers;

use App\Entry;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $entries = Entry::with('user')->get();
        return view('home', compact('entries'));
    }
}
