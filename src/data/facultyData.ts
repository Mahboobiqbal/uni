/**
 * University of Swat — Faculty Member Profiles
 * Aggregated from the authenticated department catalog (uswat.edu.pk, 2026).
 * Only verified roster fields (name, designation, qualification, department) are exposed.
 */

import { allDepartments } from './departmentsData';
import { slugify } from '@/lib/slugify';

export interface FacultyProfile {
  slug: string;
  name: string;
  designation: string;
  qualification?: string;
  image?: string;
  departmentId: string;
  departmentName: string;
  facultyGroup: string;
  programsOffered: string[];
  contactEmail: string;
}

function buildProfiles(): FacultyProfile[] {
  const profiles: FacultyProfile[] = [];

  for (const dept of allDepartments) {
    const members = dept.facultyMembers?.length ? dept.facultyMembers : [];

    for (const member of members) {
      const slug = slugify(`${member.name}-${dept.id}`);
      profiles.push({
        slug,
        name: member.name,
        designation: member.designation,
        qualification: member.qualification,
        image: member.image,
        departmentId: dept.id,
        departmentName: dept.name,
        facultyGroup: dept.facultyGroup,
        programsOffered: dept.programsOffered,
        contactEmail: dept.contactEmail,
      });
    }

    // Heads of departments without an explicit roster entry
    if (dept.headOfDepartment && !members.some((m) => m.name === dept.headOfDepartment)) {
      const slug = slugify(`${dept.headOfDepartment}-${dept.id}`);
      profiles.push({
        slug,
        name: dept.headOfDepartment,
        designation: "Head of Department",
        departmentId: dept.id,
        departmentName: dept.name,
        facultyGroup: dept.facultyGroup,
        programsOffered: dept.programsOffered,
        contactEmail: dept.contactEmail,
      });
    }
  }

  return profiles.sort((a, b) => a.name.localeCompare(b.name));
}

export const facultyProfiles: FacultyProfile[] = buildProfiles();
