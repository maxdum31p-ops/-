import { motion, AnimatePresence } from "motion/react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation,
  useParams,
  useNavigate
} from "react-router-dom";
import { 
  School, 
  Search, 
  ArrowRight, 
  Calendar, 
  ChevronRight, 
  Clock, 
  Eye, 
  Baby, 
  BookOpen, 
  Microscope, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Facebook, 
  Youtube, 
  Globe,
  CheckCircle2,
  History,
  X,
  Menu,
  ArrowLeft,
  Share2,
  Download,
  ExternalLink
} from "lucide-react";
import React, { useState, useEffect, FormEvent } from "react";

// --- Data ---
const NEWS_DATA = [
  { 
    id: "1", 
    title: "รางวัลชนะเลิศนวัตกรรมวิชาการระดับจังหวัด", 
    img: "https://images.unsplash.com/photo-1577896851231-70ef14603e80?auto=format", 
    cat: "วิชาการ",
    date: "20 พ.ค. 2567",
    views: "1,240",
    content: "โรงเรียนบ้านเดิดคว้ารางวัลชนะเลิศการประกวดนวัตกรรมระดับจังหวัด ยโสธร โดยนักเรียนได้นำเสนอโมเดล 'โรงเรียนสีเขียวเพื่ออนาคต' ซึ่งเน้นการจัดการขยะและการใช้พลังงานสะอาดภายในโรงเรียน..."
  },
  { 
    id: "2", 
    title: "โครงการเข้าค่ายพุทธบุตร ประจำปี 2567", 
    img: "/input_file_0.png", 
    cat: "จริยธรรม",
    date: "5 ก.พ. 2567",
    views: "1,120",
    content: "โรงเรียนบ้านเดิดจัดกิจกรรมเข้าค่ายพุทธบุตร ณ วัดในชุมชน เพื่อให้นักเรียนได้เรียนรู้หลักธรรมทางพระพุทธศาสนา ฝึกสมาธิ และพัฒนาคุณธรรมจริยธรรม..."
  },
  { 
    id: "3", 
    title: "บรรยากาศกิจกรรมวันไหว้ครู", 
    img: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format", 
    cat: "วัฒนธรรม",
    date: "12 มิ.ย. 2567",
    views: "850",
    content: "ภาพบรรยากาศที่เปี่ยมไปด้วยความซาบซึ้งใจในกิจกรรมวันไหว้ครู ประจำปีการศึกษา 2567 นักเรียนทุกคนได้ร่วมกันทำพานพุ่มสุดสร้างสรรค์..."
  }
];

const GALLERY_DATA = [
  { title: "โครงการเข้าค่ายพุทธบุตร (หมู่คณะ)", img: "/input_file_0.png" },
  { title: "พิธีเปิดและจุดธูปเทียนบูชาพระรัตนตรัย", img: "/input_file_1.png" },
  { title: "นักเรียนร่วมรับฟังพระธรรมเทศนา", img: "/input_file_2.png" },
  { title: "นวัตกรรมระดับจังหวัด", img: "https://images.unsplash.com/photo-1577896851231-70ef14603e80?auto=format" },
  { title: "ทัศนศึกษาพิพิธภัณฑ์", img: "https://images.unsplash.com/photo-1503676260728-1c00da07bb5e?auto=format" },
  { title: "บรรยากาศโรงเรียน", img: "https://images.unsplash.com/photo-1523050853064-84d436a5ac69?auto=format" }
];

