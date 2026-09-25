export const liveProjects = [
  {
    id: "zayro-footwear",
    title: "Zayro Footwear — Official Brand E-Commerce",
    category: "live",
    badge: "Official Brand Store",
    liveUrl: "https://zayro-footwear.vercel.app/",
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["Next.js", "TypeScript", "JavaScript", "MongoDB", "Node.js", "Express.js", "Tailwind CSS"],
    shortDesc: "Jasir's proprietary brand e-commerce website built with Next.js, TypeScript, JavaScript, MongoDB database, and Node/Express backend.",
    role: "Founder & Full Stack Architect",
    overview: "Zayro Footwear is my proprietary direct-to-consumer brand platform designed to deliver premium footwear. Engineered with modern minimalist UX, instant Next.js App Router performance, secure inventory reservations, and automated customer order notifications.",
    architecture: "Next.js App Router with TypeScript & JavaScript on the frontend, Node.js + Express REST API microservices for order processing, and MongoDB Atlas for catalog and customer data management.",
    features: [
      "Dynamic product catalog with interactive footwear gallery, size selectors, and instant search.",
      "Real-time cart and checkout flow with automated pricing, coupons, and delivery computation.",
      "Robust Node & Express backend endpoints handling order registration, validation, and email dispatches.",
      "Complete MongoDB database schema handling collections for Products, Orders, Categories, and Customers.",
      "100% responsive, high-aesthetic layout optimized for mobile conversion and fast loading speeds."
    ],
    strategy: "Engineered with modular React/Next.js architecture to handle sudden promotional spikes. Utilized MongoDB aggregation pipelines and Next.js SSR to deliver instantaneous page loads and stellar SEO scores."
  },
  {
    id: "precision-metal-structures",
    title: "Precision Metal Structures",
    category: "live",
    badge: "Live Enterprise Website",
    liveUrl: "https://precisionmetalstructures.com/",
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design", "Lead Capture"],
    shortDesc: "Commercial enterprise production website engineered for a leading industrial metal structures & fabrication corporation.",
    role: "Full Stack Web Developer (Client Project)",
    overview: "Architected and delivered the official enterprise website for Precision Metal Structures. Features industrial capabilities, structural specifications, project showcases, and a streamlined request-for-quote (RFQ) intake pipeline.",
    architecture: "High-performance React.js single-page application, modular UI component design, optimized media handling, and integrated client-side form validation with backend notifications.",
    features: [
      "Comprehensive industrial portfolio showcasing structural steel, pre-engineered buildings, and metal fabrications.",
      "Custom quote estimation & inquiry forms with real-time field validation.",
      "Ultra-fast loading times with 95+ Google Lighthouse performance scores.",
      "Cross-browser tested, fully accessible UI adhering to modern web standards.",
      "Direct integration with client email gateways for instantaneous enterprise lead routing."
    ],
    strategy: "Engineered conversion-focused layouts that guide corporate clients from browsing project blueprints directly into verified RFQ requests, driving tangible commercial inquiries."
  },
  {
    id: "wandersync",
    title: "WanderSync — Travel Companion & Itinerary Sync",
    category: "live",
    badge: "Live Vercel App",
    liveUrl: "https://wander-sync-psi.vercel.app/",
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["React.js", "Next.js", "JavaScript", "REST APIs", "Vercel Deploy"],
    shortDesc: "Interactive travel planning and itinerary synchronization web application deployed live on Vercel.",
    role: "Full Stack Developer",
    overview: "WanderSync is a modern travel management application that enables solo adventurers and group travelers to coordinate itineraries, schedule daily trips, track travel budgets, and sync plans seamlessly.",
    architecture: "React.js and Next.js application leveraging state hooks, RESTful API consumption, and automated Vercel CI/CD edge deployment.",
    features: [
      "Interactive multi-day trip builder with timeline scheduling and activity checkpoints.",
      "Real-time expense estimation and budget categorization per trip.",
      "Mobile-optimized adaptive layout designed for on-the-go smartphones during travel.",
      "Instant shareable trip links and persistent local state.",
      "Polished visual aesthetics with smooth transitions and responsive micro-interactions."
    ],
    strategy: "Prioritized mobile UX and low latency by minimizing bundle weight and utilizing optimistic UI updates so travelers experience zero lag even on mobile data."
  }
];

