import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip as RTooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { format, addDays, addMonths } from 'date-fns';
import {
  FaRupeeSign, FaCalendarAlt, FaChartPie, FaTable, FaCopy,
  FaPrint, FaDownload, FaToggleOn, FaToggleOff, FaInfoCircle,
  FaCheckCircle, FaClock, FaCoins, FaPercent, FaStar
} from 'react-icons/fa';
import { GiTwoCoins } from 'react-icons/gi';

/* ─────────────────────────────────────────────
   FLOATING COIN ANIMATION
───────────────────────────────────────────── */
const COIN_POSITIONS = [
  { x: 8,  y: 12, delay: 0,   size: 36, dur: 5.5 },
  { x: 88, y: 20, delay: 0.8, size: 28, dur: 4.8 },
  { x: 20, y: 78, delay: 1.4, size: 22, dur: 6.2 },
  { x: 75, y: 70, delay: 0.4, size: 32, dur: 5.0 },
  { x: 50, y: 5,  delay: 2.0, size: 24, dur: 4.5 },
  { x: 95, y: 50, delay: 1.1, size: 20, dur: 6.8 },
];

const FloatingCoins = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    {COIN_POSITIONS.map((c, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{ left: `${c.x}%`, top: `${c.y}%` }}
        animate={{ y: [0, -22, 0], rotate: [0, 360], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: c.dur, repeat: Infinity, delay: c.delay, ease: 'easeInOut' }}
      >
        <div
          style={{ width: c.size, height: c.size }}
          className="rounded-full bg-gradient-to-br from-yellow-300 to-brand-royal shadow-lg shadow-blue-400/40 flex items-center justify-center text-brand-navy font-black text-xs border-2 border-yellow-200/60"
        >
          ₹
        </div>
      </motion.div>
    ))}
    {/* flying rupee notes */}
    {[15, 55, 82].map((x, i) => (
      <motion.div
        key={`note-${i}`}
        className="absolute text-brand-green/30 font-black text-2xl select-none"
        style={{ left: `${x}%`, top: '90%' }}
        animate={{ y: [0, -700], x: [0, (i - 1) * 40], opacity: [0, 0.5, 0], rotate: [0, 15, -10] }}
        transition={{ duration: 7 + i, repeat: Infinity, delay: i * 2.5, ease: 'easeOut' }}
      >
        ₹
      </motion.div>
    ))}
  </div>
);

/* ─────────────────────────────────────────────
   VIRTUAL FINANCE ASSISTANT
───────────────────────────────────────────── */
const MOODS = {
  idle:    { emoji: '😊', msg: 'Hello! I\'m your Finance Assistant.', color: 'from-brand-royal to-indigo-600' },
  happy:   { emoji: '🎉', msg: 'Great choice! Your plan looks perfect.', color: 'from-emerald-500 to-teal-600' },
  money:   { emoji: '💰', msg: 'You can easily manage this loan!', color: 'from-brand-royal to-yellow-600' },
  think:   { emoji: '🤔', msg: 'Calculating your best plan…', color: 'from-purple-500 to-violet-600' },
  success: { emoji: '🚀', msg: 'Calculation complete! Excellent plan!', color: 'from-green-500 to-emerald-600' },
  wow:     { emoji: '✨', msg: 'Awesome! Perfect financial strategy!', color: 'from-pink-500 to-rose-600' },
};

const FinanceAssistant = ({ mood }) => {
  const m = MOODS[mood] || MOODS.idle;
  return (
    <motion.div
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="relative flex flex-col items-center"
    >
      {/* Glow ring */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute inset-0 rounded-full bg-gradient-to-br ${m.color} blur-2xl opacity-40 -z-10`}
      />

      {/* Avatar card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${m.color} flex items-center justify-center shadow-2xl border-2 border-white/20`}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={mood}
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="text-5xl"
          >
            {m.emoji}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      {/* Sparkles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-300 text-sm pointer-events-none"
          style={{ top: `${[10,5,15,8][i]}%`, left: `${[5,85,75,20][i]}%` }}
          animate={{ scale: [0,1,0], opacity: [0,1,0], rotate: [0,180,360] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
        >
          ✦
        </motion.div>
      ))}

      {/* Speech bubble */}
      <AnimatePresence mode="wait">
        <motion.div
          key={mood}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.9 }}
          className="mt-4 px-4 py-2.5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-1000 max-w-[180px] text-center relative"
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/90 rotate-45 border-t border-l border-gray-1000" />
          <p className="text-brand-navy font-semibold text-xs leading-tight">{m.msg}</p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   ANIMATED NUMBER
