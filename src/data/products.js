// Product Data Structure
// Hierarchical: Category -> Subcategory -> Product list

export const productCategories = [
    {
        id: 'attendance',
        name: 'Attendance',
        description: 'Advanced biometric attendance and workforce management solutions.',
        icon: 'fas fa-user-clock',
        image: '/assets/images/service_attendance_indian.png',
        subcategories: [
            { id: 'fingerprint', name: 'Fingerprint', icon: 'fas fa-fingerprint', image: '/assets/images/prod_fingerprint_indian.png' },
            { id: 'qr-reader', name: 'QR Reader', icon: 'fas fa-qrcode', image: '/assets/images/prod_qr_indian.png' },
            { id: 'face-recognition', name: 'Face Recognition', icon: 'fas fa-user-circle', image: '/assets/images/prod_face_indian.png' }
        ]
    },
    {
        id: 'access-control',
        name: 'Access Control',
        description: 'Secure and high-efficiency physical access and entrance management systems.',
        icon: 'fas fa-door-open',
        image: '/assets/images/service_security_indian.png',
        subcategories: [
            { id: 'boom-barrier', name: 'Boom Barrier', icon: 'fas fa-road', image: '/assets/images/sub_boom_barrier_indian.jpg' },
            { id: 'metal-detector', name: 'Metal Detector', icon: 'fas fa-user-shield', image: '/assets/images/sub_metal_detector_indian.jpg' },
            { id: 'flap-barrier', name: 'Flap Barrier', icon: 'fas fa-sign-in-alt', image: '/assets/images/sub_flap_barrier_indian.jpg' }
        ]
    },
    {
        id: 'gates-automation',
        name: 'Gates & Automation',
        description: 'Automated barrier and gating solutions for commercial and industrial facilities.',
        icon: 'fas fa-torii-gate',
        image: '/assets/images/prod_gate_indian.png',
        subcategories: [
            { id: 'all', name: 'All Gates & Automation', icon: 'fas fa-list', image: '/assets/images/factory.png' }
        ]
    }
];