export const mernProjectsPart1 = [
  {
    id: "digital-twin-ai",
    title: "Digital Twin Ai",
    category: "mern",
    badge: "AI + MERN Stack",
    liveUrl: null,
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Integration", "JWT", "CORS"],
    shortDesc: "Virtual clone platform ingesting real-time operational telemetry, executing predictive AI analytical models, and rendering reactive dashboards.",
    role: "Lead Full Stack & AI Architect",
    overview: "A state-of-the-art Digital Twin simulation system built on the MERN stack integrated with artificial intelligence inference models. It creates virtual digital replicas of physical hardware devices and facilities, tracking operational telemetry in real time.",
    architecture: "React.js frontend with live telemetry chart visualizations, Node.js & Express.js microservice cluster, MongoDB timeseries telemetry collections, and AI analytics ingestion endpoints.",
    features: [
      "Live bi-directional telemetry streaming with sub-50ms data rendering on React canvas/charts.",
      "Integrated AI predictive maintenance models to forecast component failures before downtime occurs.",
      "Multi-tenant device registration with JWT authentication, granular permission scopes, and CORS protection.",
      "Interactive status monitors, anomaly threshold alerts, and automated incident ticket dispatching.",
      "Comprehensive telemetry data export and analytical reporting engine."
    ],
    strategy: "Decoupled the telemetry ingestion pipeline from user dashboard queries via asynchronous queues. Leveraged MongoDB indexes for instant aggregation over millions of incoming sensor timestamps."
  },
  {
    id: "appointment-booking-system",
    title: "Appointment-Booking-System",
    category: "mern",
    badge: "MERN Stack",
    liveUrl: null,
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "CORS", "Calendar Engine"],
    shortDesc: "End-to-end scheduling engine featuring real-time slot locking, double-booking prevention, calendar sync, and automated reminders.",
    role: "Full Stack Engineer",
    overview: "A comprehensive booking platform designed for clinics, consultants, and service providers. Eliminates appointment clashes with server-side mutex slot locking and delivers effortless schedule management.",
    architecture: "React.js dynamic calendar interface, Express.js REST API with ACID-compliant MongoDB transaction sessions to prevent race conditions during concurrent booking attempts.",
    features: [
      "Dynamic interactive calendar with custom business hours, buffer times, and service tier selectors.",
      "Server-side atomicity ensuring zero double-booking even under concurrent traffic spikes.",
      "JWT-authenticated customer and staff portals with self-service cancellation and rescheduling rules.",
      "Automated email confirmations, reminders, and iCal/Google Calendar link generation.",
      "Admin scheduling dashboard for staff shifts, holiday blackouts, and revenue tracking."
    ],
    strategy: "Implemented optimistic UI updates on the frontend paired with atomic MongoDB findOneAndUpdate locks on the backend to guarantee data integrity across simultaneous user clicks."
  }
];

