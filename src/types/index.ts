export interface Career {
    id: number;
    title: string;
    description: string;
    required_skills: string[];
    salary_range: string;
    growth_outlook: string;
    learning_path: string[];
    growth: 'high' | 'medium' | 'low';
    skill_level: 'beginner' | 'intermediate' | 'advanced';
    salary_category: 'high' | 'medium' | 'low';
}

export interface Course {
    id: number;
    title: string;
    provider: string;
    description: string;
    duration: string;
    level: string;
    rating: number;
    features: string[];
}

export interface AssessmentQuestion {
    id: number;
    question: string;
    options: string[];
}

export interface UserProfile {
    educationLevel: string;
    skills: string[];
    interests: string[];
}

export interface User {
    id: number;
    name: string;
    email: string;
    password?: string;
    profile: UserProfile | null;
    enrolledCourses: number[];
    assessment?: {
        currentQuestion: number;
        answers: (number | 'skipped')[];
        completed: boolean;
    };
}

export interface Job {
    title: string;
    company: string;
    location: string;
    keywords: string[];
}