───────────────────────────────────────────── */
const AnimNum = ({ value, prefix = '₹', className = '' }) => {
  const [display, setDisplay] = useState(0);
  const prev = useRef(0);
  useEffect(() => {
    const target = Number(value) || 0;
    const start = prev.current;
    const diff = target - start;
    const steps = 40;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setDisplay(Math.round(start + (diff * step / steps)));
      if (step >= steps) { clearInterval(timer); prev.current = target; }
    }, 18);
    return () => clearInterval(timer);
  }, [value]);
  return (
    <span className={className}>
      {prefix}{display.toLocaleString('en-IN')}
    </span>
  );
};

/* ─────────────────────────────────────────────
   STYLED SLIDER
───────────────────────────────────────────── */
const GlassSlider = ({ value, onChange, min, max, step }) => {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <input type="range" min={min} max={max} step={step} value={value}
      onChange={e => onChange(Number(e.target.value))}
      className="w-full h-2 rounded-full cursor-pointer outline-none appearance-none"
      style={{
        '--value-percent': `${pct}%`,
        background: `linear-gradient(to right,#0E5CCF ${pct}%,rgba(255,255,255,0.15) ${pct}%)`
      }}
    />
  );
};

/* ─────────────────────────────────────────────
   GLASS INPUT
───────────────────────────────────────────── */
const GlassInput = ({ prefix, suffix, value, onChange, type = 'number', min, max, step }) => (
  <div className="flex items-center bg-white border border-gray-200 rounded-2xl overflow-hidden focus-within:border-brand-royal/60 focus-within:ring-2 focus-within:ring-brand-royal/20 transition-all shadow-sm">
    {prefix && <span className="px-3 py-3 text-brand-royal font-black text-sm border-r border-gray-100 bg-gray-50">{prefix}</span>}
    <input
      type={type} value={value} min={min} max={max} step={step}
      onChange={e => onChange(type === 'number' ? Number(e.target.value) : e.target.value)}
      className="flex-1 bg-transparent px-3 py-3 text-brand-navy font-bold text-sm outline-none text-right w-0"
    />
    {suffix && <span className="px-3 py-3 text-gray-500 font-semibold text-sm border-l border-gray-100 bg-gray-50">{suffix}</span>}
  </div>
);

