export const servicesData = [
    {
        id: 'cloud-attendance',
        name: 'Cloud Attendance Management',
        icon: 'fas fa-cloud-upload-alt',
        img: '/assets/images/service_new_attendance.jpg',
        shortDesc: 'Track employee attendance online, access data from anywhere, and view real-time reports and analytics.',
        fullDesc: 'Simplify workforce management with a secure cloud-based attendance solution that enables businesses to monitor employee attendance, access real-time data, and generate reports from anywhere.',
        features: [
            'Real-time attendance tracking',
            'Cloud-based access',
            'Multi-location management',
            'Automated reports',
            'Employee data management',
            'Secure data storage'
        ],
        benefits: 'Increase efficiency and eliminate manual errors with automated, real-time tracking.',
        howItWorks: 'Devices seamlessly sync attendance data to the cloud in real-time, providing immediate visibility to administrators on a centralized dashboard.',
        industries: 'Corporate Offices, IT Parks, Manufacturing, Healthcare, Education'
    },
    {
        id: 'cloud-access-control',
        name: 'Cloud-Based Access Control',
        icon: 'fas fa-lock',
        img: '/assets/images/service_cloud_access_control.jpg',
        shortDesc: 'Monitor and manage access remotely, control entry permissions, and view access logs online.',
        fullDesc: 'Ensure optimal security with our cloud-based access control systems. Seamlessly manage who has access to which areas of your facilities, from any device, anywhere in the world.',
        features: [
            'Remote access management',
            'Real-time access logs',
            'Role-based permissions',
            'Integration with biometric hardware',
            'Instant lockdown capabilities',
            'Audit trails and compliance reporting'
        ],
        benefits: 'Enhance security while providing frictionless entry for authorized personnel.',
        howItWorks: 'Cloud controllers authenticate credentials in milliseconds, managing access policies pushed instantly from the central dashboard to doors globally.',
        industries: 'Data Centers, Corporate Campuses, Hospitals, Government Facilities'
    },
    {
        id: 'cloud-security-monitoring',
        name: 'Cloud Security Monitoring',
        icon: 'fas fa-shield-alt',
        img: '/assets/images/service_cloud_security_monitoring.jpg',
        shortDesc: 'Monitor security systems remotely, receive real-time alerts, and manage multiple locations from one dashboard.',
        fullDesc: 'A comprehensive security oversight platform that brings all your alarms, cameras, and access events into a single, proactive cloud dashboard.',
        features: [
            'Real-time security alerts',
            'Centralized multi-site dashboard',
            'Automated threat responses',
            'Video surveillance integration',
            '24/7 proactive monitoring',
            'Incident logging and analysis'
        ],
        benefits: 'Reduce response times to security incidents and maintain continuous oversight across all your properties.',
        howItWorks: 'Security events are streamed securely to the cloud, analyzed for anomalies, and escalated to authorized personnel instantly via push notifications.',
        industries: 'Retail Chains, Banking, Residential Townships, Warehousing'
    },
    {
        id: 'workforce-analytics',
        name: 'Workforce Data & Analytics',
        icon: 'fas fa-chart-line',
        img: '/assets/images/service_analytics.png',
        shortDesc: 'Analyze employee attendance, working hours, and workforce data to generate useful business insights.',
        fullDesc: 'Transform raw attendance and access data into actionable intelligence. Identify trends, optimize shifts, and improve overall operational efficiency.',
        features: [
            'Visual data dashboards',
            'Predictive scheduling insights',
            'Overtime and absenteeism tracking',
            'Customizable report builder',
            'Exportable payroll-ready data',
            'Department-wise productivity metrics'
        ],
        benefits: 'Make data-driven decisions that reduce labor costs and improve employee productivity.',
        howItWorks: 'Data from all touchpoints is aggregated and processed using advanced algorithms to generate visual charts and reports in the web app.',
        industries: 'Manufacturing, BPO, Large Enterprises, Healthcare'
    },
    {
        id: 'cloud-visitor-management',
        name: 'Cloud-Based Visitor Management',
        icon: 'fas fa-users',
        img: '/assets/images/service_cloud_visitor_management.jpg',
        shortDesc: 'Digitally register visitors, track visitor activity, and maintain secure visitor records.',
        fullDesc: 'Create a professional first impression while securing your premises. Replace paper logs with a digital, cloud-connected visitor management system.',
        features: [
            'Digital visitor check-in',
            'Pre-registration via invites',
            'Instant host notifications',
            'Visitor badge printing',
            'Evacuation management',
            'Historical visitor logs'
        ],
        benefits: 'Streamline the front-desk experience and know exactly who is in your building at all times.',
        howItWorks: 'Visitors sign in via a tablet or QR code; the system notifies the host, prints a badge, and logs the entry securely in the cloud.',
        industries: 'IT Parks, Corporate Offices, Residential Communities, Schools'
    },
    {
        id: 'cloud-canteen-management',
        name: 'Cloud-Based Canteen Management',
        icon: 'fas fa-utensils',
        img: '/assets/images/service_cloud_canteen_management.jpg',
        shortDesc: 'Manage employee meal access, track food consumption, and generate consumption reports.',
        fullDesc: 'Automate your corporate cafeteria operations. Eliminate paper coupons, reduce food waste, and seamlessly deduct meal costs from employee payroll.',
        features: [
            'Cashless transactions',
            'Menu and vendor management',
            'Pre-ordering and scheduling',
            'Real-time consumption tracking',
            'Integration with attendance systems',
            'Automated subsidy calculations'
        ],
        benefits: 'Cut cafeteria administrative overhead and provide a smooth, modern dining experience for employees.',
        howItWorks: 'Employees tap their badge or use biometrics to claim meals. The data is logged centrally for vendor billing and payroll deduction.',
        industries: 'Manufacturing Plants, Large Corporate Campuses, Hospitals, Universities'
    }
];

export const getServiceById = (id) => {
    return servicesData.find(service => service.id === id);
};
