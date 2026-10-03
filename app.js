
(() => {
  const d = window.SITE_DATA;
  let lang = "vi";
  let activeProjectTab = "led";

  const dict = {
    vi:{
      navAbout:"Giới thiệu",navEducation:"Đào tạo",navResearch:"NCKH",navPubs:"Công bố",navProjects:"Đề tài",navAwards:"Giải thưởng",navContact:"Liên hệ",
      viewPublications:"Xem công bố",portraitCaption:"Hồ sơ học thuật cá nhân",
      aboutTitle:"Thông tin & học thuật",aboutLead:"Thông tin cá nhân, học vị, học hàm và đơn vị công tác theo CV.",academicProfile:"Hồ sơ học thuật",publicDetails:"Thông tin công tác",languageTitle:"Ngoại ngữ",
      educationTitle:"Đào tạo & bồi dưỡng",educationLead:"Quá trình đào tạo chính quy và các chứng chỉ chuyên môn.",degreePath:"Quá trình đào tạo",trainingTitle:"Đào tạo khác",
      
      researchTitle:"Chuyên môn & phục vụ học thuật",researchLead:"Hướng nghiên cứu, lĩnh vực giảng dạy, phản biện và giáo trình.",reviewingTitle:"Tạp chí & hội nghị tham gia phản biện",textbookTitle:"Giáo trình",ipTitle:"Sở hữu trí tuệ & sản phẩm KHCN",
      publicationsTitle:"41 công bố khoa học",publicationsLead:"Danh mục đầy đủ trong CV, có thể tìm kiếm và lọc theo năm, loại công bố.",noResults:"Không có công bố phù hợp.",
      projectsTitle:"Đề tài, dự án & nhiệm vụ KHCN",projectsLead:"10 nhiệm vụ chủ trì và 4 nhiệm vụ tham gia với tư cách thành viên.",ledProjects:"Chủ trì (10)",memberProjects:"Thành viên (4)",
      awardsTitle:"Giải thưởng & đào tạo sau đại học",awardsLead:"Các giải thưởng, học bổng và số liệu hướng dẫn sau đại học trong CV.",awardListTitle:"Học bổng & giải thưởng KHCN",supervisionTitle:"Đào tạo sau đại học",
      contactTitle:"Liên hệ",contactLead:"Thông tin liên hệ công việc phù hợp để công khai.",
      totalPubs:"Công bố",intlJournals:"Tạp chí quốc tế",intlConfs:"Hội nghị quốc tế",projectsLed:"Đề tài chủ trì",masters:"Thạc sĩ đã đào tạo",
      degree:"Học vị",field:"Ngành",thesis:"Luận án",defense:"Bảo vệ",assocProf:"Học hàm",assocProfField:"Ngành học hàm",professionalTitle:"Chức danh nghề nghiệp",position:"Chức vụ",
      institution:"Cơ quan",academicEmail:"Email cơ quan",
      yearAll:"Tất cả năm",categoryAll:"Tất cả loại công bố",authors:"Số tác giả",pages:"Trang / số bài",
      category:"Loại",no:"TT",project:"Tên đề tài",level:"Cấp/Mã đề tài",period:"Thời gian",result:"Kết quả",
      phdOngoing:"NCS đang hướng dẫn",mastersGraduated:"Thạc sĩ đã đào tạo",mastersOngoing:"Thạc sĩ đang hướng dẫn",phdGraduated:"Tiến sĩ đã đào tạo",
      email:"Email cơ quan",workPhone:"Điện thoại cơ quan",workAddress:"Địa chỉ cơ quan",
      researchAreas:"Hướng nghiên cứu",teachingAreas:"Chuyên ngành giảng dạy",author:"Tác giả",publisher:"Nơi xuất bản",year:"Năm",
      unknown:"Không ghi trong CV"
    },
    en:{
      navAbout:"About",navEducation:"Education",navResearch:"Research",navPubs:"Publications",navProjects:"Projects",navAwards:"Awards",navContact:"Contact",
      viewPublications:"View publications",portraitCaption:"Personal academic profile",
      aboutTitle:"Academic & personal profile",aboutLead:"Personal information, degrees, academic rank, and affiliation as stated in the CV.",academicProfile:"Academic profile",publicDetails:"Professional information",languageTitle:"Language",
      educationTitle:"Education & training",educationLead:"Formal education and professional certificates.",degreePath:"Academic education",trainingTitle:"Additional training",
      
      researchTitle:"Expertise & academic service",researchLead:"Research interests, teaching areas, peer-review service, and textbook.",reviewingTitle:"Peer-review journals & conferences",textbookTitle:"Textbook",ipTitle:"Intellectual property & S&T products",
      publicationsTitle:"41 scientific publications",publicationsLead:"Complete list from the CV, searchable and filterable by year and publication type.",noResults:"No matching publications.",
      projectsTitle:"Research projects & S&T tasks",projectsLead:"10 projects/tasks led and 4 joined as a member.",ledProjects:"Principal investigator (10)",memberProjects:"Member (4)",
      awardsTitle:"Awards & postgraduate supervision",awardsLead:"Awards, scholarships, and postgraduate supervision counts in the CV.",awardListTitle:"Awards & scholarships",supervisionTitle:"Postgraduate supervision",
      contactTitle:"Contact",contactLead:"Public professional contact information.",
      totalPubs:"Publications",intlJournals:"International journals",intlConfs:"International conferences",projectsLed:"Projects led",masters:"Master's graduates",
      degree:"Degree",field:"Field",thesis:"Dissertation",defense:"Defense",assocProf:"Academic rank",assocProfField:"Rank field",professionalTitle:"Professional title",position:"Position",
      institution:"Institution",academicEmail:"Institutional email",
      yearAll:"All years",categoryAll:"All publication types",authors:"Authors",pages:"Pages / article no.",
      category:"Type",no:"No.",project:"Project title",level:"Level/Code",period:"Period",result:"Result",
      phdOngoing:"Ongoing PhD candidates",mastersGraduated:"Master's graduates",mastersOngoing:"Ongoing master's theses",phdGraduated:"PhD graduates",
      email:"Institutional email",workPhone:"Office phone",workAddress:"Work address",
      researchAreas:"Research interests",teachingAreas:"Teaching areas",author:"Author",publisher:"Publisher",year:"Year",
      unknown:"Not stated in CV"
    }
  };

  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const t = k => dict[lang][k] || k;
  const txt = (obj, viKey, enKey) => lang === "vi" ? obj[viKey] : obj[enKey];

  function renderHero(){
    $("#heroTitle").textContent = lang==="vi" ? d.profile.academicTitleVi : d.profile.academicTitleEn;
    $("#heroName").textContent = d.profile.name;
    $("#heroPosition").textContent = `${txt(d.profile,"professionalTitleVi","professionalTitleEn")} · ${txt(d.profile,"positionVi","positionEn")}`;
    $("#heroInstitution").textContent = txt(d.profile,"institutionVi","institutionEn");
    const interests = d.researchInterests.map(x => lang==="vi" ? x.vi : x.en).join(" · ");
    $("#heroResearch").textContent = interests;
    $("#portrait").src = d.profile.photo;
    $("#sourceNote").textContent = (lang==="vi" ? d.meta.vi : d.meta.en) + " " + (lang==="vi" ? d.meta.privacyVi : d.meta.privacyEn);
  }

  function renderMetrics(){
    const s=d.publicationSummary;
    const items=[
      [s.total,t("totalPubs")],[s.internationalJournals,t("intlJournals")],[s.internationalConferences,t("intlConfs")],
      [d.projectsLed.length,t("projectsLed")],[d.supervision.mastersGraduated,t("masters")]
    ];
    $("#metrics").innerHTML=items.map(([v,l])=>`<div class="metric"><strong>${v}</strong><span>${l}</span></div>`).join("");
  }

  function kv(label,value){ return `<div class="kv"><div class="label">${label}</div><div class="value">${value}</div></div>`; }

  function renderAbout(){
    const p=d.profile,g=d.degree;
    $("#academicProfile").innerHTML =
      kv(t("degree"),lang==="vi"?g.degreeVi:g.degreeEn)+
      kv(t("field"),lang==="vi"?g.fieldVi:g.fieldEn)+
      kv(t("thesis"),`“${lang==="vi"?g.thesisVi:g.thesisEn}”`)+
      kv(t("defense"),`${g.defenseDate} · ${lang==="vi"?g.institutionVi:g.institutionEn}`)+
      kv(t("assocProf"),`${lang==="vi"?"Phó Giáo sư":"Associate Professor"} (${g.associateProfessorYear}) · ${lang==="vi"?g.associateProfessorInstitutionVi:g.associateProfessorInstitutionEn}`)+
      kv(t("assocProfField"),lang==="vi"?g.associateProfessorFieldVi:g.associateProfessorFieldEn)+
      kv(t("professionalTitle"),txt(p,"professionalTitleVi","professionalTitleEn"))+
      kv(t("position"),txt(p,"positionVi","positionEn"));

    $("#publicDetails").innerHTML =
      kv(t("institution"),txt(p,"institutionVi","institutionEn"))+
      kv(t("academicEmail"),p.emails[0])+
      kv(t("workPhone"),p.workPhone)+
      kv(t("workAddress"),lang==="vi"?p.workAddressVi:p.workAddressEn);

    $("#languageBlock").innerHTML = `<p><strong>${lang==="vi"?d.language.nameVi:d.language.nameEn}</strong> · ${d.language.overall}</p>`+
      d.language.skills.map(s=>`<div class="skillrow"><span>${lang==="vi"?s.vi:s.en}</span><strong>${s.score}</strong></div>`).join("");
  }

  function renderEducation(){
    $("#educationList").innerHTML=d.education.map(e=>`<div class="timeline-item"><div class="year">${e.year}</div><h4>${lang==="vi"?e.levelVi:e.levelEn}</h4><p>${lang==="vi"?e.fieldVi:e.fieldEn}</p><p>${lang==="vi"?e.institutionVi:e.institutionEn}</p></div>`).join("");
    $("#trainingList").innerHTML=d.training.map(e=>`<div class="stack-item"><strong>${e.year}</strong><div>${lang==="vi"?e.vi:e.en}</div></div>`).join("");
  }

  function renderResearch(){
    const icons=["⌘","◇","↯","AI","∞"];
    $("#researchGrid").innerHTML=d.researchInterests.map((r,i)=>`<div class="research-card"><div class="icon">${icons[i]||"•"}</div><h3>${r.title}</h3><p>${lang==="vi"?r.vi:r.en}</p></div>`).join("");
    $("#reviewingList").innerHTML=d.reviewing.map(x=>`<div class="review-item">${x}</div>`).join("");
    $("#textbookList").innerHTML=d.textbooks.map(b=>kv(t("year"),b.year)+kv(lang==="vi"?"Tên giáo trình":"Title",b.title)+kv(t("author"),lang==="vi"?b.roleVi:b.roleEn)+kv(t("publisher"),lang==="vi"?b.publisherVi:b.publisherEn)).join("");
    $("#ipProducts").textContent=lang==="vi"?d.ipProducts.vi:d.ipProducts.en;
  }

  function renderPubSummary(){
    const s=d.publicationSummary;
    const items = lang==="vi"
      ? [[s.internationalJournals,`Tạp chí nước ngoài · ${s.q1} Q1 · ${s.q2} Q2 · ${s.scopusJournals} Scopus`],[s.domesticJournals,"Tạp chí trong nước"],[s.internationalConferences,"Hội nghị quốc tế · 13 Scopus"],[s.domesticConferences,"Hội nghị trong nước"]]
      : [[s.internationalJournals,`International journals · ${s.q1} Q1 · ${s.q2} Q2 · ${s.scopusJournals} Scopus`],[s.domesticJournals,"Domestic journals"],[s.internationalConferences,"International conferences · 13 Scopus"],[s.domesticConferences,"Domestic conference"]];
    $("#pubSummary").innerHTML=items.map(([v,l])=>`<div class="summary-pill"><strong>${v}</strong><span>${l}</span></div>`).join("");
  }

  const catLabel = cat => {
    const mapVi={"International Journal":"Tạp chí quốc tế","Domestic Journal":"Tạp chí trong nước","International Conference":"Hội nghị quốc tế","Domestic Conference":"Hội nghị trong nước"};
    return lang==="vi" ? (mapVi[cat]||cat) : cat;
  };

  function setupPubFilters(){
    const years=[...new Set(d.publications.map(p=>p.year))].sort((a,b)=>b-a);
    const currentY=$("#yearFilter").value||"all";
    $("#yearFilter").innerHTML=`<option value="all">${t("yearAll")}</option>`+years.map(y=>`<option value="${y}">${y}</option>`).join("");
    if([...$("#yearFilter").options].some(o=>o.value===currentY)) $("#yearFilter").value=currentY;
    const cats=[...new Set(d.publications.map(p=>p.category))];
    const currentC=$("#categoryFilter").value||"all";
    $("#categoryFilter").innerHTML=`<option value="all">${t("categoryAll")}</option>`+cats.map(c=>`<option value="${c}">${catLabel(c)}</option>`).join("");
    if([...$("#categoryFilter").options].some(o=>o.value===currentC)) $("#categoryFilter").value=currentC;
    $("#pubSearch").placeholder=lang==="vi"?"Tìm theo tiêu đề, tạp chí...":"Search by title or venue...";
  }

  function renderPublications(){
    renderPubSummary(); setupPubFilters();
    const q=$("#pubSearch").value.trim().toLowerCase(), y=$("#yearFilter").value, c=$("#categoryFilter").value;
    const rows=d.publications.filter(p=>(y==="all"||String(p.year)===y)&&(c==="all"||p.category===c)&&(!q||`${p.title} ${p.venue}`.toLowerCase().includes(q))).sort((a,b)=>b.year-a.year||b.no-a.no);
    $("#publicationList").innerHTML=rows.map(p=>`<article class="pub-item"><div class="pub-year">${p.year}</div><div><div class="pub-title">${p.title}</div><div class="pub-meta">${p.venue}${p.pages?` · ${t("pages")}: ${p.pages}`:""} · ${t("authors")}: ${p.authors}</div><div class="tagrow"><span class="tag">${catLabel(p.category)}</span>${p.tags.map(x=>`<span class="tag">${x}</span>`).join("")}</div></div><div class="pub-no">#${p.no}</div></article>`).join("");
    $("#pubEmpty").classList.toggle("hidden",rows.length>0);
  }

  function renderProjects(){
    const rows=activeProjectTab==="led"?d.projectsLed:d.projectsMember;
    $("#projectTable").innerHTML=`<div class="table-wrap"><table><thead><tr><th>${t("no")}</th><th>${t("project")}</th><th>${t("level")}</th><th>${t("period")}</th><th>${t("result")}</th></tr></thead><tbody>${rows.map(p=>`<tr><td>${p.no}</td><td>${p.title}</td><td>${p.level}</td><td>${p.period}</td><td class="result">${p.result}</td></tr>`).join("")}</tbody></table></div>`;
  }

  function renderAwards(){
    $("#awardList").innerHTML=d.awards.map(a=>`<div class="award"><div class="award-year">${a.year}</div><div class="award-text">${lang==="vi"?a.vi:a.en}</div></div>`).join("");
    const s=d.supervision;
    const items=[[s.phdGraduated??t("unknown"),t("phdGraduated")],[s.phdOngoing,t("phdOngoing")],[s.mastersGraduated,t("mastersGraduated")],[s.mastersOngoing,t("mastersOngoing")]];
    $("#supervisionStats").innerHTML=items.map(([v,l])=>`<div class="supervision-stat"><strong>${v}</strong><span>${l}</span></div>`).join("");
  }

  function renderContact(){
    const p=d.profile;
    const emailLinks=p.emails.map(e=>`<a href="mailto:${e}">${e}</a>`).join("<br>");
    const items=[
      [t("email"),emailLinks],
      [t("workPhone"),p.workPhone],
      [t("workAddress"),lang==="vi"?p.workAddressVi:p.workAddressEn]
    ];
    $("#contactDetails").innerHTML=items.map(([l,v])=>`<div class="contact-item"><div class="label">${l}</div><div class="value">${v}</div></div>`).join("");
  }

  function applyI18n(){
    $$("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(dict[lang][k]) el.textContent=dict[lang][k]});
    $("#langBtn").textContent=lang==="vi"?"EN":"VI";
    document.documentElement.lang=lang;
  }

  function renderAll(){
    applyI18n();renderHero();renderMetrics();renderAbout();renderEducation();renderResearch();renderPublications();renderProjects();renderAwards();renderContact();
    $("#footerSource").textContent=lang==="vi"?d.meta.vi:d.meta.en;
  }

  $("#langBtn").addEventListener("click",()=>{lang=lang==="vi"?"en":"vi";renderAll()});
  $("#menuBtn").addEventListener("click",()=>$("#navLinks").classList.toggle("open"));
  $$("#navLinks a").forEach(a=>a.addEventListener("click",()=>$("#navLinks").classList.remove("open")));
  $("#pubSearch").addEventListener("input",renderPublications);
  $("#yearFilter").addEventListener("change",renderPublications);
  $("#categoryFilter").addEventListener("change",renderPublications);
  $$(".tab").forEach(btn=>btn.addEventListener("click",()=>{
    activeProjectTab=btn.dataset.tab;$$(".tab").forEach(b=>b.classList.toggle("active",b===btn));renderProjects()
  }));
  $("#currentYear").textContent=new Date().getFullYear();
  renderAll();
})();
