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

    protected $fillable = ['title', 'content', 'author', 'is_private', 'status', 'is_active'];

    public function publish()
    {
        // Generate URL-friendly slug
        $slug = str_slug($this->title);

        // Handle any slug collisions
        if (Entry::where(['slug' => $slug])->count() > 0) {
            $slug = substr(md5($this->title), 0, 6) . '-' . str_slug($this->title);
        }

        $this->is_private = false;
        $this->status = Entry::STATUS_PUBLISHED; 
        $this->slug = $slug;
        $this->save();

        return $this;
    }

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
