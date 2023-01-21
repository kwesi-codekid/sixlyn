<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    use HasUuids;


    protected $fillable = [
        'name',
        'slug',
        'description',
        'image',
        'price',
        'stock',
        'status',
        'featured',
        'quantity',
        'category_id',
    ];
}
