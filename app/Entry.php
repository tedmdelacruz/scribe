<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entry extends Model
{
    const STATUS_DRAFT = 10;
    const STATUS_PUBLISHED = 20;
    const STATUS_ARCHIVED = 30;

    protected $fillable = ['title', 'content', 'is_private', 'status'];

    public function user()
    {
        $this->belongsTo(User::name);
    }
}