export const mernProjectsPart2 = [
  {
    id: "client-project-management-system",
    title: "Client-Project-Management-System",
    category: "mern",
    badge: "MERN Stack",
    liveUrl: null,
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "RBAC", "Milestone Tracking"],
    shortDesc: "Collaborative enterprise platform connecting agencies and clients with milestone boards, deliverable approvals, and budget tracking.",
    role: "Full Stack Engineer",
    overview: "A centralized agency-to-client collaboration workspace built to eliminate messy email threads. Allows project managers to assign milestones, share live review deliverables, and collect signed client approvals.",
    architecture: "React.js SPA with modular state management, Node/Express REST backend, JWT authentication, and MongoDB relational references.",
    features: [
      "Kanban milestone pipelines with task progression and dependency trees.",
      "Client-facing portal with restricted permissions: approve deliverables, download assets, and view budget burndown.",
      "Real-time comment threads with file attachments and automated notification triggers.",
      "Invoice and contract milestone tracking with clear payment status indicators.",
      "Role-Based Access Control (Admin, Project Manager, Developer, Client)."
    ],
    strategy: "Focused heavily on security and permission separation. Custom JWT middleware verifies role permissions per route to ensure clients only access their designated project schemas."
  },
  {
    id: "employee-management-system",
    title: "Employee-Management-System",
    category: "mern",
    badge: "MERN Stack",
    liveUrl: null,
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Payroll", "Attendance"],
    shortDesc: "Scalable corporate HR portal managing employee lifecycles, attendance, payroll records, departments, and performance reviews.",
    role: "Full Stack Engineer",
    overview: "A full-fledged Human Resources suite streamlining organizational workflows from onboarding to payroll calculation. Built to replace manual spreadsheets with a secure, automated MERN architecture.",
    architecture: "React.js dashboard with responsive data grids, Express REST API with input sanitization, and structured MongoDB schemas for records.",
    features: [
      "Complete employee directory with department categorization, designation tiers, and document vaults.",
      "Daily biometric/web attendance tracking with leave application and approval workflows.",
      "Automated monthly salary calculation factoring in tax deductions, bonuses, and unpaid leaves.",
      "Performance appraisal logging and peer review scoring modules.",
      "Exportable PDF/Excel payroll summaries and compliance reports."
    ],
    strategy: "Structured database models with Mongoose populate queries and lean read-only projections to minimize payload size when loading corporate-wide staff directories."
  },
  {
    id: "expense-budget-and-reimbursement",
    title: "Expense-Budget-and-Reimbursement-Management-System",
    category: "mern",
    badge: "MERN Stack",
    liveUrl: null,
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Financial Auditing", "Receipt OCR"],
    shortDesc: "Corporate financial governance system featuring multi-level reimbursement approval flows, budget threshold alerts, and audit trails.",
    role: "Full Stack Engineer",
    overview: "An enterprise financial auditing tool enabling employees to submit expense claims with digital receipts while equipping finance teams with budget guardrails and compliance workflows.",
    architecture: "React.js frontend with analytical expense breakdown charts, Node.js backend with multi-stage approval logic, and immutable audit logs in MongoDB.",
    features: [
      "Receipt image upload with automatic expense categorization and currency normalization.",
      "Multi-tier approval pipeline (Line Manager -> Department Head -> Finance Controller).",
      "Departmental budget allocation with real-time threshold warnings and overspend locks.",
      "One-click reimbursement payout approvals with bank transaction reference logging.",
      "Immutable audit log recording every modification, approval, and rejection reason."
    ],
    strategy: "Enforced strict state machine transitions on the backend so reimbursement records cannot skip approval stages, ensuring complete fiscal auditability."
  }
];

export const mernProjectsPart3 = [
  {
    id: "help-desk-support-ticket-system",
    title: "Help-Desk-Support-Ticket-System",
    category: "mern",
    badge: "MERN Stack",
    liveUrl: null,
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "SLA Engine", "Ticket Triage"],
    shortDesc: "Multi-channel IT support desk with automated SLA timers, ticket routing, agent assignment, and customer satisfaction ratings.",
    role: "Full Stack Engineer",
    overview: "A high-performance customer service and internal IT ticketing platform. Built to minimize resolution time through automated ticket routing, priority matrices, and SLA breach countdowns.",
    architecture: "React frontend with quick-filter triage views, Node/Express backend with background cron jobs tracking SLA timers, and MongoDB ticketing records.",
    features: [
      "Dynamic ticket lifecycle management: Open, In Progress, Awaiting Customer, Escalated, Resolved, Closed.",
      "Automated ticket assignment algorithms based on agent workload and domain expertise.",
      "Real-time SLA countdown timers with automated escalation alerts before breaches occur.",
      "Threaded conversation history with internal private notes visible only to support agents.",
      "Customer satisfaction (CSAT) survey collection upon ticket closure with analytics reports."
    ],
    strategy: "Used WebSocket broadcasts alongside periodic backend interval checks to keep SLA timers perfectly in sync across all active agent browsers without manual page reloads."
  },
  {
    id: "inventory-and-order-management",
    title: "Inventory and Order Management System",
    category: "mern",
    badge: "MERN Stack",
    liveUrl: null,
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Barcode/SKU", "Order Pipeline"],
    shortDesc: "Warehouse logistics platform managing multi-warehouse stock, barcode/SKU tracking, reorder thresholds, and purchase order fulfillment.",
    role: "Full Stack Engineer",
    overview: "An industrial-grade supply chain tool engineered for distributors and retailers to monitor inventory levels, prevent stockouts, and track purchase-to-delivery lifecycles.",
    architecture: "React SPA with high-density data tables and keyboard shortcuts, Express REST backend with transaction safeguards, and MongoDB storage.",
    features: [
      "Real-time SKU stock level monitoring across multiple warehouse locations.",
      "Automated low-stock alerts triggering vendor Purchase Order (PO) draft generation.",
      "Customer Sales Order processing with automatic stock deduction and fulfillment tracking.",
      "Barcode/QR code scanning integration for fast inventory receiving and dispatch.",
      "Profit margin calculations, dead-stock analytics, and supplier performance scorecards."
    ],
    strategy: "Designed database operations with atomic balance updates to prevent stock negative-balance bugs during simultaneous peak order processing."
  },
  {
    id: "mern-crm",
    title: "MERN_CRM",
    category: "mern",
    badge: "MERN Stack",
    liveUrl: null,
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Sales Funnel", "Lead Scoring"],
    shortDesc: "Customer Relationship Management suite with visual sales pipelines, lead scoring, deal velocity metrics, and communication history.",
    role: "Full Stack Engineer",
    overview: "A sales acceleration platform helping business development teams manage leads, track client communications, and forecast revenue through customizable deal stages.",
    architecture: "React drag-and-drop sales pipeline frontend, Express REST API with deep query filters, and indexed MongoDB client documents.",
    features: [
      "Visual Kanban deal pipeline with progression across custom deal stages.",
      "Lead scoring algorithms based on client engagement, company size, and interaction recency.",
      "Comprehensive client contact cards with complete timeline of calls, emails, and meetings.",
      "Sales revenue forecasting charts and team quota achievement scoreboards.",
      "CSV lead import/export with duplicate detection and automated field mapping."
    ],
    strategy: "Engineered responsive drag-and-drop state updates that reorder pipeline columns instantaneously on the frontend while debouncing sync requests to the backend."
  }
];


