<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Task;

class TaskSeeder extends Seeder
{
    public function run(): void
    {
        Task::create(['title' => 'Finish Laravel API setup','completed' => false]);
        Task::create(['title' => 'Write frontend with Tailwind + JS','completed' => false]);
        Task::create(['title' => 'Test CRUD operations','completed' => true]);
    }
}
