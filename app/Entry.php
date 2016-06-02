<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Entry extends Model
{
    const STATUS_DRAFT = 10;
    const STATUS_PUBLISHED = 20;
    const STATUS_ARCHIVED = 30;

    const ACTIVE = 1;
    const INACTIVE = 0;

    protected $fillable = ['title', 'content','author', 'is_private', 'status', 'is_active'];

    public function disable()
    {
        $this->is_active = static::INACTIVE;
        return $this->save();
    }

    public static function getActiveEntries()
    {
        return Entry::where(['is_active' => Entry::ACTIVE])->get();
    }
}