export const mernProjectsPart4 = [
  {
    id: "office-management",
    title: "Office-Management",
    category: "mern",
    badge: "MERN Stack",
    liveUrl: null,
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Asset Tracking", "Meeting Rooms"],
    shortDesc: "Workplace administration portal handling conference room reservations, company asset allocations, visitor passes, and maintenance requests.",
    role: "Full Stack Engineer",
    overview: "A comprehensive workplace management tool designed to coordinate daily company operations, manage office physical assets, and eliminate conference room reservation conflicts.",
    architecture: "React.js responsive web UI, Node.js & Express API services, and MongoDB database with indexing on asset tags and reservation timestamps.",
    features: [
      "Interactive meeting room booking calendar with room capacity and AV equipment filters.",
      "Hardware asset tracking assigned to individual employees with condition logs.",
      "Digital visitor logbook with badge printing and host notification on arrival.",
      "Facilities maintenance ticketing system for reporting electrical, IT, or janitorial needs.",
      "Role-based administrative control over office policies and consumable supplies inventory."
    ],
    strategy: "Streamlined multi-department workflows into one unified dashboard, drastically cutting administrative overhead and double-booking incidents in corporate workspaces."
  },
  {
    id: "service-marketplace-management",
    title: "service-marketplace Managenent",
    category: "mern",
    badge: "MERN Stack",
    liveUrl: null,
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Escrow Workflow", "Reviews"],
    shortDesc: "Two-sided marketplace connecting verified service providers with consumers, featuring bidding, escrow milestones, and rating systems.",
    role: "Full Stack Engineer",
    overview: "A robust two-sided service marketplace architecture allowing clients to post job requirements, receive competitive quotes from vetted professionals, and complete work securely.",
    architecture: "React.js multi-dashboard frontend (Client & Vendor portals), Node/Express REST API with secure middleware, and MongoDB multi-document collections.",
    features: [
      "Dual-portal architecture: tailored interfaces and features for service seekers vs. verified vendors.",
      "Job post creation with budget ranges, skill tags, timeline requirements, and attachment support.",
      "Vendor quotation and proposal submission engine with counter-offer negotiations.",
      "Milestone-based fund release simulation ensuring client satisfaction before payment payout.",
      "Verified review and rating system preventing fraudulent feedback manipulation."
    ],
    strategy: "Implemented strict validation middleware to isolate sensitive proposal bid amounts from competing vendors until bidding deadlines officially close."
  },
  {
    id: "fitness-tracker-gym-management",
    title: "Fitness Tracker & Gym Management",
    category: "mern",
    badge: "MERN Stack",
    liveUrl: null,
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Workout Engine", "Membership"],
    shortDesc: "End-to-end gym administration and member wellness portal with workout routines, membership renewals, and BMI/progress analytics.",
    role: "Full Stack Engineer",
    overview: "A comprehensive gym enterprise and fitness companion application. Equips gym owners with recurring membership tracking while empowering gym members with custom workout planners and fitness metric trackers.",
    architecture: "React.js frontend with dynamic workout logging and progress charts, Express REST API, and MongoDB collections for workout schemas and membership subscriptions.",
    features: [
      "Member management with tier tracking, renewal billing schedules, and access card status.",
      "Custom workout builder with exercise libraries, sets, reps, and target muscle group breakdowns.",
      "Weight, body fat %, and BMI progress tracking with interactive historical charts.",
      "Trainer assignment module allowing fitness coaches to review and update client routines.",
      "Attendance check-in logging and gym peak hour utilization analytics."
    ],
    strategy: "Designed clean document sub-schemas in MongoDB for nested workout exercise routines, allowing fast retrieval and offline-capable mobile React views."
  }
];


