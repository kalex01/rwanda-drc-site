// Shared by Context, the appendix timeline and its source register.
// Dates order selected milestones; year-only dates are sorting keys, not exact event dates.
export const chronologyReviewedThrough = "31 October 2026"
export const chronologyScope = "Selected milestones reviewed through 31 October 2026. This is not an exhaustive event log."
export const chronologyEditorialNote = "Official announcements establish that a decision or commitment was made. Stated grounds, government responses and claims of implementation are attributed separately. Sanctions are not criminal convictions; announced peace measures are not proof of a lasting ceasefire."

export type ChronologySource = { label: string; href: string }
export type ChronologyEvent = {
  id: string
  date: string
  year: string
  title: string
  summary: string
  significance: string
  sources: ChronologySourceId[]
  image?: string
  alt?: string
}

export const chronologySources = {
  "monuc": {
    "label": "UN · MONUC historical background",
    "href": "https://peacekeeping.un.org/sites/default/files/past/monuc/background.shtml"
  },
  "wars": {
    "label": "UN · First and Second Congo wars",
    "href": "https://peacekeeping.un.org/en/news/why-have-un-peacekeepers-been-in-dr-congo-for-65-years"
  },
  "m23history": {
    "label": "UN · Pathways Home retrospective",
    "href": "https://peacekeeping.un.org/sites/default/files/ddrrr_retrospective_study_final_0.pdf"
  },
  "un2025": {
    "label": "UN · Goma, Bukavu and the 2025 peace process",
    "href": "https://peacekeeping.un.org/en/news/dr-congo-un-envoy-urges-people-eager-for-peace-in-the-east-not-to-lose-hope"
  },
  "feb2025": {
    "label": "U.S. Treasury · 20 February 2025 sanctions",
    "href": "https://home.treasury.gov/news/press-releases/sb0022"
  },
  "res2773": {
    "label": "UN Security Council · Resolution 2773 (2025)",
    "href": "https://mandates.un.org/mandate/S/RES/2773%282025%29"
  },
  "june2025": {
    "label": "State Department · Peace agreement via Refworld",
    "href": "https://www.refworld.org/legal/agreements/usdos/2025/en/150300"
  },
  "july2025": {
    "label": "Qatar · 19 July 2025 declaration",
    "href": "https://mofa.gov.qa/en/qatar/latest-articles/latest-news/details/2025/07/19/qatar-hosts-signing-of-declaration-of-principles-between-drc--march-23-movement"
  },
  "nov2025": {
    "label": "Qatar · 15 November 2025 Doha framework",
    "href": "https://mofa.gov.qa/en/latest-articles/statements/signing-of-the-doha-framework-for-peace-between-the-government-of-the-democratic-republic-of-the-congo-and-the-congo-river-alliance-(m23-movement)"
  },
  "dec2025": {
    "label": "UN · Washington Accords and continuing hostilities",
    "href": "https://peacekeeping.un.org/en/news/un-hails-dr-congo-rwanda-peace-deal-amid-ongoing-hostilities-in-the-east"
  },
  "march2026": {
    "label": "OFAC · 2 March 2026 designation record",
    "href": "https://ofac.treasury.gov/recent-actions/20260302"
  },
  "treasuryMarch": {
    "label": "U.S. Treasury · Grounds for the March designations",
    "href": "https://home.treasury.gov/news/press-releases/sb0411"
  },
  "rwandaMarch": {
    "label": "Rwanda · Government response, 2 March 2026",
    "href": "https://www.gov.rw/fileadmin/user_upload/gov_user_upload/Gov_News_images/Statement-Eng.pdf"
  },
  "marchTalks": {
    "label": "Joint statement · 18 March 2026, reproduced by Mirage News",
    "href": "https://www.miragenews.com/us-congo-rwanda-push-forward-washington-accords-1639861/"
  },
  "april2026": {
    "label": "Joint statement · Montreux talks, 18 April 2026",
    "href": "https://mofa.gov.qa/en/latest-articles/statements/joint-statement-on-progress-between-the-representatives-of-government-of-the-democratic-republic-of-congo-and-of-the-alliance-fleuve-congo-march-23-movement-(afc-m23)"
  },
  "kabila": {
    "label": "U.S. Treasury · 30 April 2026 sanctions",
    "href": "https://home.treasury.gov/news/press-releases/sb0480"
  },
  "june2026": {
    "label": "U.S. Treasury · M23 and FDLR commanders, 2 June 2026",
    "href": "https://home.treasury.gov/news/press-releases/sb0518"
  },
  "juneTalks": {
    "label": "Joint statement · London oversight meeting, 24 June 2026",
    "href": "https://ebs.publicnow.com/view/0D3EB45031D2469C88718FE8C08EEE50A7991787"
  },
  "minerals": {
    "label": "U.S. Treasury · Minerals network, 25 June 2026",
    "href": "https://home.treasury.gov/news/press-releases/sb0543"
  },
  "aug2026": {
    "label": "Qatar · Minembwe verification mission, 27 August 2026",
    "href": "https://mofa.gov.qa/en/latest-articles/statements/state-of-qatar-welcomes-first-field-verification-mission-of-the-expanded-joint-verification-mechanism-plus-(-ejvm)-in-minembwe--eastern-democratic-republic-of-the-congo"
  },
  "oct2026": {
    "label": "U.S. Treasury · 28 October 2026 designations",
    "href": "https://home.treasury.gov/news/press-releases/sb0668/"
  },
  "octReporting": {
    "label": "Reuters · Sanctions and government responses, 28 October 2026",
    "href": "https://www.reuters.com/world/africa/us-imposes-sanctions-rwandas-ministry-defense-2026-10-28/"
  },
  "auOctober": {
    "label": "African Union · Kigali consultations, statement of 9 October 2026",
    "href": "https://www.au.int/en/pressreleases/20261009/statement-panel-facilitators-au-led-mediation-architecture"
  }
} satisfies Record<string, ChronologySource>