export const products = {
    'attendance': {
        'fingerprint': [
            { 
                id: 'x-990', 
                name: 'X-990', 
                category: 'Finger-print',
                type: 'Standalone Fingerprint Time Attendance & Access Control System',
                images: ['/assets/images/prod_x990_v2.jpg'], 
                highlights: [
                    "Fingerprint Capacity : 10000",
                    "Card Capacity : 10000",
                    "Transaction Capacity : 100000",
                    "Fingerprint sensor : 500 DPI Optical sensor",
                    "Card Reader : Inbuilt proximity card reader (Optional Mifare, HID prox)",
                    "CPU : 32bit microprocessor",
                    "Dual-mode: Standalone Time Attendance & Access Control System",
                    "Push data : Yes (support both static IP and domain server)"
                ], 
                specs: {
                    "Fingerprint Capacity": "10000",
                    "Card Capacity": "10000",
                    "Transaction Capacity": "100000",
                    "Card Reader": "Inbuilt proximity card reader (Optional Mifare, HID prox)",
                    "CPU": "32bit microprocessor",
                    "SDRAM": "128 MB Nand Flash",
                    "Flash": "256 MB Nand Flash",
                    "Kernel": "2.6",
                    "Fingerprint sensor": "500 DPI Optical sensor",
                    "FAR / FRR": "<=0.0001% / <=1%",
                    "Identification speed": "<0.5 sec",
                    "Algorithm Ver": "10",
                    "Display": "3\" Color TFT",
                    "Keypad": "Yes",
                    "LED Indicator": "Green/Red",
                    "Schedule Bell/Speaker": "Mini Speaker",
                    "Communication": "TCP/IP, USB, (Optional : WiFi, GPRS)",
                    "Push data": "Yes (support both static IP and domain server)",
                    "Standard Features": "work code, SMS, DLST, Self service query, Status Switch",
                    "Power Supply": "DC 12V --- 1.5Amp",
                    "Operating Temperature": "0°C - 45°C",
                    "Operating Humidity": "20% - 80%",
                    "Dimension(in mm)": "(L)210 x (W)157 x (H)40",
                    "Access control Wiegand": "In & Out both 26 or 34 bit (With or without site code)",
                    "Relay": "12 V relay for lock EM lock, Bolt Lock or Strike lock",
                    "Support Fire Alarm / Door Sensor": "Yes / Yes",
                    "Anti Passback / Door Bell": "Yes / Yes",
                    "Exit Readers Support": "101 HE , FR 1200, Push Button, KR500, Notouch, KR503",
                    "Optional Features": "Battery : Yes | Card readers : Mifare/HID Prox | Communication : WiFi/GPRS",
                    "Compatibility": "Multi Door controllers via Wiegand, External Speaker/Bulb/Printer",
                    "Compatible Software & SDK": "eTimeTrackLite desktop & web, SDK for desktop, Web based Device Management, 3rd Party Payroll/HRMS/ERP",
                    "Major Applications": "Time & Attendance, Canteen Management, School Attendance, Production Management, Gym & clubs"
                }, 
                sections: {
                    col1: [
                        {
                            title: "Storage Capacity",
                            items: [
                                "Fingerprint Capacity : 10000",
                                "Card Capacity : 10000",
                                "Transaction Capacity : 100000",
                                "Card Reader : Inbuilt proximity card reader (Optional Mifare, HID prox)",
                                "CPU : 32bit microprocessor",
                                "SDRAM : 128 MB Nand Flash",
                                "Flash : 256 MB Nand Flash",
                                "Kernel : 2.6"
                            ]
                        },
                        {
                            title: "Biometric",
                            items: [
                                "Fingerprint sensor : 500 DPI Optical sensor",
                                "FAR : <=0.0001%",
                                "FRR : <=1%",
                                "Identification speed : <0.5 sec",
                                "Algorithm Ver : 10"
                            ]
                        },
                        {
                            title: "Audio/Visual",
                            items: [
                                "Display : 3\" Color TFT",
                                "Keypad : Yes",
                                "LED Indicator : Green/Red",
                                "Schedule Bell/Speaker : Mini Speaker"
                            ]
                        },
                        {
                            title: "Communication",
                            items: [
                                "TCP/IP, USB, (Optional : WiFi, GPRS)",
                                "Push data : Yes (support both static IP and domain server)",
                                "Standard Features : work code,SMS,DLST, Self service query, Status Switch"
                            ]
                        },
                        {
                            title: "Power & Environment",
                            items: [
                                "Power Supply : DC 12V --- 1.5Amp",
                                "Operating Temperature : 0°C - 45°C",
                                "Operating Humidity : 20% - 80%",
                                "Dimension(in mm) : (L)210 x (W)157 x (H)40"
                            ]
                        }
                    ],
                    col2: [
                        {
                            title: "Access control",
                            items: [
                                "Wiegand : In & Out both 26 or 34 bit (With or without site code)",
                                "Relay : 12 V relay for lock EM lock, Bolt Lock or Strike lock",
                                "Support Fire Alarm : Yes",
                                "Door Sensor : Yes",
                                "Anti Passback : Yes",
                                "Door Bell : Yes"
                            ]
                        },
                        {
                            title: "Exit Readers",
                            items: [
                                "Support exit readers : 101 HE , FR 1200, Push Button, KR500, Notouch, KR503"
                            ]
                        },
                        {
                            title: "Optional",
                            items: [
                                "Battery : Yes",
                                "Card readers : Mifare/HID Prox",
                                "Communication : WiFi/GPRS",
                                "Sensor : Mifare/HID Prox"
                            ]
                        },
                        {
                            title: "Compatibility",
                            items: [
                                "Compatible with Multi Door controllers via weigand",
                                "External Speaker output available (Optional)",
                                "External Bulb output available (Optional)",
                                "Support External Printer"
                            ]
                        },
                        {
                            title: "Compatible Software and SDK",
                            items: [
                                "eTimeTrackLite desktop & web",
                                "SDK for desktop applications",
                                "Web based Device Management application using Push data. Helps developers & integrators",
                                "Supports 3rd Party Payroll/HRMS/ERP and Other applications"
                            ]
                        },
                        {
                            title: "Major Applications",
                            items: [
                                "Time & Attendance , Canteen Management, School Attedance, Production Management, Gym & clubs"
                            ]
                        }
                    ]
                },
                pdf: null, 
                video: 'https://www.youtube.com/embed/5UjKx2T8o-Y', 
                desc: 'X-990 is a heavy-duty standalone fingerprint time and attendance system with access control interface. Fully integrated with WMWave\'s cloud platform for secure, real-time multi-branch attendance and access management.' 
            },
            { 
                id: 'sf-100', 
                name: 'SF100', 
                category: 'IP based Fingerprint Time Attendance & Access Control System',
                type: 'IP based Fingerprint Time Attendance & Access Control System',
                images: ['/assets/images/prod_sf100_device.jpg'], 
                highlights: [
                    "Fingerprint Capacity : 1500",
                    "Card Capacity : 5000",
                    "Transactions : 80000 Logs",
                    "Fingerprint Sensor : 500 DPI Optical sensor",
                    "Voice prompt for acceptance and rejection of valid/invalid fingers",
                    "Compact and lightweight, small size for 86x86mm soket installation",
                    "Upto 15 multi-verification methods to enhance securiy level",
                    "Standard access control features such as Time zone, Holiday, A&C Group, Unlock combination etc",
                    "Duress alarm offers effective protection against duress by threats",
                    "Tamper-proofs switch and multiple alarm outputs"
                ], 
                specs: {
                    "Fingerprint Capacity": "1500",
                    "Card Capacity": "5000",
                    "Transactions": "80000 Logs",
                    "Fingerprint Sensor": "500 DPI Optical sensor",
                    "Display": "2.4” TFT",
                    "Algorithm": "VX10.0 version",
                    "Communication": "TCP/IP, RS485, USB-host",
                    "Power": "DC 12V/3A",
                    "Operating Temperature": "0°C - 45°C",
                    "Operating Humidity": "20% - 80%",
                    "Dimension (W x L x H)": "90 x 90 x 34.5 mm",
                    "Access Control Interface": "Exit Reader KR500E, Electric lock, Door sensor, Alarm, Exit button, Door bell",
                    "Wiegand Signal": "Wiegand input & output"
                }, 
                sections: {
                    catalogStyle: 'sf100',
                    col1: [
                        {
                            title: "Technical Specifications",
                            items: [
                                "Fingerprint Capacity : 1,500",
                                "Card Capacity : 5000",
                                "Transactions : 80,000 Logs",
                                "Fingerprint Sensor : 500 DPI Optical sensor",
                                "Display : 2.4” TFT",
                                "Algorithm : VX10.0 version",
                                "Communication : TCP/IP, RS485, USB-host",
                                "Power : DC 12V/3A",
                                "Operating Temperature : 0°C - 45°C",
                                "Operating Humidity : 20% - 80%",
                                "Dimension (W x L x H) : 90 x 90 x 34.5 mm",
                                "Supports : Exit Reader KR500E, Electric lock, Door sensor, Alarm, Exit button, Door bell",
                                "Wiegand Signal : Wiegand input & output"
                            ]
                        }
                    ],
                    col2: [
                        {
                            title: "Features",
                            items: [
                                "Voice prompt for acceptance and rejection of valid/invalid fingers",
                                "Compact and lightweight, small size for 86x86mm soket installation",
                                "Upto 15 multi-verification methods to enhance securiy level",
                                "Standard access control features such as Time zone, Holiday, A&C Group, Unlock combination etc",
                                "Duress alarm offers effective protection against duress by threats",
                                "Tamper-proofs switch and multiple alarm outputs"
                            ]
                        }
                    ]
                },
                pdf: null, 
                desc: 'SF100 is an IP-based compact fingerprint access control and attendance reader. Fully integrated with WMWave\'s cloud platform for secure, real-time attendance and access management.' 
            },
            { 
                id: 'f-18', 
                name: 'F18', 
                category: 'Fingerprint',
                type: 'Standalone Fingerprint Time Attendance & Access Control System',
                images: ['/assets/images/prod_f18_device.png'], 
                highlights: [
                    "Fingerprints Capacity : 3000",
                    "Card Capacity : 5000",
                    "Transaction Capacity : 100000",
                    "Fingerprint Sensor : 500 DPI Optical Sensor",
                    "Display : 2.8\" color TFT with numeric keypad and doorbell button",
                    "CPU : 32 bit High End Microprocessor with <=0.5sec matching speed",
                    "Wiegand In & Out with support for slave exit readers FR 1200 / KR 500",
                    "Real-time cloud push data connectivity with WMWave platform"
                ], 
                specs: {
                    "Fingerprints Capacity": "3000",
                    "Card Capacity": "5000",
                    "Transaction Capacity": "100000",
                    "CPU": "32 bit High End Microprocessor",
                    "Fingerprint Sensor": "500 DPI Optical sensor",
                    "FAR / FRR": "<=0.0001% / <=1%",
                    "Identification Speed": "<=0.5sec",
                    "Algorithm Ver": "9/10",
                    "Display": "2.8\" color TFT",
                    "Keypad": "Yes",
                    "LED Indicator": "Green/Red",
                    "Schedule Bell/Speaker": "Mini Speaker",
                    "Communication": "TCP/IP, USB host, Push data",
                    "Power Supply": "DC 12V --- 1.5A",
                    "Operating Temp": "0 °C - 45 °C",
                    "Operating Humidity": "20% - 80%",
                    "Dimensions (in mm)": "(L)183 x (W)80 x (H)42",
                    "Access Control": "Wiegand In & Out, 12V Relay, Door Sensor, Anti Passback, Door Bell",
                    "Exit Readers": "FR 1200 / KR 500",
                    "Compatible Software & SDK": "eTimeTrackLite desktop & web, SDK for desktop, WMWave Cloud"
                }, 
                sections: {
                    catalogStyle: 'f18',
                    col1: [
                        {
                            title: "Storage Capacity",
                            items: [
                                "Fingerprints Capacity : 3000",
                                "Card Capacity : 5000",
                                "Transaction Capacity : 100,000"
                            ]
                        },
                        {
                            title: "Biometric",
                            items: [
                                "CPU : 32 bit High End Microprocessor",
                                "Fingerprint sensor : 500 DPI Optical sensor",
                                "FAR : <=0.0001%",
                                "FRR : <=1%",
                                "Identification speed : <=0.5sec",
                                "Algorithm Ver : 9/10"
                            ]
                        },
                        {
                            title: "Audio & Visual",
                            items: [
                                "Display : 2.8\" color TFT",
                                "Keypad : Yes",
                                "LED Indicator : Green/Red",
                                "Schedule Bell/Speaker : Mini Speaker"
                            ]
                        },
                        {
                            title: "Communication",
                            items: [
                                "Communication : TCP/IP,USB host",
                                "Push data : Standard"
                            ]
                        },
                        {
                            title: "Standard Functions",
                            items: [
                                "DLST, Self Service Query, Status Switch"
                            ]
                        },
                        {
                            title: "Power & Environment",
                            items: [
                                "Power Supply : DC 12V --- 1.5A",
                                "Operating Temp : 0 °C - 45 °C",
                                "Operating Humidity : 20% - 80%",
                                "Dimensions (in mm) : (L)183 x (W)80 x (H)42"
                            ]
                        }
                    ],
                    col2: [
                        {
                            title: "Access control",
                            items: [
                                "Wiegand : In & Out",
                                "Relay : 12 V relay for lock EM lock, Bolt Lock or Strike lock",
                                "Door Sensor : Yes",
                                "Anti Passback : Yes",
                                "Door Bell : Yes"
                            ]
                        },
                        {
                            title: "Exit Readers",
                            items: [
                                "Support exit readers : FR 1200/KR 500"
                            ]
                        },
                        {
                            title: "Optional",
                            items: [
                                "Card Readers : Yes",
                                "Card Type : Mifare/HID Prox"
                            ]
                        },
                        {
                            title: "Compatibility",
                            items: [
                                "- Compatible with Multi Door controllers via weigand",
                                "- External Speaker output available (Optional)",
                                "- External Bulb output available (Optional)"
                            ]
                        },
                        {
                            title: "Compatible Software and SDK",
                            items: [
                                "- Etime track lite desktop & web",
                                "- SDK for desktop applications",
                                "- Web based Device Manager/ePush server using Push data, Helps developers & integrators",
                                "- Supports 3rd Party Payroll/HRMS/ERP and Other applications"
                            ]
                        },
                        {
                            title: "Major Applications",
                            items: [
                                "Time & Attendance , Canteen management, School attedance, Production Management, Gym & clubs"
                            ]
                        }
                    ]
                },
                pdf: null, 
                desc: 'F18 is an innovative biometric fingerprint reader for access control and time attendance. Fully integrated with WMWave\'s cloud platform for secure, real-time attendance and access management.' 
            }
        ,
            {
                "id": "k-90",
                "name": "K90",
                "category": "Finger-print",
                "type": "Standalone Fingerprint Time & Attendance Terminal with Battery Backup",
                "images": ['/assets/images/prod_k90_clean.png'],
                "highlights": [
                    "Fingerprint Capacity : 800",
                    "Card Capacity : 800 (Optional)",
                    "Transaction Capacity : 50000",
                    "Fingerprint Sensor : 500 DPI Optical Sensor",
                    "Display : 2.8-inch TFT Color Screen",
                    "Built-in Battery Backup : 2 to 4 hours",
                    "Communication : TCP/IP, USB-Host",
                    "Push data : Yes (Cloud Management supported)"
                ],
                "specs": {
                    "Fingerprint Capacity": "800",
                    "Card Capacity": "800 (Optional)",
                    "Transaction Capacity": "50000",
                    "Display": "2.8-inch TFT Color Screen",
                    "Fingerprint Sensor": "500 DPI Optical Sensor",
                    "Communication": "TCP/IP, USB Host / Client",
                    "Power Supply": "DC 5V 1A",
                    "Battery Backup": "Built-in Battery Backup (up to 4 hours)",
                    "Operating Temperature": "0°C - 45°C",
                    "Operating Humidity": "20% - 80%",
                    "Standard Functions": "Workcode, SMS, DST, Self-Service Query, Automatic Status Switch, T9 Input",
                    "Compatible Software": "eTimeTrackLite, Web Cloud Attendance, 3rd Party HRMS/Payroll",
                    "Major Applications": "Offices, Retail Stores, Schools, Small and Medium Businesses"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Capacity & Display",
                            "items": [
                                "Fingerprint Capacity : 800",
                                "Card Capacity : 800 (Optional)",
                                "Record Capacity : 50000",
                                "Display : 2.8-inch TFT Color Screen"
                            ]
                        },
                        {
                            "title": "Biometric & Verification",
                            "items": [
                                "Sensor : 500 DPI Optical Sensor",
                                "Verification Speed : <= 0.5 sec",
                                "FAR / FRR : <= 0.0001% / <= 1%",
                                "Algorithm : Latest Biometric Verification Finger V10"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Connectivity & Power",
                            "items": [
                                "Communication : TCP/IP, USB-Host, USB-Client",
                                "Power Supply : 5V DC, 1A",
                                "Internal Battery : Built-in Li-ion Battery Backup",
                                "Push Data : Yes, real-time cloud data sync"
                            ]
                        },
                        {
                            "title": "Environment & Form Factor",
                            "items": [
                                "Operating Temperature : 0°C to 45°C",
                                "Operating Humidity : 20% to 80%",
                                "Dimensions : 185 x 140 x 30 mm",
                                "Software Compatibility : eTimeTrackLite Desktop & Cloud"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL K90 is an economical, standalone biometric fingerprint time and attendance terminal equipped with internal battery backup, 2.8\" color TFT screen, and cloud push data integration."
            },
            {
                "id": "i-9c",
                "name": "i9C",
                "category": "Finger-print",
                "type": "High-Capacity Standalone Fingerprint Time Attendance Terminal",
                "images": ['/assets/images/prod_x990_isolated.png'],
                "highlights": [
                    "Fingerprint Capacity : 3000",
                    "Card Capacity : 3000 (Optional)",
                    "Transaction Capacity : 100000",
                    "Display : 3-inch Color TFT Screen",
                    "Communication : TCP/IP, USB-Host, Optional WiFi",
                    "Push data : Yes (Cloud server supported)",
                    "SSR Report generation in Excel directly from USB",
                    "Built-in battery backup support"
                ],
                "specs": {
                    "Fingerprint Capacity": "3000",
                    "Card Capacity": "3000 (Optional)",
                    "Transaction Capacity": "100000",
                    "Display": "3\" Color TFT Screen",
                    "Communication": "TCP/IP, USB-Host, USB-Client",
                    "Sensor": "500 DPI Optical Sensor",
                    "Identification Speed": "<= 0.5s",
                    "Power Supply": "DC 5V 1A",
                    "Battery Backup": "Built-in Battery",
                    "Operating Temperature": "0°C - 45°C",
                    "Operating Humidity": "20% - 80%",
                    "Standard Features": "SSR Excel Attendance, T9 input, Workcode, DST",
                    "Compatible Software": "eTimeTrackLite, Cloud Web Attendance, ERP Integration"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Storage Capacity",
                            "items": [
                                "Fingerprint Capacity : 3000",
                                "Card Capacity : 3000",
                                "Transaction Capacity : 100000",
                                "Display : 3-inch TFT Color Display"
                            ]
                        },
                        {
                            "title": "Biometric & Hardware",
                            "items": [
                                "Sensor : 500 DPI High-Resolution Optical Sensor",
                                "Verification Speed : < 0.5 sec",
                                "Keypad : 16 keys numeric keypad",
                                "Speaker : Voice prompt indicator"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Communication & Power",
                            "items": [
                                "Communication : TCP/IP, USB Host / Client",
                                "Push Data : High-speed cloud sync",
                                "Battery : Built-in rechargeable backup",
                                "Power Supply : 5V DC"
                            ]
                        },
                        {
                            "title": "Features & Software",
                            "items": [
                                "SSR Reports : Export Excel attendance to USB",
                                "Software : eTimeTrackLite Desktop & Web",
                                "Operating Temp : 0°C - 45°C",
                                "Major Applications : Corporate Offices, Factories, Institutions"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL i9C is a high-capacity fingerprint time and attendance machine featuring 3,000 fingerprint storage, 100,000 transaction records, direct Excel SSR reporting, and integrated battery backup."
            },
            {
                "id": "p-160",
                "name": "P160",
                "category": "Finger-print",
                "type": "Multi-Biometric Palm & Fingerprint Time Attendance & Access Control",
                "images": [
                    "/assets/images/prod_p160.png"
                ],
                "highlights": [
                    "Palm Capacity : 1000",
                    "Fingerprint Capacity : 2000",
                    "Card Capacity : 2000 (Optional ID/Mifare)",
                    "Transaction Capacity : 100000",
                    "Display : 2.8-inch TFT Color Screen",
                    "Contactless Palm Vein Authentication",
                    "Communication : TCP/IP, USB-Host, Optional Wi-Fi",
                    "Access Control Interface for EM Lock, Door Sensor, Exit Button"
                ],
                "specs": {
                    "Palm Capacity": "1000",
                    "Fingerprint Capacity": "2000",
                    "Card Capacity": "2000",
                    "Transaction Capacity": "100000",
                    "Display": "2.8-inch Color Display",
                    "Sensor": "BioID Fingerprint Sensor & Contactless Palm Scanner",
                    "Verification Speed": "<= 0.5s",
                    "Access Control": "Lock relay, Door sensor, Exit button",
                    "Communication": "TCP/IP, USB-Host, Optional Wi-Fi",
                    "Power Supply": "12V DC 1.5A",
                    "Dimensions": "179.95 x 134.94 x 38.5 mm",
                    "Operating Temperature": "0°C - 45°C",
                    "Operating Humidity": "20% - 80%",
                    "Software": "eTimeTrackLite, Web Attendance, Cloud API"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Capacity & Biometrics",
                            "items": [
                                "Palm Capacity : 1000",
                                "Fingerprint Capacity : 2000",
                                "Card Capacity : 2000",
                                "Log Capacity : 100000",
                                "Recognition Mode : Contactless Palm & Fingerprint"
                            ]
                        },
                        {
                            "title": "Display & Hardware",
                            "items": [
                                "Display : 2.8-inch TFT Screen",
                                "Sensor : SilkID/BioID High Precision Sensor",
                                "Keypad : 4x4 keypad with navigation",
                                "Audio : High definition voice prompts"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Connectivity & Access",
                            "items": [
                                "Communication : TCP/IP, USB Host, Optional Wi-Fi",
                                "Access Control : 3rd Party Electric Lock, Door Sensor, Exit Button",
                                "Push Protocol : Cloud Data Push",
                                "Power Supply : 12V DC, 1.5A"
                            ]
                        },
                        {
                            "title": "Physical & Applications",
                            "items": [
                                "Dimensions : 180 x 135 x 38.5 mm",
                                "Operating Temp : 0°C - 45°C",
                                "Software : eTimeTrackLite Web / Desktop",
                                "Target Sectors : Healthcare, Cleanrooms, High-Traffic Corporate"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL P160 is a next-generation multi-biometric time attendance and access control terminal combining hygienic contactless palm authentication with high-accuracy fingerprint recognition."
            },
            {
                "id": "x-7",
                "name": "X7",
                "category": "Finger-print",
                "type": "Standalone Fingerprint & RFID Access Control Reader",
                "images": [
                    "/assets/images/prod_x7.png"
                ],
                "highlights": [
                    "Fingerprint Capacity : 500",
                    "Card Capacity : 500 (EM Card)",
                    "Sensor : Reliable Optical Sensor",
                    "Simple Standalone Access Control (No software required for programming)",
                    "Access Interface : 3rd Party Electric Lock, Alarm, Door Sensor, Exit Button, Doorbell",
                    "Compact and Sleek Design for Server Rooms & Small Offices"
                ],
                "specs": {
                    "Fingerprint Capacity": "500",
                    "Card Capacity": "500",
                    "Sensor": "Optical Fingerprint Sensor",
                    "Keypad": "Numeric Keypad with Doorbell button",
                    "Access Control Interface": "3rd party electric lock, door sensor, exit button, alarm, doorbell",
                    "Power Supply": "12V DC 3A",
                    "Operating Temperature": "0°C - 40°C",
                    "Operating Humidity": "20% - 80%",
                    "Dimensions": "88 x 88 x 33.6 mm",
                    "Enclosure": "High impact ABS casing"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Capacity & Identification",
                            "items": [
                                "Fingerprint Capacity : 500",
                                "Card Capacity : 500 EM Cards",
                                "Sensor : Optical Fingerprint Sensor",
                                "Identification Speed : < 1 sec"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Access Control & Hardware",
                            "items": [
                                "Lock Output : 12V Relay for EM / Strike lock",
                                "Inputs : Door sensor, Exit button",
                                "Dimensions : 88 x 88 x 33.6 mm",
                                "Power Supply : 12V DC, 3A"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL X7 is an ultra-compact standalone fingerprint and RFID card access reader designed for secure standalone door control, server rooms, and restricted office spaces."
            },
            {
                "id": "k-30",
                "name": "eSSL K30",
                "category": "Finger-print",
                "type": "Fingerprint Time Attendance & Access Control with Battery Backup",
                "images": ['/assets/images/prod_k30_clean.png'],
                "highlights": [
                    "Fingerprint Capacity : 1000",
                    "Card Capacity : 1000",
                    "Transaction Capacity : 100000",
                    "Built-in Battery Backup : Up to 4 Hours operation",
                    "Display : 2.8-inch TFT Color Display",
                    "Communication : TCP/IP, USB Host",
                    "Access Control Relay for EM Lock connection"
                ],
                "specs": {
                    "Fingerprint Capacity": "1000",
                    "Card Capacity": "1000",
                    "Transaction Capacity": "100000",
                    "Display": "2.8-inch Color TFT",
                    "Communication": "TCP/IP, USB Host",
                    "Battery Backup": "Internal Battery Backup (2000 mAh)",
                    "Access Control": "Relay for electric lock, exit button",
                    "Power Supply": "12V DC 1.5A",
                    "Operating Temperature": "0°C - 45°C",
                    "Operating Humidity": "20% - 80%",
                    "Dimensions": "184 x 136 x 37.6 mm",
                    "Software": "eTimeTrackLite Desktop and Cloud"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Capacity & Screen",
                            "items": [
                                "Fingerprint Capacity : 1000",
                                "Card Capacity : 1000",
                                "Log Capacity : 100000",
                                "Display : 2.8-inch TFT Color Screen"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Connectivity & Power",
                            "items": [
                                "Communication : TCP/IP, USB Host",
                                "Battery : Built-in Battery Backup",
                                "Power Supply : 12V DC, 1.5A",
                                "Software : eTimeTrackLite Cloud & Desktop"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL eSSL K30 is a popular, cost-effective biometric fingerprint time-attendance and door access terminal featuring a 2.8-inch color display and built-in lithium backup battery."
            }
        ],
        'qr-reader': [
            {
                "id": "qr-600-vk",
                "name": "QR600-VK Attendance Terminal",
                "category": "QR Reader",
                "type": "QR Code, RFID & Keypad Standalone Time Attendance & Access Terminal",
                "images": ['/assets/images/prod_qr600_clean.png'],
                "highlights": [
                    "Scans Dynamic Mobile QR Codes, PDF417, Data Matrix, QR Code & Barcodes",
                    "Log Capacity : 100000 Attendance Transactions",
                    "Built-in RFID Proximity Card Reader (Mifare / Desfire / ID)",
                    "Touch Keypad with Backlit illumination",
                    "Communication : TCP/IP, USB, Wiegand in/out, RS485",
                    "Cloud Push Attendance support for remote workforce management",
                    "Weatherproof IP65 metal casing suitable for outdoor installations"
                ],
                "specs": {
                    "Attendance Log Capacity": "100000",
                    "Card Capacity": "10000",
                    "Barcode & QR Reading": "Dynamic QR Code, Static QR, PDF417, Data Matrix, GS1, EAN",
                    "Reading Distance": "QR code: 2cm - 8cm, RFID Card: 2cm - 5cm",
                    "Display / Keypad": "Touch Keypad with LED Indicator and Buzzer",
                    "Communication": "TCP/IP, USB, Wiegand, RS485",
                    "Push Data Protocol": "Yes, Real-Time Cloud Server Push",
                    "Operating Voltage": "DC 12V (±5%)",
                    "Ingress Protection": "IP65 Waterproof & Dustproof",
                    "Operating Temperature": "-20°C to 60°C",
                    "Dimensions": "138 x 58 x 18 mm",
                    "Software Support": "WMWave Cloud Attendance, eTimeTrackLite, Mobile App Check-In"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Attendance & QR Scanning",
                            "items": [
                                "Transaction Capacity : 100000 Records",
                                "Card Capacity : 10000 Proximity Cards",
                                "Supported QR Formats : Dynamic Mobile QR, Static QR, PDF417, Data Matrix",
                                "Scan Speed : < 0.2s instant optical recognition",
                                "Reading Distance : 20mm - 80mm from screen or paper"
                            ]
                        },
                        {
                            "title": "Hardware & Protection",
                            "items": [
                                "Enclosure : Zinc Alloy with IP65 weather resistance",
                                "Keypad : Touch Keypad with LED Backlight",
                                "Audio/Visual : Tri-color status LED & internal buzzer",
                                "Protection Rating : IP65 Waterproof rating"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Connectivity & Integration",
                            "items": [
                                "Communication : TCP/IP, USB, Wiegand 26/34, RS485",
                                "Cloud Push : PUSH protocol to central attendance server",
                                "Power Supply : 12V DC, 1A",
                                "Operating Temperature : -20°C to +60°C"
                            ]
                        },
                        {
                            "title": "Applications & Software",
                            "items": [
                                "Software Compatibility : WMWave Cloud, eTimeTrackLite Web",
                                "Mobile App Integration : Dynamic one-time QR for employee clock-in",
                                "Use Cases : Commercial towers, visitor management, IT campuses"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL QR600-VK is a heavy-duty, IP65-rated standalone QR code and RFID attendance terminal designed for dynamic mobile QR check-ins and frictionless touchless workforce logging."
            },
            {
                "id": "uface-800-qr",
                "name": "uFace 800 Plus QR",
                "category": "QR Reader",
                "type": "Multi-Biometric Time Attendance Terminal with Integrated QR Scanner",
                "images": ['/assets/images/prod_fqr100_device.png'],
                "highlights": [
                    "Attendance Modes : Dynamic QR Code, Face, Fingerprint & RFID Card",
                    "Face Capacity : 3000 | Fingerprint : 4000 | Log Capacity : 100000",
                    "Integrated High-Speed Optical QR Scanner for screen and paper badges",
                    "Display : 4.3-inch Touch Screen with intuitive GUI",
                    "Backup Battery : Built-in 2000mAh Battery for uninterrupted operation",
                    "Communication : TCP/IP, USB Host, Optional Wi-Fi & 4G",
                    "Push Data : Automated instant push to WMWave cloud servers"
                ],
                "specs": {
                    "Face Capacity": "3000",
                    "Fingerprint Capacity": "4000",
                    "QR / Card Capacity": "10000",
                    "Record Capacity": "100000",
                    "Display": "4.3-inch Touch Screen",
                    "QR Sensor": "Wide-angle embedded 2D barcode & QR scanner",
                    "Communication": "TCP/IP, USB-Host, Optional Wi-Fi / 4G",
                    "Battery": "Built-in 2000 mAh backup battery",
                    "Access Control": "Door relay, door sensor, exit button",
                    "Power Supply": "12V DC 3A",
                    "Operating Temperature": "0°C - 45°C",
                    "Operating Humidity": "20% - 80%",
                    "Software": "WMWave Cloud Attendance, eTimeTrackLite Web"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Multi-Biometric Capacity",
                            "items": [
                                "Face Capacity : 3000",
                                "Fingerprint Capacity : 4000",
                                "QR / Card Capacity : 10000",
                                "Transaction Capacity : 100000 Records",
                                "QR Code Compatibility : Dynamic Mobile QR & Printed Passes"
                            ]
                        },
                        {
                            "title": "Display & Audio",
                            "items": [
                                "Display : 4.3-inch Capacitive Color Touchscreen",
                                "Camera : High-resolution infrared dual camera",
                                "Audio : Stereo voice prompt confirmation",
                                "Battery : Internal 2000mAh Lithium Backup"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Communication & Power",
                            "items": [
                                "Network : TCP/IP, USB Host, Optional Wi-Fi / 4G",
                                "Push Protocol : HTTP / HTTPS Cloud Push Attendance",
                                "Access Relay : Inbuilt lock relay and exit button interface",
                                "Power Supply : 12V DC 3A"
                            ]
                        },
                        {
                            "title": "Software & Deployment",
                            "items": [
                                "Software : WMWave Cloud Ecosystem, eTimeTrackLite",
                                "Applications : Multi-location enterprises, factories, educational campuses",
                                "Operating Range : 0°C to 45°C, 20% to 80% humidity"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL uFace 800 Plus QR is an all-in-one biometric workforce management terminal featuring dynamic QR code scanning, facial recognition, fingerprint verification, and built-in battery backup."
            },
            {
                "id": "speedface-qr",
                "name": "SpeedFace-V5L QR",
                "category": "QR Reader",
                "type": "Visible Light Facial & Dynamic QR Code Attendance System",
                "images": ['/assets/images/prod_fqr80_device.png'],
                "highlights": [
                    "Attendance Methods : Dynamic Mobile QR Code, Visible Light Face, RFID Card",
                    "Face Capacity : 6000 | QR Logs : 200000 Records",
                    "0.2-second Rapid Recognition for dynamic QR codes generated by employee mobile apps",
                    "Anti-Spoofing Algorithm against print attack and video playback",
                    "Display : 5-inch IPS Touch LCD Display",
                    "Communication : TCP/IP, Wi-Fi, Wiegand Input & Output, RS485",
                    "Direct Cloud Push Data integration for centralized attendance"
                ],
                "specs": {
                    "Face Capacity": "6000",
                    "Card / QR Capacity": "10000",
                    "Transaction Capacity": "200000",
                    "Display": "5-inch Touch Screen",
                    "QR Recognition Speed": "< 0.2s",
                    "Camera": "2MP WDR Low Light Dual Camera",
                    "Communication": "TCP/IP, Wi-Fi, RS485, Wiegand",
                    "Power Supply": "12V DC 3A",
                    "Dimensions": "202.93 x 91.93 x 22.5 mm",
                    "Operating Temperature": "-10°C to 45°C",
                    "Software": "WMWave Enterprise Cloud Attendance, eTimeTrackLite Web"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Verification & Capacities",
                            "items": [
                                "Face Capacity : 6000",
                                "Dynamic QR / Card Capacity : 10000",
                                "Log Capacity : 200000 Entries",
                                "QR Recognition Speed : < 0.2s high speed scanning",
                                "Screen : 5-inch IPS Touch LCD Screen"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Networking & Features",
                            "items": [
                                "Communication : TCP/IP, Wi-Fi, RS485, Wiegand",
                                "Push SDK : Cloud Real-Time Push supported",
                                "Camera : 2MP WDR Binocular Camera",
                                "Applications : Corporate headquarters, tech parks, hospitals"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL SpeedFace-V5L QR combines Visible Light AI face technology with high-speed dynamic mobile QR code verification for zero-touch, high-throughput enterprise attendance."
            },
            {
                "id": "mb20-qr",
                "name": "MB20-QR Attendance System",
                "category": "QR Reader",
                "type": "Compact QR Code & Fingerprint Workforce Attendance Machine",
                "images": ['/assets/images/prod_qr_1.png'],
                "highlights": [
                    "Cost-effective workforce attendance machine for small and medium enterprises",
                    "Supports Employee Mobile QR Code Scan and Biometric Fingerprint",
                    "Fingerprint / QR Capacity : 1000 | Record Capacity : 50000",
                    "Display : 2.8-inch Color TFT Display",
                    "Communication : TCP/IP, USB Host for offline USB drive report download",
                    "Cloud Push SDK for automated synchronization to payroll software"
                ],
                "specs": {
                    "QR / User Capacity": "1000",
                    "Fingerprint Capacity": "1000",
                    "Record Capacity": "50000",
                    "Display": "2.8-inch Color TFT",
                    "Communication": "TCP/IP, USB-Host",
                    "Power Supply": "5V DC 1A",
                    "Operating Temperature": "0°C - 45°C",
                    "Dimensions": "161.93 x 152.82 x 30.59 mm",
                    "Software": "WMWave Cloud Attendance, eTimeTrackLite"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Capacity & Features",
                            "items": [
                                "User Capacity : 1000",
                                "Record Capacity : 50000",
                                "Display : 2.8-inch Color TFT",
                                "Verification : QR Code & Fingerprint"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Communication & Power",
                            "items": [
                                "Communication : TCP/IP, USB-Host",
                                "Power Supply : 5V DC 1A",
                                "Operating Temp : 0°C - 45°C",
                                "Applications : Retail outlets, small clinics, logistics offices"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL MB20-QR is a budget-friendly workforce attendance machine enabling staff clock-in via mobile QR codes and optical biometric verification with seamless cloud reporting."
            },
            {
                "id": "aiface-mars-qr",
                "name": "AI Face Mars QR",
                "category": "QR Reader",
                "type": "AI Facial & QR Code Enterprise Attendance Terminal",
                "images": ['/assets/images/prod_qr_indian.png'],
                "highlights": [
                    "Attendance via Dynamic Mobile QR Code, Facial Recognition, and RFID Cards",
                    "Face Capacity : 5000 | Card / QR : 10000 | Log Capacity : 150000",
                    "Dual Infrared and Visible Light Cameras with 0.2s identification",
                    "Display : 5-inch HD IPS Touch Screen",
                    "Built-in PoE (Power over Ethernet) & Wi-Fi support",
                    "Cloud-native real-time push data streaming to WMWave dashboard"
                ],
                "specs": {
                    "Face Capacity": "5000",
                    "QR & Card Capacity": "10000",
                    "Record Capacity": "150000",
                    "Display": "5-inch IPS HD Touch Screen",
                    "Camera": "2MP Dual Camera with IR Night Vision",
                    "Communication": "TCP/IP, Wi-Fi, Optional PoE, RS485, Wiegand",
                    "Power Supply": "12V DC 2A / PoE",
                    "Operating Temperature": "-10°C to 50°C",
                    "Software": "WMWave Cloud Workforce Management, eTimeTrackLite Web"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Capacity & Performance",
                            "items": [
                                "Face Capacity : 5000",
                                "QR Code Users : 10000",
                                "Log Capacity : 150000",
                                "QR Scan Speed : 0.2 seconds instant match",
                                "Display : 5-inch IPS HD Touchscreen"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Connectivity & Standards",
                            "items": [
                                "Communication : TCP/IP, Wi-Fi, PoE, Wiegand",
                                "Cloud Push : Native WMWave cloud push sync",
                                "Power Supply : 12V DC / PoE compliant",
                                "Deployment : Enterprise headquarters, banking branches, IT parks"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL AI Face Mars QR is an enterprise powerhouse combining wide-angle dual cameras with rapid 0.2s mobile QR code recognition for touchless, multi-modal workforce attendance."
            }
        ],
        'face-recognition': [
            { 
                id: 'aiface-vesta-poe', 
                name: 'eSSL Face Vesta+POE', 
                category: 'Face',
                type: '5" Touch Screen Visible Light Facial Recognition & RFID Terminal',
                images: ['/assets/images/prod_aiface_vesta_device.png'], 
                highlights: [
                    "Display: 5\" Touch Screen",
                    "Face Capacity: 6,000",
                    "Card Capacity: 10,000",
                    "Transaction: 200,000",
                    "Communication: TCP/IP, Wi-Fi (Optional), Wiegand Input / Output, RS485",
                    "Facial Recognition Speed: ≤0.5s per face",
                    "Visible Light Facial Recognition with Anti-spoofing algorithm against photos/videos/3D masks",
                    "Working Temperature: -30°C to 60°C | Working Humidity: 10% to 90%"
                ], 
                specs: {
                    "Display": "5\" Touch Screen",
                    "Face Capacity": "6,000",
                    "Card Capacity": "10,000",
                    "Transaction": "200,000",
                    "Operating System": "Linux",
                    "Communication": "TCP/IP, Wi-Fi (Optional), Wiegand Input / Output, RS485",
                    "Optional Card Type": "Mifare",
                    "Access Control Interface": "Electro Magnetic Lock/ Electric Lock, Door Sensor, Exit Button",
                    "Facial Recognition Speed": "≤0.5s per face",
                    "Power": "Voltage: DC 12V | Current: Max. 3A",
                    "Working Humidity": "10% to 90%",
                    "Working Temperature": "-30°C to 60°C",
                    "Dimensions (W*H*D)": "103.83*212.41*50.60 (mm)",
                    "Supported Software": "eTimeTrackLite Software"
                }, 
                sections: {
                    catalogStyle: 'aiface_vesta',
                    col1: [
                        {
                            title: "Product Feature:",
                            items: [
                                "Display : 5\" Touch Screen",
                                "Face Capacity : 6,000",
                                "Card Capacity : 10,000",
                                "Transaction : 200,000",
                                "Operating System : Linux",
                                "Communication : TCP/IP, Wi-Fi (Optional), Wiegand Input / Output, RS485",
                                "Optional Card Type : Mifare",
                                "Access Control Interface : Electro Magnetic Lock/ Electric Lock, Door Sensor, Exit Button",
                                "Facial Recognition Speed : ≤0.5s per face",
                                "Power : Voltage: DC 12V | Current: Max. 3A",
                                "Working Humidity : 10% to 90%",
                                "Working Temperature : -30°C to 60°C",
                                "Dimensions (W*H*D) : 103.83*212.41*50.60 (mm)",
                                "Supported Software : eTimeTrackLite Software"
                            ]
                        }
                    ],
                    col2: [
                        {
                            title: "Features",
                            items: [
                                "Visible Light Facial Recognition",
                                "Anti-spoofing algorithm against almost all kinds of print attack (laser, color and B/W photos), videos attack and 3D mask attack",
                                "Supplement light with adjustable brightness"
                            ]
                        }
                    ]
                },
                pdf: null, 
                desc: 'Aiface Vesta+POE is a high-capacity 5-inch visible light facial recognition and RFID access terminal with Linux OS. Fully integrated with WMWave\'s cloud platform for secure, real-time attendance and access management.' 
            },
            { 
                id: 'aiface-magnum', 
                name: 'eSSL Face Magnum', 
                category: 'Face',
                type: 'Multi-Biometric Time Attendance & Access Control System',
                images: ['/assets/images/prod_aiface_magnum_device.png'], 
                highlights: [
                    "IP65 water and dust resistance",
                    "Operating temperature from -5°C to 45°C",
                    "Support Facial / Fingerprint / RFID",
                    "Available card modules : 12.5 KHz ID card / 13.56MHz IC card",
                    "Fill Light with adjustable brightness",
                    "On Board Web Server for system configuration",
                    "Face Capacity : 1500 | Fingerprint Capacity : 5000 | Card Capacity : 10,000",
                    "Transaction Capacity : 200,000 | Speed : < 1s (0.5m to 2m distance)"
                ], 
                specs: {
                    "Face Capacity": "1500",
                    "Fingerprint Capacity": "5000",
                    "Card Capacity": "10,000",
                    "Transaction Capacity": "200,000",
                    "Display": "2.4-inch touch Screen",
                    "Facial Recognition Algorithm": "eSSLFace 3.5",
                    "Facial Recognition Speed": "< 1s",
                    "Facial Recognition Distance": "0.5m to 2m",
                    "Communication": "TCP/IP, WiFi(Optional), Wiegand Input/Output, RS485",
                    "Operation System": "Linux",
                    "Standard Functions": "ADMS, DST, Camera, 14-digit User ID, Access Levels, Groups, Holidays, Anti passback, Record Query, Tamper Switch Alarm, Multiple Anti-Passback",
                    "Hardware": "1.2GHz Dual Core CPU, 256MB RAM/512MB Flash, 1MP Binocular Camera Adjustable LED Fill Light",
                    "Access Control Interface": "3rd Party Electric Lock, Door Sensor, Exit Button, Alarm output, Auxiliary Input",
                    "Power Supply": "12V 3A",
                    "Ingress Protection Rating": "IP65",
                    "Operating Temperature": "-5°C to 45°C",
                    "Operating Humidity": "10% to 90% RH",
                    "Dimensions(L*W*D)": "185*58.5*20mm",
                    "Supported Softwares": "eTimeTracklite"
                }, 
                sections: {
                    catalogStyle: 'aiface_magnum',
                    col1: [
                        {
                            title: "Technical Specifications",
                            items: [
                                "Face Capacity : 1500",
                                "Fingerprint Capacity : 5000",
                                "Card Capacity : 10,000",
                                "Transaction Capacity : 200,000",
                                "Display : 2.4-inch touch Screen",
                                "Facial Recognition Algorithm : eSSLFace 3.5",
                                "Facial Recognition Speed : < 1s",
                                "Facial Recognition Distance : 0.5m to 2m",
                                "Communication : TCP/IP, WiFi(Optional), Wiegand Input/Output, RS485",
                                "Operation System : Linux",
                                "Standard Functions : ADMS, DST, Camera, 14-digit User ID, Access Levels, Groups, Holidays, Anti passback, Record Query, Tamper Switch Alarm",
                                "Hardware : 1.2GHz Dual Core CPU, 256MB RAM/512MB Flash, 1MP Binocular Camera Adjustable LED Fill Light",
                                "Access Control Interface : 3rd Party Electric Lock, Door Sensor, Exit Button, Alarm output, Auxiliary Input",
                                "Power Supply : 12V 3A",
                                "Ingress Protection Rating : IP65",
                                "Operating Temperature : -5°C to 45°C",
                                "Operating Humidity : 10% to 90% RH",
                                "Dimensions(L*W*D) : 185*58.5*20mm",
                                "Supported Softwares : eTimeTracklite"
                            ]
                        }
                    ],
                    col2: [
                        {
                            title: "Features",
                            items: [
                                "IP65 water and dust resistance",
                                "Operating temperature from -5°C to 45°C",
                                "Support Facial / Fingerprint / RFID",
                                "Available card modules : 12.5 KHz ID card / 13.56MHz IC card",
                                "Fill Light with adjustable brightness",
                                "On Board Web Server for system configuration"
                            ]
                        },
                        {
                            title: "Configuration",
                            items: [
                                "Supported Topology: Cloud Push Server, Local LAN, Standalone",
                                "Access Control: EM Lock, Bolt Lock, Door Sensor, Exit Button, Alarm, Card Reader, Smoke Detector"
                            ]
                        }
                    ]
                },
                pdf: null, 
                desc: 'Aiface Magnum is an IP65 water and dust resistant multi-biometric terminal supporting Facial recognition, Fingerprint, and RFID smart cards. Fully integrated with WMWave\'s cloud platform for secure, real-time attendance and access management.' 
            },
            { 
                id: 'aiface-magnum-lite', 
                name: 'eSSL Face Magnum Lite', 
                category: 'Face',
                type: 'Ultra-Compact Indoor Visible Light Facial Recognition Terminal',
                images: ['/assets/images/prod_aiface_magnum_lite_device.png'], 
                highlights: [
                    "Display : 2.4-inch touch Screen",
                    "User Capacity : 10000",
                    "Card Capacity : 10000",
                    "Face Capacity : 1500",
                    "Logs Capacity : 200000",
                    "Multiple authentications : Facial recognition / RFID card / Password",
                    "Facial Recognition Distance : 0.3-1.2m (FAR <= 0.001%; FRR <= 1%)",
                    "Hardware : 1GHz Dual Core CPU, 256MB RAM, 512MB ROM (Linux OS)"
                ], 
                specs: {
                    "Display": "2.4-inch touch Screen",
                    "User Capacity": "10000",
                    "Card Capacity": "10000",
                    "Face Capacity": "1500",
                    "Logs Capacity": "200000",
                    "Multiple authentications": "Facial recognition / RFID card / Password",
                    "Facial Recognition Distance": "0.3-1.2m",
                    "Facial Recognition Rate": "FAR <= 0.001%; FRR <= 1%",
                    "Card Reading Distance": "<= 3cm",
                    "Communication": "TCP / IP, Wi-Fi (Optional)",
                    "Operation System": "Linux",
                    "Hardware": "CPU : 1GHz Dual Core, RAM : 256MB, ROM : 512MB",
                    "Access Control Interface": "Electro Magnetic Lock/ Electric Lock, Door Sensor, Exit Button, No touch Sensor",
                    "Supported Software": "eTimetracklite Software",
                    "Power Supply": "12V 1.5A",
                    "Operating Temperature": "-5°C~45°C",
                    "Operating Humidity": "10% - 90%RH",
                    "Dimensions(L*W*D)": "116.8*58.3*17.0mm"
                }, 
                sections: {
                    catalogStyle: 'aiface_magnum_lite',
                    col1: [
                        {
                            title: "Technical Specifications",
                            items: [
                                "Display : 2.4-inch touch Screen",
                                "User Capacity : 10,000",
                                "Card Capacity : 10,000",
                                "Face Capacity : 1,500",
                                "Logs Capacity : 200,000",
                                "Multiple authentications : Facial recognition / RFID card / Password",
                                "Facial Recognition Distance : 0.3-1.2m",
                                "Facial Recognition Rate : FAR <= 0.001%; FRR <= 1%",
                                "Card Reading Distance : <= 3cm"
                            ]
                        }
                    ],
                    col2: [
                        {
                            title: "System & Interface",
                            items: [
                                "Communication : TCP / IP, Wi-Fi (Optional)",
                                "Operation System : Linux",
                                "Hardware : CPU : 1GHz Dual Core, RAM : 256MB, ROM : 512MB",
                                "Access Control Interface : Electro Magnetic Lock/ Electric Lock, Door Sensor, Exit Button, No touch Sensor",
                                "Supported Software : eTimetracklite Software",
                                "Power Supply : 12V 1.5A",
                                "Operating Temperature : -5°C~45°C",
                                "Operating Humidity : 10% - 90%RH",
                                "Dimensions(L*W*D) : 116.8*58.3*17.0mm"
                            ]
                        }
                    ]
                },
                pdf: null, 
                desc: 'Aiface Magnum Lite is an ultra-compact indoor visible light facial recognition and RFID card terminal with 2.4-inch touch display. Fully integrated with WMWave\'s cloud platform for secure, real-time attendance and access management.' 
            }
        ,
            {
                "id": "aiface-mars",
                "name": "AI Face Mars",
                "category": "Face",
                "type": "Visible Light Facial Recognition Time Attendance & Access Control",
                "images": [
                    "/assets/images/prod_aiface_magnum_lite_catalog.png"
                ],
                "highlights": [
                    "Face Capacity : 5000",
                    "Palm Capacity : 3000",
                    "Card Capacity : 10000",
                    "Transaction Capacity : 150000",
                    "Recognition Speed : <= 0.2s ultra-fast identification",
                    "Display : 5-inch IPS Color Touch Screen",
                    "Dual Camera for live face detection & anti-spoofing",
                    "Communication : TCP/IP, Wi-Fi, Optional PoE, Wiegand, RS485"
                ],
                "specs": {
                    "Face Capacity": "5000",
                    "Palm Capacity": "3000",
                    "Card Capacity": "10000",
                    "Transaction Capacity": "150000",
                    "Display": "5-inch IPS Touch Screen",
                    "Identification Speed": "<= 0.2s",
                    "Camera": "2MP CMOS dual camera with WDR",
                    "Communication": "TCP/IP, Wi-Fi, Wiegand In/Out, RS485",
                    "Power Supply": "12V DC 2A / PoE",
                    "Operating Temperature": "-10°C to 50°C",
                    "Software": "WMWave Cloud Workforce, eTimeTrackLite Web"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Capacity & Display",
                            "items": [
                                "Face Capacity : 5000",
                                "Palm Capacity : 3000",
                                "Card Capacity : 10000",
                                "Log Capacity : 150000",
                                "Display : 5-inch IPS Touch LCD"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Performance & Network",
                            "items": [
                                "Verification Speed : < 0.2 seconds",
                                "Anti-Spoofing : Live face detection against photos/videos",
                                "Communication : TCP/IP, Wi-Fi, PoE, Wiegand",
                                "Software : eTimeTrackLite Web & WMWave Cloud"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL AI Face Mars is a state-of-the-art visible light facial and palm recognition terminal featuring a 5-inch IPS touch screen, 0.2s matching speed, and enterprise cloud integration."
            },
            {
                "id": "mb-160",
                "name": "MB160",
                "category": "Face",
                "type": "Multi-Biometric Face & Fingerprint Time Attendance System",
                "images": [
                    "/assets/images/prod_aiface_magnum_lite_tight.png"
                ],
                "highlights": [
                    "Face Capacity : 1200",
                    "Fingerprint Capacity : 1500",
                    "Card Capacity : 2000 (Optional)",
                    "Transaction Capacity : 100000",
                    "Display : 2.8-inch TFT Color Screen",
                    "Communication : TCP/IP, USB-Host",
                    "Push data : Yes (Cloud Management supported)",
                    "Multi-language support and intuitive UI"
                ],
                "specs": {
                    "Face Capacity": "1200",
                    "Fingerprint Capacity": "1500",
                    "Card Capacity": "2000",
                    "Transaction Capacity": "100000",
                    "Display": "2.8-inch TFT Screen",
                    "Communication": "TCP/IP, USB-Host",
                    "Power Supply": "12V DC 1.5A",
                    "Operating Temperature": "0°C - 45°C",
                    "Software": "eTimeTrackLite, Web Cloud Attendance"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Capacities",
                            "items": [
                                "Face Capacity : 1200",
                                "Fingerprint Capacity : 1500",
                                "Card Capacity : 2000",
                                "Transaction Records : 100000"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Hardware & Interface",
                            "items": [
                                "Display : 2.8-inch TFT Color Display",
                                "Communication : TCP/IP, USB-Host",
                                "Power Supply : 12V DC, 1.5A",
                                "Operating Temp : 0°C to 45°C"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL MB160 is a versatile multi-biometric workforce attendance terminal providing high-accuracy dual verification through facial recognition and optical fingerprint scanning."
            },
            {
                "id": "facestation-500",
                "name": "FaceStation 500",
                "category": "Face",
                "type": "Smart Visible Light Face Recognition Terminal",
                "images": [
                    "/assets/images/prod_facestation500.png"
                ],
                "highlights": [
                    "Face Capacity : 6000",
                    "Card Capacity : 10000",
                    "Transaction Capacity : 200000",
                    "Wide Angle Recognition : Up to 2 meters distance with 30-degree posture tolerance",
                    "Display : 5-inch Touch Screen Display",
                    "Communication : TCP/IP, Wi-Fi, RS485, Wiegand",
                    "High-Speed Algorithm with Anti-Spoofing Security"
                ],
                "specs": {
                    "Face Capacity": "6000",
                    "Card Capacity": "10000",
                    "Record Capacity": "200000",
                    "Display": "5-inch Touch Screen",
                    "Recognition Distance": "0.3m to 2.0m",
                    "Communication": "TCP/IP, Wi-Fi, RS485, Wiegand",
                    "Power Supply": "12V DC 3A",
                    "Operating Temperature": "-10°C to 45°C",
                    "Software": "WMWave Cloud, eTimeTrackLite"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Capacity & Screen",
                            "items": [
                                "Face Capacity : 6000",
                                "Card Capacity : 10000",
                                "Log Capacity : 200000",
                                "Display : 5-inch High Definition Touch Screen"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Connectivity & Features",
                            "items": [
                                "Communication : TCP/IP, Wi-Fi, RS485, Wiegand",
                                "Verification Range : 0.3m - 2m distance",
                                "Power Supply : 12V DC 3A",
                                "Deployment : Corporate lobbies, data centers, government offices"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL FaceStation 500 offers touchless visible light facial authentication at distances up to 2 meters, engineered for high-throughput enterprise security and automated attendance."
            },
            {
                "id": "uface-302",
                "name": "uFace 302",
                "category": "Face",
                "type": "Multi-Biometric Time Attendance & Access Control System",
                "images": [
                    "/assets/images/prod_face_3.png"
                ],
                "highlights": [
                    "Face Capacity : 3000",
                    "Fingerprint Capacity : 4000",
                    "Card Capacity : 10000 (Optional)",
                    "Transaction Capacity : 100000",
                    "Display : 4.3-inch Touch Screen",
                    "Built-in Battery Backup (Optional)",
                    "Communication : TCP/IP, USB Host, Optional Wi-Fi / 4G",
                    "Access Control Relay for automatic door locks"
                ],
                "specs": {
                    "Face Capacity": "3000",
                    "Fingerprint Capacity": "4000",
                    "Card Capacity": "10000",
                    "Log Capacity": "100000",
                    "Display": "4.3-inch Touch Screen",
                    "Communication": "TCP/IP, USB Host, Optional Wi-Fi",
                    "Power Supply": "12V DC 3A",
                    "Operating Temperature": "0°C - 45°C",
                    "Software": "eTimeTrackLite Desktop & Cloud"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Storage Capacity",
                            "items": [
                                "Face Capacity : 3000",
                                "Fingerprint Capacity : 4000",
                                "Card Capacity : 10000",
                                "Transaction Capacity : 100000"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Hardware & Integration",
                            "items": [
                                "Display : 4.3-inch Capacitive Touch Screen",
                                "Communication : TCP/IP, USB Host, Optional Wi-Fi",
                                "Access Control : Lock relay, door sensor, exit button",
                                "Software : eTimeTrackLite Web & Desktop"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL uFace 302 is an industry-trusted multi-biometric attendance and access control terminal supporting 3,000 faces, 4,000 fingerprints, and a 4.3-inch responsive touchscreen."
            },
            {
                "id": "speedface-v5l",
                "name": "SpeedFace V5L",
                "category": "Face",
                "type": "Visible Light Face & Palm Recognition Attendance Terminal",
                "images": [
                    "/assets/images/prod_face_indian.png"
                ],
                "highlights": [
                    "Face Capacity : 6000",
                    "Palm Capacity : 3000",
                    "Card Capacity : 10000",
                    "Transaction Capacity : 200000",
                    "Dual Biometric : Palm Vein and Visible Light Face",
                    "Display : 5-inch Touch Screen",
                    "Anti-Spoofing Algorithm against print attack and mask spoofing",
                    "Communication : TCP/IP, Wi-Fi, RS485, Wiegand"
                ],
                "specs": {
                    "Face Capacity": "6000",
                    "Palm Capacity": "3000",
                    "Card Capacity": "10000",
                    "Log Capacity": "200000",
                    "Display": "5-inch Touch Screen",
                    "Communication": "TCP/IP, Wi-Fi, RS485, Wiegand",
                    "Power Supply": "12V DC 3A",
                    "Operating Temperature": "-10°C to 45°C",
                    "Software": "WMWave Enterprise Cloud, eTimeTrackLite"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Capacity & Modes",
                            "items": [
                                "Face Capacity : 6000",
                                "Palm Capacity : 3000",
                                "Card Capacity : 10000",
                                "Log Capacity : 200000",
                                "Modes : Face, Palm, RFID Card"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Connectivity & Standards",
                            "items": [
                                "Display : 5-inch Touch LCD",
                                "Communication : TCP/IP, Wi-Fi, Wiegand, RS485",
                                "Power Supply : 12V DC 3A",
                                "Deployment : Commercial towers, manufacturing campuses, IT parks"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL SpeedFace V5L provides frictionless visible light facial and 3-in-1 palm verification with deep learning anti-spoofing algorithms for modern secure workplaces."
            }
        ]
    },
    'access-control': {
        'boom-barrier': [
            { 
                id: 'bgl-100', 
                name: 'BGL-100', 
                category: 'Boom Barrier',
                type: 'Parking Barrier Automated Boom Gate with LED Indicator',
                images: ['/assets/images/prod_bgl100_red_barrier.png'], 
                highlights: [
                    "Maximum length of Boom : 5m",
                    "Boom Rest Stand : Yes",
                    "Arm material : Aluminium (with Red & Green LED indication)",
                    "Time for Up/down : 6s",
                    "Ingress protection Degree : IP54",
                    "Input Interface for : 1. Photocell, 2. Air switch, 3. Loop detector",
                    "Remote control : Yes, upto 25 meters (Automatic/Manual Mode)",
                    "Power Supply : AC 220V / 110V | Motor power : 90W, 240V AC"
                ], 
                specs: {
                    "Maximum length of Boom": "5m",
                    "Boom Rest Stand": "Yes",
                    "Arm material": "Aluminium (with Red & Green LED indication)",
                    "Time for Up/down": "6s",
                    "Input control signal": "Dry contact",
                    "Ingress protection Degree": "IP54",
                    "Input Interface for": "1. Photocell, 2. Air switch, 3. Loop detector",
                    "LED Indicator": "Red / Green",
                    "Optional Interface": "Access control panel, Stand alone access control, Control button",
                    "Remote control": "Yes, upto 25 meters",
                    "Mode": "Automatic/Manual",
                    "Control Panel": "Incorporated control panel with 3 push buttons (STOP/UP/Down) to control the motor",
                    "Bumping bounce back": "Optional",
                    "SMPS - Input": "AC 220V / 110V, 50Hz / 60Hz",
                    "Motor power": "90W, 240V AC",
                    "Dimension(mm)": "268 X 348 X 1050",
                    "Operating Temperature": "-20°C ~ +50°C"
                }, 
                sections: {
                    catalogStyle: 'bgl100',
                    col1: [
                        {
                            title: "Technical Specifications",
                            items: [
                                "Maximum length of Boom : 5m",
                                "Boom Rest Stand : Yes",
                                "Arm material : Aluminium (with Red & Green LED indication)",
                                "Time for Up/down : 6s",
                                "Input control signal : Dry contact",
                                "Ingress protection Degree : IP54",
                                "Input Interface for : 1. Photocell, 2. Air switch, 3. Loop detector",
                                "LED Indicator : Red / Green",
                                "Optional Interface : Access control panel, Stand alone access control, Control button",
                                "Remote control : Yes, upto 25 meters",
                                "Mode : Automatic/Manual",
                                "Incorporated control panel with 3 push buttons (STOP/UP/Down) to control the motor",
                                "Bumping bounce back : Optional"
                            ]
                        }
                    ],
                    col2: [
                        {
                            title: "Power Supply",
                            items: [
                                "SMPS - Input : AC 220V / 110V, 50Hz / 60Hz",
                                "Motor power : 90W, 240V AC",
                                "Dimension(mm) : 268 X 348 X 1050",
                                "operating temprature : -20°C to +50°C"
                            ]
                        }
                    ]
                },
                pdf: null, 
                desc: 'BGL-100 is an automated parking barrier boom gate with integrated Red/Green LED indicator arm, anti-smash bounce back, and remote control. Fully integrated with WMWave\'s cloud platform for secure, real-time vehicle access tracking.' 
            },
            { 
                id: 'bgcm-300', 
                name: 'BG-CM-300', 
                category: 'Boom Barrier',
                type: 'Parking Slim Boom Barrier',
                images: ['/assets/images/prod_bgcm300_device.png'], 
                highlights: [
                    "Product movement: DC brushless (24VDC +-5%)",
                    "Rated power: 150W",
                    "Working humidity: 10%~90% (non-condensing)",
                    "Operating temperature: -40°C~+60°C",
                    "Protection class: IP54 (Slim 10cm chassis width)",
                    "Remote control distance: <= 30m",
                    "Landing rod speed: 1 ~ 6s (speed adjustable)",
                    "Brake lever length: 2m | Operation Mode: Remote control, Button"
                ], 
                specs: {
                    "Product movement": "DC brushless",
                    "Working voltage": "24VDC +-5%",
                    "Rated power": "150W",
                    "Working humidity": "10%~90% (non-condensing)",
                    "Operating temperature": "-40°C~+60°C",
                    "Protection class": "IP54",
                    "Remote control distance": "<= 30m",
                    "Landing rod speed": "1 ~ 6s (speed adjustable)",
                    "Brake lever length": "2m",
                    "Operation Mode": "Remote control, Button"
                }, 
                sections: {
                    catalogStyle: 'bgcm300',
                    col1: [
                        {
                            title: "Features",
                            items: [
                                "Integrated 24V DC Brushless Drive: Adopts maintenance-free bearings with minimal component wear, high electrical efficiency, and leak-proof safety.",
                                "Cloud & 4G Wireless Module: Equipped with high-speed 4G module supporting cloud platform management and mobile App remote control.",
                                "All-Weather Outdoor Resilience: IP54 weatherproof rating, low-temperature anti-freeze operation, and electrostatic anti-corrosion outer coating.",
                                "LED Traffic Warning Signals: Red and green indicator lights automatically synchronize with barrier gate status for clear nighttime guidance.",
                                "Impact-Resistant Anti-Collision Boom: Stamped cold-rolled steel chassis with anti-collision boom release mechanism to protect arm and motor mechanism.",
                                "Ultra-Slim Space-Saving Chassis: Compact 10cm chassis width fits within standard parking dividing lines without obstructing parking space.",
                                "Power-Failure Manual Release: Lever can be lifted manually during power outage; automatically memorizes position upon power restoration.",
                                "Variable Speed Control: Landing rod speed adjustable from 1s to 6s to accommodate varying traffic flow.",
                                "Multi-Interface Compatibility: Integrates seamlessly with parking management systems, infrared safety sensors, and radar vehicle detectors.",
                                "High-Precision Encoder: Encoder limit positioning provides quick response, millisecond accuracy, and simplified debugging."
                            ]
                        }
                    ],
                    col2: [
                        {
                            title: "Specification",
                            items: [
                                "Product movement : DC brushless",
                                "Working voltage : 24VDC ±5%",
                                "Rated power : 150W",
                                "Landing rod speed : 1 ~ 6s (speed adjustable)",
                                "Brake lever length : 2m",
                                "Chassis width : 10cm (Ultra-slim profile)",
                                "Protection class : IP54",
                                "Operating temperature : -40°C ~ +60°C",
                                "Working humidity : 10% ~ 90% (non-condensing)",
                                "Remote control distance : <= 30m",
                                "Operation mode : Remote control, Push Button",
                                "Wireless Module : 4G Cloud IoT Module",
                                "Chassis material : Cold-rolled steel plate"
                            ]
                        }
                    ]
                },
                pdf: null, 
                desc: 'BG-CM-300 is an ultra-slim 10cm parking boom barrier with integrated DC brushless 24V drive, red/green indicator beacons, and anti-collision arm. Fully integrated with WMWave\'s cloud platform for secure, real-time attendance and access management.' 
            },
            { 
                id: 'psa-02', 
                name: 'Single channel Loop Detector - PSA02', 
                category: 'Boom Barrier Accessories',
                type: 'Vehicle Induction Loop Detector (Single / Double Channel)',
                images: ['/assets/images/prod_psa02_device.png'], 
                highlights: [
                    "Power Voltage : 220VAC+-10% 50/60Hz, 24VAC/DC+-10%",
                    "Sensing range : 20~1500uH",
                    "Sensitivity : 0.02%~0.2% (7degress selections)",
                    "Reaction time : 50ms (Frequency: 15~120kHz)",
                    "Output : 2 output relays (5A/AC230V), Relay1: presence, Relay2: pulse/fault",
                    "Operating mode : Mode1: presence & pulse relay, Mode2: pulse/ fault relay",
                    "Dual LED Indicators : Power (Red LED) & Status (Green LED)",
                    "Operating temp : -40°C~80°C (Internal isolation transformer protection)"
                ], 
                specs: {
                    "Power Voltage": "220VAC+-10% 50/60Hz 24VAC/DC+-10%",
                    "Sensing range": "20~1500uH",
                    "Sensitivity": "0.02%~0.2% (7degress selections)",
                    "Reaction time": "50ms",
                    "Frequency": "2 degrees selections, 15~120kHz",
                    "Output": "2 output relays (5A/AC230V), Relay1: presence relay, Relay2: pulse/fault relay",
                    "Operating mode": "Mode1 : presence & pulse relay output, Mode2: pulse/ fault relay",
                    "Presence mode": "Limited presence / permanent presence",
                    "Pulse mode": "Pulse entry / pulse exit",
                    "Pulse output time": "Pulse entry: 200ms, Pulse exit: 200ms",
                    "Presence time": "Limited presence, 30min / permanent presence",
                    "Indicator": "Power indicator: red LED, Status indicator: green LED",
                    "Internal protection": "Isolation transformer, voltage Regulator tube, voltage Dependent resistor",
                    "Operating temp": "-40°C~80°C"
                }, 
                sections: {
                    catalogStyle: 'psa02',
                    col1: [
                        {
                            title: "PSA02",
                            items: [
                                "Power Voltage : 220VAC+-10% 50/60Hz, 24VAC/DC+-10%",
                                "Sensing range : 20~1500uH",
                                "Sensitivity : 0.02%~0.2% (7degress selections)",
                                "Reaction time : 50ms",
                                "Frequency : 2 degrees selections, 15~120kHz",
                                "Output : 2 output relays (5A/AC230V)",
                                "Relay1: presence relay",
                                "Relay2: pulse/fault relay",
                                "Operating mode : Mode1: presence & pulse relay output",
                                "Mode2 : pulse/ fault relay",
                                "Presence mode : Limited presence/ permanent presence",
                                "Pulse mode : Pulse entry/ pulse exit",
                                "Pulse output time : Pulse entry: 200ms",
                                "Pulse exit : 200ms",
                                "Presence time : Limited presence",
                                "30min/ permanent presence",
                                "Indicator Power indicator: red LED",
                                "Status indicator : green LED",
                                "Internal protection : Isolation transformer,",
                                "voltage Regulator tube, voltage Dependent resistor.",
                                "Operating temp : -40°C~80°C"
                            ]
                        }
                    ],
                    col2: [
                        {
                            title: "PSA02-2",
                            items: [
                                "Power Voltage : 220VAC+-10% 50/60Hz 24VAC/DC+-10%",
                                "Sensing range : 20~1500uH",
                                "Sensitivity : 0.02%~0.2% (4degress selections)",
                                "Reaction time : 100ms",
                                "Frequency : 2 degrees selectable",
                                "Output : 2 output relays (5A/AC230V)",
                                "CH1 : presence relay",
                                "CH2 : pulse/fault relay",
                                "Presence mode : Limited presence/ permanent presence",
                                "Indicator Power indicator : red LED",
                                "Status indicator : green LED",
                                "Internal protection : Isolation transformer, Voltage Regulator tube,",
                                "Voltage Dependent resistor.",
                                "Operating temp : -40°C~80°C"
                            ]
                        }
                    ]
                },
                pdf: null, 
                desc: 'Single channel Loop Detector - PSA02 is a high-sensitivity vehicle induction loop detector for boom barriers and automated gates. Fully integrated with WMWave\'s cloud platform for vehicle access safety.' 
            }
        ,
            {
                "id": "bg-108",
                "name": "BG-108",
                "category": "Boom Barrier",
                "type": "High Performance Automatic Boom Barrier with Brushless DC Motor",
                "images": [
                    "/assets/images/prod_bg108.png"
                ],
                "highlights": [
                    "Boom Length : 3m to 6m (Adjustable / Telescopic)",
                    "Opening / Closing Time : 1.5s to 6s (Speed Adjustable)",
                    "Motor Type : 24V DC Brushless Motor (Heavy Duty 100% Duty Cycle)",
                    "MCBF : 5 Million Operations Mean Cycles Between Failures",
                    "Auto-Reversing Safety : Automatic rebound upon encountering obstacles",
                    "Ingress Protection : IP54 Weatherproof Cabinet",
                    "Integrated Dual-Color Traffic LED indicator"
                ],
                "specs": {
                    "Boom Length": "3m to 6m",
                    "Opening/Closing Time": "1.5s - 6s (Adjustable)",
                    "Motor Type": "24V Brushless DC Motor",
                    "MCBF": "5,000,000 Cycles",
                    "Supply Voltage": "AC 220V / 110V 50/60Hz",
                    "Operating Temperature": "-35°C to +75°C",
                    "Ingress Protection": "IP54",
                    "Housing Material": "2.0mm Cold-rolled steel with powder coating",
                    "Control Interface": "Push button, Loop detector, RFID access, Remote control",
                    "Dimensions": "350 x 280 x 1020 mm"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Mechanism & Performance",
                            "items": [
                                "Boom Arm Length : 3m - 6m Aluminum Octagonal Arm",
                                "Operating Speed : 1.5s to 6s variable speed control",
                                "Motor Type : High-torque 24V DC Brushless Motor",
                                "Duty Cycle : 100% Continuous heavy-duty rating",
                                "Lifespan : 5,000,000 cycles MCBF"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Safety & Interface",
                            "items": [
                                "Safety Rebound : Instant auto-reverse on obstacle impact",
                                "Cabinet Protection : IP54 powder-coated steel",
                                "Control Interfaces : Loop detector, Radar, RFID reader, Remote",
                                "Operating Temperature : -35°C to +75°C"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL BG-108 is a heavy-duty automatic vehicle boom barrier featuring a 24V DC brushless motor, adjustable 1.5s–6s speeds, 5 million operation cycles, and intelligent auto-rebound safety."
            },
            {
                "id": "bg-180-bdc",
                "name": "BG-180-BDC",
                "category": "Boom Barrier",
                "type": "Heavy Duty Brushless DC Commercial Vehicle Barrier",
                "images": [
                    "/assets/images/prod_bg180bdc_device.png"
                ],
                "highlights": [
                    "Boom Length : Up to 6 meters straight arm",
                    "Operating Speed : 1.5s to 3s fast response",
                    "Motor : High-efficiency digital Brushless DC motor",
                    "Anti-collision automatic boom swing-off mechanism",
                    "Left and Right installation direction easily exchangeable",
                    "Compatible with RFID vehicle tags, Loop Detectors, and ANPR cameras"
                ],
                "specs": {
                    "Boom Arm": "Up to 6m Aluminum arm",
                    "Speed": "1.5s - 3s adjustable",
                    "Motor": "Brushless DC Motor",
                    "Power Supply": "AC 220V ±10%",
                    "Protection Class": "IP55",
                    "Dimensions": "360 x 300 x 1050 mm",
                    "Working Temperature": "-30°C to +70°C"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Mechanical Specifications",
                            "items": [
                                "Arm Length : Up to 6 meters",
                                "Speed : 1.5 - 3 seconds",
                                "Motor : Digital Brushless DC",
                                "Cabinet : IP55 anti-corrosion housing"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Integration & Safety",
                            "items": [
                                "Integrations : ANPR Camera, RFID Tag Reader, Loop Detector",
                                "Safety : Obstacle detection bounce-back",
                                "Direction : Reversible left/right orientation",
                                "Use Cases : Commercial parking, residential gated communities"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL BG-180-BDC is a rugged commercial boom barrier equipped with a brushless DC drive, fast 1.5s opening speed, and seamless integration with ANPR cameras and RFID access."
            },
            {
                "id": "bg-telescopic",
                "name": "BG-Telescopic Barrier",
                "category": "Boom Barrier",
                "type": "Telescopic Boom Barrier for Low Ceiling & Basement Parking",
                "images": ['/assets/images/prod_bgl100_3d.png'],
                "highlights": [
                    "Telescopic Arm Design : 3m to 6m expandable boom arm",
                    "Ideal for basement parking, covered garages, and low overhead clearances",
                    "Opening Speed : 3s to 6s smooth motion",
                    "Heavy-Duty Motor with thermal overload protection",
                    "Manual release clutch for operation during power outages",
                    "Anti-smash rubber buffer strip along the boom arm"
                ],
                "specs": {
                    "Arm Type": "Telescopic 2-section aluminum arm",
                    "Arm Length": "3m to 6m expandable",
                    "Opening Time": "3s - 6s",
                    "Motor": "AC Torque Motor with gear reduction",
                    "Power Supply": "AC 220V 50Hz",
                    "Cabinet Material": "Die-cast aluminum and steel",
                    "Protection Rating": "IP54",
                    "Operating Temperature": "-25°C to +65°C"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Telescopic Arm & Speed",
                            "items": [
                                "Boom Structure : 2-piece telescopic aluminum profile",
                                "Effective Span : 3 meters to 6 meters adjustable",
                                "Opening Time : 3 to 6 seconds",
                                "Clearance : Optimized for basement ceiling heights"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Protection & Control",
                            "items": [
                                "Manual Release : Key-operated mechanical release clutch",
                                "Safety Strip : Under-boom impact absorbing rubber",
                                "Control Modes : Wireless remote, push button, access control",
                                "Applications : Underground parking, multi-level garages"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL BG-Telescopic Barrier features an innovative 2-piece telescopic arm specially engineered for basement parking facilities and height-constrained entryways."
            },
            {
                "id": "bg-toll-highspeed",
                "name": "BG Toll High-Speed Barrier",
                "category": "Boom Barrier",
                "type": "Ultra High-Speed Highway Toll & Logistics Boom Barrier",
                "images": ['/assets/images/prod_bgcm300_indian.jpg'],
                "highlights": [
                    "Opening Speed : 0.6s to 1.2s ultra high-speed opening",
                    "Boom Arm : 3m octagonal carbon fiber / aluminum profile with break-away flange",
                    "Duty Cycle : 100% continuous duty rating for highway toll collection",
                    "MCBF : 10 Million operation cycles",
                    "Integrated high-speed torque motor with sinusoidal linkage",
                    "Auto-swing off boom to prevent damage during accidental vehicle impact"
                ],
                "specs": {
                    "Speed": "0.6s - 1.2s",
                    "Boom Length": "3 meters",
                    "Motor": "High-torque continuous rating motor",
                    "MCBF": "10,000,000 Cycles",
                    "Power Supply": "AC 220V 50Hz",
                    "Protection Rating": "IP55",
                    "Working Temperature": "-40°C to +75°C",
                    "Impact Safety": "Breakaway swing-off bracket"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Toll Speed & Durability",
                            "items": [
                                "Operating Speed : 0.6 - 1.2 seconds ultra fast",
                                "Arm Length : 3m high-strength octagonal boom",
                                "MCBF : 10,000,000 continuous operations",
                                "Duty Cycle : 100% non-stop highway toll service"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Safety & Resilience",
                            "items": [
                                "Impact Protection : Breakaway flange prevents cabinet damage",
                                "Protection Rating : IP55 Weatherproof enclosure",
                                "Operating Temperature : -40°C to +75°C",
                                "Target Venues : Highway toll plazas, freight terminals, rapid transit"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL BG Toll High-Speed Barrier is an ultra-fast 0.6s vehicle barrier engineered for highway toll gates, busy logistics depots, and critical high-speed transit corridors."
            },
            {
                "id": "bg-servo-600",
                "name": "Servo-600 Barrier",
                "category": "Boom Barrier",
                "type": "Intelligent Precision Servo Motor Automatic Boom Barrier",
                "images": ['/assets/images/prod_bgl100_catalog.png'],
                "highlights": [
                    "Motor Type : Advanced DC Servo Motor with digital encoder",
                    "Vibration-Free : Smooth sinusoidal deceleration with soft start and stop",
                    "Opening Speed : 0.9s to 4s programmable",
                    "LED Boom Arm : Integrated full-length RGB status illumination",
                    "Ultra-long life exceeding 8 million maintenance-free cycles",
                    "Low power consumption with high efficiency drive"
                ],
                "specs": {
                    "Motor": "DC Servo Motor with encoder",
                    "Speed": "0.9s - 4s programmable",
                    "Boom Length": "Up to 6 meters",
                    "MCBF": "8,000,000 Cycles",
                    "Power Supply": "AC 110-240V, 50/60Hz",
                    "Cabinet": "Galvanized steel with electrostatic powder coating",
                    "Protection Class": "IP54",
                    "Operating Temperature": "-30°C to +70°C"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Servo Precision",
                            "items": [
                                "Drive System : Digital DC Servo with optical encoder",
                                "Speed Regulation : 0.9s to 4s stepless speed tuning",
                                "Boom Profile : Aluminum arm with embedded RGB LEDs",
                                "Reliability : 8,000,000 cycles MCBF"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Smart Features",
                            "items": [
                                "Motion Control : Soft-start, soft-stop zero bouncing",
                                "LED Lighting : Red on close, Green on open",
                                "Interface : Compatible with ANPR, radar sensors, loop detectors",
                                "Applications : Luxury commercial complexes, smart city perimeters"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL Servo-600 Barrier delivers silky-smooth, bounce-free vehicle control powered by precision digital servo mechanics, programmable speeds, and integrated LED boom illumination."
            }
        ],
        'metal-detector': [
            { 
                id: 'hm-300', 
                name: 'HM-300', 
                category: 'Metal Detector',
                type: 'Hand Held Metal detector',
                images: ['/assets/images/prod_hm300_device.png'], 
                highlights: [
                    "Product dimension: 340mm x 140mm x 30mm (Net Weight: 180gm)",
                    "Package Size : 360mm * 150mm* 50 mm",
                    "Working frequency : About 20 KHz | Alarms : sound (or vibration) and light",
                    "Power supply : Standard 9V battery or rechargeable battery(optional)",
                    "Power : 270mW | Operating Voltage: 7V - 9V (< 50mA)",
                    "Detection Range : Pistol: 220-250mm, Knife: 200-240mm, Coin: 100-130mm, Pin: 35-70mm",
                    "Self-calibrating digital microprocessor technology with adjustable sensitivity",
                    "Rugged high-impact ABS case with large 10cm scan surface (12 Months Warranty)"
                ], 
                specs: {
                    "Product dimension": "340mm x 140mm x 30mm",
                    "Package Size": "360mm * 150mm* 50 mm",
                    "Working frequency": "About 20 KHz",
                    "Alarms": "sound (or vibration) and light",
                    "Power supply": "Standard 9V battery or rechargeable battery(optional)",
                    "Power": "270mW",
                    "Battery": "9V Alkaline Battery (Rechargeable Optional)",
                    "Operating Frequency": "< 50mA",
                    "Operating Voltage": "7V - 9V",
                    "Operating Temperature": "-10°C to +65°C",
                    "Net Weight": "180gm",
                    "Detection Capability": "Only ferrous metals can be detected, no gold and silver detection"
                }, 
                sections: {
                    catalogStyle: 'hm300',
                    detectionRange: [
                        "1.  Pin 35—70mm ;",
                        "2.  Type 64 pistol 220—250mm ;",
                        "3.  6-inch dagger 200—240mm ;",
                        "4.  Diameter 20mm steel ball 150mm ;",
                        "5.  One Rs. coin 100—130 mm;"
                    ],
                    col1: [
                        {
                            title: "Specifications",
                            items: [
                                "Technical Standard : Technical Parameter",
                                "Product dimension : 340mm x 140mm x 30mm",
                                "Package Size : 360mm * 150mm* 50 mm",
                                "Working frequency : About 20 KHz",
                                "Alarms : sound (or vibration) and light",
                                "Power supply : Standard 9V battery or rechargeable battery(optional)",
                                "Power : 270mW",
                                "Battery : 9V Alkaline Battery (Rechargeable Optional)",
                                "Operating Frequency : <50mA",
                                "Operating Voltage : 7V - 9V",
                                "Operating Temperature : -10°C to +65°C",
                                "Net Weight : 180gm"
                            ]
                        }
                    ],
                    col2: [
                        {
                            title: "Main Features",
                            items: [
                                "Detection distance : Pistol: 90mm; Six Inches knife: 60m; Razor blades: 30mm; Pin: 10mm",
                                "Self-calibrating : digital microprocessor technology eliminates the need for periodic sensitivity adjustments.",
                                "Rugged, high-impact ABS case with reinforced coil compartment.",
                                "Large 10cm scan surface for quick, thorough scanning.",
                                "No tools required to change standard 9V battery. Optional rechargeable battery kit",
                                "Sharp audible alarm and LED light vibration indicate the detection of metal.",
                                "Colour LED indication: Green LED power ON indicator; Red LED LOW BATTERY indicator; Red LED ALARM indicator; Green LED RECHARGING indicator.",
                                "Adjustable sensitivity knob.",
                                "Warranty: 12 months"
                            ]
                        }
                    ]
                },
                pdf: null, 
                desc: 'HM-300 is a lightweight, high-sensitivity handheld security metal detector wand with circular coil, self-calibrating microprocessor, and dual audio/vibration alarm. Fully integrated with WMWave\'s cloud platform for security checkpoint tracking.' 
            },
            { 
                id: 'ess-05', 
                name: 'ESS-05 Shoe Scanner', 
                category: 'Metal Detector',
                type: 'Shoes Scanner (Model no ESS-05)',
                images: ['/assets/images/prod_ess05_device.png'], 
                highlights: [
                    "Size : 533*420*175mm (L*W*H) | Safety features : waterproof, anti-slip",
                    "Power supply : Type-c interface, 5V power supply",
                    "Detection distance : 1 Rs. coin within 10+- cm | Detection area : inside shoes",
                    "Independent left & right shoe indicator: Green (Clear) / Red (Metal Detected)",
                    "Control four buttons : PROG, UP, DOWN, and ENTER (Sound & Light Alarm)",
                    "Detects blades, clips, miniature pistols, detonators, lighters, and contraband",
                    "Strong anti-interference adjustable frequency (Operates with DFMD & HHMD)",
                    "Ideal for Airports, Customs, High-Security Prisons, Embassies & Electronic Plants"
                ], 
                specs: {
                    "Size": "533*420*175mm (L*W*H)",
                    "Power supply": "Type-c interface, 5V power supply",
                    "Detection distance": "1 Rs. coin within 10+- cm",
                    "Detection area": "inside shoes",
                    "Alarm indicator light": "green flashing when no metal is detected, red flashing when metal is detected (independent alarm lights for left and right shoe)",
                    "Control four buttons": "PROG, UP, DOWN, and ENTER",
                    "Safety features": "waterproof, anti-slip",
                    "Alarm mode": "Sound and Light alarm",
                    "Detection objects": "blades, clips, miniature pistols, detonators, lighters and other dangerous objects."
                }, 
                sections: {
                    catalogStyle: 'ess05',
                    col1: [
                        {
                            title: "Specification",
                            items: [
                                "Size : 533*420*175mm (L*W*H)",
                                "Power supply : Type-c interface, 5V power supply",
                                "Detection distance : 1 Rs. coin with the 10+- cm",
                                "Detection area : inside shoes",
                                "Alarm indicator light : green flashing when no metal is detected, red flashing when metal is detected (independent alarm lights for left and right shoe)",
                                "Control four buttons : PROG, UP, DOWN, and ENTER",
                                "Safety features : waterproof, anti-slip",
                                "Alarm mode : Sound and Light alarm",
                                "Detection objects: blades, clips, miniature pistols, detonators, lighters and other dangerous objects."
                            ]
                        }
                    ],
                    col2: [
                        {
                            title: "Function",
                            items: [
                                "Quickly detects all kinds of dangerous items hidden in the soles of shoes (blades, saw blades, hairpins, nails, precious metals).",
                                "Can be used in conjunction with walk through metal detector and hand-held metal detectors for efficient security checks.",
                                "Alarm indicator light: green flashing when no metal is detected, red flashing when metal is detected.",
                                "Independent alarm lights for left and right shoe.",
                                "High-sensitivity detection (can detect Rs.1 coins within a height of 10+- cm).",
                                "Strong anti-interference ability (adjustable frequency, alarms distinguishing amount of metal).",
                                "Passenger security checks at airports, stations, customs, electronic factories, and high-security sites."
                            ]
                        },
                        {
                            title: "Alarm Function",
                            items: [
                                "In the absence of strong electromagnetic field interference, when the detected person weighs > 10kg, and metal in the sole is within range, the scanner issues sound and light alarm. Green flashing when clear, red flashing when metal detected (independent L/R lights)."
                            ]
                        }
                    ]
                },
                pdf: null, 
                desc: 'ESS-05 Shoe Scanner is a hands-free step-on footwear metal detector platform. Quickly detects concealed metal contraband in soles with independent left/right indicators and Type-C power. Fully integrated with WMWave\'s cloud security platform.' 
            },
            { 
                id: 'd4006', 
                name: 'D4006', 
                category: 'Metal Detector',
                type: 'DFMD with LCD Display (Metal Detector)',
                images: ['/assets/images/prod_d4006_device.png'], 
                highlights: [
                    "Detection Objects : Prohibited goods such as mobile phone and metal",
                    "In and Out Count : Available | Display : 6\"inch LCD",
                    "Vertical dimension : 2200x850x430mm | Passage dimension : 2000x720x430mm (width customized 720~1500mm)",
                    "Working Environment : -20°C~85°C | Working Humidity : 99%, no condensation",
                    "Input : AC 100V~240V / 50HZ~60HZ | Output : DC 12V/4.2A 12W",
                    "Weight : Net Weight : 43KG, Gross Weight : 48KG",
                    "Sensitivity of each zone : 0~255 | Working Frequency : 0~100",
                    "Modular Product, Easy to Maintenance, High-intensity lightweight chassis with Self-adaptive System"
                ], 
                specs: {
                    "Detection Objects": "Prohibited goods such as mobile phone and metal",
                    "In and Out Count": "Available",
                    "Display": "6”inch LCD",
                    "Vertical dimension": "2200x850x430mm",
                    "Passage dimension": "2000x720x430mm (width can be customized 720 ~ 1500mm)",
                    "Package dimension": "2270x700x230mm",
                    "Working Humidity": "99%, no condensation",
                    "Working Environment": "-20°C~85°C",
                    "Input": "AC 100V~240V / 50HZ~60HZ",
                    "Output": "DC 12V/4.2A 12W",
                    "Weight": "Net Weight : 43KG, Gross Weight : 48KG",
                    "Adaptive Diagnosis System": "Automatic",
                    "Sensitivity of each zone": "0~255",
                    "Working Frequency": "0~100"
                }, 
                sections: {
                    catalogStyle: 'd4006',
                    col1: [
                        {
                            title: "Technical Specifications",
                            items: [
                                "Detection Objects : Prohibited goods such as mobile phone and metal",
                                "In and Out Count : Available",
                                "Display : 6\"inch LCD",
                                "Vertical dimension : 2200x850x430mm",
                                "Passage dimension : 2000x720x430mm (width can be customized 720 ~ 1500mm)",
                                "Package dimension : 2270x700x230mm",
                                "Working Humidity : 99%, no condensation",
                                "Working Environment : -20°C~85°C",
                                "Input : AC 100V~240V / 50HZ~60HZ",
                                "Output : DC 12V/4.2A 12W",
                                "Weight : Net Weight : 43KG, Gross Weight : 48KG",
                                "Adaptive Diagnosis System : Automatic",
                                "Sensitivity of each zone : 0~255",
                                "Working Frequency : 0~100"
                            ]
                        }
                    ],
                    col2: [
                        {
                            title: "Features",
                            items: [
                                "Modular Product",
                                "Easy to Maintenance",
                                "Special Material High-intensity & lightweight",
                                "Production line assembling",
                                "Ultra High Precision",
                                "Door Panel Width : 430mm",
                                "Display : 7inch LCD Touchscreen",
                                "Self-adaptive Adjust System",
                                "Adaptive Diagnosis System",
                                "High Precision Detection"
                            ]
                        }
                    ]
                },
                pdf: null, 
                desc: 'D4006 is a high-precision multi-zone door frame walk-through metal detector (DFMD) with 6-inch LCD display, bi-directional in/out count, and automatic adaptive diagnosis. Fully integrated with WMWave\'s cloud security platform.' 
            }
        ,
            {
                "id": "d1065s",
                "name": "D1065S (6-Zone)",
                "category": "Metal Detector",
                "type": "6-Zone Multi-Zone Walk-Through Doorframe Metal Detector",
                "images": ['/assets/images/prod_d1065s_clean.png'],
                "highlights": [
                    "Detection Zones : 6 overlapping detection zones for accurate threat localization",
                    "Sensitivity : 100 sensitivity levels adjustable per zone",
                    "Transit Statistics : Intelligent bi-directional in/out passenger and alarm counter",
                    "Visual Alerts : Dual-column LED indicators displaying threat height",
                    "Harmless to human body, heart pacemakers, pregnant women, and magnetic media",
                    "Anti-interference frequency adjustment across multiple channels"
                ],
                "specs": {
                    "Detection Zones": "6 Overlapping Zones",
                    "Sensitivity Levels": "100 Adjustable Levels per zone",
                    "Alarm Indications": "Sound buzzer and LED location lights",
                    "Passage Dimensions": "2000(H) x 700(W) x 500(D) mm",
                    "External Dimensions": "2220(H) x 820(W) x 500(D) mm",
                    "Power Supply": "AC 100V - 240V, 50/60Hz",
                    "Power Consumption": "< 15W",
                    "Operating Temperature": "-20°C to +55°C",
                    "Weight": "Approx. 55 kg"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Detection & Sensitivity",
                            "items": [
                                "Zones : 6 distinct vertical detection zones",
                                "Sensitivity : 100 levels per individual zone",
                                "Indicators : Both side column LEDs pinpointing target location",
                                "Safety Standards : Compliant with international medical safety"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Statistics & Environment",
                            "items": [
                                "Traffic Counter : Dual-screen passenger in/out counter",
                                "Audio Alarm : Multi-tone variable pitch buzzer",
                                "Operating Range : -20°C to +55°C",
                                "Target Facilities : Schools, government buildings, courtrooms, exhibition halls"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL D1065S is a professional 6-zone walk-through metal detector featuring 100 sensitivity levels, side-column threat localization lights, and bi-directional passenger traffic counting."
            },
            {
                "id": "d3180s",
                "name": "D3180S (18-Zone)",
                "category": "Metal Detector",
                "type": "18-Zone High Sensitivity Doorframe Metal Detector",
                "images": ['/assets/images/prod_d4006_tight.png'],
                "highlights": [
                    "Detection Zones : 18 pinpoint detection zones (6 horizontal x 3 vertical grid)",
                    "Sensitivity : 256 adjustable sensitivity levels per zone",
                    "Display : 5.7-inch LCD display screen with password-protected menu",
                    "Synchronous sound and LED indicators along both door columns",
                    "Detects ferrous, non-ferrous, and alloy concealed weapons",
                    "Tamper-proof password protection and multi-frequency anti-interference"
                ],
                "specs": {
                    "Detection Zones": "18 Zones",
                    "Sensitivity": "256 Levels",
                    "Display": "5.7-inch Backlit LCD",
                    "Passage Dimensions": "2000(H) x 710(W) x 580(D) mm",
                    "External Dimensions": "2220(H) x 830(W) x 580(D) mm",
                    "Power Supply": "AC 100-240V",
                    "Working Temperature": "-20°C to +50°C",
                    "Alarm Output": "Sound buzzer, LED column lights, dry contact relay"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "18-Zone Matrix",
                            "items": [
                                "Zone Matrix : 18 precise detection zones",
                                "Sensitivity Range : 0 to 255 sensitivity calibration",
                                "Display : 5.7-inch clear LCD interface",
                                "Target Materials : Ferrous, non-ferrous, and alloy metals"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Security & Interface",
                            "items": [
                                "Alarm Indication : Synchronous audio and dual-side LED illumination",
                                "Tamper Protection : Multi-level password encryption",
                                "Power Supply : 100V - 240V AC universal input",
                                "Applications : Airports, VIP security checkpoints, defense facilities"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL D3180S features an 18-zone detection grid with 256 sensitivity levels and a 5.7-inch LCD screen, providing pinpoint vertical and horizontal location of concealed metallic threats."
            },
            {
                "id": "d4330",
                "name": "D4330 (33-Zone)",
                "category": "Metal Detector",
                "type": "33-Zone Ultra-High Sensitivity Walk-Through Metal Detector",
                "images": ['/assets/images/prod_d4006_dimensions.png'],
                "highlights": [
                    "Detection Zones : 33 pinpoint detection zones (11 horizontal levels x 3 columns)",
                    "Sensitivity : 300 ultra-fine sensitivity levels for maximum security detection",
                    "Display : 7-inch HD LCD color screen with real-time transit telemetry",
                    "Airport and Prison Grade security screening capable of finding small metal blades and micro-electronics",
                    "Advanced digital signal processing (DSP) for immune operation in electrically noisy environments",
                    "Modular design for rapid 20-minute assembly and deployment"
                ],
                "specs": {
                    "Detection Zones": "33 Zones",
                    "Sensitivity": "300 Levels",
                    "Display": "7-inch HD Color LCD",
                    "Passage Dimensions": "2010(H) x 760(W) x 600(D) mm",
                    "External Dimensions": "2240(H) x 900(W) x 600(D) mm",
                    "Signal Processing": "Digital Signal Processor (DSP)",
                    "Operating Temperature": "-20°C to +60°C",
                    "Standards": "CE, FCC, RoHS, ISO9001, Aviation Security Compliant"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "33-Zone Pinpoint Array",
                            "items": [
                                "Zones : 33 distinct detection zones",
                                "Sensitivity : 300 micro-adjustment steps",
                                "Display : 7-inch Color HD LCD monitor",
                                "Threat Discrimination : Rejects personal items (keys, belt buckles) while catching weapons"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Engineering & Compliance",
                            "items": [
                                "DSP Filtering : Digital signal processing eliminates false alarms",
                                "Housing : Scratch-resistant high-density laminate",
                                "Certifications : Aviation & correctional facility certified",
                                "Venues : International airports, embassies, correctional institutions"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL D4330 is an ultra-high sensitivity 33-zone walk-through metal detector with a 7-inch HD color screen, DSP digital filtering, and airport-grade threat discrimination."
            },
            {
                "id": "md-3003b1",
                "name": "MD-3003B1 Wand",
                "category": "Metal Detector",
                "type": "Professional Handheld Security Scanner Wand",
                "images": ['/assets/images/prod_md3003_clean.png'],
                "highlights": [
                    "Detection Capability : Detects small handguns, knives, razor blades, and pin-sized metal items",
                    "Alarm Modes : Sound buzzer alert or silent vibration alert with LED indicator",
                    "Power : Standard 9V Alkaline battery or rechargeable Ni-MH battery with charger jack",
                    "Ergonomic handle with high-impact ABS rugged construction",
                    "Low battery voltage warning indicator light",
                    "Simple one-button operation with high/low sensitivity switch"
                ],
                "specs": {
                    "Operating Frequency": "93 kHz",
                    "Audio Frequency": "2 kHz",
                    "Power Supply": "Standard 9V battery",
                    "Dimensions": "415(L) x 85(W) x 40(H) mm",
                    "Weight": "400 g",
                    "Operating Temperature": "-15°C to +55°C",
                    "Detection Range": "Pistol: 20cm, Knife: 15cm, Razor blade: 10cm, Pin: 3cm"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Detection Capabilities",
                            "items": [
                                "Small Handgun : Up to 20 cm distance",
                                "Razor Blade / Box Cutter : Up to 10 cm distance",
                                "Pin / Micro Electronic : Up to 3 cm distance",
                                "Alarm Modes : Audio buzzer & silent vibration modes"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Physical & Electrical",
                            "items": [
                                "Operating Power : 9V alkaline / rechargeable battery",
                                "Dimensions : 415 x 85 x 40 mm",
                                "Weight : 400g lightweight ergonomic design",
                                "Applications : Event screening, nightclub entry, warehouse theft prevention"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL MD-3003B1 is the industry-standard handheld security metal detector wand featuring dual audio and vibration alarms, high-impact ABS build, and pinpoint threat detection."
            }
        ],
        'flap-barrier': [
            { 
                id: 'fb-e-2000-series', 
                name: 'FB-E-2000 Series', 
                category: 'Flap Barriers',
                type: 'Flap Barrier (FB-E-2000)',
                images: ['/assets/images/prod_fbe2000_device.png'], 
                highlights: [
                    "Power Requirements : 100~240V AC | Unlock Time : 0.2 sec",
                    "Working Temperature : -28°C to 60°C | Working Humidity : 5%~80%",
                    "Working Environment : Indoor/outdoor (if sheltered) | Ingress Protection : IP44",
                    "Throughput Rate : RFID: 35/min, Fingerprint: 25/min, Face: 11/min, Vein: 23/min",
                    "Lane width(mm) : 550 | Dimensions(mm) : L=1200, W=280, H=980",
                    "Cabinet & Lid Material : SUS304 Stainless Steel (Net Weight: 52kg single / 87kg double)",
                    "Barrier Material : Transparent Acrylic light (Red, Green & Blue) with Retracting Movement",
                    "Emergency Mode : Yes | High Reliability MCBF : 3 million cycles (Medium Security Level)"
                ], 
                specs: {
                    "Power Requirements": "100~240V AC",
                    "Working Temperature": "-28°C to 60°C",
                    "Working Humidity": "5%~80%",
                    "Working Environment": "Indoor/outdoor (if sheltered)",
                    "RFID": "Maximum 35/ minute",
                    "Fingerprint": "Maximum 25/ minute",
                    "Face": "Maximum 11/ minute",
                    "Vein": "Maximum 23/ minute",
                    "Lane width(mm)": "550",
                    "IP rating": "IP44",
                    "Input": "Dry Contact",
                    "Unlock Time": "0.2 sec",
                    "Dimensions(mm)": "L=1200, W=280, H=980",
                    "Net Weight(kg)": "52 kg(single machine) 87kg(double machine)",
                    "LED Indicator": "Yes",
                    "Cabinet Material": "SUS304 Stainless Steel",
                    "Lid Material": "SUS304 Stainless Steel",
                    "Barrier Material": "Transparent Acrylic light (Red, Green & Blue)",
                    "Barrier Movement": "Retracting",
                    "Emergency Mode": "Yes",
                    "Security Level": "Medium",
                    "MCBF": "3 million"
                }, 
                sections: {
                    catalogStyle: 'fbe2000',
                    col1: [
                        {
                            title: "Specification",
                            items: [
                                "Power Requirements : 100~240V AC",
                                "Working Temperature : -28°C to 60°C",
                                "Working Humidity : 5%~80%",
                                "Working Environment : Indoor/outdoor (if sheltered)",
                                "RFID : Maximum 35/ minute",
                                "Fingerprint : Maximum 25/ minute",
                                "Face : Maximum 11/ minute",
                                "Vein : Maximum 23/ minute",
                                "Lane width(mm) : 550",
                                "IP rating : IP44",
                                "Input : Dry Contact",
                                "Unlock Time : 0.2 sec",
                                "Dimensions(mm) : L=1200, W=280, H=980",
                                "Net Weight(kg) : 52 kg(single machine) 87kg(double machine)",
                                "LED Indicator : Yes",
                                "Cabinet Material : SUS304 Stainless Steel",
                                "Lid Material : SUS304 Stainless Steel",
                                "Barrier Material : Transparent Acrylic light (Red, Green & Blue)",
                                "Barrier Movement : Retracting",
                                "Emergency Mode : Yes",
                                "Security Level : Medium",
                                "MCBF : 3 million"
                            ]
                        }
                    ],
                    col2: []
                },
                pdf: null, 
                desc: 'FB-E-2000 Series is a premium optical flap barrier pedestrian turnstile with SUS304 stainless steel cabinet, illuminated acrylic retractable flaps, and 0.2-second rapid unlock. Fully integrated with WMWave\'s cloud security platform.' 
            },
            { 
                id: 'fb-y-1000', 
                name: 'FB-Y-1000', 
                category: 'Flap Barriers',
                type: 'Single-Lane Flap Barrier (FB-Y-1000)',
                images: ['/assets/images/prod_fby1000_device.png'], 
                highlights: [
                    "Material : 1.2/1.0mm SUS304 | Size : 1400*280*950mm",
                    "Sensor pairs : 6 pairs | Pass rate : 35p/m | Pass width : 550mm",
                    "Motor type : DC brushless motor | Power supply : 24V 150W",
                    "Input voltage : 100V~240V | Environment : -20~+70°C | IP Rating : 56",
                    "Net weight : 60kg | High Reliability MCBF : 5 Million cycles",
                    "Smooth operation, low noise, automatic fire passage unlock, and infrared anti-clip protection"
                ], 
                specs: {
                    "Material": "1.2/1.0mm SUS304",
                    "Size": "1400*280*950mm",
                    "Sensor pairs": "6 pairs",
                    "Pass rate": "35p/m",
                    "Pass width": "550mm",
                    "Input voltage": "100V~240V",
                    "Motor type": "DC brushless motor",
                    "Environment": "-20~+70°C",
                    "Power supply": "24V 150W",
                    "Net weight": "60kg",
                    "IP Rating": "56",
                    "MCBF": "5 Million"
                }, 
                sections: {
                    catalogStyle: 'fby1000',
                    col1: [
                        {
                            title: "Technical Specifications",
                            items: [
                                "Material : 1.2/1.0mm SUS304",
                                "Size : 1400*280*950mm",
                                "Sensor pairs : 6 pairs",
                                "Pass rate : 35p/m",
                                "Pass width : 550mm",
                                "Input voltage : 100V~240V",
                                "Motor type : DC brushless motor",
                                "Environment : -20~+70°C",
                                "Power supply : 24V 150W",
                                "Net weight : 60kg",
                                "IP Rating : 56",
                                "MCBF : 5 Million"
                            ]
                        }
                    ],
                    col2: [
                        {
                            title: "Features",
                            items: [
                                "Reasonable and reliable design, low noise, smooth operation and long service life",
                                "With function of opening doors automatically under power-off state to meet the need of fire-fighting passage",
                                "With functions of anti-tail, anti-reverse pass and so on",
                                "Card can be set \"with memory\" or \"without memory\" functions",
                                "With automatic reset function, i.e. after having access to the gate, the gate automatically restores to the locked state if not pass within the time set",
                                "With infrared anti-clip function (anti-clip when gate is open or running)",
                                "Compatible with IC, ID card, scanning and face recognition, etc.",
                                "Two modes of operation are available: open or closed",
                                "Various working modes are available, including two-way card reading and one-way card reading, etc."
                            ]
                        }
                    ]
                },
                pdf: null, 
                desc: 'FB-Y-1000 is a single-lane high-performance pedestrian optical flap barrier with SUS304 stainless steel housing, DC brushless motor, and 6 pairs of infrared sensors. Fully integrated with WMWave\'s cloud security platform.' 
            },
            { 
                id: 'fb-ef-2213', 
                name: 'FB-EF-2213', 
                category: 'Flap Barriers',
                type: 'Flap Barrier (FB-EF-2213)',
                images: ['/assets/images/prod_fbef2213_device.png'], 
                highlights: [
                    "Size(L*W*H) : 600*280*980mm | Pass width : 550mm | Power : 50W",
                    "Material : Cold roller with power coated 1.5mm | Bar Material : Clean Acrylic + RGB light",
                    "Movement : Brushless movement of Flap Barrier Gate | Sensor : 6 pairs",
                    "Drive Unit : Brushless DC 30K 40W | Power Supply : 24V 150W",
                    "Communication Interface : Dry contact & RS485 | Pass rate : 35-50 persons/minute",
                    "Temperature : -20°C~+70°C | Humidity : ≤90% No condensation | IP : IP4X",
                    "Anti-tail, anti-reverse pass, infrared anti-clip, and automatic reset memory system"
                ], 
                specs: {
                    "Size(L*W*H)": "600*280*980mm",
                    "Pass width": "550mm",
                    "Power": "50W",
                    "Material": "Cold roller with power coated 1.5mm",
                    "Bar Material": "Clean Acrylic + RGB light",
                    "Movement": "Brushless movement of Flap Barrier Gate",
                    "Sensor": "6 pairs",
                    "Indicator Light": "RGB light",
                    "Drive Unit": "30K 40W",
                    "Power Supply": "24V 150W",
                    "Control Unit": "Brushless control system",
                    "Communication Interface": "Dry contact & RS485",
                    "Pass rate": "35-50 persons/minute",
                    "Temperature": "-20°C~+70°C",
                    "Humidity": "≤90% No condensation",
                    "IP": "IP4X",
                    "Environment": "Indoor"
                }, 
                sections: {
                    catalogStyle: 'fbef2213',
                    col1: [
                        {
                            title: "Technical Specifications",
                            items: [
                                "Size (L*W*H) : 600*280*980mm",
                                "Pass width : 550mm",
                                "Power : 50W",
                                "Material : Cold roller with power coated 1.5mm",
                                "Bar Material : Clean Acrylic + RGB light",
                                "Movement : Brushless movement of Flap Barrier Gate",
                                "Sensor : 6 pairs",
                                "Indicator Light : RGB light",
                                "Drive Unit : 30K 40W",
                                "Power Supply : 24V 150W",
                                "Control Unit : Brushless control system",
                                "Communication Interface : Dry contact & RS485",
                                "Pass rate : 35-50 persons/minute",
                                "Temperature : -20°C~+70°C",
                                "Humidity : <=90% No condensation",
                                "IP : IP4X",
                                "Environment : Indoor"
                            ]
                        }
                    ],
                    col2: [
                        {
                            title: "Functions & Features",
                            items: [
                                "Reasonable and reliable design, low noise, smooth operation and long service life",
                                "With functions of anti-tail, anti-reverse pass and so on",
                                "Card can be set \"with memory\" or \"without memory\" functions",
                                "With automatic reset function, i.e. after having access to the gate, the gate automatically restores to the locked state if not pass within the time set",
                                "With infrared anti-clip function (anti-clip when gate is open or running)",
                                "Compatible with IC, ID card, scanning and face recognition, etc.",
                                "Two modes of operation are available: open or closed",
                                "Various working modes are available, including two-way card reading and one-way card reading, etc."
                            ]
                        }
                    ]
                },
                pdf: null, 
                desc: 'FB-EF-2213 is an intelligent optical flap barrier turnstile with cold-rolled power coated housing, RGB illuminated acrylic wings, and DC brushless control system. Fully integrated with WMWave\'s cloud security platform.' 
            }
        ,
            {
                "id": "fb-tl-2000",
                "name": "FB-TL-2000",
                "category": "Flap Barriers",
                "type": "Optical Dual-Wing Pedestrian Flap Barrier Turnstile",
                "images": ['/assets/images/prod_fbtl2000_clean.png'],
                "highlights": [
                    "Housing Material : High-grade SUS304 Stainless Steel (1.5mm thickness)",
                    "Throughput : 35 to 40 persons per minute rapid transit",
                    "Sensors : 6 pairs of infrared optical sensors for anti-tailgating and anti-pinch safety",
                    "Emergency Action : Wings automatically retract into the housing upon power cut or fire alarm",
                    "Bi-directional access control with illuminated LED passage arrows",
                    "Seamless integration with eSSL Face, Fingerprint, and RFID terminals"
                ],
                "specs": {
                    "Throughput": "35 - 40 persons/min",
                    "Passage Width": "550 mm",
                    "Housing Material": "SUS304 Stainless Steel",
                    "Wing Material": "Polyurethane / Tempered Acrylic",
                    "Unlock Time": "0.2 seconds",
                    "Power Requirements": "100-240V AC, 50/60Hz",
                    "Infrared Sensors": "6 Pairs",
                    "Dimensions": "1200(L) x 280(W) x 980(H) mm",
                    "Operating Temperature": "-25°C to +70°C",
                    "Ingress Protection": "IP44"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Throughput & Mechanics",
                            "items": [
                                "Passage Speed : 35 - 40 persons per minute",
                                "Lane Width : 550 mm standard pedestrian lane",
                                "Housing : SUS304 Stainless Steel 1.5mm",
                                "Unlock Response : 0.2s high-speed response"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Safety & Emergency",
                            "items": [
                                "Anti-Tailgating : 6 pairs of high-accuracy infrared beams",
                                "Emergency Mode : Auto-open wings on fire alarm or power loss",
                                "Integration : RFID, Face Recognition, Barcode/QR readers",
                                "Applications : Corporate office lobbies, banks, metro stations"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL FB-TL-2000 is an architectural-grade dual-wing optical flap barrier crafted from SUS304 stainless steel with 6 pairs of infrared safety sensors and high 40-person/min throughput."
            },
            {
                "id": "fb-pro-3000",
                "name": "FB-Pro 3000",
                "category": "Flap Barriers",
                "type": "High-Speed Retractable Wing Flap Barrier System",
                "images": ['/assets/images/prod_fbe2000_tight.png'],
                "highlights": [
                    "Motor Drive : Brushless DC Servo drive for whisper-quiet and vibration-free operation",
                    "Opening Speed : 0.3-second rapid wing retraction",
                    "Wings : High-impact clear acrylic wings with multi-color dynamic LED lighting",
                    "10 pairs of optical sensors providing superior anti-tailgating and crawl-under detection",
                    "MCBF : 5 Million operation cycles without maintenance",
                    "Wide lane options available for wheelchair and luggage accessibility"
                ],
                "specs": {
                    "Throughput": "40 - 45 persons/min",
                    "Lane Width": "550mm - 600mm",
                    "Motor Type": "Brushless DC Servo Motor",
                    "Sensors": "10 Pairs Infrared Sensors",
                    "Housing": "SUS304 hairline finish stainless steel",
                    "Dimensions": "1400(L) x 200(W) x 1000(H) mm",
                    "Power Supply": "110-240V AC",
                    "MCBF": "5,000,000 Operations"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Performance & Drive",
                            "items": [
                                "Drive Motor : Brushless DC Servo Motor",
                                "Throughput : Up to 45 persons per minute",
                                "Sensor Grid : 10 pairs of infrared safety beams",
                                "Durability : 5,000,000 operation cycles MCBF"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Aesthetics & Control",
                            "items": [
                                "Aesthetic Wings : Transparent acrylic with dynamic RGB status LEDs",
                                "Emergency Action : Wings instantly retract during emergencies",
                                "Enclosure : Sleek 200mm ultra-slim stainless steel housing",
                                "Venues : Grade-A corporate towers, financial institutions"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL FB-Pro 3000 is an ultra-slim, high-throughput retractable flap barrier featuring a brushless DC servo drive, 10 safety sensor pairs, and 0.3s wing retraction."
            },
            {
                "id": "tsg-1000",
                "name": "TSG-1000 Turnstile",
                "category": "Flap Barriers",
                "type": "Heavy Duty Bi-directional Tripod Turnstile",
                "images": [
                    "/assets/images/sub_flap_barrier_indian.jpg"
                ],
                "highlights": [
                    "Mechanism : Bi-directional mechanical tripod turnstile with electro-magnetic lock",
                    "Arm Drop Safety : Arms automatically drop down during emergency or power cutoff",
                    "Housing : 1.5mm SUS304 Stainless Steel for indoor and sheltered outdoor usage",
                    "Transit Rate : 25 to 30 persons per minute",
                    "Anti-tailgating mechanical locking mechanism preventing reverse passage",
                    "Direct mounting plate for eSSL facial recognition or biometric card readers"
                ],
                "specs": {
                    "Throughput": "25 - 30 persons/min",
                    "Arm Length": "500 mm",
                    "Housing Material": "SUS304 Stainless Steel",
                    "Arm Drop Function": "Yes, automatic arm drop on power failure",
                    "Operating Voltage": "100-240V AC, 50/60Hz",
                    "Dimensions": "1200(L) x 280(W) x 980(H) mm",
                    "Operating Temperature": "-25°C to +70°C",
                    "Ingress Protection": "IP54"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Tripod Mechanism",
                            "items": [
                                "Operation : Bi-directional entry and exit",
                                "Passage Rate : 25 - 30 persons per minute",
                                "Arm Length : 500mm stainless steel tripod arms",
                                "Emergency Action : Automatic arm drop on power failure"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Construction & Reliability",
                            "items": [
                                "Cabinet : 1.5mm SUS304 Stainless Steel",
                                "Protection Rating : IP54 indoor/sheltered outdoor",
                                "Access Compatibility : Face recognition, RFID cards, QR codes, push buttons",
                                "Applications : Factory gates, construction sites, gymnasiums, transit hubs"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL TSG-1000 is a robust, heavy-duty bi-directional tripod turnstile built from SUS304 stainless steel with automatic drop-arm emergency safety for industrial and enterprise perimeter access."
            },
            {
                "id": "sb-500",
                "name": "SB-500 Speed Gate",
                "category": "Flap Barriers",
                "type": "Intelligent Motorized Glass Swing Barrier / Speed Gate",
                "images": ['/assets/images/prod_fbef2213_tight.png'],
                "highlights": [
                    "Wide Lane Accessibility : 600mm to 900mm wide lane compliant with ADA wheelchair and luggage passage",
                    "Motor Type : High precision Brushless DC motor with quiet operation",
                    "Wings : Elegant tempered safety glass swing panels",
                    "Infrared Detection : 8 pairs of sensors for anti-tailgating, anti-pinch, and reverse entry detection",
                    "LED Directional Arrows on top cover and corner illumination",
                    "Emergency auto-open swinging open in exit direction during alarm"
                ],
                "specs": {
                    "Passage Width": "600 mm to 900 mm (ADA compliant)",
                    "Throughput": "30 - 35 persons/min",
                    "Housing Material": "SUS304 Stainless Steel",
                    "Wing Material": "10mm Tempered Glass",
                    "Motor": "Brushless DC Motor",
                    "Sensors": "8 Pairs Infrared Beams",
                    "Dimensions": "1400(L) x 150(W) x 1000(H) mm",
                    "Power Supply": "100-240V AC",
                    "Operating Temperature": "-20°C to +60°C"
                },
                "sections": {
                    "col1": [
                        {
                            "title": "Wide Lane & Swing Wings",
                            "items": [
                                "Lane Width : 600mm - 900mm wide ADA accessible lane",
                                "Swing Wings : 10mm crystal clear tempered glass",
                                "Opening Speed : 0.4 seconds smooth swing",
                                "Motor : Brushless DC motor with precision encoder"
                            ]
                        }
                    ],
                    "col2": [
                        {
                            "title": "Safety & Architecture",
                            "items": [
                                "Safety Array : 8 pairs of infrared safety sensors",
                                "Housing Profile : 150mm ultra-slim stainless steel pillar",
                                "Emergency Operation : Automatic swing open in evacuation direction",
                                "Target Environments : Executive corporate offices, hospitals, embassies"
                            ]
                        }
                    ]
                },
                "pdf": null,
                "desc": "eSSL SB-500 is a luxury speed gate swing barrier featuring an ultra-slim 150mm profile, 900mm wide ADA-compliant wheelchair lane, and 10mm tempered glass swing panels."
            }
        ]
    },
    'gates-automation': {
        'all': [
            { 
                id: 'hg-bdc-600', 
                name: 'HG-BDC-600', 
                category: 'Sliding Gate',
                type: 'DC brushless sliding gate motor',
                images: ['/assets/images/prod_hgbdc600_device.png'], 
                highlights: [
                    "Built - in controller, no complex wiring for installation, just connect to power",
                    "In case of power failure, the gate can be opened and closed manually after release clutch",
                    "Stable operation, soft start/stop, accurate limit",
                    "Can be connected to wall switch, infrared protector, warning light externally",
                    "Optional auto-close function & Photocell support for obstacle safety",
                    "On operating a visual LED flashlight is provided",
                    "Max gate weight : 600 kg | Motor power : 120W (24VDC)",
                    "Running speed : 12m/min | Remote Range : >=30m"
                ], 
                specs: {
                    "Motor": "DC BRUSHLESS MOTOR",
                    "Input power": "220V+-",
                    "Motor voltage": "24VDC",
                    "Motor power": "120W",
                    "Output speed": "50e/min",
                    "Running speed": "12m/min",
                    "Max gate weight": "600 kg",
                    "Normal environment": "-30°C~60°C",
                    "Relative humidity": "<=90%",
                    "Remote Range": ">=30m"
                }, 
                sections: {
                    catalogStyle: 'hgbdc600',
                    col1: [
                        {
                            title: "Specification",
                            items: [
                                "Motor : DC BRUSHLESS MOTOR",
                                "Input power : 220V+-",
                                "Motor voltage : 24VDC",
                                "Motor power : 120W",
                                "Output speed : 50e/min",
                                "Running speed : 12m/min",
                                "Max gate weight : 600 kg",
                                "Normal environment : -30°C~60°C",
                                "Relative humidity : <=90%",
                                "Remote Range : >=30m"
                            ]
                        }
                    ],
                    col2: [
                        {
                            title: "Features",
                            items: [
                                "Built - in controller, no complex wiring for installation, just connect to power;",
                                "In case of power failure, the gate can be opened and closed manually after release clutch;",
                                "Stable operation, soft start/stop, accurate limit;",
                                "Can be connected to wall switch, infrared protector, warning light externally;",
                                "Optional auto- close function.",
                                "A Photocell can be connected for safety",
                                "Manual Switch for Operation (Open/Stop/Close)",
                                "Loop Detector & Access Controller for Automation (Optional)",
                                "On operating a visual LED flashlight is provided"
                            ]
                        }
                    ]
                },
                pdf: null, 
                desc: 'HG-BDC-600 is a high-performance 24V DC brushless sliding gate motor supporting gates up to 600kg with built-in controller, soft start/stop, and visual warning flashlight. Fully integrated with WMWave\'s cloud platform for secure, real-time access and remote gate control.' 
            },
            { 
                id: 'bg-180-bdc', 
                name: 'BG180-BDC', 
                category: 'Boom Barrier',
                type: 'Auto-barrier with DC brushless motor',
                images: ['/assets/images/prod_bg180bdc_device.jpg'], 
                highlights: [
                    "Working voltage : 24VDC+-5%",
                    "Environment humidity : 10%~90% (non-condensing)",
                    "IP class : IP54 (Outdoor Electrophoresis & Powder Coated Cabinet)",
                    "Rated Power : 120W 24VDC",
                    "Power Supply : 220V+10% 50/60Hz, 110V+-10% 50/60Hz",
                    "Working Temperature : -35°C-70°C",
                    "Max. Boom Length with Operating Speed : 6m (6s), 4m (3s), 3m (1.5s)",
                    "Operate speed at fastest 1.2S, speed adjustment available with soft start & stop"
                ], 
                specs: {
                    "Working voltage": "24VDC+-5%",
                    "Environment humidity": "10%~90% (non-condensing)",
                    "IP class": "IP54",
                    "Rated Power": "120W 24VDC",
                    "Power Supply": "220V+10% 50/60Hz, 110V+-10% 50/60Hz",
                    "Working Temperature": "-35°C-70°C",
                    "Max. Boom Length with Operating Speed": "6m (6s), 4m (3s), 3m (1.5s)"
                }, 
                sections: {
                    catalogStyle: 'bg180bdc',
                    col1: [
                        {
                            title: "Technical data",
                            items: [
                                "Working voltage : 24VDC+-5%",
                                "Environment humidity : 10%~90% (non-condensing)",
                                "IP class : IP54",
                                "Rated Power : 120W 24VDC",
                                "Power Supply : 220V+10% 50/60Hz, 110V+-10% 50/60Hz",
                                "Working Temperature : -35°C-70°C",
                                "Max. Boom Length with Operating Speed : 6m (6s), 4m (3s), 3m (1.5s)"
                            ]
                        }
                    ],
                    col2: [
                        {
                            title: "Feature and specification",
                            items: [
                                "24VDC brushless motor drive, safe electrical, no risk of leakage.",
                                "DC brushless mechanism, DC brushless motor, hull limit switch, operate stable, low sound, long lifetime.",
                                "Operate speed at fastest 1.2S, the speed adjustment is available, soft start and soft stop function, high efficiency pass.",
                                "With reverse, auto-close, auto intelligent check function are available.",
                                "With connection for parking lot management system, loop detector, radar sensor, photocell. RS485 is optional.",
                                "Cabinet is electrophoresis then powder coating, for outdoor using.",
                                "Could operate by manual if power failure, auto operation by connecting backup battery is optional."
                            ]
                        }
                    ]
                },
                pdf: null, 
                desc: 'BG180-BDC is a heavy-duty automatic vehicle boom barrier powered by a 24V DC brushless motor with high-efficiency soft start/stop and fast 1.2s opening speed. Fully integrated with WMWave\'s cloud platform for secure, real-time vehicle access tracking.' 
            },
            { 
                id: 'psa-26', 
                name: 'PhotoCellPSA26', 
                category: 'Boom Barrier Accessories',
                type: 'Infrared Optical Safety Photocell & Anti-Smash Sensor',
                images: ['/assets/images/prod_photocell_psa26_device.png'], 
                highlights: [
                    "Power supply : 12V ~24V",
                    "Range : <= 10 m (Receiver : <= 15m)",
                    "Infrared Frequency : 1.92 KHz (Wave Length: 940nm)",
                    "Input : RX 15mA TX 30mA",
                    "Technology : Infrared Active Optical Beam",
                    "Relay Output : 1A max*30V (Auto door / Barrier Interlock)",
                    "Dimensions : 49.2*76*21.6mm",
                    "Operating Temperature : -20C to 50C"
                ], 
                specs: {
                    "Power supply": "12V ~24V",
                    "Range": "<= 10 m",
                    "Infrared Frequency": "1.92 KHz",
                    "Input": "RX 15mA TX 30mA",
                    "Technology": "Infrared",
                    "Receiver": "<= 15m",
                    "Wave Length": "940nm",
                    "Operating Temperature": "-20C to 50C",
                    "Relay Output": "1A max*30V",
                    "Dimensions": "49.2*76*21.6mm",
                    "Photo Cell Type": "For Door Auto door opening through Infrared sensor",
                    "Conduction": "Can be reduced to 30% in bad weather conditions: For, rain, dust, etc."
                }, 
                sections: {
                    catalogStyle: 'photocell_psa26',
                    col1: [
                        {
                            title: "Specification",
                            items: [
                                "Power supply : 12V ~24V",
                                "Range : <10 m",
                                "Infrared Frequency : 1.92 KHz",
                                "Input : RX 15mA TX 30mA",
                                "Technology : Infrared",
                                "Receiver : <= 15m",
                                "Wave Length : 940nm",
                                "Operating Temperature : -20C to 50C",
                                "Relay Output : 1A max*30V",
                                "Dimensions : 49.2*76*21.6mm",
                                "Photo Cell Type : For Door Auto door opening through Infrared sensor",
                                "Conduction : Can be reduced to 30% in bad weather conditions: For, rain, dust, etc."
                            ]
                        }
                    ],
                    col2: []
                },
                pdf: null, 
                desc: 'PhotoCellPSA26 is an active infrared optical safety photocell sensor pair. Fully integrated with WMWave\'s cloud platform and gate/barrier controllers for anti-smash vehicle and pedestrian safety.' 
            }
        ]
    }
};

export const getAllProducts = () => {
    let all = [];
    Object.entries(products).forEach(([categoryId, subcategories]) => {
        Object.entries(subcategories).forEach(([subcategoryId, subcategoryList]) => {
            subcategoryList.forEach((item, index) => {
                all.push({
                    ...item,
                    categoryId,
                    subcategoryId,
                    uniqueKey: `${categoryId}_${subcategoryId}_${item.id}_${index}`
                });
            });
        });
    });
    return all;
};

export const getProductById = (id) => {
    if (!id) return undefined;
    const all = getAllProducts();
    const exact = all.find(p => p.id === id);
    if (exact) return exact;
    
    const cleanId = String(id).toLowerCase().replace(/[^a-z0-9]/g, '');
    return all.find(p => 
        p.id.toLowerCase().replace(/[^a-z0-9]/g, '') === cleanId ||
        (p.name && p.name.toLowerCase().replace(/[^a-z0-9]/g, '') === cleanId)
    );
};
