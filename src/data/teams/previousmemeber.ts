// DATA FEEDING TEAM:
// Naye member add karne ke liye niche wale format me object add karein.
// - 'name' aur 'branch' mandatory hain.
// - 'role' optional hai.

export interface PastMember {
  name: string;
  branch: string;
  role?: string;
}

export const pastMembers2026: PastMember[] = [
  { name: 'Rahul Sharma', branch: 'Computer Science & Engineering', role: 'Technical Lead' },
  { name: 'Priya Verma', branch: 'Electronics & Communication', role: 'Executive Member' },
  // 👇 Naye 2026 members yahan add karein:
];

export const pastMembers2025: PastMember[] = [
  { name: 'Amit Kumar', branch: 'Electrical Engineering', role: 'Chairperson' },
  { name: 'Neha Gupta', branch: 'Information Technology', role: 'Vice Chairperson' },
  // 👇 Naye 2025 members yahan add karein:
];