export const otherProjectsPart1 = [
  // {
  //   id: "bakery-management-system",
  //   title: "Bakery Management system",
  //   category: "dotnet",
  //   badge: "ASP.NET + SSMS / SQL",
  //   liveUrl: null,
  //   githubUrl: "https://github.com/Jasir-ali90",
  //   tags: ["ASP.NET MVC", "C#", "SSMS / SQL Server", "Stored Procedures", "POS", "Inventory Tracking"],
  //   shortDesc: "Commercial bakery enterprise platform built with ASP.NET and SSMS/SQL Server managing daily baking batches, POS billing, and ingredient inventory.",
  //   role: "Backend & Systems Developer",
  //   overview: "Built an enterprise bakery management desktop/web solution using ASP.NET MVC and Microsoft SQL Server (SSMS). Handles perishable inventory, batch recipes, counter POS sales, and daily wastage calculations.",
  //   architecture: "ASP.NET MVC with C#, ADO.NET / Entity Framework, Microsoft SQL Server database with optimized stored procedures, indexed views, and trigger safeguards.",
  //   features: [
  //     "Point-of-Sale (POS) cashier counter with barcode scanner support and thermal receipt generation.",
  //     "Daily baking batch scheduling with automated ingredient deduction from bulk raw material stock.",
  //     "Perishable shelf-life monitoring with automated markdowns for expiring items to minimize food waste.",
  //     "Supplier management, procurement orders, and ingredient price fluctuation logs.",
  //     "End-of-day sales reconciliation, cash drawer balancing, and profit/loss reports."
  //   ],
  //   strategy: "Heavy business logic encapsulated inside high-performance SQL Server stored procedures, reducing application memory footprint and guaranteeing transactional ACID consistency."
  // },
  {
    id: "reciepe-management-system",
    title: "Reciepe Management System",
    category: "dotnet",
    badge: "ASP.NET + SSMS / SQL",
    liveUrl: null,
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["ASP.NET MVC", "C#", "SSMS / SQL Server", "Cost Calculation", "Nutritional Analysis"],
    shortDesc: "Culinary engineering software built on ASP.NET and SSMS/SQL calculating scaled ingredient proportions, nutritional breakdowns, and precise batch production costs.",
    role: "Software Developer",
    overview: "A specialized culinary formulation software designed for food production companies. Calculates exact ingredient quantities based on batch size scaling, monitors allergen warnings, and computes real-time recipe food costs.",
    architecture: "ASP.NET MVC application with C# business services, SSMS SQL Server relational schemas mapping complex multi-level ingredient dependencies.",
    features: [
      "Dynamic batch yield scaling: enter target servings/kilograms and instantly recalculate all ingredient weights.",
      "Live ingredient cost computation factoring in bulk wholesale unit rates and processing wastage percentages.",
      "Allergen flagging (nuts, gluten, dairy) with regulatory compliance labeling guidelines.",
      "Step-by-step master preparation guides with preparation time and temperature controls.",
      "Exportable recipe specification sheets and nutritional profile summaries."
    ],
    strategy: "Engineered recursive SQL queries to traverse sub-recipes ensuring 100% cost and nutritional accuracy down to the gram."
  },
  {
    id: "royal-bakery-management",
    title: "Royal Bakery Management",
    category: "dotnet",
    badge: "ASP.NET + SSMS / SQL",
    liveUrl: null,
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["ASP.NET", "C#", "SSMS / SQL Server", "Wholesale Distribution", "Route Logistics"],
    shortDesc: "Commercial bakery distribution suite managing wholesale client accounts, multi-vehicle dispatch routes, and central factory baking queues.",
    role: "Software Developer",
    overview: "A dedicated management solution engineered for commercial multi-branch bakeries. Manages large wholesale contracts, daily delivery routes to retail outlets, and synchronized central factory baking queues.",
    architecture: "ASP.NET C# framework with SQL Server backend utilizing optimized indexing and normalized relational schemas for high-speed reporting.",
    features: [
      "Wholesale client portal with customized contract price lists and credit limit enforcement.",
      "Central factory baking queues aggregating daily orders across all branches before 4:00 AM production shifts.",
      "Delivery dispatch route sheets mapped by driver and delivery vehicle capacity.",
      "Returns and unsold merchandise accounting with credit note generation.",
      "Comprehensive profit margin analytics across product categories (cakes, breads, pastries)."
    ],
    strategy: "Optimized database execution plans and eliminated indexing bottlenecks, resulting in instant generation of complex multi-branch dispatch reports."
  }
];


