const roles = {
  client: {
    label: 'Client',
    subtitle: 'Dignified access to personal plan, progress, and communication.',
    nav: ['Home', 'My Profile', 'My Goals', 'My Appointments', 'My Documents', 'Messages', 'Help'],
    mobile: ['Home', 'Goals', 'Calendar', 'Messages', 'Me'],
    quick: ['View My Support Plan', 'Message My Worker', 'See Upcoming Appointments', 'Upload a Document'],
    dashboard: [
      ['Where I Am Today', 'Strength-based summary of progress and areas where support can help.'],
      ['My Goals & Progress', 'Track milestones and celebrate completed actions.'],
      ['Upcoming Appointments', 'See next 3 appointments with reminders.'],
      ['My Support Team', 'Assigned worker and volunteer contacts.']
    ],
    workflow: [
      'Receive login credentials and complete optional profile preferences.',
      'Review support plan, goals, and tasks in plain language.',
      'Upload documents, confirm appointments, and message the support team.',
      'Complete follow-up check-ins when prompted.'
    ]
  },
  staff: {
    label: 'Staff / Outreach Worker',
    subtitle: 'Case management command center with assessments, referrals, and alerts.',
    nav: ['Dashboard', 'My Clients', 'Intake & Assessment', 'Referrals', 'Calendar', 'Messages', 'Resources'],
    mobile: ['Dashboard', 'Clients', 'Calendar', 'Messages', 'More'],
    quick: ['+ New Client Intake', '+ Log Case Note', '+ Create Referral', '! Risk Flags'],
    dashboard: [
      ["Today's Schedule", 'Appointments, tasks due, and follow-up prompts.'],
      ['My Active Caseload', 'Fast access to open and high-priority cases.'],
      ['Assessments Due', '30/60/90 day reassessments and score trends.'],
      ['Pending Referrals', 'Status board and partner response updates.']
    ],
    workflow: [
      'Create client record and complete pre-intake consent with digital signature.',
      'Run intake and dynamic needs assessment with save-draft support.',
      'Review score engine outputs and co-create SMART goals with the client.',
      'Assign tasks, make consent-checked referrals, and track progress.'
    ]
  },
  volunteer: {
    label: 'Volunteer',
    subtitle: 'Assignment-focused view with scoped access and hour tracking.',
    nav: ['Dashboard', 'My Assignments', 'Calendar', 'Messages', 'Log Hours', 'Resources'],
    mobile: ['Home', 'Tasks', 'Calendar', 'Messages', 'Me'],
    quick: ["View Today's Assignments", 'Log Completed Hours', 'Message a Staff Member'],
    dashboard: [
      ["Today's Assignments", 'Tasks and accompaniment opportunities.'],
      ['Hours This Month', 'Track service impact and milestone badges.'],
      ['Messages from Staff', 'Coordination updates and instructions.'],
      ['Training & Resources', 'Certifications and readiness tools.']
    ],
    workflow: [
      'Complete volunteer profile with skills and availability.',
      'Review and accept assigned supports from staff.',
      'Carry out appointments/tasks with only scoped client details.',
      'Log hours and completion notes for supervisor review.'
    ]
  },
  provider: {
    label: 'Service Provider',
    subtitle: 'Referral inbox with consent-scoped data and outcome reporting.',
    nav: ['Dashboard', 'Referral Inbox', 'Our Services', 'Messages', 'Reports'],
    mobile: ['Inbox', 'Active', 'Messages', 'Reports', 'Me'],
    quick: ['Respond to Referral', 'Update Referral Status', 'Message Referring Worker'],
    dashboard: [
      ['Referral Inbox', 'New and pending referral queue.'],
      ['Active Referrals', 'In-progress client coordination updates.'],
      ['Completed Referrals', 'Outcome notes and closure reporting.'],
      ['Service Stats', 'Monthly accepted/declined/completed trends.']
    ],
    workflow: [
      'Receive referral notification and review consent-scoped details.',
      'Accept/decline referral with reason and intake timing.',
      'Log progress updates while support is in progress.',
      'Submit outcomes to close the referral loop.'
    ]
  },
  admin: {
    label: 'Administrator',
    subtitle: 'Operations, compliance, approvals, and system-level visibility.',
    nav: ['Dashboard', 'Users', 'Clients', 'Reports & Analytics', 'Incidents', 'System', 'Messages', 'Audit Log'],
    mobile: ['Dashboard', 'Users', 'Incidents', 'Messages', 'More'],
    quick: ['Approve Pending Users', 'View Active Incidents', 'Pull Weekly Report', 'Send Announcement'],
    dashboard: [
      ['System Health', 'User counts, active sessions, and service health signals.'],
      ['Pending Approvals', 'Queue for staff and provider account review.'],
      ['Open Incidents', 'Safety and policy incident workflow board.'],
      ['Referral Performance', 'Acceptance rates, aging referrals, and outcomes.']
    ],
    workflow: [
      'Review pending users and role-appropriate access requests.',
      'Monitor incidents, assignment, and resolution timelines.',
      'Publish announcements and operational updates.',
      'Generate exportable analytics and compliance reporting.'
    ]
  },
  superadmin: {
    label: 'Super Admin',
    subtitle: 'Developer-grade controls for modules, role matrix, and system integrity.',
    nav: ['Ops Dashboard', 'Role Config', 'Module Toggle', 'System Health', 'DB Tools', 'Audit', 'Integrations'],
    mobile: ['Ops', 'Modules', 'Audit', 'Logs', 'More'],
    quick: ['Toggle Module', 'Adjust Role Scope', 'Run Integrity Check', 'Inspect Error Log'],
    dashboard: [
      ['Role Matrix', 'Fine-grained permission controls per module.'],
      ['Module Toggles', 'Progressive rollout controls by environment.'],
      ['Database Tools', 'Migration status, backups, and restore readiness.'],
      ['Security Monitor', 'Suspicious access, lockouts, and alert feed.']
    ],
    workflow: [
      'Adjust role-permission maps and enforce least-privilege defaults.',
      'Toggle modules for phased rollout and controlled pilots.',
      'Monitor logs, backups, and migration integrity status.',
      'Audit sensitive-access patterns and incident escalation events.'
    ]
  }
};

