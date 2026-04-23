<?php
// header.php
?>
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>โรงเรียนบ้านเดิด (Ban Doet School) - ยโสธร</title>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&family=Lexend:wght@400;500;600&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS (CDN version for easy use) -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <style>
        body { font-family: 'Lexend', 'Public Sans', sans-serif; background-color: #f3faff; color: #071e27; }
        .font-sans-th { font-family: 'Public Sans', sans-serif; }
        .bg-primary { background-color: #00205f; }
        .text-primary { color: #00205f; }
        .bg-secondary-container { background-color: #fdc003; }
        .text-on-secondary-container { color: #6c5000; }
        .bg-surface { background-color: #f3faff; }
    </style>
</head>
<body class="antialiased">

<header class="bg-white sticky top-0 z-50 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        <a href="index.php" class="flex items-center gap-3">
            <!-- Simple SVG Logo Placeholder -->
            <svg class="text-primary w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
            <div class="hidden sm:block">
                <h1 class="text-lg font-bold text-primary leading-tight">โรงเรียนบ้านเดิด</h1>
                <p class="text-[10px] text-slate-500 tracking-widest uppercase">Ban Doet School</p>
            </div>
        </a>
        
        <nav class="hidden md:flex items-center gap-8">
            <a href="index.php" class="py-2 text-sm font-medium hover:text-primary transition-colors">หน้าแรก</a>
            <a href="about.php" class="py-2 text-sm font-medium hover:text-primary transition-colors">เกี่ยวกับเรา</a>
            <a href="academic.php" class="py-2 text-sm font-medium hover:text-primary transition-colors">วิชาการ</a>
            <a href="contact.php" class="py-2 text-sm font-medium hover:text-primary transition-colors">ติดต่อเรา</a>
        </nav>

        <div class="flex items-center gap-4">
            <button class="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-opacity-90 transition-all">
                เข้าสู่ระบบ
            </button>
        </div>
    </div>
</header>
