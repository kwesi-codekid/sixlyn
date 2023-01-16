<?php

namespace App\Models\Customer;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerAuth extends Model
{
    use HasFactory;
    use HasUuids;


    // customer fillable
    protected $fillable = [
        'user_id',
        'customer_id',
        'customer_name',
    ];
}