const moduleCoverage = [
  ['Account & Identity', 'Registration, approval queue, verification, and optional 2FA.'],
  ['Intake & Assessment', 'Configurable forms, smart follow-up questions, and reassessment schedule.'],
  ['Consent Management', 'Per-partner/per-document consent with expiry and immediate revocation.'],
  ['Case Management', 'Case timelines, notes, assignment, transfer protocol, and risk flags.'],
  ['Goals, Tasks & Action Plans', 'SMART goal support, milestones, ownership, and dependencies.'],
  ['Referrals', 'Warm referrals, status transitions, and provider outcome reporting.'],
  ['Appointments & Calendar', 'Team calendar, reminders, no-show follow-up, and iCal support.'],
  ['Messaging', 'Role-safe DMs, group case chat, and crisis escalation flags.'],
  ['Document Vault', 'Secure upload, category tagging, sharing controls, and expiry alerts.'],
  ['Incident Reporting', 'Safety/policy incidents with review and closure workflow.'],
  ['Reporting & Analytics', 'Outcome trends, caseload insights, exports, and public anonymized stats.'],
  ['Volunteer Management', 'Registration, assignments, skills matching, and hour tracking.'],
  ['Provider Portal', 'Referral inbox, scoped client view, service profile, and reporting.'],
  ['Notifications', 'In-app bell + configurable email/SMS updates.'],
  ['Audit & Activity Logs', 'Logins, data access, edits, exports, consent-access trails.']
];

const stats = [
  ['241', 'Clients supported this month'],
  ['126', 'Referrals completed'],
  ['389', 'Goals achieved'],
  ['514', 'Volunteer hours'],
  ['39', 'Community partners'],
  ['12 days', 'Average days to housing support']
];

