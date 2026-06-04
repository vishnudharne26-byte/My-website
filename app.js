// ===== STATE =====
let currentLang = 'en';
let isLoggedIn = false;
let isPresident = false;
let selectedUploadType = 'notice';

// ===== TRANSLATIONS =====
const T = {
  en: {
    // splash
    splashTitle:'Pardhi Samaj', splashSub:'Pardhi Samaj – Chandrapur District',
    splashName:'President: Vishnu Dharne | विष्णू धार्णे',
    // nav
    navBrand:'Pardhi Samaj', navSub:'Chandrapur Dist.',
    // hero
    heroBadge:'🦅 Official Portal – Chandrapur District',
    heroH1:'Pardhi Samaj', heroH2:'Chandrapur',
    heroDeva:'Unity • Rights • Progress',
    slog1:'Justice', slog2:'Education', slog3:'Housing', slog4:'Employment',
    presRole:'President / अध्यक्ष',
    heroP:'The official digital platform of Pardhi Samaj, Chandrapur District. Participate in community decisions, access government programs, and stay connected.',
    heroBtn1:'🗳️ Vote Now', heroBtn3:'✅ Join Samaj',
    // stats
    stat1:'Members', stat2:'Active Polls', stat3:'Meetings/Year', stat4:'District',
    // tabs
    tHome:'Home', tNotices:'Notices', tVote:'Vote', tMeetings:'Meetings', tPrograms:'Programs', tJoin:'Join',
    // quick actions
    qa1:'Vote Now', qa2:'Govt Schemes', qa3:'Member Login', qa4:'WhatsApp', qa5:'Meetings', qa6:'Helpline',
    // notices
    noticeBoardTitle:'Latest from President',
    hn1t:'Samaj Meeting – Jun 10, Chandrapur', hn1d:'Monthly gram sabha at Chandrapur Tribal Bhavan. All members invited.',
    hn2t:'PMAY-G Application Drive Open', hn2d:'Free housing application camp at Chandrapur District Office. ST certificates required.',
    hn3t:'Scholarship Registration 2026-27 Open', hn3d:'Post-matric scholarship applications are now open. Apply before July 31.',
    // quick cards
    qcTag1:'Active Poll', qcTitle1:'Vote on Welfare Board', qcDesc1:'Demand for a separate Pardhi Welfare Board in Maharashtra is live for voting.', qcBtn1:'Vote Now →',
    qcTag2:'Upcoming', qcTitle2:'Gram Sabha – Forest Rights', qcDesc2:'Monthly gram sabha focused on Forest Rights Act claims in Chandrapur district.', qcBtn2:'Register →',
    qcTag3:'Program', qcTitle3:'Pardhi Skill Development', qcDesc3:'Free skill training in tailoring, plumbing and electronics for youth aged 18–35.', qcBtn3:'Apply →',
    // full notices section
    noticesTitle:'Official Notices', noticesSub:'All announcements from President Vishnu Dharne',
    allNoticesTitle:'All Notices & Announcements',
    presDashRole:'🏆 President, Pardhi Samaj – Chandrapur',
    presAddNoticeBtn:'📤 Post New Notice',
    uploadTitle2:'Post New Announcement',
    ufTitle:'Title', ufDesc:'Description', ufDate:'Date', ufLoc:'Location', ufPost:'📤 Post Announcement',
    // vote
    voteTitle:'Samaj Voting', voteSub:'Registered members only. Login with OTP to vote.',
    voteGateMsg:'Login to Vote', voteGateDesc:'Login with your registered mobile number to access voting.', voteGateBtn:'Login with OTP',
    poll1Tag:'Active Poll', poll1Q:'Should a separate Pardhi Welfare Board be demanded in Maharashtra?', poll1Meta:'votes · Closes June 5, 2026',
    p1o0:'Yes, full support', p1o1:'Maybe, needs discussion', p1o2:'Not now',
    poll2Tag:'Active Poll', poll2Q:'Priority for next Gram Sabha: Land Rights or Education?', poll2Meta:'votes · Closes June 12, 2026',
    p2o0:'Land & Forest Rights', p2o1:'Education & Scholarships',
    poll3Tag:'🚨 Urgent Poll', poll3Q:'Petition against highway project threatening Chandrapur Pardhi Wadi?', poll3Meta:'votes · Closes May 31, 2026',
    p3o0:'Yes – Approve Petition', p3o1:'No – Reject Petition',
    // meetings
    mtgTitle:'Samaj Meetings', mtgSub:'Upcoming gram sabhas & community meetings – Chandrapur District',
    mtg1Title:'Gram Sabha – Forest Land Rights Discussion', mtg1Desc:'Monthly gram sabha focused on Forest Rights Act claims in Chandrapur. All wadi representatives invited.',
    mtg2Title:'Youth Leaders Summit – Chandrapur', mtg2Desc:'Youth leadership gathering to discuss education, employment and skill development for Pardhi youth.',
    mtg3Title:'Emergency Session – Displacement Case', mtg3Desc:'Emergency session on proposed highway project threatening Pardhi Wadi in Chandrapur.',
    mtg4Title:'Annual Samaj Mahasabha – Chandrapur', mtg4Desc:'Annual general assembly of all Pardhi Samaj members. Report on 2025-26 activities and planning for 2026-27.',
    // programs
    progTitle:'Government Programs & Yojanas', progSub:'Available schemes for Pardhi ST community – Chandrapur',
    // join
    joinTitle:'Join Pardhi Samaj Portal', joinSub:'Register as an official member to vote, access meetings & all programs',
    joinFormTitle:'Member Registration', joinFormSub:'Chandrapur District – Pardhi Samaj',
    lblFname:'First Name', lblLname:'Last Name', lblPhone:'Mobile Number (for OTP)', lblDistrict:'District',
    lblVillage:'Village / Wadi', lblAge:'Age', lblCert:'ST Certificate Number (optional)', lblNotes:'How can the samaj help you?',
    btnRegister:'🦅 Register as Samaj Member',
    // login
    loginTitle:'Member Login', loginSub:'Enter your registered mobile number to receive OTP',
    sendOtpBtn:'📱 Send OTP', otpNote1:'OTP will be sent via SMS',
    otpTitle:'Enter OTP', otpSub:'6-digit code sent to your mobile', otpLbl:'OTP Code', otpDemoNote:'Demo: use OTP 123456',
    verifyOtpBtn:'✅ Verify & Login', changeNumBtn:'← Change Number',
    presLoginTitle:'President Login', presLoginSub:'Enter admin password for President Dashboard',
    presPassLbl:'Admin Password', presLoginBtn:'🔑 Login as President', presLoginNote:'Demo password: pardhi2026',
    // toasts
    rsvpOk:'✅ RSVP registered! Reminder will be sent to your mobile.',
    applyOk:'✅ Application submitted! Our coordinator will contact you within 3–5 days.',
    joinSuccessTitle:'Welcome to Pardhi Samaj! 🦅',
    joinSuccessMsg:'You are now a registered member. You can vote, attend meetings, and access all government programs.',
    voteSuccessTitle:'Vote Recorded! 🗳️',
    voteSuccessMsg:'Your voice has been counted. Together we decide our future.',
    loginSuccessTitle:'Login Successful! 🔓',
    loginSuccessMsg:'Welcome back! You can now vote in all active polls.',
    presLoginSuccess:'🏆 President Dashboard unlocked! You can now post notices, meetings and programs.',
    wrongOtp:'❌ Incorrect OTP. Please try again.',
    wrongPass:'❌ Incorrect password. Contact admin.',
    waTooltip:'Join WhatsApp Group',
    tickerLabel:'📢 LIVE UPDATES',
    langBtn:'मर / EN',
    navLoginBtn:'🔐 Login',
  },
  mr: {
    splashTitle:'पारधी समाज', splashSub:'पारधी समाज – चंद्रपूर जिल्हा',
    splashName:'अध्यक्ष: विष्णू धार्णे',
    navBrand:'पारधी समाज', navSub:'चंद्रपूर जिल्हा',
    heroBadge:'🦅 अधिकृत पोर्टल – चंद्रपूर जिल्हा',
    heroH1:'पारधी समाज', heroH2:'चंद्रपूर',
    heroDeva:'एकता • हक्क • प्रगती',
    slog1:'न्याय', slog2:'शिक्षण', slog3:'घरकुल', slog4:'रोजगार',
    presRole:'अध्यक्ष / President',
    heroP:'पारधी समाज, चंद्रपूर जिल्हा यांचे अधिकृत डिजिटल व्यासपीठ. समाजाच्या निर्णयांमध्ये सहभागी व्हा, सरकारी योजना मिळवा आणि जोडलेले राहा.',
    heroBtn1:'🗳️ मतदान करा', heroBtn3:'✅ समाजात सामील व्हा',
    stat1:'सदस्य', stat2:'सक्रिय मतदाने', stat3:'बैठका/वर्ष', stat4:'जिल्हा',
    tHome:'मुख्यपृष्ठ', tNotices:'सूचना', tVote:'मतदान', tMeetings:'बैठका', tPrograms:'कार्यक्रम', tJoin:'सामील व्हा',
    qa1:'मतदान करा', qa2:'सरकारी योजना', qa3:'सदस्य लॉगिन', qa4:'व्हाट्सअॅप', qa5:'बैठका', qa6:'हेल्पलाइन',
    noticeBoardTitle:'अध्यक्षांकडून ताज्या सूचना',
    hn1t:'समाज बैठक – जून १०, चंद्रपूर', hn1d:'चंद्रपूर आदिवासी भवन येथे ग्रामसभा. सर्व सदस्यांना उपस्थित राहण्याची विनंती.',
    hn2t:'PMAY-G अर्ज महोत्सव सुरू', hn2d:'चंद्रपूर जिल्हा कार्यालयात मोफत घरकुल अर्ज शिबीर. ST प्रमाणपत्र आवश्यक.',
    hn3t:'शिष्यवृत्ती नोंदणी 2026-27 सुरू', hn3d:'पोस्ट-मॅट्रिक शिष्यवृत्तीसाठी अर्ज खुले आहेत. ३१ जुलैपूर्वी अर्ज करा.',
    qcTag1:'सक्रिय मतदान', qcTitle1:'कल्याण मंडळावर मत द्या', qcDesc1:'महाराष्ट्रात स्वतंत्र पारधी कल्याण मंडळाची मागणीसाठी मतदान सुरू आहे.', qcBtn1:'आता मतदान करा →',
    qcTag2:'आगामी', qcTitle2:'ग्रामसभा – वन अधिकार', qcDesc2:'चंद्रपूर जिल्ह्यातील वन अधिकार कायद्याच्या दाव्यांवर मासिक ग्रामसभा.', qcBtn2:'नोंदणी करा →',
    qcTag3:'कार्यक्रम', qcTitle3:'पारधी कौशल्य विकास', qcDesc3:'१८-३५ वर्षे वयोगटातील तरुणांसाठी विनामूल्य कौशल्य प्रशिक्षण.', qcBtn3:'अर्ज करा →',
    noticesTitle:'अधिकृत सूचना', noticesSub:'अध्यक्ष विष्णू धार्णे यांच्याकडून सर्व घोषणा',
    allNoticesTitle:'सर्व सूचना व घोषणा',
    presDashRole:'🏆 अध्यक्ष, पारधी समाज – चंद्रपूर',
    presAddNoticeBtn:'📤 नवीन सूचना पोस्ट करा',
    uploadTitle2:'नवीन घोषणा पोस्ट करा',
    ufTitle:'शीर्षक', ufDesc:'वर्णन', ufDate:'तारीख', ufLoc:'ठिकाण', ufPost:'📤 घोषणा प्रकाशित करा',
    voteTitle:'समाज मतदान', voteSub:'केवळ नोंदणीकृत सदस्य. OTP सह लॉगिन करून मतदान करा.',
    voteGateMsg:'मतदानासाठी लॉगिन करा', voteGateDesc:'मतदानासाठी आपला नोंदणीकृत मोबाइल नंबर टाका.', voteGateBtn:'OTP सह लॉगिन करा',
    poll1Tag:'सक्रिय मतदान', poll1Q:'महाराष्ट्रात स्वतंत्र पारधी कल्याण मंडळाची मागणी करायची का?', poll1Meta:'मते · जून ५, २०२६ रोजी बंद',
    p1o0:'होय, पूर्ण समर्थन', p1o1:'कदाचित, चर्चा आवश्यक', p1o2:'आत्ता नाही',
    poll2Tag:'सक्रिय मतदान', poll2Q:'पुढील ग्रामसभेसाठी प्राधान्य: जमीन हक्क की शिक्षण?', poll2Meta:'मते · जून १२, २०२६ रोजी बंद',
    p2o0:'जमीन व वन हक्क', p2o1:'शिक्षण व शिष्यवृत्ती',
    poll3Tag:'🚨 तातडीचे मतदान', poll3Q:'चंद्रपूर पारधी वाडीला धोका निर्माण करणाऱ्या महामार्ग प्रकल्पाविरोधात याचिका?', poll3Meta:'मते · मे ३१, २०२६ रोजी बंद',
    p3o0:'होय – याचिका मंजूर', p3o1:'नाही – याचिका नाकारा',
    mtgTitle:'समाज बैठका', mtgSub:'आगामी ग्रामसभा व सामुदायिक बैठका – चंद्रपूर जिल्हा',
    mtg1Title:'ग्रामसभा – वन जमीन हक्क चर्चा', mtg1Desc:'चंद्रपूर जिल्ह्यातील वन अधिकार कायद्याच्या दाव्यांवर मासिक ग्रामसभा.',
    mtg2Title:'युवा नेते परिषद – चंद्रपूर', mtg2Desc:'पारधी तरुणांसाठी शिक्षण, रोजगार आणि कौशल्य विकासावर युवा नेतृत्व संमेलन.',
    mtg3Title:'आणीबाणी अधिवेशन – विस्थापन प्रकरण', mtg3Desc:'चंद्रपूर पारधी वाडीला धोका निर्माण करणाऱ्या महामार्ग प्रकल्पावर आणीबाणी अधिवेशन.',
    mtg4Title:'वार्षिक समाज महासभा – चंद्रपूर', mtg4Desc:'चंद्रपूर जिल्ह्यातील सर्व पारधी समाज सदस्यांची वार्षिक सर्वसाधारण सभा.',
    progTitle:'सरकारी कार्यक्रम व योजना', progSub:'पारधी ST समुदायासाठी उपलब्ध योजना – चंद्रपूर',
    joinTitle:'पारधी समाज पोर्टलमध्ये सामील व्हा', joinSub:'मतदान करण्यासाठी, बैठका व सर्व कार्यक्रमांसाठी अधिकृत सदस्य म्हणून नोंदणी करा',
    joinFormTitle:'सदस्य नोंदणी', joinFormSub:'चंद्रपूर जिल्हा – पारधी समाज',
    lblFname:'पहिले नाव', lblLname:'आडनाव', lblPhone:'मोबाइल नंबर (OTP साठी)', lblDistrict:'जिल्हा',
    lblVillage:'गाव / वाडी', lblAge:'वय', lblCert:'ST प्रमाणपत्र क्रमांक (पर्यायी)', lblNotes:'समाज तुम्हाला कशी मदत करू शकतो?',
    btnRegister:'🦅 समाज सदस्य म्हणून नोंदणी करा',
    loginTitle:'सदस्य लॉगिन', loginSub:'OTP मिळवण्यासाठी नोंदणीकृत मोबाइल नंबर टाका',
    sendOtpBtn:'📱 OTP पाठवा', otpNote1:'SMS द्वारे OTP पाठवला जाईल',
    otpTitle:'OTP टाका', otpSub:'मोबाइलवर पाठवलेला ६ अंकी कोड', otpLbl:'OTP कोड', otpDemoNote:'Demo: OTP 123456 वापरा',
    verifyOtpBtn:'✅ सत्यापित करा आणि लॉगिन करा', changeNumBtn:'← नंबर बदला',
    presLoginTitle:'अध्यक्ष लॉगिन', presLoginSub:'अध्यक्ष डॅशबोर्डसाठी पासवर्ड टाका',
    presPassLbl:'अॅडमिन पासवर्ड', presLoginBtn:'🔑 अध्यक्ष म्हणून लॉगिन करा', presLoginNote:'Demo पासवर्ड: pardhi2026',
    rsvpOk:'✅ RSVP नोंदवले! आपल्या मोबाइलवर स्मरणपत्र पाठवले जाईल.',
    applyOk:'✅ अर्ज सादर झाला! आमचे समन्वयक ३-५ दिवसांत संपर्क करतील.',
    joinSuccessTitle:'पारधी समाजात आपले स्वागत! 🦅',
    joinSuccessMsg:'आपण आता नोंदणीकृत सदस्य आहात. आपण मतदान करू शकता, बैठकांना उपस्थित राहू शकता.',
    voteSuccessTitle:'मत नोंदवले! 🗳️',
    voteSuccessMsg:'आपचा आवाज मोजला गेला. एकत्र आपण आपले भविष्य ठरवतो.',
    loginSuccessTitle:'लॉगिन यशस्वी! 🔓',
    loginSuccessMsg:'परत स्वागत! आपण आता सर्व सक्रिय मतदानांमध्ये मतदान करू शकता.',
    presLoginSuccess:'🏆 अध्यक्ष डॅशबोर्ड उघडला! आपण आता सूचना, बैठका आणि कार्यक्रम पोस्ट करू शकता.',
    wrongOtp:'❌ चुकीचा OTP. कृपया पुन्हा प्रयत्न करा.',
    wrongPass:'❌ चुकीचा पासवर्ड. अॅडमिनशी संपर्क करा.',
    waTooltip:'व्हाट्सअॅप ग्रुपमध्ये सामील व्हा',
    tickerLabel:'📢 ताज्या बातम्या',
    langBtn:'EN / मर',
    navLoginBtn:'🔐 लॉगिन',
  }
};

