import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PlatformOverview = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-light" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
            <div className="container" style={{ maxWidth: '900px', margin: '0 auto', background: '#fff', padding: '50px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', fontFamily: '"Caslon", "Adobe Caslon Pro", "Big Caslon", serif' }}>
                <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '20px', lineHeight: '1.2' }}>About WMWave</h1>
                
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#444', marginBottom: '30px', fontWeight: 'bold' }}>
                    WMWave is a leading provider of intelligent workforce management solutions, dedicated to transforming how organizations manage, secure, and optimize their employees.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                    Managing a modern workforce is no longer just about recording attendance. Today's organizations need complete visibility into employee movement, secure access to facilities, real-time workforce monitoring, and accurate operational data to make informed business decisions.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                    Whether it's a residential community, corporate campus, IT park, manufacturing facility, hospital, airport, or educational institution, facility managers face the same challenge every day—ensuring that the right people are in the right place at the right time while maintaining security, productivity, and compliance.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                    Unfortunately, many organizations still rely on outdated attendance registers, spreadsheets, or disconnected software systems. These traditional methods often create delays, increase administrative workload, and leave room for human error.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                    As businesses continue embracing digital transformation, workforce management is evolving from a manual process into an intelligent, cloud-powered ecosystem.
                </p>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '30px' }}>
                    This is where WMWave is redefining the future of workforce management.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '40px' }}>
                    Designed as a Cloud-Native Workforce Intelligence Platform, WMWave combines biometric authentication, smart access control, cloud-based attendance, workforce analytics, and real-time reporting into one centralized solution. Instead of managing multiple systems independently, organizations gain a single platform that delivers complete visibility and control over their workforce—from the moment employees enter the premises until they complete their shift.
                </p>

                <hr style={{ borderTop: '1px solid #eee', margin: '40px 0' }} />

                <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>Why Workforce Management Needs a Smarter Approach</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                    Organizations today operate across multiple buildings, cities, and even countries. Employees work in shifts, contractors move between locations, and security teams monitor multiple access points simultaneously. Managing such a dynamic workforce manually is no longer practical.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                    Consider a typical day at a large IT campus or residential township. Hundreds of employees arrive through different entrances. Security personnel begin patrols, housekeeping teams move across buildings, maintenance technicians perform scheduled inspections, and vendors enter designated service areas.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                    Now imagine trying to manage all these activities using paper registers or disconnected attendance software. Questions quickly arise:
                </p>
                <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px', paddingLeft: '20px' }}>
                    <li>Who has reported for duty?</li>
                    <li>Which employees are running late?</li>
                    <li>Is a critical shift understaffed?</li>
                    <li>Has anyone entered a restricted area without authorization?</li>
                    <li>Who worked overtime today?</li>
                </ul>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '40px' }}>
                    Without a centralized system, answering these questions becomes time-consuming and inefficient. Modern businesses require more than attendance—they need real-time workforce intelligence.
                </p>

                <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>The Challenges of Traditional Attendance Systems</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                    Although digital transformation has accelerated across industries, attendance management often remains dependent on outdated processes. These challenges affect productivity, payroll accuracy, and organizational security.
                </p>
                <div style={{ marginBottom: '40px' }}>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '10px' }}>Manual Attendance Registers</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>Paper-based attendance records consume valuable administrative time and increase the risk of human error. Employees may forget to sign in, supervisors must manually verify attendance, and retrieving historical records becomes increasingly difficult.</p>
                    
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '10px' }}>Buddy Punching</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>Attendance fraud continues to be a challenge for many organizations. One employee may mark attendance on behalf of another, leading to inaccurate records, higher payroll costs, and reduced accountability.</p>
                    
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '10px' }}>Lack of Real-Time Visibility</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>Managers often struggle to determine who is present, who is absent, and which departments require additional support. Without live monitoring, staffing decisions become reactive rather than proactive.</p>
                    
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '10px' }}>Payroll Inaccuracies</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>Manual attendance calculations frequently result in incorrect working hours, missing overtime records, duplicate entries, and payroll disputes that consume HR resources.</p>
                    
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '10px' }}>Limited Access Control</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>Many attendance systems function independently of security infrastructure. As a result, organizations cannot easily restrict access to sensitive locations such as server rooms, control centers, laboratories, or management offices.</p>
                </div>

                <hr style={{ borderTop: '1px solid #eee', margin: '40px 0' }} />

                <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>Meet WMWave</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                    WMWave has been built to address these challenges through a single cloud-native platform that integrates workforce management, attendance automation, biometric authentication, access control, and operational reporting.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                    Rather than viewing attendance as an isolated HR function, WMWave connects every stage of an employee's workday into one intelligent digital workflow. From the moment an employee authenticates at the entrance gate to the final exit at the end of the shift, every interaction is securely recorded and synchronized to the cloud.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '40px' }}>
                    Managers gain immediate access to live workforce data, enabling them to monitor attendance, optimize staffing, improve security, and make faster operational decisions. The platform is designed to support organizations of every size, making it suitable for residential communities, corporate campuses, healthcare facilities, educational institutions, manufacturing plants, airports, commercial buildings, and other large-scale operations.
                </p>

                <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>What Makes WMWave Different?</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                    Unlike traditional attendance software, WMWave is designed as a complete workforce intelligence platform. Instead of solving a single problem, it brings together multiple business functions into one connected ecosystem.
                </p>
                <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '40px' }}>
                    <li style={{ marginBottom: '15px' }}><strong>Smart Biometric Authentication:</strong> Employees verify their identity using fingerprint or facial recognition technology. This ensures accurate attendance while eliminating manual registers and reducing attendance fraud.</li>
                    <li style={{ marginBottom: '15px' }}><strong>Intelligent Access Control:</strong> Role-based permissions ensure that only authorized employees can enter designated areas. Every access event is securely logged, creating complete transparency across the facility.</li>
                    <li style={{ marginBottom: '15px' }}><strong>Cloud-Native Attendance Management:</strong> Attendance data is automatically synchronized with the cloud, allowing organizations to access real-time information without relying on manual uploads or local servers.</li>
                    <li style={{ marginBottom: '15px' }}><strong>Live Workforce Dashboard:</strong> Facility managers receive an instant overview of workforce activity, including attendance status, late arrivals, department-wise presence, and employee movement across different zones.</li>
                    <li style={{ marginBottom: '15px' }}><strong>Automated Reporting:</strong> Payroll-ready attendance reports, audit documentation, compliance records, and operational summaries can be generated within minutes, significantly reducing administrative effort.</li>
                </ul>

                <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>Why Cloud-Based Workforce Management Matters</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                    Cloud technology has fundamentally changed how organizations manage people, operations, and facilities. Unlike conventional systems that depend on local infrastructure, cloud-native platforms provide secure, real-time access from virtually anywhere.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '10px' }}>This allows organizations to:</p>
                <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px', paddingLeft: '20px' }}>
                    <li>Monitor workforce activity in real time</li>
                    <li>Access attendance data remotely</li>
                    <li>Improve collaboration between HR and facility teams</li>
                    <li>Reduce IT infrastructure costs</li>
                    <li>Ensure secure data storage and backup</li>
                    <li>Maintain business continuity even during temporary network interruptions</li>
                </ul>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '40px' }}>
                    By combining cloud technology with biometric authentication and intelligent analytics, WMWave enables organizations to move beyond simple attendance tracking toward a more connected, data-driven approach to workforce management.
                </p>

                <hr style={{ borderTop: '1px solid #eee', margin: '40px 0' }} />

                <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>The Complete WMWave Workflow: From Entry to Exit</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                    An efficient workforce begins with a structured and secure workflow. Every employee interaction—from entering the premises to leaving at the end of the day—plays a vital role in maintaining operational efficiency, workplace security, and workforce accountability.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                    WMWave simplifies this entire process through a cloud-native platform that connects biometric authentication, attendance management, access control, and real-time analytics into one intelligent ecosystem.
                </p>

                <div style={{ marginBottom: '40px' }}>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '10px' }}>1. Secure Employee Entry</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>Employees authenticate themselves within seconds using fingerprint or facial recognition, reducing waiting time and ensuring that only authorized personnel enter.</p>

                    <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '10px' }}>2. Intelligent Identity Verification</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>The system instantly verifies employee identity, assigned shift, department, work schedule, and access permissions. Discrepancies immediately notify administrators.</p>

                    <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '10px' }}>3. Automatic Attendance Recording</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>Attendance is captured automatically along with essential information like location, department, and device used, ensuring payroll accuracy.</p>

                    <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '10px' }}>4. Real-Time Cloud Synchronization</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>Data is securely synchronized with the cloud platform, allowing authorized managers to access live workforce information from anywhere.</p>

                    <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '10px' }}>5. Live Workforce Dashboard</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>Managers receive a complete operational overview within seconds, including present employees, late arrivals, and department-wise attendance.</p>

                    <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '10px' }}>6. Smart Access Control</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>Role-based access control ensures employees can only enter areas relevant to their responsibilities, creating a comprehensive audit trail.</p>

                    <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '10px' }}>7. Workforce Productivity Tracking</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>WMWave continuously monitors working hours, shift duration, break time, and overtime to help managers identify staffing gaps and optimize deployment.</p>

                    <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '10px' }}>8. Automated Exit Management</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>At shift end, the system automatically records exit time and total working hours, eliminating manual calculations for payroll.</p>

                    <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '10px' }}>9. Smart Reporting & Compliance</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>Generate comprehensive daily, monthly, shift, vendor, payroll, and compliance reports instantly, exported in commonly used formats.</p>
                </div>

                <hr style={{ borderTop: '1px solid #eee', margin: '40px 0' }} />

                <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>Why Organizations Choose WMWave</h2>
                <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '40px', paddingLeft: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <li>Eliminate manual attendance registers</li>
                    <li>Prevent buddy punching</li>
                    <li>Strengthen workplace security</li>
                    <li>Improve payroll accuracy</li>
                    <li>Increase workforce transparency</li>
                    <li>Reduce administrative workload</li>
                    <li>Gain real-time operational visibility</li>
                    <li>Improve regulatory compliance</li>
                    <li>Support multi-location management</li>
                    <li>Make faster, data-driven decisions</li>
                </ul>

                <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>Industries That Benefit from WMWave</h2>
                <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '40px', paddingLeft: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <li>Residential Communities</li>
                    <li>Commercial Buildings</li>
                    <li>Corporate Offices</li>
                    <li>IT Parks</li>
                    <li>Hospitals & Healthcare</li>
                    <li>Educational Institutions</li>
                    <li>Manufacturing Plants</li>
                    <li>Warehouses & Logistics Hubs</li>
                    <li>Airports</li>
                    <li>Government Organizations</li>
                </ul>

                <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>The Future of Workforce Management</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                    The future of workforce management is not simply about recording attendance—it is about creating connected workplaces where security, productivity, and operational intelligence work together. Cloud-native platforms like WMWave enable organizations to move beyond traditional attendance systems and embrace real-time decision-making, intelligent automation, and centralized workforce visibility.
                </p>

                <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>Conclusion</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                    Managing a modern workforce requires more than attendance tracking. It demands visibility, accountability, security, and the ability to make informed decisions in real time. WMWave delivers all these capabilities through a single cloud-native workforce intelligence platform.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '40px' }}>
                    Whether you're managing a residential township, hospital, IT park, manufacturing plant, airport, or corporate campus, WMWave provides the tools needed to build a connected, efficient, and future-ready workplace. The future of workforce management is intelligent, secure, and cloud-driven—and with WMWave, that future begins today.
                </p>

            </div>
        </div>
    );
};

export default PlatformOverview;
