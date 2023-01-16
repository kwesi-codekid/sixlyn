<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;
    use HasUuids;

    // fillable
    protected $fillable = [
        'name',
        'slug',
        'website',
        'logo',
        'country',
        'founded_at',
    ];
}