// ===== NOTICES DATA =====
let allNotices = [
  {type:'meeting', title_en:'Samaj Meeting – Jun 10, Chandrapur', title_mr:'समाज बैठक – जून १०, चंद्रपूर', desc_en:'Monthly gram sabha at Chandrapur Tribal Bhavan. All members requested to attend.', desc_mr:'चंद्रपूर आदिवासी भवन येथे मासिक ग्रामसभा. सर्व सदस्यांना उपस्थित राहण्याची विनंती.', date:'Jun 5, 2026'},
  {type:'notice', title_en:'PMAY-G Application Drive', title_mr:'PMAY-G अर्ज महोत्सव', desc_en:'Free housing application assistance camp at Chandrapur District Office. ST certificates required.', desc_mr:'चंद्रपूर जिल्हा कार्यालयात मोफत घरकुल अर्ज शिबीर. ST प्रमाणपत्र आवश्यक.', date:'Jun 3, 2026'},
  {type:'program', title_en:'Scholarship Registration Open', title_mr:'शिष्यवृत्ती नोंदणी खुली', desc_en:'Post-matric scholarship applications for 2026-27 are now open. Apply before July 31.', desc_mr:'२०२६-२७ साठी पोस्ट-मॅट्रिक शिष्यवृत्तीसाठी अर्ज खुले आहेत. ३१ जुलैपूर्वी अर्ज करा.', date:'Jun 1, 2026'},
  {type:'notice', title_en:'Emergency Session – Jun 25', title_mr:'आणीबाणी अधिवेशन – जून २५', desc_en:'Emergency session on highway displacement case. All members must attend.', desc_mr:'महामार्ग विस्थापन प्रकरणावर आणीबाणी अधिवेशन. सर्व सदस्यांनी उपस्थित राहणे आवश्यक.', date:'May 30, 2026'},
  {type:'meeting', title_en:'Annual Mahasabha – Jul 5', title_mr:'वार्षिक महासभा – जुलै ५', desc_en:'Annual general assembly at Chandrapur Sports Complex. Report on 2025-26 activities.', desc_mr:'चंद्रपूर क्रीडा संकुलात वार्षिक सर्वसाधारण सभा. २०२५-२६ च्या कार्यांचा अहवाल.', date:'May 28, 2026'},
];

