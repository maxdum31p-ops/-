<?php
include 'header.php';

// ข้อมูลจำลองสำหรับหน้าแรก
$stat_box = [
    ['label' => 'ปีแห่งความสำเร็จ', 'value' => '50+'],
    ['label' => 'จำนวนนักเรียน', 'value' => '450+'],
    ['label' => 'ครูผู้เชี่ยวชาญ', 'value' => '32'],
    ['label' => 'ค่าเฉลี่ยศิษย์เก่า', 'value' => '100%'],
];

$news_items = [
    [
        'id' => 1,
        'title' => 'รางวัลชนะเลิศนวัตกรรมวิชาการ',
        'img' => 'https://images.unsplash.com/photo-1577896851231-70ef14603e80?auto=format',
        'cat' => 'วิชาการ',
        'date' => '20 พ.ค. 2567',
        'content' => 'โรงเรียนบ้านเดิดคว้ารางวัลชนะเลิศการประกวดนวัตกรรมระดับจังหวัด ยโสธร...'
    ],
    [
        'id' => 2,
        'title' => 'บรรยากาศกิจกรรมวันไหว้ครู',
        'img' => 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format',
        'cat' => 'วัฒนธรรม',
        'date' => '12 มิ.ย. 2567',
        'content' => 'ภาพบรรยากาศที่เปี่ยมไปด้วยความซาบซึ้งใจในกิจกรรมวันไหว้ครู...'
    ]
];
?>

<main>
    <!-- Hero Section -->
    <section class="relative h-[650px] flex items-center overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=2071" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-r from-[#00205f]/95 via-[#00205f]/70 to-transparent"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div class="max-w-2xl text-white">
                <span class="inline-block px-4 py-1.5 bg-[#fdc003] text-[#6c5000] rounded-full text-[10px] font-bold mb-6 tracking-widest uppercase">
                    ACADEMIC YEAR 2024
                </span>
                <h2 class="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
                    ปลูกฝังความรู้ คู่คุณธรรม<br>สร้างสรรค์ปัญญา พัฒนาสังคม
                </h2>
                <p class="text-lg text-white/80 mb-10 leading-relaxed font-light">
                    โรงเรียนบ้านเดิด มุ่งมั่นพัฒนาผู้เรียนให้มีความเป็นเลิศทางวิชาการ เพื่อเติบโตเป็นผู้นำที่ดีในอนาคต
                </p>
                <div class="flex flex-wrap gap-4">
                    <a href="contact.php" class="bg-[#fdc003] text-[#6c5000] px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all">
                        สมัครเรียนออนไลน์
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white border-b border-slate-100">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-2 md:grid-cols-6 gap-8 text-center items-center">
                <?php foreach($stat_box as $stat): ?>
                <div class="px-4">
                    <div class="text-primary text-4xl font-bold mb-1"><?php echo $stat['value']; ?></div>
                    <div class="text-[10px] text-slate-400 uppercase tracking-widest font-bold"><?php echo $stat['label']; ?></div>
                </div>
                <?php endforeach; ?>
                <div class="col-span-2 px-8 flex flex-col items-center justify-center gap-1 border-t md:border-t-0 md:border-l pt-8 md:pt-0">
                    <div class="text-[10px] text-yellow-500 font-bold uppercase tracking-widest">School Motto</div>
                    <div class="text-xl font-bold text-primary italic">"เรียนดี กีฬาเด่น เน้นคุณธรรม"</div>
                </div>
            </div>
        </div>
    </section>

    <!-- News & Principal -->
    <section class="py-24 bg-[#f3faff] px-6">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div class="lg:col-span-4 space-y-10">
                <div class="bg-white p-10 rounded-[2.5rem] border border-slate-200 text-center shadow-lg">
                    <div class="w-36 h-36 rounded-full overflow-hidden mx-auto mb-8 ring-8 ring-slate-50 border-4 border-white">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format" class="w-full h-full object-cover">
                    </div>
                    <h3 className="font-bold text-primary text-2xl">สารจากผู้อำนวยการ</h3>
                    <p className="text-sm text-slate-500 italic my-6">"เราเชื่อมั่นในศักยภาพที่ไร้ขีดจำกัดของเด็ก และพร้อมเปิดโอกาสให้เขาเดินตามฝัน"</p>
                    <div className="font-bold text-primary text-lg">นางสาวกิตติ์สินี อนันต์</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase mt-1">ผู้อำนวยการโรงเรียนบ้านเดิด</div>
                </div>
            </div>

            <div class="lg:col-span-8">
                <div class="flex justify-between items-end mb-12">
                    <h2 class="text-4xl font-bold text-primary">ข่าวสารและกิจกรรม</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <?php foreach($news_items as $news): ?>
                    <a href="#" class="group block">
                        <div class="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-lg">
                            <img src="<?php echo $news['img']; ?>" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                        </div>
                        <span class="text-[10px] font-bold text-primary bg-primary/5 px-4 py-1 rounded-full uppercase"><?php echo $news['cat']; ?></span>
                        <h4 class="text-2xl font-bold text-primary mt-4"><?php echo $news['title']; ?></h4>
                        <p class="text-sm text-slate-500 mt-2"><?php echo $news['content']; ?></p>
                    </a>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'footer.php'; ?>