const STAFF_DATA = [
  {
    role: "ผู้บริหาร",
    members: [
      { name: "นางสาวกิตติ์สินี อนันต์", position: "ผู้อำนวยการโรงเรียน", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80" },
    ]
  },
  {
    role: "คณะครูสายชั้นประถมศึกษา",
    members: [
      { name: "นายสมชาย ใจดี", position: "ครูชำนาญการพิเศษ", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format" },
      { name: "นางสร้อยทอง มีสุข", position: "ครูชำนาญการ", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format" },
      { name: "นางสาวมลฤดี ดาวเรือง", position: "ครูผู้ช่วย", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format" }
    ]
  },
  {
    role: "คณะครูสายชั้นปฐมวัย",
    members: [
      { name: "นางจันทรา ฟ้าใส", position: "ครูชำนาญการพิเศษ", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format" },
      { name: "นางสาวพิมลวรรณ แก้วดี", position: "ครูผู้ช่วย", img: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?auto=format" }
    ]
  }
];

// --- Components ---

function Header() {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "หน้าแรก", path: "/" },
    { name: "เกี่ยวกับเรา", path: "/about" },
    { name: "วิชาการ", path: "/academic" },
    { name: "บุคลากร", path: "/staff" },
    { name: "ติดต่อเรา", path: "/contact" },
  ];

  return (
    <>
      <header className="bg-white sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <School className="text-primary w-8 h-8" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary leading-tight font-sans">โรงเรียนบ้านเดิด</h1>
              <p className="text-[10px] text-slate-500 font-sans tracking-widest uppercase">Ban Doet School</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.path}
                  to={item.path}
                  className={`relative py-2 text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-slate-600 hover:text-primary"}`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-secondary-container"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-slate-400 hover:text-primary transition-colors hover:bg-slate-50 rounded-full"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 md:hidden hover:bg-slate-50 rounded-full transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-slate-100 bg-white overflow-hidden shadow-xl"
            >
              <div className="px-6 py-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-bold text-slate-700 hover:text-primary transition-colors flex items-center justify-between"
                  >
                    {item.name}
                    <ChevronRight className="w-5 h-5 text-slate-300" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col p-6 items-center"
          >
            <div className="w-full max-w-2xl flex flex-col gap-6 pt-12 md:pt-24">
              <div className="flex justify-between items-center">
                <School className="text-primary w-10 h-10" />
                <button onClick={() => setIsSearchOpen(false)} className="p-3 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition-all">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="relative mt-8">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
                <input 
                  autoFocus
                  placeholder="ค้นหาข้อมูลในโรงเรียน..."
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-primary px-16 py-6 rounded-3xl text-xl outline-none transition-all shadow-inner"
                />
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {["ปฏิทิน", "ดาวน์โหลดใบสมัคร", "ครู", "ระเบียบการ", "ข่าวกิจกรรม"].map(tag => (
                  <button key={tag} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-sm text-slate-500 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all">
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-auto pb-12">
              <p className="text-slate-400 text-sm italic">กด ESC หรือปุ่มกากบาทเพื่อปิด</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-white p-1 rounded-lg">
                 <School className="text-primary w-6 h-6" />
              </div>
              <h5 className="font-bold text-lg">โรงเรียนบ้านเดิด</h5>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              มุ่งมั่นจัดการศึกษาที่มีคุณภาพเพื่อพัฒนาเด็กไทยให้ก้าวไกลในระดับสากล ภายใต้สภาพแวดล้อมที่เหมาะสมและปลอดภัย
            </p>
          </div>
          
          <div>
            <h6 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-8">ลิงก์สำคัญ</h6>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-white transition-colors">หน้าหลัก</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">เกี่ยวกับเรา</Link></li>
            </ul>
          </div>


          <div>
            <h6 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-8">ติดต่อเรา</h6>
              <ul className="space-y-5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-600 mt-0.5" />
                <span>หมู่ 4 ต.เดิด อ.เมือง จ.ยโสธร 35000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-600" />
                <span>045-711-234</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-600" />
                <span>admin@bandoet.ac.th</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-slate-500 tracking-wide font-sans uppercase">© 2024 BAN DOET SCHOOL. สงวนลิขสิทธิ์.</p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Page Components ---

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="space-y-0"
    >
      <section className="relative h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=2071" 
            alt="School"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold mb-6 tracking-wide">
              ยินดีต้อนรับสู่ปีการศึกษา 2567
            </span>
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 font-sans">
              ปลูกฝังความรู้ คู่คุณธรรม<br />สร้างสรรค์ปัญญา พัฒนาสังคม
            </h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed font-light">
              โรงเรียนบ้านเดิด มุ่งเน้นการพัฒนาผู้เรียนให้มีความเป็นเลิศทางวิชาการ ควบคู่ไปกับทักษะชีวิตและคุณธรรม เพื่อเติบโตเป็นผู้นำที่มีคุณภาพในอนาคต
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="bg-white px-8 py-4 rounded-2xl font-bold text-primary hover:shadow-xl transition-all text-center">
                ทำความรู้จักโรงเรียน
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-100 relative overflow-hidden group">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center items-center divide-x-0 md:divide-x divide-slate-100">
            {[
              { label: "ปีก่อตั้ง (พ.ศ.)", value: "2505" },
              { label: "จำนวนนักเรียน", value: "240+" },
              { label: "บุคลากร", value: "18" },
              { label: "โอกาสเรียนต่อ", value: "100%" }
            ].map((stat, idx) => (
              <div key={idx} className="px-4">
                <div className="text-primary text-4xl font-bold mb-1 tabular-nums">{stat.value}</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold font-sans">{stat.label}</div>
              </div>
            ))}
            <div className="col-span-2 px-8 flex flex-col items-center justify-center gap-2 border-t md:border-t-0 pt-8 md:pt-0">
               <div className="text-xs text-secondary-container font-bold uppercase tracking-[0.2em] font-sans">School Motto</div>
               <div className="text-xl font-bold text-primary italic">"เรียนดี กีฬาเด่น เน้นคุณธรรม"</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Principal & Calendar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 text-center shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 ring-8 ring-primary/5">
                <img src={STAFF_DATA[0].members[0].img} alt="Principal" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-primary text-xl mb-4">สารจากผู้อำนวยการ</h3>
              <p className="text-sm text-slate-500 italic mb-8">"เราเชื่อมั่นในศักยภาพของเด็กทุกคน และพร้อมที่จะสนับสนุนส่งเสริมให้เขาได้เติบโตตามความฝันของตัวเอง"</p>
              <div className="font-bold text-primary">{STAFF_DATA[0].members[0].name}</div>
              <div className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1">{STAFF_DATA[0].members[0].position}</div>
            </div>

            <div className="bg-primary p-8 rounded-[2.5rem] text-white relative overflow-hidden group shadow-xl">
              <div className="relative z-10 flex justify-between items-center mb-8">
                <h3 className="font-bold">ปฏิทินกิจกรรม</h3>
                <Calendar className="w-5 h-5 text-on-primary-container" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-secondary-container text-on-secondary-container flex flex-col items-center justify-center rounded-xl font-bold text-xs shadow-md">
                    <div>15</div><div>พ.ค.</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">เปิดภาคเรียนที่ 1/2567</div>
                    <div className="text-[10px] text-white/50">08:00 - 15:30 น.</div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-white/10 flex flex-col items-center justify-center rounded-xl font-bold text-xs border border-white/5">
                    <div>22</div><div>พ.ค.</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">วันวิสาขบูชา (หยุด)</div>
                    <div className="text-[10px] text-white/50">วันหยุดนักขัตฤกษ์</div>
                  </div>
                </div>
              </div>
              <School className="absolute -bottom-12 -right-12 w-48 h-48 text-white/5 rotate-12 group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>

          {/* News */}
          <div className="lg:col-span-8">
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-3xl font-bold text-primary font-sans tracking-tight">ข่าวสารและกิจกรรม</h2>
              <Link to="/academic" className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1 group">
                View all <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {NEWS_DATA.map((news) => (
                <Link to={`/news/${news.id}`} key={news.id} className="group cursor-pointer block">
                  <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 shadow-md hover:shadow-xl transition-shadow duration-500">
                    <img src={news.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="space-y-3 px-2">
                    <span className="text-[10px] font-bold text-primary bg-primary/5 px-3 py-1 rounded-full inline-block uppercase tracking-widest border border-primary/5">{news.cat}</span>
                    <h4 className="text-xl font-bold text-primary group-hover:text-secondary-container transition-colors leading-tight tracking-tight">{news.title}</h4>
                    <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">{news.content}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight font-sans">แกลเลอรี่กิจกรรม</h2>
            <p className="text-slate-500 font-sans tracking-[0.2em] font-bold text-[10px] uppercase">รวบรวมภาพความประทับใจและกิจกรรมต่างๆ ของโรงเรียน</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {GALLERY_DATA.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-lg cursor-pointer"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="text-white font-bold text-sm md:text-lg leading-tight">{item.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const news = NEWS_DATA.find(n => n.id === id);

  if (!news) return <div className="py-24 text-center">ข่าวสารไม่พบ</div>;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="py-24 px-6 max-w-4xl mx-auto"
    >
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 hover:text-primary transition-all mb-12 font-bold text-sm uppercase tracking-widest">
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <div className="space-y-12">
        <div className="space-y-6">
          <span className="bg-primary/5 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{news.cat}</span>
          <h2 className="text-4xl md:text-6xl font-bold text-primary leading-tight tracking-tight font-sans">{news.title}</h2>
          <div className="flex items-center gap-6 text-slate-400 text-sm font-sans">
             <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {news.date}</div>
             <div className="flex items-center gap-2"><Eye className="w-4 h-4" /> {news.views} VIEWS</div>
          </div>
        </div>

        <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
           <img src={news.img} className="w-full h-full object-cover" alt={news.title} />
        </div>

        <div className="prose prose-slate max-w-none text-slate-600 leading-[1.8] space-y-6 text-lg">
          <p>{news.content}</p>
          <p>ทางโรงเรียนขอขอบพระคุณคณะครู ผู้ปกครอง และนักเรียนทุกคนที่มีส่วนร่วมในความสำเร็จครั้งนี้ และเราจะยังคงเดินหน้าจัดโครงการที่มีคุณค่าเช่นนี้ต่อไป เพื่อความเป็นเลิศของผู้เรียนในทุกๆ ด้าน</p>
        </div>

        <div className="pt-12 border-t border-slate-100 flex items-center justify-between">
           <div className="flex gap-4 items-center">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">แชร์ต่อ:</span>
              <div className="flex gap-2">
                 <button className="p-3 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-600 transition-all"><Facebook className="w-4 h-4" /></button>
                 <button className="p-3 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-600 transition-all"><Share2 className="w-4 h-4" /></button>
              </div>
           </div>
           <button className="flex items-center gap-2 text-primary font-bold hover:underline">
              ข่าวสารอื่นๆ <ChevronRight className="w-4 h-4" />
           </button>
        </div>
      </div>
    </motion.div>
  );
}

function AboutPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-0">
      <section className="py-32 px-6 bg-primary text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 font-sans tracking-tight">เกี่ยวกับเรา</h2>
          <p className="text-xl md:text-2xl opacity-70 font-light max-w-2xl mx-auto">ประวัติความเป็นมา วิสัยทัศน์ และคณะผู้บริหารที่มีส่วนขับเคลื่อนอนาคต</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <img src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h3 className="text-4xl md:text-5xl font-bold text-primary tracking-tight font-sans italic">"ต้นแบบสถานศึกษา คุณภาพคู่คุณธรรม"</h3>
          <p className="text-xl text-slate-500 leading-relaxed italic">"มุ่งมั่นพัฒนาผู้เรียนให้มีทักษะศตวรรษที่ 21 ภายใต้สภาพแวดล้อมที่เอื้อต่อการเรียนรู้"</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
             <div className="p-8 bg-surface rounded-[2rem] border border-slate-100 flex flex-col gap-4 group hover:shadow-xl transition-all">
               <div className="p-3 bg-white w-fit rounded-2xl shadow-sm text-primary transition-transform group-hover:scale-110"><CheckCircle2 /></div>
               <div className="font-bold text-primary font-sans">วิสัยทัศน์ (Vision)</div>
               <p className="text-sm text-slate-600 leading-relaxed font-sans">จัดการศึกษาอย่างมีคุณภาพ พัฒนาผู้เรียนตามศักยภาพบนพื้นฐานความเป็นไทย</p>
             </div>
             <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] flex flex-col gap-4 shadow-xl group hover:shadow-primary/20 transition-all">
               <div className="p-3 bg-white/10 w-fit rounded-2xl text-secondary-container transition-transform group-hover:scale-110"><CheckCircle2 /></div>
               <div className="font-bold font-sans">พันธกิจ (Mission)</div>
               <p className="text-sm text-white/70 leading-relaxed font-sans">ส่งเสริมการเรียนรู้ที่เน้นผู้เรียนเป็นสำคัญ พัฒนาครูสู่มืออาชีพ</p>
             </div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[4rem] overflow-hidden aspect-square shadow-2xl border-[16px] border-white ring-1 ring-slate-100">
             <img src="https://images.unsplash.com/photo-1523050853064-84d436a5ac69?auto=format" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary-container rounded-[3rem] -z-10 shadow-2xl" />
        </div>
      </section>

      <section className="py-24 bg-surface px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <History className="text-primary w-8 h-8" />
              <h3 className="text-4xl font-bold text-primary tracking-tight font-sans">ข้อมูลพื้นฐาน</h3>
            </div>
            <div className="space-y-6 text-slate-600">
               <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="font-bold text-primary mb-2">ที่ตั้งและขนาด</div>
                  <p>โรงเรียนบ้านเดิด ตั้งอยู่หมู่ที่ 4 ตำบลเดิด อำเภอเมือง จังหวัดยโสธร รหัสไปรษณีย์ 35000 สังกัดสำนักงานเขตพื้นที่การศึกษาประถมศึกษายโสธร เขต 1</p>
                  <p className="mt-2">มีเนื้อที่ทั้งหมดประมาณ 14 ไร่ 2 งาน 65 ตารางวา</p>
               </div>
               <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="font-bold text-primary mb-2">อาณาเขตติดต่อ</div>
                  <ul className="space-y-1 text-sm">
                    <li><span className="font-semibold">ทิศเหนือ:</span> ติดกับที่สาธารณประโยชน์</li>
                    <li><span className="font-semibold">ทิศใต้:</span> ติดกับทางหลวงสายโชคชัย-เดชอุดม</li>
                    <li><span className="font-semibold">ทิศตะวันออก:</span> ติดกับที่ดินชาวบ้าน</li>
                    <li><span className="font-semibold">ทิศตะวันตก:</span> ติดกับที่ดินชาวบ้านและลำห้วย</li>
                  </ul>
               </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-8">
              <History className="text-primary w-8 h-8" />
              <h3 className="text-4xl font-bold text-primary tracking-tight font-sans">ประวัติโรงเรียน</h3>
            </div>
            <div className="space-y-12 border-l-2 border-slate-200 pl-12 relative">
               {[ 
                 { year: "2505", t: "วันก่อตั้ง", d: "ก่อตั้งเมื่อวันที่ 25 มิถุนายน 2505 โดยความร่วมมือของชาวบ้านเดิดและทางการ เพื่อให้บุตรหลานมีสถานที่ศึกษาเล่าเรียนที่ใกล้บ้าน" }, 
                 { year: "2530", t: "การก้าวสู่ยุคขยายโอกาส", d: "มีการปรับปรุงอาคารเรียนและขยายพื้นที่การศึกษาเพื่อรองรับจำนวนนักเรียนที่เพิ่มขึ้นอย่างต่อเนื่อง" }, 
                 { year: "ปัจจุบัน", t: "สถานศึกษาคุณภาพสูง", d: "มุ่งเน้นการจัดการเรียนการสอนที่ทันสมัย พัฒนาทักษะศตวรรษที่ 21 และปลูกฝังคุณธรรมให้แก่นักเรียน" } 
               ].map((h, i) => (
                 <div key={i} className="relative group">
                    <div className="absolute -left-[57px] top-1.5 w-6 h-6 bg-white border-4 border-primary rounded-full group-hover:scale-125 transition-transform z-10" />
                    <div className="text-3xl font-bold text-primary font-mono tracking-tighter mb-2">{h.year}</div>
                    <div className="space-y-2">
                      <div className="text-xl font-bold text-slate-800 font-sans">{h.t}</div>
                      <div className="text-slate-500 max-w-2xl leading-relaxed">{h.d}</div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function AcademicPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-32 px-6 bg-white space-y-24">
      <div className="max-w-7xl mx-auto text-center space-y-6 mb-20">
        <h2 className="text-5xl md:text-7xl font-bold text-primary tracking-tight font-sans">หลักสูตรวิชาการ</h2>
        <div className="h-2 w-24 bg-secondary-container mx-auto rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-surface p-12 md:p-20 rounded-[4rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 group">
           <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-primary mb-12 shadow-lg group-hover:rotate-12 transition-transform">
              <Baby className="w-10 h-10" />
           </div>
           <h3 className="text-3xl font-bold text-primary mb-6 font-sans">ระดับปฐมวัย</h3>
           <p className="text-slate-500 text-lg leading-relaxed mb-10 opacity-80 italic">"ความพร้อมเริ่มที่หัวใจและการเล่นที่สร้างสรรค์ สู่พัฒนาการที่สมบูรณ์ทั้ง 4 ด้าน"</p>
           <ul className="space-y-4 mb-10 font-bold text-slate-700 text-sm">
             <li className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary-container rounded-full" /> กิจกรรมบูรณาการทักษะสมอง EF</li>
             <li className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary-container rounded-full" /> โภชนาการและสุขภาพที่เหมาะสม</li>
             <li className="flex items-center gap-3"><div className="w-2 h-2 bg-secondary-container rounded-full" /> ศิลปะและดนตรีบำบัด</li>
           </ul>
           <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2">
              View Program <ArrowRight className="w-4 h-4" />
           </button>
        </div>
        <div className="bg-primary text-white p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden group">
           <div className="relative z-10 w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-white mb-12 shadow-inner group-hover:-rotate-12 transition-transform">
              <BookOpen className="w-10 h-10" />
           </div>
           <h3 className="relative z-10 text-3xl font-bold mb-6 font-sans">ระดับประถมศึกษา</h3>
           <p className="relative z-10 text-lg opacity-60 leading-relaxed mb-10">พัฒนาทักษะวิชาการที่เข้มแข็ง ควบคู่การใช้ภาษาอังกฤษและเทคโนโลยีที่ทันสมัย (Active Learning)</p>
           <div className="relative z-10 flex gap-4 mb-12">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur font-bold text-xs uppercase tracking-widest">STEM Model</div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur font-bold text-xs uppercase tracking-widest">IT Skills</div>
           </div>
           <button className="relative z-10 bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:-translate-y-1 transition-all">แกลเลอรี่กิจกรรม</button>
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto bg-surface p-12 md:p-24 rounded-[5rem] border border-slate-100 text-center space-y-16 shadow-inner">
         <div className="space-y-4">
            <h3 className="text-4xl font-bold text-primary tracking-tight font-sans uppercase">แหล่งเรียนรู้สร้างสรรค์</h3>
            <p className="text-slate-400 font-sans tracking-[0.4em] font-bold text-[10px] uppercase">แหล่งความรู้ที่จุดประกายจินตนาการ</p>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { n: "ห้องสมุดอัจฉริยะ", i: "https://images.unsplash.com/photo-1544640808-32ca72ac7f67?auto=format" },
              { n: "ห้องปฏิบัติการวิทยาศาสตร์", i: "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format" },
              { n: "พื้นที่เรียนรู้กลางแจ้ง", i: "https://images.unsplash.com/photo-1577896851231-70ef14603e80?auto=format" }
            ].map((space, i) => (
              <div key={i} className="group cursor-pointer">
                 <div className="aspect-[4/3] rounded-[3rem] overflow-hidden mb-6 relative shadow-xl">
                    <img src={space.i} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={space.n} />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors" />
                 </div>
                 <h4 className="font-bold text-primary text-xl font-sans tracking-tight">{space.n}</h4>
              </div>
            ))}
         </div>
      </div>
    </motion.div>
  );
}

function StaffPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight font-sans">คณะผู้บริหารและบุคลากร</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">ทีมงานคุณภาพที่พร้อมทุ่มเทแรงกายแรงใจเพื่อการพัฒนาศิษย์</p>
      </div>

      {STAFF_DATA.map((group, gIdx) => (
        <div key={gIdx} className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="h-px bg-slate-200 flex-grow" />
            <h3 className="text-2xl font-bold text-primary px-4 bg-white shrink-0">{group.role}</h3>
            <div className="h-px bg-slate-200 flex-grow" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {group.members.map((member, mIdx) => (
              <div key={mIdx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-lg hover:shadow-2xl transition-all group">
                <div className="w-32 h-32 rounded-3xl overflow-hidden mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform duration-500">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">{member.name}</div>
                  <div className="text-sm text-slate-400 mt-1">{member.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-32 px-6 max-w-7xl mx-auto">
       <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-16">
             <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter font-sans leading-none">ร่วมเดินทาง<br />ไปกับเรา</h2>
                <p className="text-xl text-slate-500 font-light leading-relaxed">โรงเรียนบ้านเดิดพร้อมรับฟังผู้ปกครองและนักเรียนทุกคน ด้วยความจริงใจและใส่ใจ</p>
             </div>
             
             <div className="space-y-10">
                {[
                  { icon: MapPin, title: "ที่อยู่", info: "หมู่ 4 บ้านเดิด ต.เดิด อ.เมือง จ.ยโสธร 35000" },
                  { icon: Phone, title: "โทรศัพท์", info: "045-711-234 (ฝ่ายธุรการ)" },
                  { icon: Mail, title: "อีเมล", info: "admin@bandoet.ac.th" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 items-start group">
                     <div className="w-16 h-16 bg-primary/5 rounded-3xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-md group-hover:scale-110">
                        <item.icon className="w-7 h-7" />
                     </div>
                     <div className="pt-2">
                        <div className="font-bold text-primary text-xl mb-1 font-sans">{item.title}</div>
                        <div className="text-sm text-slate-400 font-sans tracking-wide">{item.info}</div>
                     </div>
                  </div>
                ))}
             </div>

             <div className="bg-slate-900 aspect-video rounded-[4rem] relative overflow-hidden flex items-center justify-center shadow-2xl group cursor-pointer hover:shadow-primary/20 transition-all">
                <div className="absolute inset-0 opacity-40 group-hover:scale-110 transition-transform duration-1000">
                   <img src="https://images.unsplash.com/photo-1548345661-83d419613144?auto=format" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="relative z-10 text-center space-y-4">
                   <div className="p-5 bg-white/10 rounded-full w-fit mx-auto backdrop-blur-xl border border-white/20">
                      <MapPin className="text-secondary-container" />
                   </div>
                   <div className="font-bold text-white text-xl font-sans uppercase tracking-[0.2em] text-[11px]">View Google Map</div>
                </div>
             </div>
          </div>

          <div className="lg:col-span-7">
             <div className="bg-surface p-12 md:p-24 rounded-[5rem] border border-slate-100 shadow-2xl relative">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="success" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center space-y-8 py-20">
                      <div className="w-24 h-24 bg-green-500 rounded-full mx-auto flex items-center justify-center text-white shadow-xl animate-bounce">
                         <CheckCircle2 className="w-12 h-12" />
                      </div>
                      <div className="space-y-3">
                         <h3 className="text-4xl font-bold text-primary font-sans">ขอบคุณครับ!</h3>
                         <p className="text-slate-500 text-lg">เจ้าหน้าที่ได้รับข้อความของท่านแล้ว และจะติดต่อกลับโดยเร็วที่สุด</p>
                      </div>
                      <button onClick={() => setSubmitted(false)} className="text-primary font-bold hover:underline transition-all underline-offset-4">ส่งข้อความเพิ่ม</button>
                    </motion.div>
                  ) : (
                    <motion.div key="form" exit={{ opacity: 0, scale: 0.9 }}>
                      <div className="flex items-center gap-6 mb-16">
                         <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-primary shadow-xl">
                           <Send className="w-10 h-10" />
                         </div>
                         <h3 className="text-4xl font-bold text-primary font-sans tracking-tight">ส่งข้อความถึงเรา</h3>
                      </div>
                      <form className="space-y-10" onSubmit={handleSend}>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-3">
                               <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] pl-4">Full Name</label>
                               <input required className="w-full bg-white px-10 py-6 rounded-[2.5rem] outline-none focus:ring-4 ring-primary/5 shadow-inner transition-all border border-slate-100 text-lg" placeholder="ระบุชื่อจริง-นามสกุล" />
                            </div>
                            <div className="space-y-3">
                               <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] pl-4">Email</label>
                               <input type="email" required className="w-full bg-white px-10 py-6 rounded-[2.5rem] outline-none focus:ring-4 ring-primary/5 shadow-inner transition-all border border-slate-100 text-lg" placeholder="email@domain.com" />
                            </div>
                         </div>
                         <div className="space-y-3">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] pl-4">Details</label>
                            <textarea required rows={5} className="w-full bg-white px-10 py-8 rounded-[3rem] outline-none focus:ring-4 ring-primary/5 shadow-inner transition-all border border-slate-100 text-lg resize-none" placeholder="บอกเราเพิ่มเติมเกี่ยวกับข้อมูลที่คุณต้องการ..."></textarea>
                         </div>
                         <button disabled={loading} className="w-full bg-primary text-white py-8 rounded-[3rem] font-bold text-xl hover:shadow-2xl hover:-translate-y-1 transition-all shadow-xl disabled:opacity-50 uppercase tracking-widest font-sans">
                            {loading ? "SENDING..." : "SUBMIT INFO"}
                         </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
          </div>
       </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-body bg-slate-50 antialiased selection:bg-primary/10 selection:text-primary">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/staff" element={<StaffPage />} />
            <Route path="/academic" element={<AcademicPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