// ===== COUNTERS ANIMATION =====
function animateCount(id, target, duration=1500) {
  const el = document.getElementById(id);
  if (!el) return;
  let start = 0; const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { el.textContent = target.toLocaleString(); clearInterval(timer); }
    else el.textContent = Math.floor(start).toLocaleString();
  }, 16);
}

// ===== SPLASH & START =====
function startApp(lang) {
  currentLang = lang;
  document.getElementById('splash').style.display = 'none';
  document.getElementById('app').style.display = 'block';
  applyLang();
  renderNotices();
  setTimeout(() => {
    animateCount('countMembers', 4820);
    animateCount('countPolls', 3);
    animateCount('countMtg', 24);
  }, 300);
}

// ===== APPLY LANGUAGE =====
function applyLang() {
  const t = T[currentLang];
  const ids = Object.keys(t);
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (el.tagName === 'INPUT' && el.type === 'submit') el.value = t[id];
      else el.textContent = t[id];
    }
  });
  document.documentElement.lang = currentLang === 'mr' ? 'mr' : 'en';
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'mr' : 'en';
  applyLang();
  renderNotices();
}

// ===== SECTION NAV =====
function showSection(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.nav-menu button').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.drawer-item').forEach(b => b.classList.remove('active'));

  const sec = document.getElementById('sec-' + name);
  if (sec) sec.classList.add('active');
  const tab = document.getElementById('tab-' + name);
  if (tab) tab.classList.add('active');
  const navBtn = document.getElementById('nav-' + name);
  if (navBtn) navBtn.classList.add('active');

  window.scrollTo({top: document.querySelector('nav')?.offsetTop || 0, behavior: 'smooth'});
}

