<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index() {
        return Task::all();
    }

    public function store(Request $req) {
        return Task::create($req->validate(['title'=>'required|string']));
    }

    public function update(Request $req, Task $task) {
        $task->update($req->only(['title','completed']));
        return $task;
    }

    public function destroy(Task $task) {
        $task->delete();
        return response()->noContent();
    }
}
