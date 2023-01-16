<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Customer\CustomerAuth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // customer login
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('dashboard');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    // customer logout
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }

    // customer register
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|confirmed|min:8',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $request->session()->regenerate();

        return redirect()->intended('dashboard');
    }

    // customer dashboard
    public function dashboard()
    {
        return view('dashboard');
    }

    // customer profile
    public function profile()
    {
        return view('profile');
    }

    // customer update profile
    public function updateProfile(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . Auth::user()->id,
            'password' => 'nullable|string|confirmed|min:8',
        ]);

        $user = CustomerAuth::find(Auth::user()->id);
        $user->name = $request->name;
        $user->email = $request->email;
        if ($request->password) {
            $user->password = Hash::make($request->password);
        }
        $user->save();

        return back()->with('success', 'Profile updated successfully.');
    }

    // customer orders
    public function orders()
    {
        $orders = Order::where('user_id', Auth::user()->id)->get();
        return view('orders', compact('orders'));
    }

    // customer order details
    public function orderDetails($id)
    {
        $order = Order::find($id);
        return view('order-details', compact('order'));
    }

    // customer order cancel
    public function orderCancel($id)
    {
        $order = Order::find($id);
        $order->status = 'cancelled';
        $order->save();

        return back()->with('success', 'Order cancelled successfully.');
    }
}
