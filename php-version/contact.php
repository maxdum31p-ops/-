<?php
include 'header.php';

$form_success = false;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // ในความเป็นจริงต้องมีการส่งเมลที่นี่
    // mail("contact@bandoet.ac.th", "Contact Form", $_POST['message']);
    $form_success = true;
}
?>

<main class="py-24 px-6 max-w-7xl mx-auto">
    <div class="grid lg:grid-cols-12 gap-20">
        <div class="lg:col-span-5 space-y-16">
            <h2 class="text-5xl md:text-7xl font-bold text-primary tracking-tighter leading-none">ร่วมเดินทาง<br>ไปกับเรา</h2>
            <p class="text-xl text-slate-500 font-light">โรงเรียนบ้านเดิดพร้อมรับฟังผู้ปกครองและนักเรียนทุกคน ด้วยความจริงใจ</p>
            
            <div class="space-y-10">
                <div class="flex gap-8 items-start">
                    <div class="w-16 h-16 bg-primary/5 rounded-3xl flex items-center justify-center text-primary flex-shrink-0 shadow-md">
                         <!-- MapPin Icon -->
                         <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div class="pt-2">
                        <div class="font-bold text-primary text-xl mb-1">ที่อยู่</div>
                        <div class="text-sm text-slate-400">123 หมู่ 4 ต.เดิด อ.เมือง จ.ยโสธร 35000</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:col-span-7">
            <div class="bg-surface p-12 md:p-24 rounded-[3rem] border border-slate-100 shadow-2xl">
                <?php if ($form_success): ?>
                    <div class="text-center space-y-8 py-20">
                        <div class="w-24 h-24 bg-green-500 rounded-full mx-auto flex items-center justify-center text-white shadow-xl">
                            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h3 class="text-4xl font-bold text-primary">ขอบคุณครับ!</h3>
                        <p class="text-slate-500 text-lg">เจ้าหน้าที่ได้รับข้อความของท่านแล้ว และจะติดต่อกลับโดยเร็วที่สุด</p>
                        <a href="contact.php" class="text-primary font-bold underline">ส่งข้อความใหม่</a>
                    </div>
                <?php else: ?>
                    <h3 class="text-3xl font-bold text-primary mb-12 flex items-center gap-6">
                        <span class="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-primary shadow-lg p-4">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </span>
                        ส่งข้อความถึงเรา
                    </h3>
                    <form action="contact.php" method="POST" class="space-y-10">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div class="space-y-3">
                                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-4">ชื่อ-นามสกุล</label>
                                <input name="fullname" required class="w-full bg-white px-10 py-6 rounded-[2.5rem] border border-slate-100 outline-none focus:ring-4 ring-primary/5 shadow-inner" placeholder="ระบุนามของคุณ">
                            </div>
                            <div class="space-y-3">
                                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-4">อีเมล</label>
                                <input type="email" name="email" required class="w-full bg-white px-10 py-6 rounded-[2.5rem] border border-slate-100 outline-none focus:ring-4 ring-primary/5 shadow-inner" placeholder="email@domain.com">
                            </div>
                        </div>
                        <div class="space-y-3">
                            <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-4">ข้อความ</label>
                            <textarea name="message" required rows="5" class="w-full bg-white px-10 py-8 rounded-[3rem] border border-slate-100 outline-none focus:ring-4 ring-primary/5 shadow-inner resize-none" placeholder="บอกเราเพิ่มเติม..."></textarea>
                        </div>
                        <button type="submit" class="w-full bg-primary text-white py-8 rounded-[3rem] font-bold text-xl hover:shadow-2xl hover:-translate-y-1 transition-all shadow-xl">
                            SUBMIT INFO
                        </button>
                    </form>
                <?php endif; ?>
            </div>
        </div>
    </div>
</main>

<?php include 'footer.php'; ?>