// ===== MODALS =====
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
function openPresLogin() { closeModal('loginModal'); openModal('presLoginModal'); }

// ===== OTP LOGIN =====
function sendOTP() {
  const phone = document.getElementById('loginPhone').value.trim();
  if (phone.length < 10) { showToast('❌ Please enter a valid 10-digit mobile number'); return; }
  document.getElementById('loginStep1').style.display = 'none';
  document.getElementById('loginStep2').style.display = 'block';
  showToast('📱 OTP sent to +91 ' + phone);
}
function verifyOTP() {
  const otp = document.getElementById('otpInput').value.trim();
  if (otp.length < 4) { showToast(T[currentLang].wrongOtp); return; }
  isLoggedIn = true;
  closeModal('loginModal');
  document.getElementById('voteGate').style.display = 'none';
  document.getElementById('voteContent').style.display = 'block';
  document.getElementById('loginStep1').style.display = 'block';
  document.getElementById('loginStep2').style.display = 'none';
  showSuccess('🔓', T[currentLang].loginSuccessTitle, T[currentLang].loginSuccessMsg);
}
function goBackLogin() {
  document.getElementById('loginStep2').style.display = 'none';
  document.getElementById('loginStep1').style.display = 'block';
}

// ===== PRESIDENT LOGIN =====
function verifyPres() {
  const pass = document.getElementById('presPassword').value;
  if (pass === 'pardhi2026') {
    isPresident = true; isLoggedIn = true;
    closeModal('presLoginModal');
    document.getElementById('presDash').style.display = 'block';
    document.getElementById('voteGate').style.display = 'none';
    document.getElementById('voteContent').style.display = 'block';
    document.getElementById('presPassword').value = '';
    showToast(T[currentLang].presLoginSuccess);
  } else {
    showToast(T[currentLang].wrongPass);
  }
}
function logoutPres() {
  isPresident = false; isLoggedIn = false;
  document.getElementById('presDash').style.display = 'none';
  document.getElementById('uploadPanel').classList.remove('open');
  document.getElementById('voteGate').style.display = '';
  document.getElementById('voteContent').style.display = 'none';
  showToast('🔓 Logged out successfully.');
}

