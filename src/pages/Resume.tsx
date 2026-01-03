import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const Resume: React.FC = () => {
    const [name, setName] = useState("Priya Sharma");
    const [email, setEmail] = useState("priya.sharma@email.com");
    const [phone, setPhone] = useState("+91-9876543210");
    const [summary, setSummary] = useState("Results-driven professional with experience in data analysis and machine learning, seeking to leverage analytical skills to drive business solutions.");
    const [skills, setSkills] = useState<string[]>([]);
    const [skillInput, setSkillInput] = useState("");
    const [experiences, setExperiences] = useState([{ title: "Data Analyst Intern", company: "Tech Solutions Inc.", desc: "Analyzed sales data to identify trends, creating dashboards that improved decision-making." }]);
    const [educations, setEducations] = useState([{ degree: "B.Tech in Computer Science", school: "University of Technology", years: "2019 - 2023" }]);
    const [showPreview, setShowPreview] = useState(false);

    const handleAddExperience = () => {
        setExperiences([...experiences, { title: "", company: "", desc: "" }]);
    };

    const handleExperienceChange = (index: number, field: string, value: string) => {
        const newExp = [...experiences];
        // @ts-ignore
        newExp[index][field] = value;
        setExperiences(newExp);
    };

    const handleAddEducation = () => {
        setEducations([...educations, { degree: "", school: "", years: "" }]);
    };

    const handleEducationChange = (index: number, field: string, value: string) => {
        const newEdu = [...educations];
        // @ts-ignore
        newEdu[index][field] = value;
        setEducations(newEdu);
    };

    const handleAddSkill = () => {
        if (skillInput.trim()) {
            setSkills([...skills, skillInput.trim()]);
            setSkillInput("");
        }
    };

    const generateResume = () => {
        setShowPreview(true);
    };

    const downloadResume = () => {
        const resumeContent = document.getElementById("resume-preview-content");
        if (!resumeContent) return;

        const originalTheme = document.documentElement.getAttribute("data-theme");
        document.documentElement.removeAttribute("data-theme"); // Force light mode

        html2canvas(resumeContent, {
            scale: 2,
            backgroundColor: "#ffffff",
        }).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            pdf.addImage(imgData, "PNG", 10, 10, pdfWidth - 20, pdfHeight - 20);
            pdf.save("resume.pdf");

            if (originalTheme) {
                document.documentElement.setAttribute("data-theme", originalTheme);
            }
        });
    };

    return (
        <div id="resume-page" className="page active" style={{ display: 'block' }}>
            <div className="container">
                <div className="page-header">
                    <h2>Resume Builder</h2>
                    <p>Create a professional resume with AI-powered suggestions</p>
                </div>

                <div className="profile-setup">
                    <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Contact Info</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        <input type="tel" className="form-control mt-4" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Professional Summary</label>
                        <textarea className="form-control" rows={3} value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Brief professional summary"></textarea>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Work Experience</label>
                        <div id="experience-container">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="form-group experience-item" style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
                                    <input type="text" className="form-control mb-4" placeholder="Job Title" value={exp.title} onChange={(e) => handleExperienceChange(idx, 'title', e.target.value)} />
                                    <input type="text" className="form-control mb-4" placeholder="Company" value={exp.company} onChange={(e) => handleExperienceChange(idx, 'company', e.target.value)} />
                                    <textarea className="form-control" rows={2} placeholder="Responsibilities..." value={exp.desc} onChange={(e) => handleExperienceChange(idx, 'desc', e.target.value)}></textarea>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn--outline btn--sm mt-4" onClick={handleAddExperience}>+ Add Experience</button>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Education</label>
                        <div id="education-container">
                            {educations.map((edu, idx) => (
                                <div key={idx} className="form-group education-item" style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
                                    <input type="text" className="form-control mb-4" placeholder="Degree" value={edu.degree} onChange={(e) => handleEducationChange(idx, 'degree', e.target.value)} />
                                    <input type="text" className="form-control mb-4" placeholder="Institution" value={edu.school} onChange={(e) => handleEducationChange(idx, 'school', e.target.value)} />
                                    <input type="text" className="form-control" placeholder="Years Attended" value={edu.years} onChange={(e) => handleEducationChange(idx, 'years', e.target.value)} />
                                </div>
                            ))}
                        </div>
                        <button className="btn btn--outline btn--sm mt-4" onClick={handleAddEducation}>+ Add Education</button>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Skills</label>
                        <div className="skills-input">
                            <div className="skill-item">
                                <input type="text" className="form-control" placeholder="Add a skill" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} />
                                <button className="btn btn--primary btn--sm" onClick={handleAddSkill}>Add</button>
                            </div>
                            <div id="resume-skills" className="skills-list">
                                {skills.map((s, i) => <span key={i} className="skill-tag">{s}</span>)}
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn--primary btn--lg" onClick={generateResume}>Preview Resume</button>
                    </div>
                </div>
            </div>

            {showPreview && (
                <div id="resume-preview-modal" className="modal" style={{ display: 'flex' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Resume Preview</h3>
                            <button className="modal-close" onClick={() => setShowPreview(false)}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <div id="resume-preview-content">
                                <h2 style={{ textAlign: 'center' }}>{name}</h2>
                                <p style={{ textAlign: 'center', marginBottom: '20px' }}>{email} | {phone}</p>

                                <h3>Professional Summary</h3>
                                <p>{summary}</p>

                                <h3>Work Experience</h3>
                                {experiences.map((exp, i) => (
                                    <div key={i} className="experience-item">
                                        <h4>{exp.title}</h4>
                                        <p style={{ fontStyle: 'italic' }}>{exp.company}</p>
                                        <p>{exp.desc}</p>
                                    </div>
                                ))}

                                <h3>Education</h3>
                                {educations.map((edu, i) => (
                                    <div key={i} className="education-item">
                                        <h4>{edu.degree}</h4>
                                        <p>{edu.school} ({edu.years})</p>
                                    </div>
                                ))}

                                <h3>Skills</h3>
                                <div className="skills-list">
                                    {skills.map((s, i) => <span key={i} className="skill-tag">{s}</span>)}
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <button className="btn btn--primary btn--lg" onClick={downloadResume}>Download as PDF</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Resume;