export const otherProjectsPart2 = [
  // {
  //   id: "royal-recipe-management",
  //   title: "Royal Recipe Management",
  //   category: "dotnet",
  //   badge: "ASP.NET + SSMS / SQL",
  //   liveUrl: null,
  //   githubUrl: "https://github.com/Jasir-ali90",
  //   tags: ["ASP.NET", "C#", "SSMS / SQL Server", "Recipe Standardization", "Quality Control"],
  //   shortDesc: "Culinary standardization platform created to maintain consistent taste, portion sizes, and automated cost margins across multi-location franchises.",
  //   role: "Software Developer",
  //   overview: "Independent commercial recipe and food quality formulation software created to ensure standardized culinary outputs across franchises and multi-location kitchens.",
  //   architecture: "ASP.NET MVC, C# domain logic, and Microsoft SQL Server database with strict constraint validation.",
  //   features: [
  //     "Centralized recipe version control tracking revisions made by executive chefs.",
  //     "Unit-of-measure conversion engine (grams, kilograms, ounces, liters) for universal kitchen adoption.",
  //     "Margin target simulator: calculate recommended retail selling price based on target food cost %.",
  //     "Quality assurance checklists for kitchen staff during batch preparation.",
  //     "Chef training manuals and high-resolution plating photography storage."
  //   ],
  //   strategy: "Decoupled recipe formulations from retail pricing layers so cost updates instantly propagate without altering foundational culinary specifications."
  // },
  {
    id: "foodz-system",
    title: "Foodz",
    category: "dotnet",
    badge: "ASP.NET + SSMS / SQL",
    liveUrl: null,
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["ASP.NET MVC", "C#", "SSMS / SQL Server", "Restaurant Management", "Table POS"],
    shortDesc: "Comprehensive restaurant and food enterprise system built with ASP.NET and SSMS handling table reservations, kitchen displays, and bill settlement.",
    role: "Software Developer",
    overview: "Foodz is a comprehensive restaurant management and food enterprise platform. Unifies floor table management, waitstaff order taking, real-time Kitchen Display Systems (KDS), and back-office financial auditing.",
    architecture: "ASP.NET C# MVC with real-time UI polling, Microsoft SQL Server relational database with optimized transaction management.",
    features: [
      "Visual restaurant floor map with real-time table status (Vacant, Seated, Bill Requested).",
      "Kitchen Display System (KDS) showing incoming orders with preparation countdown timers.",
      "Split-bill calculations, multiple payment method acceptance, and tip distribution.",
      "Ingredient depletion tracking based on ordered dishes to anticipate kitchen shortages.",
      "Daily revenue breakdown, peak dining hours analysis, and top-selling menu items."
    ],
    strategy: "Implemented rapid transaction isolation levels to prevent table reservation collisions during peak dining rushes."
  }
];