// ===== NOTICES RENDER =====
function renderNotices() {
  const list = document.getElementById('allNoticesList');
  if (!list) return;
  const typeClass = {notice:'nb-notice', meeting:'nb-meeting', program:'nb-program'};
  const typeLabel = {
    notice: currentLang === 'mr' ? 'सूचना' : 'Notice',
    meeting: currentLang === 'mr' ? 'बैठक' : 'Meeting',
    program: currentLang === 'mr' ? 'कार्यक्रम' : 'Program'
  };
  list.innerHTML = allNotices.map(n => `
    <div class="notice-item">
      <div class="notice-item-left">
        <h4><span class="notice-type-badge ${typeClass[n.type]}">${typeLabel[n.type]}</span>
          ${currentLang === 'mr' ? n.title_mr : n.title_en}
        </h4>
        <p>${currentLang === 'mr' ? n.desc_mr : n.desc_en}</p>
      </div>
      <div class="notice-date">${n.date}</div>
    </div>
  `).join('');
}

// ===== UPLOAD PANEL =====
function toggleUploadPanel() {
  document.getElementById('uploadPanel').classList.toggle('open');
}
function selectType(btn, type) {
  selectedUploadType = type;
  document.querySelectorAll('.type-select-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}
function postAnnouncement() {
  const title = document.getElementById('uploadTitle').value.trim();
  const desc = document.getElementById('uploadDesc').value.trim();
  const date = document.getElementById('uploadDate').value;
  const loc = document.getElementById('uploadLoc').value.trim();
  if (!title || !desc) { showToast(currentLang === 'mr' ? '❌ शीर्षक व वर्णन भरा' : '❌ Please fill title and description'); return; }
  const fmtDate = date ? new Date(date).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}) : new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});
  const descFull = loc ? `${desc} (📍 ${loc})` : desc;
  allNotices.unshift({type:selectedUploadType, title_en:title, title_mr:title, desc_en:descFull, desc_mr:descFull, date:fmtDate});
  renderNotices();
  document.getElementById('uploadTitle').value = '';
  document.getElementById('uploadDesc').value = '';
  document.getElementById('uploadDate').value = '';
  document.getElementById('uploadLoc').value = '';
  document.getElementById('uploadPanel').classList.remove('open');
  showToast(currentLang === 'mr' ? '✅ घोषणा प्रकाशित झाली!' : '✅ Announcement posted successfully!');
}

