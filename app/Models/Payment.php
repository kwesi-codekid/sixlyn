<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    use HasUuids;


    // payment fillable
    protected $fillable = [
        'user_id',
        'order_id',
        'payment_method',
        'payment_status',
        'payment_id',
        'amount',
        'payment_currency',
        'payment_response',
    ];
}