const impactHighlights = [
  ['Consent-First Data Sharing', 'No referral or document share occurs without explicit active consent.'],
  ['Real-Time Team Coordination', 'Case staff, volunteers, and providers remain aligned in one timeline.'],
  ['Trauma-Informed Communication', 'Strength-based prompts and humane language reduce friction.'],
  ['Mobile-Ready Everywhere', 'Designed for field outreach on phones, tablets, and low-data connections.']
];

const scoreDomains = [
  ['Housing Stability', 25, 64],
  ['Safety', 20, 58],
  ['Mental Health & Wellbeing', 15, 62],
  ['Physical Health', 10, 70],
  ['Financial & Employment', 10, 54],
  ['Substance Use Support', 10, 61],
  ['Social Connection', 5, 67],
  ['Legal Status', 5, 52]
];

const consentLifecycle = [
  ['General Service Consent', 'Active', 'Renews in 9 months'],
  ['Information Sharing Consent', 'Active', 'Renews in 5 months'],
  ['Partner-Specific Consent', 'Pending Renewal', 'Reminder sent to assigned worker'],
  ['Document Sharing Consent', 'Active', 'Medical/Legal scope enabled'],
  ['Communication Consent', 'Revoked', 'SMS disabled, email remains active']
];

const roleSelect = document.getElementById('roleSelect');
const roleNav = document.getElementById('roleNav');
const quickActions = document.getElementById('quickActions');
const dashboardCards = document.getElementById('dashboardCards');
const moduleCards = document.getElementById('moduleCards');
const publicStats = document.getElementById('publicStats');
const impactCards = document.getElementById('impactCards');
const mobileTabs = document.getElementById('mobileTabs');
const workflowSteps = document.getElementById('workflowSteps');
const scoreCards = document.getElementById('scoreCards');
const consentCards = document.getElementById('consentCards');

Object.entries(roles).forEach(([key, role]) => {
  const option = document.createElement('option');
  option.value = key;
  option.textContent = role.label;
  roleSelect.append(option);
});

function paintRole(roleKey) {
  const role = roles[roleKey];
  document.getElementById('portalTitle').textContent = `${role.label} Dashboard`;
  document.getElementById('portalSubtitle').textContent = role.subtitle;

  roleNav.innerHTML = role.nav.map((item) => `<span class="nav-item">${item}</span>`).join('');
  quickActions.innerHTML = role.quick.map((item) => `<span class="chip">${item}</span>`).join('');
  mobileTabs.innerHTML = role.mobile.map((item) => `<span class="tab">${item}</span>`).join('');
  workflowSteps.innerHTML = role.workflow.map((step) => `<li>${step}</li>`).join('');

  dashboardCards.innerHTML = role.dashboard
    .map(([title, body]) => `<article class="card"><h5>${title}</h5><p>${body}</p></article>`)
    .join('');
}

moduleCards.innerHTML = moduleCoverage
  .map(([title, body]) => `<article class="card"><h5>${title}</h5><p>${body}</p></article>`)
  .join('');

publicStats.innerHTML = stats
  .map(([num, label]) => `<article class="stat"><strong>${num}</strong><span>${label}</span></article>`)
  .join('');

impactCards.innerHTML = impactHighlights
  .map(([title, body]) => `<article class="card"><h5>${title}</h5><p>${body}</p></article>`)
  .join('');

scoreCards.innerHTML = scoreDomains
  .map(
    ([domain, weight, value]) =>
      `<article class="card"><h5>${domain}</h5><p>Weight: ${weight}% • Current support score: ${value}/100</p><div class="progress"><span style="width:${value}%"></span></div></article>`
  )
  .join('');

consentCards.innerHTML = consentLifecycle
  .map(([type, status, detail]) => `<article class="card"><h5>${type}</h5><p><strong>${status}</strong><br>${detail}</p></article>`)
  .join('');

roleSelect.addEventListener('change', (e) => paintRole(e.target.value));
document.getElementById('themeToggle').addEventListener('click', () => {
  const root = document.documentElement;
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
});

paintRole('staff');
