export const servicesData = [
  {
    id: "personal-loan",
    title: "Personal Loan",
    hero: {
      headline: "Premium Personal Loan Solutions",
      desc: "Get the best personal loan customized to your financial profile. Fast approvals for medical, travel, wedding, or any immediate financial need.",
      imgQuery: "family_happy"
    },
    benefits: [
      { title: "Fast Approval", desc: "Get approved within 24-48 hours", icon: "FaBolt" },
      { title: "Low Interest Rates", desc: "Starting from just 10.5% p.a.", icon: "FaPercent" },
      { title: "Minimal Documentation", desc: "100% paperless digital process", icon: "FaFileAlt" },
      { title: "Flexible Repayment", desc: "Choose tenure up to 60 months", icon: "FaCalendarAlt" },
      { title: "No Hidden Charges", desc: "Complete transparency in fees", icon: "FaShieldAlt" },
      { title: "Dedicated Support", desc: "Expert advisory at every step", icon: "FaUserTie" }
    ],
    whyUs: {
      text: "United Finserves ensures a seamless experience with dedicated relationship managers for your personal needs.",
      stats: [
        { label: "Happy Clients", value: "10,000+" },
        { label: "Disbursed", value: "₹500Cr+" },
        { label: "Approval Rate", value: "98%" }
      ]
    },
    eligibility: {
      age: "21 to 60 years",
      income: "Minimum ₹25,000 per month",
      employment: "Minimum 1 year work experience",
      creditScore: "700 or above recommended"
    },
    documents: [
      "PAN Card",
      "Aadhar Card / Passport / Voter ID",
      "Last 6 months Bank Statement",
      "Last 3 months Salary Slips",
      "Address Proof",
      "Passport Size Photographs"
    ],
    process: [
      { step: 1, title: "Apply Online", desc: "Fill out our quick eligibility form in 2 minutes." },
      { step: 2, title: "Document Verification", desc: "Upload required documents securely online." },
      { step: 3, title: "Fast Approval", desc: "Get your loan approved within 24 hours." },
      { step: 4, title: "Disbursement", desc: "Funds transferred directly to your bank account." }
    ],
    faqs: [
      { q: "What is the minimum interest rate for a Personal Loan?", a: "Interest rates vary based on your credit profile, starting from as low as 10.5% p.a." },
      { q: "How long does the approval process take?", a: "With complete documentation, approvals are typically processed within 24 to 48 hours." },
      { q: "Can I prepay the loan?", a: "Yes, prepayment options are available. Nominal foreclosure charges may apply after a specific period." }
    ],
    testimonials: [
      { name: "Rajesh Kumar", rating: 5, text: "The Personal Loan process was incredibly smooth. Highly recommend United Finserves!", type: "Personal" },
      { name: "Priya Sharma", rating: 5, text: "Transparent fees and excellent customer support throughout my application.", type: "Personal" }
    ]
  },
  {
    id: "business-loan",
    title: "Business Loan",
    hero: {
      headline: "Fuel Your Business Growth",
      desc: "Tailored business loans to boost your working capital, fund expansions, or upgrade your technology with competitive rates.",
      imgQuery: "business_meeting"
    },
    benefits: [
      { title: "High Quantum", desc: "Loans up to ₹5 Crore", icon: "FaBolt" },
      { title: "Competitive Rates", desc: "Business-friendly interest structures", icon: "FaPercent" },
      { title: "Collateral Free Options", desc: "Available for eligible SMEs", icon: "FaFileAlt" },
      { title: "Flexible Tenure", desc: "Repayment up to 72 months", icon: "FaCalendarAlt" },
      { title: "Overdraft Facility", desc: "Pay interest only on used amount", icon: "FaShieldAlt" },
      { title: "Business Advisory", desc: "Financial structuring assistance", icon: "FaUserTie" }
    ],
    whyUs: {
      text: "We understand business dynamics and offer custom-tailored financing structures for SMEs and corporates.",
      stats: [
        { label: "Businesses Funded", value: "2,500+" },
        { label: "Capital Deployed", value: "₹1,200Cr+" },
        { label: "Client Retention", value: "94%" }
      ]
    },
    eligibility: {
      age: "24 to 65 years",
      income: "Minimum Annual Turnover of ₹50 Lakhs",
      employment: "Minimum 3 years in current business",
      creditScore: "CIBIL Score of 700+ for Promoters"
    },
    documents: [
      "KYC Documents of Entity and Promoters",
      "Last 2 years Audited Financials (ITR, P&L, Balance Sheet)",
      "Last 12 months Bank Statements",
      "Business Proof (GST, Shop Act, etc.)",
      "Ownership Proof of Office/Residence"
    ],
    process: [
      { step: 1, title: "Initial Assessment", desc: "Share basic financials for quick eligibility check." },
      { step: 2, title: "Document Collection", desc: "Submit KYC and financial documents." },
      { step: 3, title: "Credit Evaluation", desc: "In-depth analysis by our credit experts." },
      { step: 4, title: "Sanction & Disbursal", desc: "Loan approved and funds credited to business account." }
    ],
    faqs: [
      { q: "Is collateral mandatory for a Business Loan?", a: "No, we offer both secured and unsecured business loans based on your financial strength." },
      { q: "Can a startup apply for a business loan?", a: "Typically, a minimum vintage of 3 years is required, but exceptional profiles may be evaluated on a case-by-case basis." },
      { q: "How is the interest rate decided?", a: "It depends on your business vintage, turnover, profitability, and credit history." }
    ],
    testimonials: [
      { name: "Anand Gupta", rating: 5, text: "United Finserves helped us secure working capital in record time, saving our supply chain.", type: "Business" },
      { name: "Sunita Reddy", rating: 4, text: "Great advisory team that structured our debt perfectly for our expansion plans.", type: "Business" }
    ]
  },
  {
    id: "home-loan",
    title: "Home Loan",
    hero: {
      headline: "Turn Your Dream Home Into Reality",
      desc: "Secure the best interest rates for buying, building, or renovating your home with our end-to-end mortgage assistance.",
      imgQuery: "family_home"
    },
    benefits: [
      { title: "Lowest Rates", desc: "Market-leading interest rates", icon: "FaPercent" },
      { title: "Long Tenure", desc: "Repayment up to 30 years", icon: "FaCalendarAlt" },
      { title: "High LTV", desc: "Get up to 90% of property value", icon: "FaBolt" },
      { title: "Balance Transfer", desc: "Easy switch for better rates", icon: "FaFileAlt" },
      { title: "Doorstep Service", desc: "Hassle-free document pickup", icon: "FaUserTie" },
      { title: "Legal Assistance", desc: "Property verification support", icon: "FaShieldAlt" }
    ],
    whyUs: {
      text: "Buying a home is a milestone. Our experts ensure you get the best deal with zero hidden surprises.",
      stats: [
        { label: "Homes Financed", value: "8,000+" },
        { label: "Top Bank Tie-ups", value: "40+" },
        { label: "Approval Rate", value: "96%" }
      ]
    },
    eligibility: {
      age: "21 to 65 years",
      income: "Minimum ₹30,000 per month",
      employment: "Salaried or Self-Employed with stable income",
      creditScore: "700+ for best interest rates"
    },
    documents: [
      "KYC (PAN, Aadhar)",
      "Income Proof (Salary slips/ITR)",
      "Bank Statements (Last 6 months)",
      "Property Chain Documents",
      "Agreement to Sale",
      "Processing Fee Cheque"
    ],
    process: [
      { step: 1, title: "Eligibility Check", desc: "Determine your maximum loan eligibility." },
      { step: 2, title: "Property Finalization", desc: "Select the property you wish to purchase." },
      { step: 3, title: "Legal & Technical Verification", desc: "Bank verifies property documents and valuation." },
      { step: 4, title: "Sanction & Disbursal", desc: "Loan amount disbursed directly to the builder/seller." }
    ],
    faqs: [
      { q: "Can I get a home loan for a plot purchase?", a: "Yes, plot loans are available, often coupled with a construction loan." },
      { q: "Are there tax benefits on a home loan?", a: "Yes, you can claim tax deductions under Section 80C for principal repayment and Section 24(b) for interest payment." },
      { q: "Is property insurance mandatory?", a: "Yes, most lenders require property insurance to safeguard against damages." }
    ],
    testimonials: [
      { name: "Karan Patel", rating: 5, text: "They found me the lowest rate for my new flat. The entire process was totally stress-free.", type: "Home" },
      { name: "Megha Singh", rating: 5, text: "Excellent support in property verification and balance transfer from my old expensive loan.", type: "Home" }
    ]
  },
  {
    id: "mortgage-lap",
    title: "Mortgage / LAP",
    hero: {
      headline: "Unlock The Power of Your Property",
      desc: "Leverage your residential or commercial property to secure high-value funding at affordable rates for any personal or business need.",
      imgQuery: "mortgage_keys"
    },
    benefits: [
      { title: "High Loan Amount", desc: "Funds up to ₹15 Crore", icon: "FaBolt" },
      { title: "Longer Tenure", desc: "Up to 15 years for repayment", icon: "FaCalendarAlt" },
      { title: "Lower Rates", desc: "Cheaper than unsecured loans", icon: "FaPercent" },
      { title: "Multipurpose Use", desc: "No end-use restrictions", icon: "FaFileAlt" },
      { title: "Retain Ownership", desc: "Property remains in your name", icon: "FaShieldAlt" },
      { title: "Max LTV", desc: "Up to 70% of property market value", icon: "FaUserTie" }
    ],
    whyUs: {
      text: "We provide maximum valuation and fast processing for your property, ensuring liquidity when you need it most.",
      stats: [
        { label: "Loans Disbursed", value: "₹2,000Cr+" },
        { label: "Properties Evaluated", value: "5,000+" },
        { label: "Avg Processing Time", value: "7 Days" }
      ]
    },
    eligibility: {
      age: "21 to 70 years",
      income: "Consistent income history required",
      employment: "Salaried or Self-Employed",
      creditScore: "650+ recommended"
    },
    documents: [
      "Identity and Address Proof",
      "Income Documents (ITR, P&L, Salary Slips)",
      "Bank Statements (Last 12 months)",
      "Original Property Title Deeds",
      "Approved Sanction Plan / Tax Receipts"
    ],
    process: [
      { step: 1, title: "Application", desc: "Submit details of your income and property." },
      { step: 2, title: "Valuation", desc: "Expert technical valuation of your property." },
      { step: 3, title: "Legal Check", desc: "Title clearance and legal due diligence." },
      { step: 4, title: "Disbursal", desc: "Loan amount credited to your account." }
    ],
    faqs: [
      { q: "Can I get LAP against a commercial property?", a: "Yes, both residential and commercial properties can be used as collateral." },
      { q: "Can I rent out the property after taking a LAP?", a: "Yes, you can continue to rent out or use the property normally." },
      { q: "Is co-applicant mandatory?", a: "Yes, all co-owners of the property must be co-applicants." }
    ],
    testimonials: [
      { name: "Suresh Nair", rating: 5, text: "Got a fantastic valuation for my commercial shop. The funds really helped scale my manufacturing unit.", type: "Mortgage" },
      { name: "Pooja Desai", rating: 4, text: "Process took a bit of time due to legal checks, but United Finserves got me a great interest rate.", type: "Mortgage" }
    ]
  },
  {
    id: "vehicle-loan",
    title: "Vehicle Loan",
    hero: {
      headline: "Drive Your Dream Vehicle Home",
      desc: "Fast and easy auto financing for new and used cars, two-wheelers, and commercial vehicles with up to 100% on-road funding.",
      imgQuery: "car_delivery"
    },
    benefits: [
      { title: "Up to 100% Funding", desc: "On-road price financing available", icon: "FaBolt" },
      { title: "Instant Approvals", desc: "In-principle sanction in 30 mins", icon: "FaPercent" },
      { title: "Flexible Tenure", desc: "Repayment up to 7 years", icon: "FaCalendarAlt" },
      { title: "Minimal Paperwork", desc: "Digital verification process", icon: "FaFileAlt" },
      { title: "No Prepayment Penalty", desc: "On specific variable rate loans", icon: "FaShieldAlt" },
      { title: "Dealer Tie-ups", desc: "Exclusive discounts and priority delivery", icon: "FaUserTie" }
    ],
    whyUs: {
      text: "Partnered with top dealerships and banks to ensure you drive out in your new vehicle the same day.",
      stats: [
        { label: "Vehicles Financed", value: "12,000+" },
        { label: "Partner Dealers", value: "200+" },
        { label: "Approval Rate", value: "99%" }
      ]
    },
    eligibility: {
      age: "21 to 60 years",
      income: "Minimum ₹20,000 per month",
      employment: "Salaried or Self-Employed",
      creditScore: "No prior default history"
    },
    documents: [
      "KYC (PAN, Aadhar)",
      "Last 3 months Salary Slips / ITR",
      "Last 6 months Bank Statement",
      "Proforma Invoice from Dealer",
      "Passport Size Photograph"
    ],
    process: [
      { step: 1, title: "Choose Vehicle", desc: "Select your vehicle and get a quotation from the dealer." },
      { step: 2, title: "Apply Online", desc: "Submit application with basic details." },
      { step: 3, title: "Instant Approval", desc: "Get sanctioned instantly based on your profile." },
      { step: 4, title: "Take Delivery", desc: "Loan disbursed to dealer, drive your vehicle home!" }
    ],
    faqs: [
      { q: "Do you finance used cars?", a: "Yes, we provide loans for pre-owned cars up to 5-7 years old depending on the model." },
      { q: "Is guarantor required?", a: "Normally no, unless your income doesn't meet the eligibility criteria." },
      { q: "Can I negotiate the interest rate?", a: "Yes, excellent credit scores attract the most competitive, negotiable rates." }
    ],
    testimonials: [
      { name: "Rahul Verma", rating: 5, text: "Got 100% on-road funding for my SUV within hours. Brilliant service!", type: "Auto" },
      { name: "Anil Kapoor", rating: 5, text: "The tie-up with the dealer made the paperwork absolutely painless.", type: "Auto" }
    ]
  },
  {
    id: "project-loan",
    title: "Project Loan",
    hero: {
      headline: "Fueling Large-Scale Ambitions",
      desc: "Structured project financing for infrastructure, manufacturing, and real estate development with customized moratorium periods.",
      imgQuery: "construction_site"
    },
    benefits: [
      { title: "Huge Capital", desc: "Funding from ₹10Cr to ₹500Cr+", icon: "FaBolt" },
      { title: "Custom Moratorium", desc: "Pay interest only during construction", icon: "FaCalendarAlt" },
      { title: "Syndicated Loans", desc: "Multi-bank consortium arrangements", icon: "FaFileAlt" },
      { title: "Expert Structuring", desc: "Optimal debt-equity ratio planning", icon: "FaUserTie" },
      { title: "Competitive Pricing", desc: "Linked to external benchmarks", icon: "FaPercent" },
      { title: "End-to-End Advisory", desc: "From DPR creation to disbursal", icon: "FaShieldAlt" }
    ],
    whyUs: {
      text: "Our dedicated investment banking arm specializes in deep-tech and infra project appraisals, ensuring smooth capital flow.",
      stats: [
        { label: "Projects Funded", value: "150+" },
        { label: "Capital Raised", value: "₹5,000Cr+" },
        { label: "Industry Sectors", value: "15+" }
      ]
    },
    eligibility: {
      age: "N/A (Corporate Entity)",
      income: "Strong cash flow projections",
      employment: "Viable Detailed Project Report (DPR)",
      creditScore: "Excellent corporate credit rating"
    },
    documents: [
      "Detailed Project Report (DPR)",
      "Financial Projections (5-10 years)",
      "Statutory Clearances and Approvals",
      "Promoter Background & Net Worth",
      "Land / Asset Ownership Documents",
      "Audited Financials of Parent Company"
    ],
    process: [
      { step: 1, title: "DPR Review", desc: "In-depth analysis of your project report." },
      { step: 2, title: "Bank Syndication", desc: "Presenting to multiple lenders for best terms." },
      { step: 3, title: "TEV Study", desc: "Technical and Economic Viability assessment." },
      { step: 4, title: "Financial Closure", desc: "Signing of documents and phase-wise disbursal." }
    ],
    faqs: [
      { q: "What is a moratorium period?", a: "It is a holiday period during the project's construction phase where you only pay interest or nothing at all." },
      { q: "Do you help in drafting the DPR?", a: "Yes, our financial advisory team can assist in creating bank-ready project reports." },
      { q: "What sectors do you cover?", a: "Real estate, manufacturing, renewable energy, healthcare, and infrastructure." }
    ],
    testimonials: [
      { name: "Vikram Singhania", rating: 5, text: "United Finserves successfully syndicated a ₹150Cr loan for our new solar plant. Outstanding expertise.", type: "Corporate" },
      { name: "Devendra Builders", rating: 5, text: "Their TEV study facilitation and bank liaising saved us months of delay.", type: "Corporate" }
    ]
  },
  {
    id: "education-loan",
    title: "Education Loan",
    hero: {
      headline: "Invest In Your Future",
      desc: "Comprehensive education financing for top universities in India and abroad. Focus on your studies while we handle the funding.",
      imgQuery: "student_studying"
    },
    benefits: [
      { title: "100% Financing", desc: "Covers tuition, stay, and travel", icon: "FaBolt" },
      { title: "Long Moratorium", desc: "Course duration + 6 to 12 months", icon: "FaCalendarAlt" },
      { title: "No Margin Money", desc: "For premier institutes", icon: "FaFileAlt" },
      { title: "Tax Benefits", desc: "Deduction under Sec 80E", icon: "FaPercent" },
      { title: "Unsecured Options", desc: "Up to ₹50 Lakhs for top global varsities", icon: "FaShieldAlt" },
      { title: "Visa Assistance", desc: "Fast-track proof of funds letter", icon: "FaUserTie" }
    ],
    whyUs: {
      text: "We believe finances shouldn't stop talent. We partner with specialized NBFCs and Banks to fund global ambitions.",
      stats: [
        { label: "Students Funded", value: "5,000+" },
        { label: "Countries Covered", value: "25+" },
        { label: "Avg Approval", value: "48 Hours" }
      ]
    },
    eligibility: {
      age: "18+ years for applicant",
      income: "Co-applicant must have steady income",
      employment: "Confirmed admission in recognized institute",
      creditScore: "Co-applicant CIBIL 650+"
    },
    documents: [
      "KYC of Student and Co-applicant",
      "Admission Letter from University",
      "Fee Structure Document",
      "Academic Transcripts (10th, 12th, Degree)",
      "Income Proof of Co-applicant",
      "Collateral Docs (if applicable)"
    ],
    process: [
      { step: 1, title: "Counseling", desc: "Understand your funding requirement and university ranking." },
      { step: 2, title: "Application", desc: "Submit docs for student and earning co-applicant." },
      { step: 3, title: "Sanction", desc: "Receive sanction letter to show as proof of funds for visa." },
      { step: 4, title: "Disbursal", desc: "Funds sent directly to the university." }
    ],
    faqs: [
      { q: "Is a co-applicant necessary?", a: "Yes, a parent or guardian with a steady income must act as a financial co-applicant." },
      { q: "Does the loan cover living expenses?", a: "Yes, up to 20% of the total loan amount can be allocated for living and travel expenses." },
      { q: "What if I get a job during my moratorium?", a: "You can start repaying early without any prepayment penalties to save on interest." }
    ],
    testimonials: [
      { name: "Rishabh Jain", rating: 5, text: "Got an unsecured loan for my MS in the US within 3 days. The visa letter was prompt!", type: "Student" },
      { name: "Neha Thomas", rating: 5, text: "Very helpful team. Guided my parents through the entire collateral process for my medical degree.", type: "Student" }
    ]
  },
  {
    id: "working-capital",
    title: "Working Capital",
    hero: {
      headline: "Keep Your Business Flowing",
      desc: "Short-term liquidity solutions designed to bridge cash flow gaps, manage inventory, and handle daily operational expenses smoothly.",
      imgQuery: "business_office"
    },
    benefits: [
      { title: "Overdraft (OD)", desc: "Pay interest only on used funds", icon: "FaPercent" },
      { title: "Cash Credit (CC)", desc: "Revolving credit line against inventory", icon: "FaBolt" },
      { title: "Invoice Discounting", desc: "Instant cash against unpaid invoices", icon: "FaFileAlt" },
      { title: "Annual Renewal", desc: "Hassle-free limit extensions", icon: "FaCalendarAlt" },
      { title: "No EMI Burden", desc: "Flexible interest servicing", icon: "FaShieldAlt" },
      { title: "Trade Finance", desc: "Letter of Credit and Bank Guarantees", icon: "FaUserTie" }
    ],
    whyUs: {
      text: "We specialize in structuring complex working capital limits that align perfectly with your business's cash conversion cycle.",
      stats: [
        { label: "Limits Setup", value: "₹800Cr+" },
        { label: "SME Clients", value: "1,500+" },
        { label: "Turnaround Time", value: "5 Days" }
      ]
    },
    eligibility: {
      age: "Business Vintage > 3 years",
      income: "Positive Net Worth and Profitability",
      employment: "Satisfactory current banking track record",
      creditScore: "Promoters CIBIL 700+"
    },
    documents: [
      "Last 3 Years Audited Financials",
      "Current Year Provisional Financials",
      "Last 12 Months Bank Statements",
      "Stock and Debtors Statement",
      "GST Returns (Last 12 months)",
      "Property Collateral Docs (if Secured)"
    ],
    process: [
      { step: 1, title: "Requirement Analysis", desc: "Assessing your working capital gap (MPBF)." },
      { step: 2, title: "Proposal Structuring", desc: "Designing a mix of OD/CC and Trade limits." },
      { step: 3, title: "Credit Assessment", desc: "Bank reviews financials and collateral." },
      { step: 4, title: "Limit Setup", desc: "Account opened and limits made available for withdrawal." }
    ],
    faqs: [
      { q: "What is the difference between Term Loan and Working Capital?", a: "Term loans are for long-term capital assets with fixed EMIs. Working capital is a revolving line for short-term daily needs." },
      { q: "Is collateral required?", a: "Yes, usually limits are secured by stock/book debts as primary, and property as collateral." },
      { q: "How is interest calculated?", a: "Interest is calculated daily based on the end-of-day utilized amount, not on the total sanctioned limit." }
    ],
    testimonials: [
      { name: "Aditya Manufacturing", rating: 5, text: "They restructured our CC limit and reduced our interest burden significantly.", type: "Corporate" },
      { name: "Global Traders Pvt Ltd", rating: 4, text: "Fast processing for our Letter of Credit requirement. Highly recommended for traders.", type: "Corporate" }
    ]
  },
  {
    id: "loan-against-property",
    title: "Loan Against Property",
    hero: {
      headline: "Leverage Your Property's Value",
      desc: "The smartest way to raise long-term, high-value funds at low interest rates using your residential or commercial real estate.",
      imgQuery: "commercial_property"
    },
    benefits: [
      { title: "Highest Valuations", desc: "Get up to 75% of market value", icon: "FaBolt" },
      { title: "Lowest Interest Rates", desc: "Cheaper than business or personal loans", icon: "FaPercent" },
      { title: "Longest Tenure", desc: "Repayment periods up to 15-20 years", icon: "FaCalendarAlt" },
      { title: "Retain Usage", desc: "Continue using or renting your property", icon: "FaShieldAlt" },
      { title: "Balance Transfer", desc: "Move existing LAP for top-up funds", icon: "FaFileAlt" },
      { title: "Minimal Income Docs", desc: "Surrogate programs available", icon: "FaUserTie" }
    ],
    whyUs: {
      text: "Our strong lender network ensures you get the highest loan-to-value (LTV) ratio even for complex property types.",
      stats: [
        { label: "LAP Disbursed", value: "₹1,500Cr+" },
        { label: "Avg LTV Achieved", value: "65%" },
        { label: "Happy Customers", value: "3,000+" }
      ]
    },
    eligibility: {
      age: "21 to 65 years",
      income: "Stable business or salary income",
      employment: "Property must have clear legal title",
      creditScore: "650+ recommended"
    },
    documents: [
      "Property Title Deeds & Chain",
      "Approved Plan and Occupancy Certificate",
      "KYC of all Property Owners",
      "Last 3 Years Financials/ITR",
      "Last 6 Months Bank Statement"
    ],
    process: [
      { step: 1, title: "Property Evaluation", desc: "Initial assessment of property type and location." },
      { step: 2, title: "Legal & Tech", desc: "Engineers evaluate price; Lawyers check clear title." },
      { step: 3, title: "Credit Decision", desc: "Loan amount finalized based on valuation and income." },
      { step: 4, title: "Mortgage Creation", desc: "Property documents deposited and funds released." }
    ],
    faqs: [
      { q: "Can I pledge an industrial property?", a: "Yes, we arrange LAP against residential, commercial, and industrial properties." },
      { q: "What if my property is jointly owned?", a: "All co-owners must sign the loan agreement as co-applicants." },
      { q: "Can I pre-close the loan?", a: "Yes. For individuals on floating rates, there are zero pre-closure charges." }
    ],
    testimonials: [
      { name: "Rohit Agarwal", rating: 5, text: "I unlocked funds from my empty warehouse to expand my retail business. Smooth process.", type: "Business" },
      { name: "Sneha Patil", rating: 5, text: "They helped me transfer my old expensive LAP to a new bank with a massive interest saving.", type: "Personal" }
    ]
  },
  {
    id: "financial-consulting",
    title: "Financial Consulting",
    hero: {
      headline: "Expert Financial Advisory",
      desc: "Strategic guidance to restructure your debt, improve your CIBIL score, and optimize your financial portfolio for maximum growth.",
      imgQuery: "financial_advisor"
    },
    benefits: [
      { title: "Debt Restructuring", desc: "Consolidate multiple high-cost loans", icon: "FaBolt" },
      { title: "CIBIL Improvement", desc: "Actionable steps to fix credit scores", icon: "FaPercent" },
      { title: "Portfolio Audit", desc: "Comprehensive review of liabilities", icon: "FaFileAlt" },
      { title: "Custom Strategy", desc: "Tailored roadmaps for financial goals", icon: "FaCalendarAlt" },
      { title: "Unbiased Advice", desc: "We work for you, not the banks", icon: "FaShieldAlt" },
      { title: "Virtual CFO", desc: "Outsourced financial management for SMEs", icon: "FaUserTie" }
    ],
    whyUs: {
      text: "Our team consists of ex-bankers, chartered accountants, and credit experts who know exactly how lenders think.",
      stats: [
        { label: "Portfolios Audited", value: "₹500Cr+" },
        { label: "CIBIL Scores Fixed", value: "1,200+" },
        { label: "Interest Saved", value: "₹50Cr+" }
      ]
    },
    eligibility: {
      age: "Any Individual or Business",
      income: "N/A",
      employment: "Seeking financial optimization",
      creditScore: "All scores (especially < 700)"
    },
    documents: [
      "Latest CIBIL / Experian Report",
      "Current Loan Sanction Letters",
      "Latest Bank Statements",
      "Business Financials (If SME)",
      "List of Assets and Liabilities"
    ],
    process: [
      { step: 1, title: "Discovery Call", desc: "Understand your financial pain points and goals." },
      { step: 2, title: "Data Collection", desc: "Gather credit reports and financial statements." },
      { step: 3, title: "Deep Audit", desc: "Our experts analyze gaps and high-interest leakages." },
      { step: 4, title: "Action Plan", desc: "Receive a detailed roadmap and execution support." }
    ],
    faqs: [
      { q: "How long does it take to improve a CIBIL score?", a: "Depending on the severity of defaults, it takes anywhere from 3 to 12 months of disciplined action." },
      { q: "What is a balance transfer strategy?", a: "Moving your high-interest loans to a lower-interest lender to save money on EMIs." },
      { q: "Do you offer Virtual CFO services?", a: "Yes, we act as an extended finance team for growing businesses." }
    ],
    testimonials: [
      { name: "Manoj Tiwari", rating: 5, text: "My CIBIL was stuck at 620. Their guidance helped me clear discrepancies and reach 750 in 6 months.", type: "Consulting" },
      { name: "Alpha Tech Solutions", rating: 5, text: "Their debt restructuring advice saved us 2% annually on our entire corporate loan book.", type: "Corporate" }
    ]
  },
  {
    id: "insurance-advisory",
    title: "Insurance Advisory",
    hero: {
      headline: "Protect What Matters Most",
      desc: "Unbiased insurance advisory to help you choose the right life, health, and corporate insurance plans from top providers.",
      imgQuery: "family_protection"
    },
    benefits: [
      { title: "Term Life Insurance", desc: "High cover at low premiums", icon: "FaShieldAlt" },
      { title: "Health Insurance", desc: "Comprehensive cashless mediclaim", icon: "FaBolt" },
      { title: "Keyman Insurance", desc: "Protecting business promoters", icon: "FaUserTie" },
      { title: "Claim Assistance", desc: "End-to-end support during claims", icon: "FaFileAlt" },
      { title: "Portfolio Review", desc: "Identify under-insurance risks", icon: "FaPercent" },
      { title: "Tax Savings", desc: "Max deductions under 80C & 80D", icon: "FaCalendarAlt" }
    ],
    whyUs: {
      text: "We don't push products; we analyze your risk exposure and recommend plans that actually payout when you need them.",
      stats: [
        { label: "Lives Covered", value: "10,000+" },
        { label: "Claim Settlement", value: "99.2%" },
        { label: "Partner Insurers", value: "20+" }
      ]
    },
    eligibility: {
      age: "18 to 65 years",
      income: "Must have stable income for Term Plans",
      employment: "Salaried, Business, or Professionals",
      creditScore: "N/A"
    },
    documents: [
      "KYC (PAN, Aadhar)",
      "Age Proof",
      "Income Proof (For Term Insurance)",
      "Medical History Records (If required)",
      "Cancelled Cheque"
    ],
    process: [
      { step: 1, title: "Risk Profiling", desc: "Assess human life value and health risks." },
      { step: 2, title: "Plan Comparison", desc: "Compare policies from top 5 insurers." },
      { step: 3, title: "Medical Check", desc: "Tele or physical medical evaluation (if needed)." },
      { step: 4, title: "Policy Issuance", desc: "Receive your policy document digitally." }
    ],
    faqs: [
      { q: "Why do I need a Term Plan if I have savings?", a: "Term insurance provides a massive financial safety net (e.g., ₹1 Crore) for a tiny premium, replacing your future income." },
      { q: "Can I port my health insurance?", a: "Yes, you can port to a better insurer without losing your waiting period benefits." },
      { q: "Do you help with claim settlements?", a: "Absolutely. Our dedicated desk liaisons with TPAs and insurers to ensure smooth cashless or reimbursement claims." }
    ],
    testimonials: [
      { name: "Ravi Shankar", rating: 5, text: "Excellent comparison of term plans. They didn't just sell me a policy, they explained the nuances.", type: "Insurance" },
      { name: "Priyanka V", rating: 5, text: "Their claim assistance team is a lifesaver. Handled my father's hospitalization claim flawlessly.", type: "Insurance" }
    ]
  },
  {
    id: "investment-planning",
    title: "Investment Planning",
    hero: {
      headline: "Grow Your Wealth Strategically",
      desc: "Goal-based investment planning utilizing mutual funds, PMS, and fixed-income instruments to beat inflation and build a corpus.",
      imgQuery: "investment_chart"
    },
    benefits: [
      { title: "Mutual Funds", desc: "Curated equity & debt portfolios", icon: "FaBolt" },
      { title: "Goal Planning", desc: "Retirement, Education, Wealth", icon: "FaCalendarAlt" },
      { title: "PMS & AIF", desc: "For High Net-Worth Individuals", icon: "FaUserTie" },
      { title: "Bonds & FDs", desc: "Capital protection strategies", icon: "FaShieldAlt" },
      { title: "Tax Optimization", desc: "ELSS and tax-free bonds", icon: "FaPercent" },
      { title: "Quarterly Reviews", desc: "Active portfolio rebalancing", icon: "FaFileAlt" }
    ],
    whyUs: {
      text: "Data-driven investment strategies tailored strictly to your risk appetite, ignoring market noise and focusing on compounding.",
      stats: [
        { label: "AUM", value: "₹250Cr+" },
        { label: "Active Investors", value: "4,000+" },
        { label: "Avg Portfolio Alpha", value: "+3%" }
      ]
    },
    eligibility: {
      age: "18+ years",
      income: "Any income level (SIPs start at ₹500)",
      employment: "N/A",
      creditScore: "N/A"
    },
    documents: [
      "PAN Card",
      "Aadhar Card",
      "Bank Account Details",
      "Nominee Details",
      "FATCA Declaration"
    ],
    process: [
      { step: 1, title: "Risk Assessment", desc: "Determine your risk tolerance and time horizon." },
      { step: 2, title: "Goal Setting", desc: "Quantify financial goals (Retirement, House, etc.)." },
      { step: 3, title: "Portfolio Creation", desc: "Select the right mix of asset classes." },
      { step: 4, title: "Execution & Tracking", desc: "Start SIPs/Lumpsum and monitor via our app." }
    ],
    faqs: [
      { q: "What is an SIP?", a: "Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly in mutual funds, benefiting from Rupee Cost Averaging." },
      { q: "Is my money locked in?", a: "Most open-ended mutual funds are highly liquid and can be withdrawn anytime. Only ELSS funds have a 3-year lock-in." },
      { q: "How often do you review the portfolio?", a: "We conduct detailed quarterly reviews and rebalance if the asset allocation drifts significantly." }
    ],
    testimonials: [
      { name: "Siddharth Bose", rating: 5, text: "Mapped my daughter's education goal perfectly. The portfolio is performing better than expected.", type: "Investment" },
      { name: "Dr. Ananya Rao", rating: 5, text: "Highly professional wealth management. I finally have clarity on my retirement corpus.", type: "Investment" }
    ]
  }
];