// ===== VOTING =====
function selectOpt(pollId, optIdx) {
  document.querySelectorAll(`#${pollId}-opts .poll-option`).forEach((o,i) => {
    o.style.borderColor = i === optIdx ? 'var(--saffron)' : '';
    o.style.background = i === optIdx ? 'rgba(255,107,0,0.07)' : '';
  });
  const radios = document.querySelectorAll(`input[name="${pollId}"]`);
  if (radios[optIdx]) radios[optIdx].checked = true;
}
function submitVote(pollId) {
  const selected = document.querySelector(`input[name="${pollId}"]:checked`);
  if (!selected) { showToast(currentLang === 'mr' ? '❌ एक पर्याय निवडा' : '❌ Please select an option'); return; }
  const btn = document.getElementById(pollId + '-btn');
  btn.textContent = currentLang === 'mr' ? '✅ मत नोंदवले' : '✅ Vote Recorded';
  btn.disabled = true;
  btn.style.background = 'linear-gradient(135deg,#1B4332,#40916C)';
  showSuccess('🗳️', T[currentLang].voteSuccessTitle, T[currentLang].voteSuccessMsg);
}

// ===== JOIN =====
function submitJoin() {
  const fname = document.getElementById('j_fname').value.trim();
  const phone = document.getElementById('j_phone').value.trim();
  const district = document.getElementById('j_district').value;
  if (!fname || !phone || !district) {
    showToast(currentLang === 'mr' ? '❌ नाव, मोबाईल आणि जिल्हा भरा' : '❌ Please fill Name, Mobile and District');
    return;
  }
  showSuccess('🦅', T[currentLang].joinSuccessTitle, T[currentLang].joinSuccessMsg);
  ['j_fname','j_lname','j_phone','j_village','j_age','j_cert','j_notes'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

// ===== WHATSAPP =====
function openWhatsApp() {
  const msg = currentLang === 'mr'
    ? 'नमस्कार! मला पारधी समाज व्हाट्सअॅप ग्रुपमध्ये सामील व्हायचे आहे.'
    : 'Hello! I want to join the Pardhi Samaj Chandrapur WhatsApp group.';
  window.open('https://wa.me/919876543210?text=' + encodeURIComponent(msg), '_blank');
}

// ===== HELPLINE =====
function callHelpline() {
  showToast('📞 Legal Helpline: +91 98765 43210 (24/7)');
}

// ===== TOAST =====
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3500);
}

// ===== SUCCESS MODAL =====
function showSuccess(icon, title, msg) {
  document.getElementById('successIcon').textContent = icon;
  document.getElementById('successTitle').textContent = title;
  document.getElementById('successMsg').textContent = msg;
  openModal('successOverlay');
}

// ===== MOBILE DRAWER =====
function openDrawer() { document.getElementById('mobileDrawer').classList.add('open'); }
function closeDrawer() { document.getElementById('mobileDrawer').classList.remove('open'); }

// Close modals on backdrop click
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.modal-overlay').forEach(o => {
    o.addEventListener('click', e => { if (e.target === o) o.classList.remove('open'); });
  });
});

// ===== KEYBOARD ESC TO CLOSE =====
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(o => o.classList.remove('open'));
    closeDrawer();
  }
});