export const otherProjectsPart3 = [
  {
    id: "hrm-system-php",
    title: "Human Resource Management system (HRM system)",
    category: "php",
    badge: "Core PHP + MySQL",
    liveUrl: null,
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["Core PHP", "MySQL", "JavaScript", "Bootstrap", "Employee Lifecycle", "Payroll"],
    shortDesc: "Enterprise HR administration platform built with Core PHP and MySQL covering staff databases, leaves, attendance, and payroll slips.",
    role: "PHP Full Stack Developer",
    overview: "A robust corporate HRM platform built with PHP and MySQL. Designed for medium-to-large businesses to maintain compliant employee records, streamline attendance approval workflows, and automate monthly payroll.",
    architecture: "Custom MVC architecture in Core PHP, MySQL relational database with prepared statements, and responsive Bootstrap interface.",
    features: [
      "Role-Based Access Control: Super Admin, HR Manager, Department Head, and Employee.",
      "Employee onboarding pipeline with document uploads, designation history, and contract terms.",
      "Leave management system with dynamic entitlement balances and multi-level approvals.",
      "Automated monthly payroll processing with tax bracket calculations and pay slip generation.",
      "Company policy documents repository and internal staff announcement noticeboard."
    ],
    strategy: "Secured all database interactions with strict PDO prepared statements, input sanitization, and CSRF token verification across all PHP forms."
  },
  {
    id: "ice-cream-parlor",
    title: "Ice-Cream Parlor",
    category: "php",
    badge: "Core PHP + MySQL",
    liveUrl: null,
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["Core PHP", "MySQL", "JavaScript", "AJAX", "POS Counter", "Cold Chain Inventory"],
    shortDesc: "Specialized retail POS counter and flavor scoop inventory management system developed on Core PHP and MySQL.",
    role: "PHP Web Developer",
    overview: "A specialized retail POS and cold-chain inventory application for ice cream parlors. Tracks flavor tubs, scoop counts, toppings, cone inventory, and customer loyalty rewards at counter speeds.",
    architecture: "Lightweight, ultra-fast Core PHP backend with MySQL database and AJAX-powered dynamic cashier frontend.",
    features: [
      "Rapid touch-friendly POS counter checkout designed for high-speed customer queues.",
      "Flavor tub inventory tracking: monitor remaining scoops per tub and alert staff when a tub is near empty.",
      "Toppings and waffle cone inventory deduction linked to order customization.",
      "Happy hour discounts, combo deals, and loyalty customer point accrual.",
      "Daily shift closing cash reconciliation and flavor popularity breakdown reports."
    ],
    strategy: "Used lightweight AJAX requests for order processing so the cashier interface never reloads, maintaining sub-second transaction times during customer queues."
  },
  {
    id: "city-guide-app",
    title: "City-Guide App",
    category: "mobile",
    badge: "Flutter + Firebase",
    liveUrl: null,
    githubUrl: "https://github.com/Jasir-ali90",
    tags: ["Flutter", "Dart", "Firebase Firestore", "Firebase Auth", "Geolocation", "Google Maps"],
    shortDesc: "Cross-platform mobile application developed with Flutter and Firebase database offering curated city guides, geolocation spots, and offline caching.",
    role: "Mobile App Developer",
    overview: "City-Guide is a modern, smooth cross-platform mobile application built with Flutter and Firebase. Equips tourists and local residents with curated recommendations for attractions, restaurants, historic landmarks, and hidden gems.",
    architecture: "Flutter cross-platform frontend (iOS & Android) utilizing Provider/Bloc state management, Firebase Authentication, Cloud Firestore for real-time document storage, and Google Maps API.",
    features: [
      "Interactive map integration with custom marker clustering for historic sites, food, and entertainment.",
      "Real-time user geolocation with distance calculations and turn-by-turn navigation triggers.",
      "Curated city itineraries categorized by budget, duration, and traveler interest (foodie, architecture, nightlife).",
      "Offline bookmarking allowing travelers to access saved guides without consuming cellular data.",
      "Community reviews, photo uploads, and user-generated recommendations stored in Cloud Firestore."
    ],
    strategy: "Leveraged Flutter's 60fps rendering engine alongside Firebase offline cache persistence to deliver a snappy, native-feeling mobile experience even in areas with spotty network coverage."
  }
];

export const allProjects = [
  ...liveProjects,
  ...mernProjectsPart1,
  ...mernProjectsPart2,
  ...mernProjectsPart3,
  ...mernProjectsPart4,
  ...otherProjectsPart1,
  ...otherProjectsPart2,
  ...otherProjectsPart3
];