export type ChronologySourceId = keyof typeof chronologySources

export const chronologyEvents: ChronologyEvent[] = [
  {
    "id": "genocide",
    "date": "1994-01-01",
    "year": "1994",
    "title": "Genocide against the Tutsi in Rwanda",
    "summary": "The genocide and its aftermath transformed regional security. Refugees fled into eastern Zaire, including armed elements implicated in the genocide.",
    "significance": "Civilian displacement and the presence of armed networks across the border shaped subsequent regional insecurity.",
    "sources": [
      "monuc"
    ],
    "image": "/images/timeline-1994.jpg",
    "alt": "Memorial-related image representing the 1994 genocide against the Tutsi in Rwanda"
  },
  {
    "id": "first-congo-war",
    "date": "1996-01-01",
    "year": "1996–1997",
    "title": "First Congo War",
    "summary": "Rwanda and Uganda backed Laurent-Désiré Kabila’s rebellion. Mobutu was overthrown in 1997, and Zaire was renamed the Democratic Republic of the Congo.",
    "significance": "This war changed the government in Kinshasa and deepened regional military involvement. It is distinct from the war that began in 1998.",
    "sources": [
      "monuc",
      "wars"
    ]
  },
  {
    "id": "second-congo-war",
    "date": "1998-01-01",
    "year": "1998–2003",
    "title": "Second Congo War",
    "summary": "Kabila’s break with his former allies was followed by a new rebellion and a wider regional war. Rwanda and Uganda supported rebels; other states intervened for the Congolese government.",
    "significance": "The 1999 Lusaka ceasefire led to MONUC. The formal war period ended in 2003, but violence in the east continued.",
    "sources": [
      "monuc",
      "wars"
    ]
  },
  {
    "id": "postwar",
    "date": "2003-01-01",
    "year": "After 2003",
    "title": "Armed insecurity persists after the formal wars",
    "summary": "The end of the formal war did not bring uniform security to eastern DRC. Armed groups, displacement and incomplete disarmament remained central challenges.",
    "significance": "A political transition and the end of a formal war should not be confused with an end to local or regional violence.",
    "sources": [
      "wars",
      "m23history"
    ]
  },
  {
    "id": "m23-first",
    "date": "2012-01-01",
    "year": "2012–2013",
    "title": "M23 emerges and suffers a military defeat",
    "summary": "M23 captured Goma in November 2012. Congolese forces and the UN Force Intervention Brigade defeated the rebellion militarily in November 2013.",
    "significance": "The defeat did not permanently resolve the armed-group and regional-security problems that later resurfaced.",
    "sources": [
      "m23history"
    ]
  },
  {
    "id": "m23-renewed",
    "date": "2021-01-01",
    "year": "2021–2024",
    "title": "M23 insurgency resumes",
    "summary": "M23 resumed its rebellion in 2021 and expanded its operations in eastern DRC. Displacement and regional tensions intensified as diplomacy struggled to contain the fighting.",
    "significance": "Dating the renewed rebellion from 2021 distinguishes its resumption from its subsequent escalation.",
    "sources": [
      "treasuryMarch"
    ],
    "image": "/images/timeline-m23-goma.jpg",
    "alt": "Conflict-related image associated with the M23 crisis near Goma"
  },
  {
    "id": "goma-bukavu",
    "date": "2025-01-01",
    "year": "January–February 2025",
    "title": "M23 takes Goma and Bukavu",
    "summary": "M23 captured Goma in late January and Bukavu in February. UN reporting described the loss of the provincial capitals and worsening civilian insecurity.",
    "significance": "These advances greatly raised the stakes of the conflict and intensified international pressure.",
    "sources": [
      "un2025",
      "res2773"
    ]
  },
  {
    "id": "feb-pressure",
    "date": "2025-02-20",
    "year": "20–21 February 2025",
    "title": "U.S. sanctions and UN Security Council demands",
    "summary": "The United States sanctioned James Kabarebe and Lawrence Kanyuka on 20 February. Resolution 2773, adopted the next day, condemned M23’s offensive with RDF support and called for RDF withdrawal. It also condemned Congolese military support for the FDLR.",
    "significance": "The Council addressed both RDF intervention and Congolese support for armed groups. Its resolution is not a criminal judgment.",
    "sources": [
      "feb2025",
      "res2773"
    ]
  },
  {
    "id": "washington-agreement",
    "date": "2025-06-27",
    "year": "27 June 2025",
    "title": "Rwanda and the DRC sign a Washington peace agreement",
    "summary": "The two governments signed a U.S.-brokered agreement addressing territorial integrity, security and humanitarian issues. Its framework linked action against the FDLR with force disengagement and the lifting of Rwanda’s defensive measures.",
    "significance": "This interstate agreement created commitments and implementation mechanisms; signing alone did not establish peace on the ground.",
    "sources": [
      "june2025"
    ],
    "image": "/images/timeline-washington-2025.jpg",
    "alt": "Diplomatic meeting image associated with the 2025 Washington process"
  },
  {
    "id": "doha-principles",
    "date": "2025-07-19",
    "year": "19 July 2025",
    "title": "The DRC and AFC/M23 sign Doha principles",
    "summary": "Qatar hosted a Declaration of Principles between the Congolese government and AFC/M23, setting a basis for further peace negotiations.",
    "significance": "The Doha track involves the DRC and AFC/M23. It complements, but is distinct from, interstate negotiations between the DRC and Rwanda.",
    "sources": [
      "july2025"
    ]
  },
  {
    "id": "doha-framework",
    "date": "2025-11-15",
    "year": "15 November 2025",
    "title": "A Doha framework sets out further negotiations",
    "summary": "The DRC and AFC/M23 signed a framework for the peace process. Qatar said further protocols and technical arrangements would address ceasefire verification, humanitarian access and other implementation questions.",
    "significance": "A framework for negotiation is not evidence that every protocol was completed or that a durable ceasefire followed.",
    "sources": [
      "nov2025"
    ]
  },
  {
    "id": "washington-accords",
    "date": "2025-12-04",
    "year": "4 December 2025",
    "title": "Presidents endorse the Washington Accords",
    "summary": "The presidents of Rwanda and the DRC endorsed the Washington peace framework and regional economic integration arrangements. The UN welcomed the milestone while warning that hostilities continued.",
    "significance": "The presidential endorsement was a further milestone, distinct from the June agreement. Implementation remained a separate question.",
    "sources": [
      "dec2025"
    ]
  },
  {
    "id": "uvira-escalation",
    "date": "2025-12-10",
    "year": "December 2025–early 2026",
    "title": "Uvira offensive tests the peace commitments",
    "summary": "M23 took Uvira shortly after the December Washington ceremony. Treasury’s March 2026 account described its subsequent exit from the city but warned that its continued presence near Burundi’s border risked wider regional escalation.",
    "significance": "The offensive and reported withdrawal show why diplomatic commitments must be distinguished from security conditions on the ground.",
    "sources": [
      "treasuryMarch"
    ]
  },
  {
    "id": "rdf-sanctions",
    "date": "2026-03-02",
    "year": "2 March 2026",
    "title": "The United States sanctions the RDF and four officers",
    "summary": "OFAC designated the Rwanda Defence Force and Vincent Nyakarundi, Ruki Karusisi, Mubarakh Muganga and Stanislas Gashugi. Treasury cited support for M23. Rwanda rejected the sanctions as one-sided and disputed the U.S. account.",
    "significance": "The sanctions are an established government action. Their stated grounds and Rwanda’s response remain attributed positions; sanctions are not criminal convictions.",
    "sources": [
      "march2026",
      "treasuryMarch",
      "rwandaMarch"
    ]
  },
  {
    "id": "washington-march",
    "date": "2026-03-17",
    "year": "17–18 March 2026",
    "title": "Washington talks announce de-escalation measures",
    "summary": "A joint statement following Washington talks announced coordinated measures: Rwandan force disengagement in defined areas, intensified DRC efforts against the FDLR, and civilian protection.",
    "significance": "These were announced commitments. Whether they were implemented, and with what effect, requires separate evidence.",
    "sources": [
      "marchTalks"
    ]
  },
  {
    "id": "montreux",
    "date": "2026-04-13",
    "year": "13–17 April 2026",
    "title": "Doha-process talks advance verification arrangements",
    "summary": "In Montreux, the DRC and AFC/M23 discussed humanitarian protection and signed arrangements with the ICGLR to operationalize the Expanded Joint Verification Mechanism Plus (EJVM+), according to their joint statement.",
    "significance": "An operational arrangement enables verification work; it does not by itself demonstrate compliance across the conflict area.",
    "sources": [
      "april2026"
    ]
  },
  {
    "id": "kabila-sanctions",
    "date": "2026-04-30",
    "year": "30 April 2026",
    "title": "The United States sanctions Joseph Kabila",
    "summary": "Treasury designated former DRC president Joseph Kabila, citing support for M23 and AFC and activities it said destabilized the Congolese government.",
    "significance": "The designation is established. The underlying allegations are Treasury’s stated grounds, not findings of a criminal trial.",
    "sources": [
      "kabila"
    ]
  },
  {
    "id": "commanders-sanctions",
    "date": "2026-06-02",
    "year": "2 June 2026",
    "title": "U.S. sanctions target M23 and FDLR commanders",
    "summary": "Treasury sanctioned M23 commander John Imani Nzenze and FDLR commander Gustave Kubwayo, citing their roles in armed groups driving the conflict.",
    "significance": "Pressure targeted commanders on opposing sides. Each designation’s grounds should be assessed on its own evidence.",
    "sources": [
      "june2026"
    ]
  },
  {
    "id": "june-diplomacy-sanctions",
    "date": "2026-06-24",
    "year": "24–25 June 2026",
    "title": "Oversight talks continue alongside minerals sanctions",
    "summary": "A London oversight meeting on 24 June called for action to make the ceasefire effective. On 25 June, Treasury sanctioned Gasabo Gold Refinery and associated actors, citing an M23-linked minerals network.",
    "significance": "Diplomatic engagement and sanctions continued in parallel. Neither the meeting nor the sanctions establish that the conflict had ended.",
    "sources": [
      "juneTalks",
      "minerals"
    ]
  },
  {
    "id": "minembwe-verification",
    "date": "2026-08-24",
    "year": "24 August 2026",
    "title": "A first EJVM+ field mission takes place in Minembwe",
    "summary": "Qatar reported that EJVM+ carried out its first field verification mission in Minembwe on 24 August, with MONUSCO logistical support, under the Doha process.",
    "significance": "A field mission is a concrete verification step. Its occurrence is not proof of a lasting ceasefire throughout eastern DRC.",
    "sources": [
      "aug2026"
    ]
  },
  {
    "id": "au-october-consultations",
    "date": "2026-10-06",
    "year": "6 October 2026",
    "title": "AU facilitators hold consultations in Kigali",
    "summary": "An African Union panel delegation met Rwandan officials after engagements in Goma. The AU’s 9 October statement described discussions on security commitments, humanitarian protection and regional economic cooperation.",
    "significance": "African-led mediation remained active alongside Washington and Doha. Consultations are evidence of engagement, not proof that outstanding commitments were met.",
    "sources": [
      "auOctober"
    ]
  },
  {
    "id": "october-sanctions",
    "date": "2026-10-28",
    "year": "28 October 2026",
    "title": "U.S. sanctions extend to Rwanda’s defence ministry and Zigama",
    "summary": "Treasury designated Rwanda’s Ministry of Defence and Zigama Credit and Savings Society, citing support for M23. Reuters reported that Rwanda maintained its readiness to implement the accords while alleging unmet DRC commitments; the DRC welcomed the sanctions.",
    "significance": "The designations and reported responses are distinct from independently verified compliance. Continued pressure should not be presented as a completed peace settlement.",
    "sources": [
      "oct2026",
      "octReporting"
    ]
  }
]