/* ─────────────────────────────────────────────
   MAIN CALCULATOR
───────────────────────────────────────────── */
const InterestCalc = () => {
  /* ── State ── */
  const [loanAmount,    setLoanAmount]    = useState(20000);
  const [emiType,       setEmiType]       = useState('daily');   // 'daily' | 'monthly'
  const [interestMode,    setInterestMode]    = useState('fixed');    // 'fixed' | 'percent'
  const [fixedInterest,   setFixedInterest]   = useState(4000);
  const [interestPct,     setInterestPct]     = useState(20);
  const [emiAmount,     setEmiAmount]     = useState(250);
  const [startDate,     setStartDate]     = useState(format(new Date(), 'yyyy-MM-dd'));
  const [tab,           setTab]           = useState('overview'); // overview | schedule | chart
  const [mood,          setMood]          = useState('idle');
  const [showSuccess,   setShowSuccess]   = useState(false);
  const [copied,        setCopied]        = useState(false);

  /* ── Interest Model Calculation ── */
  const calc = useMemo(() => {
    const P      = loanAmount || 0;
    const interest = interestMode === 'fixed'
      ? (fixedInterest || 0)
      : Math.round(P * (interestPct / 100));
    const total  = P + interest;
    const emi    = Math.max(1, emiAmount);

    if (emiType === 'daily') {
      const totalDays   = Math.ceil(total / emi);
      const totalMonths = +(totalDays / 30).toFixed(1);
      const start       = new Date(startDate);
      const end         = addDays(start, totalDays - 1);
      const pctComplete = 0; // fresh loan
      return { P, interest, total, emi, totalDays, totalMonths, start, end, pctComplete, mode: 'daily' };
    } else {
      const totalMonths = Math.ceil(total / emi);
      const totalDays   = totalMonths * 30;
      const start       = new Date(startDate);
      const end         = addMonths(start, totalMonths);
      return { P, interest, total, emi, totalDays, totalMonths, start, end, pctComplete: 0, mode: 'monthly' };
    }
  }, [loanAmount, interestMode, fixedInterest, interestPct, emiAmount, emiType, startDate]);

  /* ── Payment Schedule ── */
  const schedule = useMemo(() => {
    const rows = [];
    const count = Math.min(calc.mode === 'daily' ? calc.totalDays : calc.totalMonths, 60);
    for (let i = 0; i < count; i++) {
      const date = calc.mode === 'daily'
        ? addDays(calc.start, i)
        : addMonths(calc.start, i);
      const isLast = i === count - 1;
      const amount = isLast ? calc.total - (calc.emi * (count - 1)) : calc.emi;
      const outstanding = Math.max(0, calc.total - (calc.emi * (i + 1)));
      rows.push({
        num: i + 1,
        date: format(date, calc.mode === 'daily' ? 'dd MMM yy' : 'MMM yyyy'),
        amount: Math.round(amount),
        outstanding: Math.round(outstanding),
        status: i < 0 ? 'Paid' : i === 0 ? 'Due' : 'Upcoming',
      });
    }
    return rows;
  }, [calc]);

  /* ── Mood based on actions ── */
  const triggerCalc = useCallback(() => {
    setMood('think');
    setTimeout(() => {
      setMood('success');
      setShowSuccess(true);
      setTimeout(() => { setMood('happy'); setShowSuccess(false); }, 2500);
    }, 800);
  }, []);

  useEffect(() => { triggerCalc(); }, [loanAmount, fixedInterest, interestPct, emiAmount, emiType, interestMode]);

  /* ── Pie Chart Data ── */
  const pieData = [
    { name: 'Principal', value: calc.P, color: '#0E5CCF' },
    { name: 'Interest Amount',    value: calc.interest, color: '#0E5CCF' },
  ];

  /* ── Copy Summary ── */
  const copySummary = () => {
    const txt = `United Finserves – Loan Summary\nLoan: ₹${calc.P.toLocaleString('en-IN')}\nInterest Amount: ₹${calc.interest.toLocaleString('en-IN')}\nTotal: ₹${calc.total.toLocaleString('en-IN')}\nEMI: ₹${calc.emi.toLocaleString('en-IN')} (${emiType})\nDuration: ${calc.totalDays} days / ${calc.totalMonths} months\nStart: ${format(calc.start, 'dd MMM yyyy')}\nEnd: ${format(calc.end, 'dd MMM yyyy')}`;
    navigator.clipboard.writeText(txt).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  const pct = Math.min(100, Math.round((calc.emi / calc.total) * 100));

  return (
    <div className="relative min-h-screen overflow-hidden" style={{
      background: 'linear-gradient(135deg, #F4F7FB 0%, #FFFFFF 100%)'
    }}>
      <FloatingCoins />

      {/* Radial glow bg */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-brand-royal/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-brand-royal/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Success Flash */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }} animate={{ scale: [0, 1.3, 1] }} exit={{ scale: 0 }}
              className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl px-12 py-8 text-white text-center shadow-2xl"
            >
              <div className="text-6xl mb-3">🎉</div>
              <div className="text-2xl font-extrabold">Calculation Complete!</div>
              <div className="text-sm text-brand-green mt-1">Your repayment plan is ready.</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 pt-28 pb-20">

        {/* ── Page Title ── */}
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-royal to-brand-royal mb-5 shadow-2xl shadow-brand-royal/30"
          >
            <GiTwoCoins className="text-white text-3xl" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-navy mb-3 leading-tight">
            Virtual Finance <span className="text-brand-royal">Calculator</span>
          </h1>
          <p className="text-brand-royal/70 text-lg max-w-xl mx-auto">
            Interest Amount-based loan planner — daily & monthly EMI with live payment schedule
          </p>
        </motion.div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px_1fr] gap-8 items-start">

          {/* ── LEFT: Input Panel ── */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
            className="rounded-3xl border border-gray-200 bg-white p-7 md:p-9 shadow-xl space-y-7"
          >
            <h2 className="text-brand-navy font-extrabold text-xl flex items-center gap-2">
              <FaCoins className="text-brand-royal" /> Loan Parameters
            </h2>

            {/* Loan Amount */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-gray-500 text-sm font-semibold flex items-center gap-1.5">
                  <FaRupeeSign className="text-brand-royal text-xs" /> Loan Amount
                </label>
                <span className="text-brand-royal font-black text-base">₹{loanAmount.toLocaleString('en-IN')}</span>
              </div>
              <GlassSlider value={loanAmount} onChange={setLoanAmount} min={500} max={1000000} step={500} />
              <div className="flex justify-between text-xs text-gray-400">
                <span>₹500</span><span>₹10,00,000</span>
              </div>
              <GlassInput prefix="₹" value={loanAmount} onChange={setLoanAmount} min={500} max={1000000} step={500} />
            </div>

            {/* Interest Model */}
            <div className="space-y-3">
              <label className="text-gray-500 text-sm font-semibold block flex items-center gap-1.5">
                <FaPercent className="text-brand-royal text-xs" /> Interest Model
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[['fixed','Fixed Amount'],['percent','Percentage']].map(([v,l]) => (
                  <button key={v} onClick={() => setInterestMode(v)}
                    className={`py-3 rounded-2xl text-sm font-bold border-2 transition-all duration-200 ${
                      interestMode === v ? 'bg-brand-royal text-white border-brand-royal shadow-lg shadow-brand-royal/30'
                        : 'border-gray-200 text-gray-500 hover:border-brand-royal/50 bg-gray-50'}`}>
                    {l}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {interestMode === 'fixed' ? (
                  <motion.div key="fixed" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                      <span>Fixed Interest Amount Amount</span>
                      <span className="text-brand-royal font-bold">₹{fixedInterest.toLocaleString('en-IN')}</span>
                    </div>
                    <GlassSlider value={fixedInterest} onChange={setFixedInterest} min={0} max={200000} step={100} />
                    <div className="mt-2">
                      <GlassInput prefix="₹" value={fixedInterest} onChange={setFixedInterest} min={0} max={200000} step={100} />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="pct" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                      <span>Interest Amount Percentage</span>
                      <span className="text-brand-royal font-bold">{interestPct}%</span>
                    </div>
                    <GlassSlider value={interestPct} onChange={setInterestPct} min={0} max={100} step={0.5} />
                    <div className="mt-2">
                      <GlassInput suffix="%" value={interestPct} onChange={setInterestPct} min={0} max={100} step={0.5} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* EMI Type */}
            <div className="space-y-3">
              <label className="text-gray-500 text-sm font-semibold block">EMI Frequency</label>
              <div className="grid grid-cols-2 gap-3">
                {[['daily','📅 Daily'],['monthly','🗓️ Monthly']].map(([v,l]) => (
                  <button key={v} onClick={() => setEmiType(v)}
                    className={`py-3.5 rounded-2xl text-sm font-bold border-2 transition-all duration-200 ${
                      emiType === v ? 'bg-brand-royal text-white border-brand-royal shadow-lg shadow-brand-royal/30'
                        : 'border-gray-200 text-gray-500 hover:border-brand-royal/50 bg-gray-50'}`}>
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* EMI Amount */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-gray-500 text-sm font-semibold flex items-center gap-1.5">
                  <FaRupeeSign className="text-brand-royal text-xs" /> {emiType === 'daily' ? 'Daily' : 'Monthly'} EMI Amount
                </label>
                <span className="text-gray-400 text-xs">Editable</span>
              </div>
              <GlassSlider value={emiAmount} onChange={setEmiAmount} min={100} max={50000} step={50} />
              <GlassInput prefix="₹" value={emiAmount} onChange={setEmiAmount} min={100} max={50000} step={50} />
            </div>

            {/* Start Date */}
            <div className="space-y-2">
              <label className="text-gray-500 text-sm font-semibold flex items-center gap-1.5">
                <FaCalendarAlt className="text-brand-royal text-xs" /> Loan Start Date
              </label>
              <GlassInput type="date" value={startDate} onChange={setStartDate} />
            </div>
          </motion.div>

          {/* ── CENTER: Assistant ── */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-8">
            <FinanceAssistant mood={mood} />

            {/* Quick Stats Pills */}
            <div className="w-full space-y-3">
              {[
                { label: 'Principal', val: calc.P, icon: '🏦', color: 'from-brand-royal to-brand-royal' },
                { label: 'Interest Amount',    val: calc.interest, icon: '📈', color: 'from-brand-royal to-brand-royal' },
                { label: 'Total',     val: calc.total, icon: '💰', color: 'from-emerald-600 to-emerald-800' },
              ].map(({ label, val, icon, color }) => (
                <motion.div key={label} layout
                  className={`flex items-center justify-between px-5 py-3.5 rounded-2xl bg-gradient-to-r ${color} shadow-lg`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{icon}</span>
                    <span className="text-brand-navy/80 text-sm font-semibold">{label}</span>
                  </div>
                  <AnimNum value={val} className="text-brand-navy font-extrabold text-base" />
                </motion.div>
              ))}
            </div>

            {/* Circular progress */}
            <div className="relative w-32 h-32">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
                <motion.circle cx="60" cy="60" r="50" fill="none" stroke="#0E5CCF" strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 50}`}
                  key={calc.interest}
                  initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 50 * (1 - (calc.interest / calc.total)) }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-brand-royal font-black text-xl">
                  {Math.round((calc.interest / calc.total) * 100) || 0}%
                </span>
                <span className="text-brand-royal text-[10px] uppercase tracking-wide">Interest Amount</span>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Results Panel ── */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
            className="space-y-6">

            {/* Summary Card */}
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl">
              <h2 className="text-brand-navy font-extrabold text-xl mb-6 flex items-center gap-2">
                <FaChartPie className="text-brand-royal" /> Live Preview
              </h2>
              <div className="space-y-4">
                {[
                  { label: 'Loan Amount',    val: calc.P,      color: 'text-brand-navy' },
                  { label: 'Interest Amount',         val: calc.interest, color: 'text-brand-royal' },
                  { label: 'Total Collection',val: calc.total,  color: 'text-emerald-500', bold: true },
                  { label: `${emiType === 'daily' ? 'Daily' : 'Monthly'} EMI`, val: calc.emi, color: 'text-brand-navy' },
                ].map(({ label, val, color, bold }) => (
                  <div key={label} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0">
                    <span className="text-gray-500 text-sm">{label}</span>
                    <AnimNum value={val} className={`${color} ${bold ? 'font-extrabold text-lg' : 'font-bold'}`} />
                  </div>
                ))}
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-500 text-sm">Total Days</span>
                  <span className="text-brand-navy font-bold">{calc.totalDays} days</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-500 text-sm">Total Months</span>
                  <span className="text-brand-navy font-bold">{calc.totalMonths} months</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-500 text-sm">Start Date</span>
                  <span className="text-brand-navy font-bold">{format(calc.start, 'dd MMM yyyy')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">End Date</span>
                  <span className="text-brand-royal font-bold">{format(calc.end, 'dd MMM yyyy')}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: FaCopy,     label: copied ? 'Copied!' : 'Copy',  action: copySummary,       color: 'from-brand-royal to-brand-royal' },
                { icon: FaPrint,    label: 'Print',   action: () => window.print(),   color: 'from-purple-600 to-purple-700' },
              ].map(({ icon: Icon, label, action, color }) => (
                <motion.button key={label} onClick={action} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.03 }}
                  className={`flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r ${color} text-white font-bold text-sm shadow-lg`}>
                  <Icon /> {label}
                </motion.button>
              ))}
            </div>

            {/* Apply CTA */}
            <motion.a href="/contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              className="block text-center py-4 rounded-2xl font-extrabold text-white text-lg shadow-2xl shadow-brand-royal/30"
              style={{ background: 'linear-gradient(135deg, #0E5CCF 0%, #0E5CCF 100%)' }}>
              🚀 Apply for This Loan
            </motion.a>
          </motion.div>
        </div>

        {/* ── TABS: Schedule + Charts ── */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="mt-12 rounded-3xl border border-gray-200 overflow-hidden shadow-2xl"
          style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)' }}>

          {/* Tab Bar */}
          <div className="flex border-b border-gray-200">
            {[
              { id: 'schedule', label: '📅 Payment Schedule' },
              { id: 'chart',    label: '📊 Charts' },
            ].map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`flex-1 py-4 font-bold text-sm transition-all ${
                  tab === t.id ? 'text-brand-royal border-b-2 border-brand-royal bg-white' : 'text-gray-500 hover:text-brand-navy'}`}>
                {t.label}
              </button>
            ))}
          </div>

          <div className="p-7">
            <AnimatePresence mode="wait">
              {/* ─── Schedule Tab ─── */}
              {tab === 'schedule' && (
                <motion.div key="schedule" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-brand-navy font-extrabold text-lg">
                      {emiType === 'daily' ? 'Daily' : 'Monthly'} Collection Schedule
                      <span className="ml-2 text-gray-500 text-sm font-normal">(First 60 entries)</span>
                    </h3>
                    <span className="text-brand-royal text-sm font-bold">{schedule.length} {emiType === 'daily' ? 'days' : 'months'}</span>
                  </div>
                  <div className="overflow-auto max-h-[420px] rounded-2xl">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-gray-500 text-xs uppercase tracking-wider">
                          <th className="py-3 px-4 text-left sticky top-0 bg-gray-100">#</th>
                          <th className="py-3 px-4 text-left sticky top-0 bg-gray-100">Date</th>
                          <th className="py-3 px-4 text-right sticky top-0 bg-gray-100">EMI</th>
                          <th className="py-3 px-4 text-right sticky top-0 bg-gray-100">Outstanding</th>
                          <th className="py-3 px-4 text-center sticky top-0 bg-gray-100">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {schedule.map((row, i) => (
                          <motion.tr key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: Math.min(i * 0.02, 0.5) }}
                            className="border-t border-gray-100 hover:bg-white transition-colors">
                            <td className="py-3 px-4 text-gray-500 font-mono text-xs">{row.num}</td>
                            <td className="py-3 px-4 text-brand-navy font-medium">{row.date}</td>
                            <td className="py-3 px-4 text-right text-brand-royal font-bold">₹{row.amount.toLocaleString('en-IN')}</td>
                            <td className="py-3 px-4 text-right text-brand-royal/70">₹{row.outstanding.toLocaleString('en-IN')}</td>
                            <td className="py-3 px-4 text-center">
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                row.status === 'Paid' ? 'bg-emerald-500/20 text-emerald-400' :
                                row.status === 'Due'  ? 'bg-brand-royal/20 text-brand-royal' :
                                'bg-brand-royal/10 text-gray-500'}`}>
                                {row.status}
                              </span>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* ─── Chart Tab ─── */}
              {tab === 'chart' && (
                <motion.div key="chart" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  {/* Pie Chart */}
                  <div>
                    <h3 className="text-brand-navy font-bold mb-4 text-center">Principal vs Interest Amount</h3>
                    <ResponsiveContainer width="100%" height={260}>
                      <PieChart>
                        <Pie data={pieData} cx="50%" cy="50%" innerRadius={70} outerRadius={110}
                          dataKey="value" paddingAngle={4} stroke="none">
                          {pieData.map((entry, i) => (
                            <Cell key={i} fill={entry.color} />
                          ))}
                        </Pie>
                        <RTooltip formatter={(v) => `₹${Number(v).toLocaleString('en-IN')}`}
                          contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, color: '#000' }} />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="flex justify-center gap-6 mt-2">
                      {pieData.map(d => (
                        <div key={d.name} className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ background: d.color }} />
                          <span className="text-brand-royal/70 text-xs">{d.name}: ₹{d.value.toLocaleString('en-IN')}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bar Chart — first 12 collections */}
                  <div>
                    <h3 className="text-brand-navy font-bold mb-4 text-center">
                      Collection Progress {emiType === 'daily' ? '(Days 1–12)' : '(Months 1–12)'}
                    </h3>
                    <ResponsiveContainer width="100%" height={260}>
                      <BarChart data={schedule.slice(0, 12).map(r => ({ name: r.num, amount: r.amount, outstanding: r.outstanding }))}>
                        <XAxis dataKey="name" stroke="#9ca3af" tick={{ fill: '#6b7280', fontSize: 11 }} />
                        <YAxis stroke="#9ca3af" tick={{ fill: '#6b7280', fontSize: 10 }}
                          tickFormatter={v => `₹${(v/1000).toFixed(0)}k`} />
                        <RTooltip formatter={(v) => `₹${Number(v).toLocaleString('en-IN')}`}
                          contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, color: '#000' }} />
                        <Bar dataKey="amount" fill="#0E5CCF" radius={[6,6,0,0]} />
                        <Bar dataKey="outstanding" fill="#60A5FA" radius={[6,6,0,0]} opacity={0.6} />
                      </BarChart>
                    </ResponsiveContainer>
                    <div className="flex justify-center gap-6 mt-2">
                      <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-[#0E5CCF]" /><span className="text-gray-500 text-xs">EMI Collected</span></div>
                      <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-[#60A5FA]" /><span className="text-gray-500 text-xs">Outstanding</span></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default InterestCalc;
