export type Actor = {
  slug: string
  name: string
  summary: string
  overview: string
  goals: string[]
  methods: string[]
  timeline: { year: string; event: string }[]
  sources: { title: string; url: string }[]
}

export const actors: Record<string, Actor> = {
  rwanda: {
    slug: "rwanda",
    name: "Rwanda",
    summary:
      "Rwanda is a central actor in the eastern DRC conflict and in the wider politics of the Great Lakes region. Its role is frequently discussed in relation to border security, regional influence, armed group dynamics, and repeated diplomatic tensions with the government in Kinshasa.",
    overview:
      "Rwanda’s role in the conflict cannot be understood only through current events. It is shaped by the legacy of the 1994 genocide against the Tutsi, cross-border armed group activity, regional wars in Congo, and long-standing security concerns along its frontier. Rwanda presents its position primarily through the language of national security and the threat posed by hostile militias operating in or near eastern DRC. At the same time, it has faced sustained criticism and allegations from the DRC, international observers, and foreign governments regarding its influence in the conflict. This page examines Rwanda as a state actor, its strategic goals, its methods, and the controversies associated with its regional role.",
    goals: [
      "Protect its border and national security interests",
      "Contain or deter hostile armed groups operating near eastern DRC",
      "Maintain regional influence in Great Lakes diplomacy and security affairs",
      "Shape international understanding of its role and security concerns"
    ],
    methods: [
      "Diplomatic engagement with regional and international actors",
      "Security-focused public messaging and official state communication",
      "Participation in regional peace and mediation processes",
      "Cross-border policies influenced by military, political, and strategic calculations"
    ],
    timeline: [
      {
        year: "1994",
        event:
          "The genocide against the Tutsi fundamentally reshaped Rwanda’s security doctrine and regional outlook."
      },
      {
        year: "1996–1997",
        event:
          "The First Congo War drew Rwanda directly into the conflict dynamics of then-Zaire."
      },
      {
        year: "1998–2003",
        event:
          "The Second Congo War deepened Rwanda’s role in regional military and political struggles."
      },
      {
        year: "2022",
        event:
          "The resurgence of M23 returned Rwanda to the center of diplomatic dispute and international scrutiny."
      },
      {
        year: "2023–2024",
        event:
          "Regional mediation efforts, foreign pressure, and competing narratives continued to define debate over Rwanda’s role."
      }
    ],
    sources: [
      {
        title: "International Crisis Group — Rwanda",
        url: "https://www.crisisgroup.org/africa/great-lakes/rwanda"
      },
      {
        title: "Reuters — Why fighting is flaring in eastern Congo",
        url: "https://www.reuters.com/world/africa/why-fighting-is-flaring-eastern-congo-threatening-regional-stability-2024-02-19/"
      }
    ]
  },

  drc: {
    slug: "drc",
    name: "Democratic Republic of the Congo",
    summary:
      "The Democratic Republic of the Congo is the state at the center of the conflict in eastern Congo. Its role is shaped by security failures, political fragmentation, regional diplomacy, and the challenge of asserting effective control over contested territory.",
    overview:
      "The DRC is not only the location of the conflict but also one of its principal actors. The Congolese state faces the difficult task of defending territorial integrity, protecting civilians, managing relations with neighboring countries, and responding to multiple armed groups operating in the east. Its position is complicated by weaknesses in state capacity, long-standing governance problems, military limitations, and competing domestic political pressures. This page examines the DRC as a state actor, its objectives, its methods, and the structural challenges that shape its conduct in the conflict.",
    goals: [
      "Defend national sovereignty and territorial integrity",
      "Reduce the influence and territorial control of armed groups in eastern Congo",
      "Strengthen international support for its diplomatic and security position",
      "Reassert state authority over contested provinces and border regions"
    ],
    methods: [
      "Military operations through state security forces",
      "Diplomatic engagement with regional and international partners",
      "Public appeals for international pressure and mediation",
      "Security cooperation with external actors and regional mechanisms"
    ],
    timeline: [
      {
        year: "1960",
        event:
          "The DRC gained independence, beginning a long period of political instability and contested state authority."
      },
      {
        year: "1996–1997",
        event:
          "The First Congo War reshaped the country’s political order and intensified regional military involvement."
      },
      {
        year: "1998–2003",
        event:
          "The Second Congo War entrenched armed fragmentation and deepened the regional dimensions of conflict."
      },
      {
        year: "2022",
        event:
          "Renewed M23 offensives intensified insecurity in eastern Congo and raised pressure on the state."
      },
      {
        year: "2023–2024",
        event:
          "The DRC continued military, diplomatic, and regional efforts to respond to rebel advances and external pressure."
      }
    ],
    sources: [
      {
        title: "International Crisis Group — Democratic Republic of Congo",
        url: "https://www.crisisgroup.org/africa/great-lakes/democratic-republic-congo"
      },
      {
        title: "UN Security Council Resolution 2746 (2024)",
        url: "https://docs.un.org/en/s/res/2746%282024%29"
      }
    ]
  },

  m23: {
    slug: "m23",
    name: "M23",
    summary:
      "M23 is an armed movement that has played a major role in the recent escalation of conflict in eastern DRC. It is associated with territorial offensives, regional diplomatic crises, and renewed international focus on armed group activity in North Kivu.",
    overview:
      "M23, or the March 23 Movement, emerged from earlier rebel dynamics in eastern Congo and became one of the most prominent non-state armed actors in the region. The group has been tied to military operations, territorial seizures, and repeated clashes with Congolese forces. Its resurgence has had major humanitarian, political, and diplomatic consequences. M23 is also central to competing claims about outside backing, regional insecurity, and the limits of peace processes. This page examines M23 as a non-state armed actor, its objectives, its methods, and the controversies surrounding its operations.",
    goals: [
      "Expand or maintain control over strategic territory in eastern DRC",
      "Strengthen its military and political leverage in negotiations",
      "Challenge the authority of the Congolese state in contested areas",
      "Influence the regional balance of power through armed pressure"
    ],
    methods: [
      "Armed offensives and territorial seizure",
      "Strategic positioning around key roads, towns, and supply routes",
      "Use of military pressure to shape negotiations and public attention",
      "Operations that affect civilian movement, security, and humanitarian access"
    ],
    timeline: [
      {
        year: "2012",
        event:
          "M23 emerged as a major rebel movement in eastern DRC and rapidly gained international attention."
      },
      {
        year: "2013",
        event:
          "Military pressure from Congolese and regional forces contributed to M23’s defeat and decline."
      },
      {
        year: "2021–2022",
        event:
          "M23 re-emerged and launched renewed operations in eastern Congo."
      },
      {
        year: "2022",
        event:
          "The group captured territory and became central to rising regional tensions and humanitarian concern."
      },
      {
        year: "2023–2024",
        event:
          "M23 remained a major factor in conflict escalation, ceasefire debates, and regional diplomatic efforts."
      }
    ],
    sources: [
      {
        title: "UN Group of Experts report on the DRC (2024)",
        url: "https://documents.un.org/doc/undoc/gen/n24/373/37/pdf/n2437337.pdf"
      },
      {
        title: "Reuters — Why fighting is flaring in eastern Congo",
        url: "https://www.reuters.com/world/africa/why-fighting-is-flaring-eastern-congo-threatening-regional-stability-2024-02-19/"
      }
    ]
  }
}